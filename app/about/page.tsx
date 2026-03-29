"use client";

import Link from "next/link";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";

const CompleteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" fill="rgba(6,182,212,0.15)"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const InProgressIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" stroke="rgba(59,130,246,0.3)" strokeWidth="2"/>
    <path d="M12 2a10 10 0 0 1 10 10" stroke="#3b82f6" strokeWidth="2.5"/>
  </svg>
);

const PlannedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
  </svg>
);

const capabilities = [
  "AIGP (AI Governance Professional) certified",
  "Essential Eight implementation experience",
  "SOCI Act and APRA CPS 234 familiarity",
  "Privacy Act / DPA compliance analysis",
  "Deep AI/ML systems integration (LLM infrastructure, agentic frameworks, sovereign compute)",
  "Penetration testing — wireless, network, application, AI-systems",
  "Dedicated on-premises inference hardware for sovereign data processing",
];

const certifications = [
  {
    status: "complete",
    name: "AIGP — AI Governance Professional",
    note: "Current",
    progress: 100,
  },
  {
    status: "complete",
    name: "CyberCert SMB1001 Partner",
    note: "Current",
    progress: 100,
  },
  {
    status: "complete",
    name: "CompTIA Security+",
    note: "Current",
    progress: 100,
  },
  {
    status: "complete",
    name: "OSCP — Offensive Security Certified Professional",
    note: "Current",
    progress: 100,
  },
  {
    status: "complete",
    name: "ISO 27001 Lead Implementer",
    note: "Current",
    progress: 100,
  },
  {
    status: "in-progress",
    name: "CREST",
    note: "In Progress",
    progress: 55,
  },
];

const industries = ["Healthcare", "Construction", "Agriculture", "Hospitality", "Legal"];

export default function AboutPage() {
  return (
    <div className="animate-fade-in-up">
      {/* Header */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 70%), #080b14",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-text-primary mb-6">
            Built by AI Engineers Who{" "}
            <span style={{ color: "#06b6d4" }}>Think Like Attackers</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Auresta AI was founded at the intersection of two urgent trends: the accelerating sophistication of
            AI-powered threats, and the widening gap between enterprise-grade security capabilities and what
            Australian SMEs can actually afford.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden" style={{ height: "400px" }}>
              <Image
                src="/images/about-team.jpg"
                alt="Security engineering team"
                fill
                className="object-cover"
              />
              {/* Subtle dark overlay to match site palette */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,11,20,0.3) 0%, rgba(6,182,212,0.05) 100%)" }} />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">Our Story</h2>
              <div className="space-y-5 text-text-secondary leading-relaxed">
                <p>
                  We&apos;ve built AI-powered systems across healthcare, construction, and agriculture — products that
                  handle real patient data, critical infrastructure designs, and sensitive financial records.
                  That builder&apos;s perspective gives us a different view of your attack surface.
                </p>
                <p>
                  Most security firms evaluate risk from the outside. We&apos;ve been on the inside — architecting the
                  systems, deploying the models, managing the data pipelines. We know where AI systems break, where
                  data leaks, and where attackers look first.
                </p>
                <p>
                  Auresta exists to make enterprise-grade security accessible to the Australian SMEs who need it
                  most — without the enterprise price tag or the 6-month engagement timeline.
                </p>
              </div>

              <div
                className="mt-8 rounded-lg p-6"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid rgba(6,182,212,0.2)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="text-xs font-mono uppercase tracking-widest mb-3"
                  style={{ color: "rgba(6,182,212,0.6)" }}
                >
                  Sovereign Compute
                </div>
                <h3 className="font-bold text-text-primary mb-2">On-Premises AI Inference</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Dedicated on-premises inference hardware for sovereign data processing. Your vulnerability data, scan results, and security
                  reports never leave Australian soil. Not in transit. Not in storage.
                </p>
                <div
                  className="mt-4 pt-4 border-t text-xs font-mono"
                  style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(6,182,212,0.5)" }}
                >
                  ⊕ Melbourne, Australia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section
        className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#0e1421" }}
      >
        <div className="absolute inset-0 z-0">
          <Image src="/images/data-center.jpg" alt="Data center" fill className="object-cover" style={{ opacity: 0.25 }} />
          <div className="absolute inset-0" style={{ background: "rgba(8,11,20,0.90)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-10">
            What We Bring
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <TiltCard key={cap}>
              <div
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{
                  backgroundColor: "#141c2e",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(6,182,212,0.2)", color: "#06b6d4" }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <p className="text-sm text-text-secondary leading-relaxed">{cap}</p>
              </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ROADMAP ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
            Certifications Roadmap
          </h2>
          <p className="text-text-secondary mb-10">
            We hold ourselves to the same standards we advise clients on.
          </p>

          <div className="space-y-5">
            {certifications.map((cert) => (
              <TiltCard key={cert.name}>
              <div
                className="p-5 rounded-lg"
                style={{
                  backgroundColor: "#111827",
                  border: `1px solid ${
                    cert.status === "complete"
                      ? "rgba(6,182,212,0.3)"
                      : cert.status === "in-progress"
                      ? "rgba(59,130,246,0.2)"
                      : "rgba(255,255,255,0.06)"
                  }`,
                  boxShadow: cert.status === "complete" ? "0 4px 24px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)" : "none",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0">
                      {cert.status === "complete" ? <CompleteIcon /> : cert.status === "in-progress" ? <InProgressIcon /> : <PlannedIcon />}
                    </span>
                    <div>
                      <p className="font-semibold text-text-primary text-sm">{cert.name}</p>
                    </div>
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor:
                        cert.status === "complete"
                          ? "rgba(6,182,212,0.15)"
                          : cert.status === "in-progress"
                          ? "rgba(59,130,246,0.12)"
                          : "rgba(255,255,255,0.05)",
                      color:
                        cert.status === "complete"
                          ? "#06b6d4"
                          : cert.status === "in-progress"
                          ? "#3b82f6"
                          : "#475569",
                    }}
                  >
                    {cert.note}
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${cert.progress}%`,
                      backgroundColor:
                        cert.status === "complete"
                          ? "#06b6d4"
                          : cert.status === "in-progress"
                          ? "#3b82f6"
                          : "transparent",
                    }}
                  />
                </div>
              </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0e1421",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-text-primary mb-6">
            Industries We&apos;ve Built For
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-5 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "#141c2e",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                }}
              >
                {ind}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md font-bold transition-all hover:opacity-90"
            style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
          >
            Book a Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
