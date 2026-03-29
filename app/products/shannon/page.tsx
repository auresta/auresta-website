"use client";

import Link from "next/link";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const phases = [
  {
    number: "01",
    title: "Discover",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    desc: "Subdomain enumeration, live host discovery, service fingerprinting. Maps your entire external attack surface before an adversary does.",
  },
  {
    number: "02",
    title: "Scan",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    desc: "9,000+ Nuclei templates plus AI correlation. Finds what automated scanners miss by reasoning across findings and chaining vulnerabilities.",
  },
  {
    number: "03",
    title: "Exploit",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    desc: "MetasploitMCP bridges AI decision-making to real exploitation. Every action scope-validated and logged. Proof of exploit, not just theory.",
  },
  {
    number: "04",
    title: "Report",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    desc: "DefectDojo aggregation generates professional DOCX reports with business-context severity ratings. Board and technical versions.",
  },
];

const safetyPoints = [
  {
    title: "Scope validation on every action",
    desc: "Shannon will not touch anything outside the signed rules of engagement. Every target validated before execution.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Immutable audit trail",
    desc: "Cryptographically signed logs of every decision and action. Full chain of custody from recon to report.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Human-in-the-loop kill switch",
    desc: "Pause or stop any engagement instantly. Shannon operates as a tool under human authority — not autonomously in the wild.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <rect x="9" y="9" width="6" height="6" />
      </svg>
    ),
  },
];

const techStack = [
  { category: "Recon", tools: "Subfinder, httpx, Nmap" },
  { category: "Scanning", tools: "Nuclei (9000+ templates), custom AI correlation" },
  { category: "Exploitation", tools: "Metasploit + MetasploitMCP" },
  { category: "AI Testing", tools: "Garak, PyRIT" },
  { category: "Reporting", tools: "DefectDojo, custom DOCX engine" },
  { category: "Infrastructure", tools: "K3s pod, sovereign AU compute" },
];

export default function ShannonPage() {
  return (
    <div className="animate-fade-in-up">
      {/* ── HERO ── */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shannon-ai.jpg"
            alt="Shannon Engine"
            fill
            priority
            className="object-cover"
            style={{ opacity: 0.35 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(251,146,60,0.06) 0%, transparent 70%), rgba(8,11,20,0.90)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono mb-6"
            style={{
              backgroundColor: "rgba(251,146,60,0.12)",
              border: "1px solid rgba(251,146,60,0.3)",
              color: "#fb923c",
            }}
          >
            In Development · Launching Q2 2026
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-text-primary mb-3">
            Shannon Engine
          </h1>
          <p
            className="text-lg sm:text-2xl font-semibold mb-5"
            style={{ color: "#fb923c" }}
          >
            The AI That Thinks Like an Attacker
          </p>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-10">
            Autonomous AI security agent. Continuous attack surface monitoring. Real exploitation, safely scoped.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold transition-all hover:opacity-90"
            style={{ backgroundColor: "#fb923c", color: "#080b14" }}
          >
            Request Early Access
          </Link>
        </div>
      </section>

      {/* ── 4-PHASE FLOW ── */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-mono uppercase tracking-widest mb-3"
              style={{ color: "#fb923c" }}
            >
              Attack Lifecycle
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-text-primary">
              What Shannon Does
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-stretch lg:items-stretch">
            {phases.map((phase, idx) => (
              <div key={phase.number} className="flex flex-col lg:flex-row items-stretch flex-1 min-w-0">
                <TiltCard className="flex-1 w-full h-full">
                  <div
                    style={{
                      backgroundColor: "#0f1623",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "12px",
                      padding: "28px 22px",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        height: "1px",
                        background:
                          "linear-gradient(90deg, transparent, rgba(251,146,60,0.35) 50%, transparent)",
                        marginBottom: "20px",
                      }}
                    />
                    <div
                      className="text-3xl font-black font-mono mb-4"
                      style={{ color: "rgba(251,146,60,0.25)" }}
                    >
                      {phase.number}
                    </div>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: "rgba(251,146,60,0.1)",
                        border: "1px solid rgba(251,146,60,0.25)",
                        color: "#fb923c",
                      }}
                    >
                      {phase.icon}
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-3">{phase.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{phase.desc}</p>
                  </div>
                </TiltCard>

                {idx < phases.length - 1 && (
                  <div
                    className="flex-shrink-0 mx-3 my-3 lg:my-0 rotate-90 lg:rotate-0"
                    style={{ color: "rgba(251,146,60,0.4)" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAFETY STACK ── */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0a0f1a",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-mono uppercase tracking-widest mb-3"
              style={{ color: "#06b6d4" }}
            >
              Safety Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-text-primary mb-4">
              Powerful. Guardrailed. Auditable.
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Shannon operates only within authorised scope. Every decision logged. Every action reversible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyPoints.map((point) => (
              <TiltCard key={point.title}>
                <div
                  style={{
                    backgroundColor: "#0f1623",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px",
                    padding: "28px 22px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(6,182,212,0.4) 50%, transparent)",
                      marginBottom: "20px",
                    }}
                  />
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: "rgba(6,182,212,0.1)",
                      border: "1px solid rgba(6,182,212,0.25)",
                      color: "#06b6d4",
                    }}
                  >
                    {point.icon}
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-3">{point.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{point.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-mono uppercase tracking-widest mb-3"
              style={{ color: "#06b6d4" }}
            >
              Under the Hood
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-text-primary">
              Tech Stack
            </h2>
          </div>

          <div
            style={{
              backgroundColor: "#0f1623",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(6,182,212,0.4) 50%, transparent)",
              }}
            />
            {techStack.map((row, idx) => (
              <div
                key={row.category}
                className="flex items-start gap-4 px-6 py-4"
                style={{
                  borderBottom:
                    idx < techStack.length - 1
                      ? "1px solid rgba(255,255,255,0.05)"
                      : undefined,
                }}
              >
                <div
                  className="text-xs font-mono uppercase tracking-wider flex-shrink-0 pt-0.5"
                  style={{ color: "#06b6d4", width: "120px" }}
                >
                  {row.category}
                </div>
                <div className="text-sm text-text-secondary">{row.tools}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES SUMMARY ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0a0f1a",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Autonomous recon (subdomain enum, live host discovery, service fingerprinting)",
              "AI-driven vulnerability discovery (Nuclei 9000+ templates + AI correlation)",
              "Exploitation via MetasploitMCP (scope-validated, guardrailed)",
              "LLM security testing — Garak + PyRIT for prompt injection and jailbreaks",
              "Continuous attack surface monitoring",
              "Findings aggregated to DefectDojo with professional DOCX reports",
            ].map((cap) => (
              <div
                key={cap}
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{
                  backgroundColor: "#0f1623",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  style={{
                    color: "#fb923c",
                    flexShrink: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "2px",
                  }}
                >
                  <CheckIcon />
                </span>
                <span className="text-sm text-text-secondary">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(251,146,60,0.08) 0%, rgba(8,11,20,1) 100%)",
          borderTop: "1px solid rgba(251,146,60,0.15)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
            Shannon isn&apos;t available to the public yet.
          </h2>
          <p className="text-text-secondary mb-8 text-lg">
            We&apos;re onboarding design partners. If you want AI-driven offensive security before the public launch, apply now.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold transition-all hover:opacity-90"
            style={{ backgroundColor: "#fb923c", color: "#080b14" }}
          >
            Apply for Early Access
          </Link>
        </div>
      </section>
    </div>
  );
}
