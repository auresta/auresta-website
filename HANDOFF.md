# Session Handoff — auresta.com.au (SecureForge page + go-to-market)

**As at 2026-07-27.** Pick up cold and continue seamlessly. This covers the **website + GTM** thread.
The separate **Enterprise Replication Kit** engineering thread (B1–B6) has its own handoff — see
`~/Projects/secureforge/delivery/Session-Handoff-Enterprise-Replication.md` (summary in §5 below).

---

## 1. What this thread is

auresta is a bootstrapped (no-VC) Australian AI-security company. **SecureForge IDP** is its flagship
enterprise product — a compliance-focused internal developer platform (SOCI CIRMP / ACSC Essential
Eight / Cyber Security Act 2024; any-cloud; sovereign; CNCF-native). This session built a **credible
public product page** for it on the company site and mapped the **funding/demo strategy** for the
PoC→production crossroads.

## 2. The website (`~/Projects/auresta-website`) — as-built

**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind 3.4. Brand = **dark + cyan**
(`#080b14`/`#0f1623` surfaces, `#06b6d4` accent, `#3b82f6`), fonts Inter + JetBrains Mono — loaded via
**`next/font/google` in `app/layout.tsx`** (self-hosted at build time; **do not re-add a webfont
`@import` to `globals.css`** — the CSP no longer allows Google's origins). **Strict CSP**
(`next.config.mjs`): `img-src 'self' data: blob:` — **external image/logo CDNs are blocked at runtime;
all assets must be self-hosted in `public/`.** `style-src 'unsafe-inline'` (the site uses `style={{}}`
freely). Remote: `github.com/auresta/auresta-website`, branch **main** (direct push OK; commits are
**unsigned** — no signing key configured, unlike the idp-* repos). Deploys on push to main (Cloudflare/
Vercel-style; not `output: export`).

**SecureForge product page — LIVE (pushed to main):**
- Route **`/products/secureforge`** (part of the Products system, *not* a top-level nav item — this was
  an explicit user decision). Files: `app/products/secureforge/page.tsx` (**server component** — exports
  `metadata`) + `app/products/secureforge/SecureForgeContent.tsx` (**client** — the page body).
- **Discoverability:** flagship card on `app/products/page.tsx`; **footer direct link** "SecureForge IDP"
  in `components/Footer.tsx` (next to "Shannon Engine"); entry in `app/sitemap.ts`. NOT in the Navbar.
- **Sections:** hero ("Secure by default. Compliant by design." + design-partner badge, CTA →`#contact`)
  → compliance band → problem/reframe → 6 capability cards (`TiltCard`) → 3-step how-it-works → 4
  differentiators → **Open Foundations logo marquee** → design-partner CTA with an **embedded
  `DemoRequestForm`** + Calendly fallback + honest disclaimer.
- **Logo marquee** (`components/LogoMarquee.tsx` + `.logo-marquee*` keyframes in `app/globals.css`):
  auto-scrolling, seamless (duplicated track, 2nd copy `aria-hidden`), hover-pause, edge-fade mask,
  `prefers-reduced-motion` aware. **12 official SVG logos self-hosted in `public/images/logos/`**
  (kubernetes, backstage, crossplane, opa, kyverno, sigstore, istio, falco, trivy, vault, argocd, cncf —
  from the CNCF artwork repo + Simple Icons + project repos). Rendered as a **uniform white silhouette**
  (`filter: brightness(0) invert(1)`) because sources are mixed colour/monochrome and the two Simple
  Icons ones (trivy, vault) are black → invisible on dark otherwise. CNCF logo sits above the heading.
- **`DemoRequestForm` (`components/DemoRequestForm.tsx`) was parameterized** — optional props
  `product`/`accent`/`useCaseLabel`/`useCasePlaceholder`/`successText`/`submitLabel`; **defaults preserve
  the original Shannon copy**. SecureForge page passes `product="SecureForge"`, cyan accent. Posts to the
  existing `/api/demo-request` route (now with a `product` field in the body).
- **Fixed a latent build break (bonus):** the repo had an unfinished `EarlyAccessForm → DemoRequestForm`
  rename (Shannon still imported the missing `EarlyAccessForm`, failing `next build`). Completed it —
  `app/products/shannon/page.tsx` now imports `DemoRequestForm` (defaults = Shannon copy).

**Commits on main (this session):** `0b06eb9` (page + discoverability + shannon fix) → `c7d51d2` (fold
into Products nav + footer link) → `063dbd7` (logo marquee). All verified with `next build` (✓ 18 pages,
`/products/secureforge` prerendered static) and rendered/screenshotted via Playwright (22 logos load, 0
broken, form embed works).

**Placeholders to confirm:** CTAs use `https://calendly.com/team-auresta/30min` — confirm that's the
right Calendly. Contact/demo emails elsewhere use `team@auresta.com.au`.

## 3. Open follow-ups the user was offered (pick up here)

**Website polish (offered, not yet done):**
1. **Full-colour logos** — currently uniform white silhouettes. To go colour: source colour icon
   variants for the two monochrome ones (**trivy, vault**) so the whole strip is branded colour, then
   drop the `filter` in `.logo-marquee-item img`.
2. **Sigstore** uses its **horizontal wordmark** (wider than the icon marks) — swap for an icon-only mark
   for tighter marquee rhythm (icon fetch failed this session; the community artwork `.../icon/...` path).
3. **Site-wide per-page metadata** — every OTHER page (`/`, `/products`, `/services`, `/tools`, …) is a
   client component with no `metadata` export, so they all inherit the default `<title>` ("Auresta AI —
   …"). `/products/secureforge` now does it right (server wrapper + client child). Offer to apply that
   pattern site-wide for SEO.

**Go-to-market (from the "crossroads" strategy conversation):**
- **Cloud credits (no VC needed):** ⚠️ **Corrected 2026-07-28 — the earlier note below was wrong.**
  *Founders Hub no longer exists* as a separate program with a written application; Microsoft folded it
  into a single **Microsoft for Startups** entry point. On the self-serve path **there is no application
  form and no essay** — you go straight to Azure signup for **$1,000 (90 days) → +$4,000 (180 days)**
  after business verification. **$5,000 is the self-serve ceiling.** The **~$100k–$150k tier and all the
  ancillary benefits require a 10-character Investor Network referral code** from an accelerator /
  incubator / angel network / university (no equity, no investment needed) — **Stone & Chalk is the
  primary AU target**. Microsoft does not publish its network membership, so you must ask directly.
  Two working docs now cover this end-to-end:
  **`docs/gtm/2026-07-28-microsoft-for-startups-readiness.md`** (eligibility, field-by-field values,
  credit/cost mechanics, traps) and **`docs/gtm/2026-07-28-accelerator-referral-pitch.md`** (who to ask,
  a short email, and the full written pitch — §3 doubles as the design-partner one-pager source).
  Also AWS Activate Founders ($1k), Google Start ($2k).
  **Eligibility gotchas found:** signup needs a **fresh personal Microsoft account with no prior Azure
  account** (work/company-domain addresses are rejected outright), and the program **excludes
  "consultancy or agency"** — which is why the site was repositioned product-first (see below).
- **AU levers:** **R&D Tax Incentive** (~43.5% refundable — the single biggest lever for a bootstrapped
  builder; incorporate + register with AusIndustry; confirm with an R&D-tax adviser). **Stone & Chalk**
  (absorbed AustCyber — the AU cyber accelerator/community, unlocks bigger credit tiers + design-partner
  intros). (CyRise closed 2023.)
- **The real unlock = a design partner / paid pilot** (a regulated AU telco/enterprise with SOCI pain —
  funds production + often provides the cloud). **I offered to draft a design-partner one-pager.**
- **Always-on demo strategy:** the user has **K3s on an AI workstation** (their existing Auresta Security
  Platform already runs on sovereign K3s). Plan: host a **persistent zero-cloud demo** there — I offered
  to adapt the kit's `make local-verify` (kind) harness into a persistent `demo/k3s` deploy (ArgoCD +
  Crossplane + provider-kubernetes + the Secure* library + optionally Backstage). Any-cloud spoke swap is
  shown via `crossplane render` / on-demand cloud (credits); K3s covers the platform + in-cluster reconcile.
- **The strategic decision** (wrap PoC as blueprint / extend the kit / spin up the production program) is
  captured in `~/Projects/secureforge/delivery/Roadmap-Beyond-the-Kit.md`.

**Done 2026-07-28 — MERGED AND LIVE ON MAIN:** the Microsoft for Startups work (both `docs/gtm/` docs
above) and the **product-first repositioning** of the homepage + site metadata. Merged fast-forward from
`gtm/product-first-positioning`; on main as `789c201` → `8d44023` → `a3bfed4`. It rewrites the site-wide
title/description, reframes the hero, adds a Products section above services, and renames
"Security-by-Design Consulting" → "…Engineering". `next build` passes (18 pages, `/` static). **The
consultancy-exclusion blocker is cleared — the Microsoft application can proceed** once the entity
details and fresh MSA in the readiness sheet are sorted.

It also completes the two remaining services-first signals, at the user's request:
**"From $250/hr"** → **"Scoped per engagement"** (an hourly rate is the strongest consultancy tell — the
other two cards keep their fixed floors, `$3,500` / `$15,000`, which read as productised packages), and
the bottom CTA banner **"Ready to know where you stand? / Book a Free 30-Minute Security Assessment"** →
**"Ready to see it in your environment? / Book a 30-Minute Platform Walkthrough"**, same Calendly link.
The homepage now contains **zero** occurrences of *consult*, *"/hr"* or *"free … assessment"*.

**Note:** `components/ServiceCards.tsx` was **dead code** — nothing imported it; the homepage uses its own
inline `services` array + `ServiceCardInline`. **Deleted 2026-07-28.** If a shared service-card component
is ever wanted again, lift `ServiceCardInline` out of `app/page.tsx` rather than resurrecting the old one.

**Suggested next action:** **the design-partner one-pager** (the revenue path — source material is §3 of
the referral-pitch doc) and the **Stone & Chalk outreach email** (§2 of the same doc, ready to send once
`<NAME>`/`<ORG>` are filled). Then the Microsoft signup itself, and any of the three website polish items.

## 4. How to work (mechanics that matter)

- **Two repos, two policies.** `auresta-website` = **direct push to main**, unsigned commits fine, verify
  with `npm run build` (must pass — was broken before this session). The kit repos (`idp-platform`,
  `idp-compositions`, `secure-forge`) = **signed-commit PRs the operator merges** (branch-protected).
- **Push auth = GitHub App token flow** (no `gh` login): mint via
  `ssh dyan@mmachine "~/bin/infisical-get-secret b153bd3a-9f0f-4bb8-b979-af68c8525036 dev GITHUB_APP_ID|GITHUB_APP_PRIVATE_KEY"`
  (names only, never values) → `GITHUB_APP_ID=… GITHUB_APP_KEY=…pem GITHUB_APP_ORG=auresta bash
  idp-platform/scripts/github-app-token.sh` → push via an in-memory `GIT_ASKPASS` (`x-access-token:$TOKEN`).
  The App **has access to all `auresta` org repos** (auresta-website, secure-forge, idp-*). Token is 1h.
- **Shell gotchas:** the Bash tool runs under **zsh** — `read -a` and `${PIPESTATUS[0]}` fail, and
  unquoted `$var` does NOT word-split. For bash-isms wrap in `bash <<'SCRIPT' … SCRIPT`. macOS `bash` is
  **3.2** (no `declare -A`); use here-doc lists + `while read`.
- **Visual verification:** `npm run dev` + Playwright MCP (`browser_navigate` → `browser_evaluate` to
  jump-scroll with `scrollBehavior='auto'` → `browser_take_screenshot`). Kill dev after (`lsof -ti:3000 |
  xargs kill`), and clean up `.playwright-mcp/` + stray screenshot PNGs.
- **PoC ethos:** no cloud stood up without explicit operator say-so (the SecureForge cloud estate is
  deleted). Watch cost.

## 5. The other thread — Enterprise Replication Kit (B1–B6) — summary

Fully detailed in `~/Projects/secureforge/delivery/Session-Handoff-Enterprise-Replication.md` +
`Known-Issues-and-Hardening.md` + `Roadmap-Beyond-the-Kit.md`, and the `next-enterprise-replication`
memory. TL;DR: **B1–B5 + B6 (Tiers 1–2) are BUILT + MERGED** across `idp-platform`/`idp-compositions`
(the air-gapped, any-cloud `Secure*` Crossplane platform; now provably installs + reconciles on a local
`kind` cluster via `make local-verify`, zero cloud). **Next is Tier-3 (live cloud) — operator-gated**
(rebuild the hub via the B1–B4 runbook, then machine-identity auth, real keys, live spoke provisioning).
Kit docs live in `~/Projects/secureforge/` (pushed to `github.com/auresta/secure-forge`).
