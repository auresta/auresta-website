# LinkedIn Company Page — setup sheet

**As at 2026-07-28.** Everything needed to create `linkedin.com/company/auresta` in one sitting.
Assets are generated and committed alongside this file. `<FILL>` items are business facts I don't hold.

> **Why now:** the footer on the live site already links to LinkedIn and X, and **both currently 404**.
> A dead social link is worse than no link — Microsoft for Startups reviewers, accelerators and
> design-partner prospects all click them. This session fixed the footer (LinkedIn repointed to the new
> URL, X removed until an account exists). Creating the page closes the loop. A complete LinkedIn
> presence is also a stated prerequisite for the credits work — see
> [Microsoft for Startups readiness](2026-07-28-microsoft-for-startups-readiness.md).

---

## 1. Prerequisites — do these first

LinkedIn gates page creation to stop spam. You must satisfy all of these **on your personal profile**
before the "Create a Company Page" option will work:

| Requirement | Detail |
|---|---|
| A personal LinkedIn profile | Company Pages cannot exist without one; you become the first Page admin |
| Profile at least **7 days old** | Newly-created accounts are blocked |
| **Intermediate profile strength or higher** | Photo, headline, position, education, some connections. Fill it out properly — a thin founder profile undercuts the page |
| Profile in good standing | No restrictions |
| **A company-domain email** | `<FILL>@auresta.com.au`. Gmail/Outlook/Hotmail are **not accepted** for page verification. Add it to your personal profile and verify it *before* starting |
| List yourself as an employee | Set Auresta as your current position once the page exists (see §6) |

## 2. Page fields — values to enter

| Field | Value |
|---|---|
| **Name** | `Auresta` |
| **LinkedIn public URL** | **`linkedin.com/company/auresta-ai`** — claim this exactly; the site footer points here. `auresta` was the first choice but is **already taken by an eyewear company**. Next fallback if `auresta-ai` is also gone: `auresta-au`. **Not `auresta_ai`** — see below |
| **Website** | `https://auresta.com.au` |
| **Industry** | **Computer and Network Security** (closest fit). If your list shows the newer taxonomy, use *Computer and Network Security*; second choice *Software Development*. **Do not** pick a consulting or professional-services category — same exclusion logic as the Microsoft application |
| **Company size** | **2–10 employees** |
| **Company type** | **Privately Held** |
| **Founded** | `<FILL — year>` (the only field I couldn't source from the repo) |
| **Location** | `Level 12, 350 Collins Street, Melbourne VIC 3000, Australia` — taken from the footer, so it already matches what's published |
| **Tagline** | See §3 |
| **Logo** | `assets/linkedin-logo-300x300.png` (generated) |
| **Cover image** | `assets/linkedin-cover-1128x191.png` (generated) |

### Legal-name note

Your registered entity is **Auresta Pty Ltd, ABN 72 690 869 820** (published in the site footer).
LinkedIn wants the name people search for, so **Auresta** is right for the page name — but the full
legal name goes in the About section (§4) so the page still matches your Microsoft application, ASIC
record and any procurement due diligence.

## 3. Tagline (120-character limit)

> Sovereign security software for Australian enterprise. Compliance enforced continuously, not audited annually.

*110 characters.* It states the category, the market, and the wedge — and deliberately avoids
"consulting", "services" and "assessments".

## 4. About section (2,000-character limit)

Paste as-is:

> Auresta builds sovereign security software for regulated Australian organisations.
>
> For operators covered by the SOCI Act, security compliance has become a periodic audit panic: manual evidence-gathering, drift between what was approved and what is actually running, and delivery teams slowed by gate-keeping. The obligations keep growing — the SOCI Act's Critical Infrastructure Risk Management Program, the ACSC Essential Eight, and the Cyber Security Act 2024 — but the tooling to satisfy them continuously has not existed as a product. Enterprises assemble it by hand, or they don't.
>
> We build the platforms that close that gap.
>
> SECUREFORGE IDP — an internal developer platform that makes insecure configuration unexpressible. Developers self-serve from golden-path templates with encryption, IAM-only authentication, image signing and network policy already embedded. Policy-as-code checks every deployment at admission against Essential Eight and SOCI controls, so non-compliant workloads never reach production. Keyless signing and SBOMs gate the supply chain. Declarative infrastructure provisions databases, clusters and networks with private networking, encryption and backups built in — the same blueprint on any cloud. The result is a live compliance posture and a tamper-proof audit trail: evidence is generated, not gathered.
>
> SHANNON ENGINE — an AI-driven red team that never stops. Autonomous agents rehearse full attack chains end to end, so gaps surface on your schedule rather than an adversary's.
>
> What makes us different: Australian data sovereignty is designed in, not bolted on — sensitive data stays onshore, and the architecture is hybrid because of it. We govern cloud-native workloads and containerised 5G network functions alike. And we are CNCF-native rather than a proprietary black box, composing and hardening the open-source tools platform teams already trust.
>
> Auresta is Australian-owned and independent. Auresta Pty Ltd, ABN 72 690 869 820, Melbourne.
>
> We are onboarding a small number of design partners across regulated Australian industries. auresta.com.au

*~1,950 characters including the `<FILL>`.* If you trim, cut the Shannon paragraph before the SOCI
framing — the regulatory problem statement is what makes a stranger keep reading.

## 5. Specialties (up to 20)

```
Internal Developer Platform
Policy as Code
SOCI Act CIRMP
ACSC Essential Eight
Cyber Security Act 2024
Kubernetes Security
Supply Chain Security
SBOM
Sigstore
GitOps
Zero Trust
Cloud Security Posture
Compliance Automation
Data Sovereignty
5G Network Function Security
Platform Engineering
Crossplane
Continuous Compliance
Adversary Simulation
Australian Critical Infrastructure
```

## 6. After the page exists — the bit people skip

1. **Add Auresta as your current position** on your personal profile, pointing at the new page. Until you
   do, the logo doesn't appear on your profile and the page looks abandoned. This single step does more
   for credibility than anything else here.
2. **Publish the launch post** (§7) *before* inviting anyone. An empty page reads worse than no page.
3. **Set the custom button** to *Visit website* → `https://auresta.com.au/products/secureforge`.
4. **Invite connections** to follow — LinkedIn gives page admins a monthly credit allocation.
5. **Complete Page verification** — verify the `auresta.com.au` domain and your identity. The verified
   badge matters disproportionately for a small unknown vendor selling security to regulated buyers.
6. **Turn on** the "My Company" tab and post cadence reminders if you want them.

## 7. Launch post (draft)

> After months of building, Auresta's work has a home here.
>
> We build sovereign security software for regulated Australian organisations — the kind facing SOCI Act CIRMP obligations, ACSC Essential Eight targets, and now the Cyber Security Act 2024.
>
> The problem we kept seeing: compliance had become an annual audit panic. Evidence assembled by hand. Drift between what was approved and what was actually running. Engineers slowed down by gate-keeping that didn't make anything safer.
>
> So we built the alternative. SecureForge is an internal developer platform where insecure configuration is simply unexpressible — golden paths with the controls already embedded, policy enforced at admission, a signed supply chain, and an audit trail that generates itself. Compliance stops being something you reconstruct once a year and becomes something the platform maintains continuously.
>
> It runs on the CNCF stack your platform team already trusts, keeps sensitive data onshore by design, and governs cloud-native workloads and containerised 5G network functions alike.
>
> We're onboarding a small number of design partners across regulated Australian industries. If your team is carrying these obligations and wants to see it mapped to your environment, get in touch.
>
> auresta.com.au/products/secureforge
>
> #CyberSecurity #PlatformEngineering #SOCI #EssentialEight #Kubernetes #Australia #DevSecOps

## 8. Assets

| File | Spec | Notes |
|---|---|---|
| `assets/linkedin-logo-300x300.png` | 300×300 PNG (LinkedIn min. 268×268) | Cropped from `public/images/logo-mark.png` so the shield fills the frame — the original 1024² has heavy padding and would read as a dot at avatar size |
| `assets/linkedin-cover-1128x191.png` | 1128×191 PNG | Brand-matched: `#080b14` base, cyan radial glow, wordmark, tagline, compliance strip, product chips. Bottom-left is kept deliberately clear because **LinkedIn overlays the page logo there** |

Regenerate with the script in the session scratchpad if the wording changes; it renders on canvas using
the repo's Geist font.

## 9. Open items

- **⚠️ Sequencing** — the footer points at `linkedin.com/company/auresta-ai`, which **does not exist
  until you create it**. Claim that exact URL, or tell me the fallback you took and I'll repoint the
  footer. Until then the icon is a dead link, same as before.
- **URL character rules** — LinkedIn company URLs accept **lowercase letters, numbers and hyphens only**
  (plus CJK). **Underscores are rejected**, so `auresta_ai` is not an option. No leading/trailing hyphen
  and no double hyphen; disallowed characters get silently replaced with a hyphen. Handy consequence:
  `auresta-ai` matches the `AURESTA`+superscript-`AI` lockup in the navbar and the "Auresta AI" page
  titles, so it is arguably a better fit than the original `auresta` anyway.
- **X / Twitter** — `@auresta_ai` does not exist (404). Footer link **removed**. Re-add when registered.
- **Medium** — `medium.com/@auresta-ai` does not exist either (404). Footer link **removed**. This one
  wasn't on the radar; all three social links on the live site were dead.
- **GitHub** — `github.com/auresta` **does** resolve, but the repos are private, so it was not linked.
  Worth linking once anything is public — it's the strongest credibility signal for a technical buyer.
- ~~`Inter` is never actually loaded~~ — **this was wrong.** Inter *was* loading, via a Google Fonts
  `@import` on line 1 of `app/globals.css` that the CSP explicitly allowed. **Fixed differently
  2026-07-28:** both fonts moved to `next/font/google`, which self-hosts them at build time — removing a
  render-blocking round trip, keeping visitor IPs off Google (which matters for a company selling
  sovereign security), and letting the CSP drop `fonts.googleapis.com` and `fonts.gstatic.com`. The
  unreferenced `app/fonts/Geist*.woff` files were deleted.
