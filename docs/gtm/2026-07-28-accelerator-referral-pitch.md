# Accelerator / Investor Network referral pitch

**As at 2026-07-28.** The ask is narrow and specific: **a 10-character Microsoft for Startups
Investor Network referral code.** That code is the difference between **$5,000** self-serve and
**~$100,000** (ceiling $150,000), plus Azure Standard Support, technical experts, go-to-market
support, and free GitHub Enterprise / Microsoft 365 / Visual Studio Enterprise / LinkedIn Premium —
none of which come with the self-serve path.

Companion doc: [Microsoft for Startups readiness sheet](2026-07-28-microsoft-for-startups-readiness.md).

---

## 1. Who to ask

Microsoft issues codes to "a participating investor, accelerator, incubator, angel network,
university, **or similar organization**." That's a deliberately wide net — it does **not** require
taking investment, and no equity is involved in the code itself.

**Microsoft does not publish its Investor Network membership.** There is no list to check. The only
way to find out is to ask each organisation directly whether they hold a Microsoft for Startups
referral code. Budget for several "no"s.

**Primary target — Stone & Chalk.** Australia's cyber/deeptech hub, which absorbed AustCyber. Best
single fit: the cyber-security mandate matches SecureForge exactly, and membership also unlocks
design-partner introductions into regulated Australian enterprises — which is the *actual* revenue
path. Even if the code doesn't materialise, the relationship is worth more than the credits.

**Secondary targets** — worth one email each: Cicada Innovations, Startmate, Antler Australia,
university innovation hubs and incubators local to you. Any organisation you already have a
relationship with is a better first call than a colder, larger one.

**Framing note:** you are not asking to join a program, take investment, or give up equity. You are
asking whether they hold a code and would sponsor an Australian sovereign-security product company.
That's a small favour, and it costs them nothing.

## 2. The short email (send this)

> **Subject:** Microsoft for Startups referral code — Australian sovereign security platform
>
> Hi <NAME>,
>
> I'm the founder of Auresta, an Australian AI-security product company. We build **SecureForge**, an
> internal developer platform that turns SOCI Act CIRMP, ACSC Essential Eight and Cyber Security Act
> 2024 obligations into continuously-enforced guardrails — compliance as automation rather than
> annual audit panic, with all sensitive data kept onshore.
>
> We have a working proof-of-concept and a live product page at
> https://auresta.com.au/products/secureforge. We're bootstrapped — no VC — and moving from PoC to a
> production pilot.
>
> One specific question: **does <ORG> hold a Microsoft for Startups Investor Network referral code?**
> Microsoft's self-serve tier caps at $5,000 in Azure credits; a partner code unlocks around
> $100,000 plus Azure support. That's the difference between demonstrating SecureForge on a laptop
> cluster and standing up a real multi-region Australian deployment for design partners.
>
> Happy to give you a 20-minute walkthrough of the platform first if that's useful — and if a code
> isn't something <ORG> offers, I'd still value a conversation about your design-partner network.
>
> Thanks,
> <NAME> — Auresta Pty Ltd

## 3. The full pitch (for a call, form, or attachment)

**Auresta** is a bootstrapped Australian AI-security company. Our flagship product, **SecureForge
IDP**, is an internal developer platform for regulated Australian enterprises — initially tier-1
telecommunications, then banking, energy and government-adjacent operators subject to the same
regime.

**The problem.** For SOCI-regulated operators, security compliance has become a periodic audit
panic: manual evidence-gathering, drift between what was approved and what is actually running, and
development teams slowed to a crawl by gate-keeping. The obligations are real and growing — the SOCI
Act's Critical Infrastructure Risk Management Program, the ACSC Essential Eight, and the Cyber
Security Act 2024 — but the tooling to satisfy them continuously does not exist as a product.
Enterprises assemble it by hand, or they don't.

**What SecureForge does.** It makes insecure configuration *unexpressible*. Developers self-serve
from golden-path templates with encryption, IAM-only authentication, image signing and network policy
already embedded. A dual policy engine checks every deployment at admission against Essential Eight
and SOCI controls, so non-compliant workloads never reach production. Keyless Sigstore signing and
SBOMs gate the supply chain. Declarative `Secure*` infrastructure abstractions provision databases,
clusters and networks with private networking, encryption and backups built in — the same blueprint
on any cloud. Runtime stays locked down with mTLS everywhere and deny-by-default networking. The
result is a live compliance posture and a tamper-proof audit trail: **evidence is generated, not
gathered**, and a regulator request is answered in minutes rather than weeks.

**Why it's differentiated.** Australian data sovereignty is designed in, not bolted on — sensitive
telco and PII data stays onshore, and the architecture is explicitly hybrid because of it. It governs
both cloud-native IT workloads and containerised 5G network functions, which no general-purpose
platform does. And it is CNCF-native rather than a proprietary black box: it composes and hardens the
open-source tools platform teams already trust.

**Traction.** The platform is specified end-to-end (product requirements plus an architecture
document with thirteen recorded architecture decisions). A working proof-of-concept has run on Azure
AKS — management cluster, GitOps delivery, developer portal, and Azure Policy guardrails enforced at
management-group scope. Alongside it we have built an **enterprise replication kit**: an any-cloud,
air-gapped-capable version of the `Secure*` platform that provably installs and reconciles on a local
Kubernetes cluster with a single command and zero cloud spend. The product page is live and the
design-partner program is open. We are bootstrapped and cash-disciplined — the cloud estate is torn
down between milestones deliberately.

**Why Azure, specifically.** This is not an opportunistic credits application. Azure is the recorded
architectural decision (ADR-013) for the platform's hub and first landing zone: AKS across Australia
East and Australia Southeast, Azure Policy guardrails at management-group scope, Entra Workload ID
for machine identity so there are no static cloud credentials anywhere, and Azure Key Vault with
Managed HSM for key custody. The cloud-agnostic core means later spokes can land elsewhere, but the
sovereign Australian control plane is Azure-first by design. Our target customers are Australian
regulated enterprises — overwhelmingly Microsoft estates already.

**What credits unlock.** Restoring the multi-region Azure hub, standing up production-representative
spoke clusters, and running a live design-partner pilot against real regulatory workloads. Today that
work is gated purely on cloud cost — everything else is built.

**The ask.** A Microsoft for Startups Investor Network referral code.

## 4. Reuse

Section 3 is the raw material for the **design-partner one-pager** (the other open GTM item). To
convert: keep *The problem*, *What SecureForge does*, *Why it's differentiated* and *Traction*; drop
*Why Azure* and *What credits unlock*; and replace *The ask* with the design-partner offer — early
access, direct influence over the roadmap, and a compliance posture mapped to the partner's own
obligations.
