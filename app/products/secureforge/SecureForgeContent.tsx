"use client";

import React, { useState } from "react";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import DemoRequestForm from "@/components/DemoRequestForm";

/* ── Icons (stroke 1.5, matching the site set) ── */
const RouteIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="19" r="2" /><circle cx="18" cy="5" r="2" />
    <path d="M8 19h6a4 4 0 0 0 4-4V7M6 17V9a4 4 0 0 1 4-4h6" />
  </svg>
);
const PolicyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 4 6v6c0 5 3.5 8.3 8 9 4.5-.7 8-4 8-9V6l-8-3Z" /><path d="M9 12l2 2 4-4" />
  </svg>
);
const ChainIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v6m0 0 3-3m-3 3L9 5" /><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M9 14h6" />
  </svg>
);
const StackIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" />
    <path d="M7 7h.01M7 17h.01" />
  </svg>
);
const MeshIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2" />
  </svg>
);
const PulseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h4l2-7 4 14 2-7h6" />
  </svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ── Data ── */
type Cap = { icon: React.ReactNode; title: string; desc: string };
const capabilities: Cap[] = [
  { icon: <RouteIcon />, title: "Golden-path templates", desc: "Self-service scaffolding for new services with encryption, IAM-only auth, signing and network policy pre-embedded. Secure defaults you can't accidentally skip." },
  { icon: <PolicyIcon />, title: "Policy-as-code, enforced", desc: "A dual engine (OPA/Gatekeeper + Kyverno) checks every deployment at admission against Essential-Eight and SOCI controls — non-compliant workloads never reach production." },
  { icon: <ChainIcon />, title: "End-to-end supply chain", desc: "Keyless Sigstore signing and SBOMs on every build; unsigned images or critical CVEs are rejected at deploy. Provenance you can prove, commit to cluster." },
  { icon: <StackIcon />, title: "Infrastructure guardrails", desc: "Declarative Secure* infrastructure (Crossplane) provisions databases, clusters and networks with private networking, encryption and backups built in — the same blueprint on any cloud." },
  { icon: <MeshIcon />, title: "Runtime Zero Trust", desc: "mTLS everywhere via the service mesh, deny-by-default network policy, and runtime threat detection — the platform stays locked down after deploy, not just at the gate." },
  { icon: <PulseIcon />, title: "Continuous compliance", desc: "Live security scorecards, Essential-Eight maturity and SOCI hazard mapping per service, backed by a tamper-proof, 7-year audit trail. Evidence is generated, not gathered." },
];

const steps = [
  { role: "Self-serve", title: "Developers ship on paved roads", desc: "Teams create services and infrastructure from golden-path templates in a familiar portal — no tickets, no waiting on a security review for routine work." },
  { role: "Enforce", title: "Guardrails apply automatically", desc: "Every change is checked against policy at admission and reconciled by GitOps. Insecure or non-compliant configurations are rejected — and drift is healed on its own." },
  { role: "Prove", title: "Compliance is audit-ready", desc: "Posture and a tamper-proof audit trail are continuous, so annual reports and regulator evidence export in minutes, not weeks of manual assembly." },
];

const differentiators = [
  { title: "Security by default, not by discipline", desc: "The platform makes insecure configurations unexpressible — safety doesn't depend on every engineer remembering every control." },
  { title: "Australian data sovereignty", desc: "Sensitive telco and PII data stays in-country by design; SaaS is limited to non-sensitive metadata. Built for SOCI and local residency obligations." },
  { title: "Any cloud, and on-prem 5G", desc: "A cloud-agnostic, CNCF-native core governs cloud-native IT workloads and containerised 5G network functions alike — no single-vendor lock-in." },
  { title: "Developer-friendly, not blocking", desc: "Compliance is delivered as paved roads and fast feedback — teams go faster because the secure way is the easy way." },
];

const complianceItems = ["SOCI Act CIRMP", "ACSC Essential Eight", "Cyber Security Act 2024", "Zero Trust", "AU data residency"];
const stack = ["Kubernetes", "Backstage", "Crossplane", "OPA / Gatekeeper", "Kyverno", "Sigstore", "Istio", "Falco", "Trivy", "HashiCorp Vault", "ArgoCD"];

/* ── Shared card chrome (matches the site's cards) ── */
const cardBase: React.CSSProperties = { backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", height: "100%" };
const gradientLine: React.CSSProperties = { height: "1px", background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4) 50%, transparent)", marginBottom: "24px" };
const defaultShadow = "0 1px 3px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3)";
const hoverShadow = "0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(6,182,212,0.15)";

function CapCard({ cap }: { cap: Cap }) {
  const [shadow, setShadow] = useState(defaultShadow);
  return (
    <TiltCard>
      <div
        className="p-6 flex flex-col transition-all duration-300"
        style={{ ...cardBase, boxShadow: shadow }}
        onMouseEnter={() => setShadow(hoverShadow)}
        onMouseLeave={() => setShadow(defaultShadow)}
      >
        <div style={gradientLine} />
        <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: "rgba(6,182,212,0.1)", color: "#06b6d4" }}>
          {cap.icon}
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-2">{cap.title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed flex-1">{cap.desc}</p>
      </div>
    </TiltCard>
  );
}

export default function SecureForgeContent() {
  return (
    <div className="animate-fade-in-up">
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(6,182,212,0.12) 0%, transparent 60%), #080b14",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.3)", color: "#06b6d4" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#06b6d4" }} />
            Enterprise IDP · Sovereign · Now onboarding design partners
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-text-primary mb-6">
            Secure by default.
            <br />
            <span style={{ color: "#06b6d4" }}>Compliant by design.</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-9 leading-relaxed">
            SecureForge is an internal developer platform that turns Australia&apos;s toughest security-compliance
            obligations — the <span className="text-text-primary font-medium">SOCI Act CIRMP</span>,{" "}
            <span className="text-text-primary font-medium">ACSC Essential Eight</span>, and the{" "}
            <span className="text-text-primary font-medium">Cyber Security Act 2024</span> — into continuously-enforced,
            developer-friendly guardrails. Ship fast, stay compliant, prove it on demand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
            >
              Request a demo
            </Link>
            <Link
              href="#how"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm transition-all hover:bg-white/5"
              style={{ border: "1px solid rgba(6,182,212,0.4)", color: "#06b6d4" }}
            >
              See how it works →
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE BAND ── */}
      <section style={{ backgroundColor: "#0e1421", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "#64748b" }}>Built to meet</span>
          {complianceItems.map((item) => (
            <span
              key={item}
              className="px-3.5 py-1.5 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", color: "#06b6d4" }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0a0f1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-medium text-text-primary leading-snug mb-6">
            For regulated enterprises, compliance has become a{" "}
            <span style={{ color: "#06b6d4" }}>periodic audit panic</span> — manual evidence-gathering, drift between
            what&apos;s approved and what&apos;s running, and developers slowed by gate-keeping.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            SecureForge makes compliance{" "}
            <span className="text-text-primary font-semibold">continuous and automatic</span> — enforced at every deploy,
            not reconstructed once a year.
          </p>
        </div>
      </section>

      {/* ── PLATFORM / CAPABILITIES ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#06b6d4" }}>The platform</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Security built into every step of delivery</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Developers self-serve from golden paths where insecure configurations are simply{" "}
              <em>unexpressible</em> — the platform bakes the controls in, so teams move fast without cutting corners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <CapCard key={cap.title} cap={cap} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how"
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#0a0f1a", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#06b6d4" }}>How it works</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Compliance that happens automatically</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Developers ship on paved roads, the platform enforces the rules, and your posture is always audit-ready.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
            {steps.map((col, idx) => (
              <div key={col.role} className="flex flex-col md:flex-row items-center flex-1 min-w-0">
                <TiltCard className="flex-1 w-full">
                  <div style={{ ...cardBase, padding: "32px 24px", textAlign: "center" }}>
                    <div style={gradientLine} />
                    <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#06b6d4" }}>
                      {String(idx + 1).padStart(2, "0")} · {col.role}
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-3">{col.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{col.desc}</p>
                  </div>
                </TiltCard>
                {idx < steps.length - 1 && (
                  <div className="flex-shrink-0 mx-4 my-4 md:my-0 rotate-90 md:rotate-0" style={{ color: "rgba(6,182,212,0.5)" }} aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#06b6d4" }}>Why SecureForge</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Built for regulated, sovereign, hybrid estates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {differentiators.map((d) => (
              <div key={d.title} className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 mt-1 flex items-center justify-center w-8 h-8 rounded-lg"
                  style={{ backgroundColor: "rgba(6,182,212,0.1)", color: "#06b6d4" }}
                  aria-hidden="true"
                >
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-1.5">{d.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN STACK ── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
        style={{ backgroundColor: "#0e1421", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#06b6d4" }}>Open foundations</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Built on the proven CNCF-native stack</h2>
          <p className="text-text-secondary text-lg mb-8">
            No proprietary black box. SecureForge composes and hardens the open-source tools your platform teams already trust.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {stack.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm font-medium font-mono"
                style={{ backgroundColor: "#111827", border: "1px solid rgba(255,255,255,0.09)", color: "#cbd5e1" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / DESIGN PARTNER ── */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(59,130,246,0.08) 100%)", borderTop: "1px solid rgba(6,182,212,0.2)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#06b6d4" }}>Design partner program</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">See it running on your requirements</h2>
          <p className="text-text-secondary mb-8 text-lg">
            SecureForge is onboarding a small number of design partners across regulated Australian industries. Tell us
            about your obligations and we&apos;ll walk you through the platform and the compliance automation — mapped to
            your environment.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <div style={{ ...cardBase, padding: "28px" }}>
            <div style={gradientLine} />
            <DemoRequestForm
              product="SecureForge"
              accent="#06b6d4"
              useCaseLabel="What are you trying to solve?"
              useCasePlaceholder="E.g. continuous SOCI CIRMP + Essential Eight evidence across our AKS estate and 5G workloads..."
              submitLabel="Request a demo"
              successText="Thanks — we'll be in touch shortly to arrange your SecureForge walkthrough."
            />
          </div>
          <p className="text-center text-sm text-text-secondary mt-5">
            Prefer to talk now?{" "}
            <a href="https://calendly.com/team-auresta/30min" target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: "#06b6d4" }}>
              Book a 30-minute call →
            </a>
          </p>
          <p className="text-center text-xs mt-6" style={{ color: "#475569" }}>
            A working proof-of-concept is available for design-partner evaluation. Compliance features help organisations
            meet the referenced obligations and do not by themselves constitute certification or legal advice.
          </p>
        </div>
      </section>
    </div>
  );
}
