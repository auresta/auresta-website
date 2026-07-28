# Microsoft for Startups — application readiness sheet

**As at 2026-07-28.** Everything needed to complete the signup in one sitting, plus the traps that
cause avoidable rejections. Sources are Microsoft Learn pages last revised 2026-05-21 → 2026-06-18
(linked in §7); re-check them if more than a few months have passed.

> **Read this first.** "Founders Hub" no longer exists as a separate program with a written
> application. Microsoft folded it into a single **Microsoft for Startups** entry point. On the
> self-serve path **there is no application form and no essay** — you go straight to Azure account
> creation. The business-information form only appears if you have an investor referral code.
> The $150K headline is *not* reachable self-serve. See §6 and the companion
> [accelerator referral pitch](2026-07-28-accelerator-referral-pitch.md).

---

## 1. What you actually get

| Path | Credits | Conditions |
|---|---|---|
| **Self-serve** (no referral code) | **$1,000** for 90 days, then **+$4,000** for 180 days | Second tranche released after *business verification* |
| **Investor referral code** | **~$100,000** to start | Requires a 10-character code from an Investor Network partner |
| **Ceiling** | up to **$150,000** over time | "Verified progress, service adoption, and sustained Azure usage" |

Investor-path startups become eligible for their maximum offer once they spend **US$100+ in a single
month** on qualifying services.

The investor offer also carries Azure Standard Support, technical experts, go-to-market support, and
free/discounted GitHub Enterprise, LinkedIn Premium Business, Microsoft 365 Business Premium, Visual
Studio Enterprise, Dynamics 365, and Power Platform. **The self-serve path does not.** This is the
real reason to chase a referral code — the credits are only part of it.

## 2. Eligibility — Auresta's status against each stated criterion

Microsoft publishes seven criteria. Assessed honestly:

| Criterion | Auresta | Notes |
|---|---|---|
| Develops a software-based product or service **owned by the company** | ✅ *after repositioning* | SecureForge IDP and Shannon Engine are owned IP. SecureForge composes CNCF open source, but the owned artefacts — Crossplane compositions, the policy library, golden-path templates, the compliance engine — are Auresta's. See the risk in §3. |
| Privately held and for-profit | ✅ | Auresta Pty Ltd, bootstrapped |
| Headquartered where Azure is available | ✅ | Australia — Azure Australia East (Sydney) + Australia Southeast (Melbourne) |
| Not received more than **$350,000** lifetime free Azure credits | ✅ | Prior SecureForge estate was paid consumption, not free credits — confirm before ticking |
| Has **not** raised Series C or later | ✅ | No external investment at all |
| **Not** an educational institution, government organization, **consultancy, or agency** | ⚠️ | **The one real risk.** See §3. |
| Not involved in cryptocurrency mining | ✅ | — |

The application page adds: pre-seed through Series C, **B2B**, "working toward or already at MVP",
and independent (not a subsidiary). Auresta clears all four — SecureForge has a working
proof-of-concept, which is past MVP-intent.

## 3. The consultancy risk — and the mitigation

Microsoft explicitly excludes consultancies and agencies. The website field is part of the
application and reviewers do look at it.

**Before repositioning (2026-07-28), auresta.com.au read as a services firm:**

- Site-wide `<description>`: *"… and security-by-design **consulting** …"*
- Homepage H1: *"AI-Powered Cybersecurity for Australian Business"*
- Primary CTA: *"Book a Free Assessment"*; secondary: *"View Services →"*
- A homepage card titled **"Security-by-Design Consulting — From $250/hr"**

Hourly rates plus the word *consulting* in the site metadata is precisely the excluded profile.

**Mitigation applied:** the homepage and site metadata were repositioned product-first (SecureForge
and Shannon lead; services remain but are no longer the headline; the hourly-rate consulting card was
re-framed as engineering). Services are still real revenue — they are simply no longer what the
company *appears to be*.

**Do not apply until that change is live on `main`.** Verify by loading auresta.com.au and confirming
the `<title>` and first screen describe products.

## 4. Field-by-field — values to enter

`<FILL>` items are business facts held outside this repo. Fill them in before you start; you cannot
edit the application after submitting.

### Identity and contact

| Field | Value |
|---|---|
| Microsoft account | **A fresh personal (consumer) Microsoft account with no prior Azure account.** Work/school/company-domain addresses are rejected outright. Do **not** use the account tied to the old SecureForge Azure estate. |
| Preferred contact email | `<FILL — reachable inbox; verification code arrives here and expires in 10 minutes>` |
| Phone number | `<FILL — AU mobile; receives an SMS verification code>` |
| Time zone | Australia — `<FILL: Australia/Sydney or Australia/Melbourne>` (used to route regional support) |

### Business information *(this form only appears on the referral-code path)*

| Field | Value |
|---|---|
| Registered startup name | `<FILL — exact ASIC-registered name, e.g. "Auresta Pty Ltd">`. **Must match your legal documents**, not the trading brand. |
| Primary industry | Dropdown. Choose the closest of *Security* / *Information Technology* / *Software*. Do **not** choose a consulting or professional-services category. |
| Website | `https://auresta.com.au` (once product-first is live). If you want the strongest single page, `https://auresta.com.au/products/secureforge`. |
| Registered business address | `<FILL — ASIC-registered address; must match the Azure billing country>` |

### Azure account creation *(both paths)*

| Field | Value | Warning |
|---|---|---|
| Country/region | **Australia** | ⚠️ **Permanent.** Cannot be changed later on that billing profile — the only remedy is a new billing account. |
| Name / notification email / phone | `<FILL>` | Must be reachable |
| Consent checkboxes | Accept the Microsoft Customer Agreement | The two marketing opt-ins are optional |
| Payment | `<FILL — credit card>` | ⚠️ Required for identity verification. See the cost warning in §5. |

## 5. Cost and credit mechanics — read before entering a card

- **A credit card is mandatory**, even though credits cover initial usage.
- **The subscription auto-converts to pay-as-you-go** the moment credits are exhausted *or* expire,
  whichever comes first. There is no hard stop and no upfront commitment — but also no automatic
  cut-off. Given the standing "no cloud without explicit approval" rule on this project, set an
  **Azure budget alert at a low threshold immediately after signup**, before deploying anything.
- **Activate within 90 days** of accepting the program agreement, or the offer expires and you must
  reapply.
- **Once activated, credits are valid for up to two years. No extensions.** Don't activate until
  there is something to spend them on — activating early burns the clock. The SecureForge Tier-3
  live-cloud milestone is the natural trigger.
- Credits can take several hours (up to 24) to appear. Check **Cost Management + Billing → Payment
  methods**.

## 6. Step-by-step — the self-serve path

1. Go to <https://www.microsoft.com/en-us/startups> (or <https://startups.microsoft.com>) → **Get started now**.
2. Sign in with the **fresh personal Microsoft account**. Create it first if needed.
3. At the investor referral code prompt → **Continue without a code**.
   *If you have obtained a code by this point, enter it instead — the flow diverges here and this is
   the only opportunity.*
4. You land on a **Build your startup** preview with an *"Unlock $1,000 in Azure credits"* prompt → **Sign up**.
5. Complete the three-step Azure account creation: profile → address + consent → payment.
6. Dashboard confirms *"You've unlocked $1,000 in Azure credits."*
7. **Immediately** set a budget alert (§5).
8. Complete business verification when prompted to release the additional $4,000.

With a referral code, step 3 instead leads to: contact details → email verification → SMS
verification → the business-information form → submit. **Decision within about three business days**,
by email.

## 7. Traps

- **"Already redeemed" on activation** — the Microsoft account has already taken Azure credits from
  another Microsoft program. This is exactly why the fresh MSA matters.
- **Benefits cannot be redeemed on an existing enterprise account**, and work/school (Entra ID)
  accounts cause activation errors. Activate every benefit with the *same* MSA used to register.
- **You cannot edit a submitted application.** If it is still pending, the confirmation email has a
  delete-and-reapply link. If declined, **you must wait 14 days** to reapply.
- **Country/region is locked** at Azure account creation.
- Program support is only reachable *after* signup, via Azure Portal → *Your Microsoft Team* tile →
  **Get Program Support** (<https://aka.ms/startuphelp-mfs-portal>).

## 8. Recommended sequence

1. ✅ Reposition the website product-first — *done 2026-07-28, see the branch referenced in §3*.
2. Confirm the exact ASIC-registered name and address; fill every `<FILL>` above.
3. Create the fresh personal Microsoft account.
4. **In parallel:** pursue a referral code — [accelerator referral pitch](2026-07-28-accelerator-referral-pitch.md).
   Waiting a fortnight for a code is worth far more than $5,000 of self-serve credit, and the code
   can only be entered at step 3 of the flow.
5. Apply. Set the budget alert. **Do not activate credits until Tier-3 live-cloud work is ready to
   start** — the two-year clock begins at activation.

### Sources

- [Overview of the Microsoft for Startups application process](https://learn.microsoft.com/en-us/startups/microsoft-for-startups/application) — rev. 2026-06-18
- [Microsoft for Startups FAQ](https://learn.microsoft.com/en-us/startups/microsoft-for-startups/mfs-faqs) — rev. 2026-05-21
- [What is Microsoft for Startups?](https://learn.microsoft.com/en-us/azure/signups/overview) — rev. 2026-05-22
