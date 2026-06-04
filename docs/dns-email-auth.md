# DNS Email Authentication — auresta.com.au

Hardening checklist to make `@auresta.com.au` unspoofable (SPF + DKIM + DMARC),
without breaking the two legitimate senders. Lives here because these are
DNS/Cloudflare changes, not app code — but they're part of the same security
work as the in-repo headers/forms. Includes the Cloudflare TLS minimum fix.

- **Last reviewed:** 2026-06-04
- **DNS host:** Cloudflare (proxy in front of Vercel)
- **Senders:** Google Workspace (human mail) · Resend (website form notifications)

---

## Progress

| Step | Status |
| --- | --- |
| Apex SPF | ✅ done |
| Google Workspace DKIM (`google` selector) | ✅ done |
| Resend DKIM (`resend` selector) | ✅ already present |
| DMARC reporting + enforcement | ⏳ **next** — still `p=none` |
| Cloudflare minimum TLS → 1.2 | ⏳ to do |

---

## Current DNS state (verified 2026-06-04)

| Record | Value | Status |
| --- | --- | --- |
| apex `TXT` (SPF) | `v=spf1 include:_spf.google.com ~all` | ✅ in place |
| `google._domainkey` `TXT` | DKIM `v=DKIM1; k=rsa; p=…` | ✅ in place — do not touch |
| `resend._domainkey` `TXT` | DKIM `p=…` (signs `d=auresta.com.au`) | ✅ keep — do not touch |
| `send` `TXT` | `v=spf1 include:amazonses.com ~all` | ✅ keep — do not touch (Resend envelope SPF) |
| `send` `MX` | `feedback-smtp.ap-northeast-1.amazonses.com` | ✅ keep — do not touch (Resend bounce path) |
| `_dmarc` `TXT` | `v=DMARC1; p=none;` | ⏳ strengthen — see below |
| `MX` (apex) | Google Workspace (`aspmx.l.google.com`, …) | ✅ unchanged |

All legit mail now aligns: **Google** via SPF + DKIM, **Resend** via DKIM (and
relaxed SPF via the `send` subdomain). DMARC is the only step left.

---

## ✅ SPF (done — for reference)

Apex record: `v=spf1 include:_spf.google.com ~all`

- Google only. Resend is authorized at `send.auresta.com.au`, so `amazonses`
  does **not** belong on the apex.
- `~all` (softfail) for now; tighten to `-all` once DMARC is at `p=reject` and
  reports are clean.
- Only one `v=spf1` record per name. Add an `include:` for any other apex sender
  (CRM, invoicing, newsletter) **before** ever switching to `-all`.

---

## ✅ Google Workspace DKIM (done — for reference / re-runs)

Three parts: generate in Admin → publish in Cloudflare → activate in Admin.
Requires a Workspace **super-admin**.

1. **Generate** — admin.google.com → **Apps → Google Workspace → Gmail →
   Authenticate email**. Select `auresta.com.au`, bit length **2048**, prefix
   selector `google`, **Generate new record**. It shows:
   - Name: `google._domainkey`
   - Value: `v=DKIM1; k=rsa; p=<long key>`
2. **Publish** — Cloudflare → DNS → Add record: `TXT`, name `google._domainkey`,
   content = the whole `v=DKIM1; k=rsa; p=…` value, TTL Auto. (Cloudflare handles
   the >255-char value automatically.)
3. **Activate** — after propagation, back in Admin click **Start
   authentication**. Status should read **"Authenticating email with DKIM."**

Verify: `dig +short TXT google._domainkey.auresta.com.au`

---

## ⏳ DMARC — phased rollout (remaining work)

Cloudflare → DNS → edit the `_dmarc` `TXT`. Move one phase at a time. Don't jump
straight to enforcement — you currently have no reporting, so turn on visibility
first to catch any forgotten sender before it gets blocked.

**Phase 1 — now (delivery unchanged, reports start flowing):**

```text
v=DMARC1; p=none; rua=mailto:dmarc@auresta.com.au; fo=1
```

**Phase 2 — after ~1–2 weeks of clean reports (start blocking):**

```text
v=DMARC1; p=quarantine; rua=mailto:dmarc@auresta.com.au; fo=1; pct=100
```

**Phase 3 — once quarantine is clean (full enforcement):**

```text
v=DMARC1; p=reject; rua=mailto:dmarc@auresta.com.au; fo=1
```

- Keep **relaxed alignment** (default — don't add `adkim=s`/`aspf=s` yet).
  Resend's envelope is the `send.` subdomain; strict SPF alignment would
  needlessly fail it. Relaxed + DKIM keeps Resend passing.
- **`rua` mailbox:** `dmarc@auresta.com.au` must exist (alias/group). Reports are
  raw XML — forward to a free analyzer (Postmark DMARC, dmarcian, URIports,
  Valimail). A third-party aggregator address needs a small extra
  external-destination TXT record, which their wizard provides.

---

## ⏳ Cloudflare — minimum TLS version 1.2

TLS 1.0 and 1.1 are currently accepted (Cloudflare default minimum is 1.0).
Deprecated; flagged for compliance/credibility, not active exploit. One-click fix:

- Cloudflare → **SSL/TLS → Edge Certificates → Minimum TLS Version → 1.2**

Verify (handshake should now fail for 1.0/1.1):

```bash
echo | openssl s_client -connect www.auresta.com.au:443 -tls1_1 2>&1 | grep -i "alert\|handshake failure\|Cipher is (NONE)"
```

> Note: the ECDSA P-256 cert flagged by an external audit is **not** a problem —
> P-256 is ~128-bit security (stronger than RSA-2048's ~112-bit) and the modern
> default. Cloudflare serves a dual ECDSA+RSA cert automatically. No action.

---

## Verify everything

```bash
dig +short TXT auresta.com.au                    # v=spf1 include:_spf.google.com ~all
dig +short TXT google._domainkey.auresta.com.au  # v=DKIM1; k=rsa; p=...
dig +short TXT resend._domainkey.auresta.com.au  # DKIM p=...
dig +short TXT _dmarc.auresta.com.au             # current DMARC phase
# do-not-touch — just confirm intact:
dig +short TXT send.auresta.com.au               # v=spf1 include:amazonses.com ~all
dig +short MX  send.auresta.com.au               # feedback-smtp...amazonses.com
```

Functional check: send from `team@` to a Gmail address → **Show original** →
expect `SPF: PASS`, `DKIM: PASS` (domain auresta.com.au), `DMARC: PASS`. Also
submit the website contact form once — the Resend email should still arrive.

---

## Do-not-touch / rollback

- ❌ **Never edit or delete** `resend._domainkey`, `google._domainkey`, `send`
  `TXT`, or `send` `MX` — that breaks mail authentication or the forms' email.
- ❌ When tightening the apex SPF to `-all`, leave the `send` SPF at `~all`
  (Resend manages that subdomain).
- TXT/MX are always **DNS-only** (no orange-cloud proxy — correct).
- **Rollback:** if legit mail starts failing at DMARC Phase 2/3, set `p=none` —
  one field, propagates in minutes. Nothing here is irreversible (unlike HSTS
  `preload`).

---

## Optional hardening (later)

- apex SPF `~all` → `-all` once DMARC is at `p=reject` and reports are clean.
- Add `MTA-STS` + `TLS-RPT` to enforce TLS on inbound mail.
- Strict DMARC alignment (`adkim=s; aspf=s`) after confirming every sender
  DKIM-signs as the apex.

---

## Applying via API (optional)

A manual edit in the dashboard needs **no API token** — least-privilege. If you
script it, mint a scoped Cloudflare **API Token** (not the Global API Key):

- **Permissions:** `Zone` → `DNS` → `Edit` (built-in "Edit zone DNS" template)
- **Zone Resources:** Include → Specific zone → `auresta.com.au`
- **TTL:** short expiry (one-off); revoke once applied.

Cloudflare can't scope a token to individual records — `DNS:Edit` covers the
whole zone (including the DKIM/Resend records), which is why the dashboard is
preferable for a one-time change.
