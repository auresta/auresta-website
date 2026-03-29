"use client";

import Link from "next/link";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const products = [
  {
    image: "/images/shannon-ai.jpg",
    badgeText: "In Development · Q2 2026",
    badgeBg: "rgba(251,146,60,0.15)",
    badgeColor: "#fb923c",
    name: "Shannon Engine",
    href: "/products/shannon",
    description:
      "Autonomous AI pentesting agent. Conducts full attack lifecycle — recon to exploitation — with LLM decision-making and safety guardrails.",
    bullets: [
      "AI-driven recon & asset discovery",
      "Nuclei 9000+ vulnerability templates",
      "MetasploitMCP exploitation bridge",
      "LLM security testing (prompt injection, jailbreaks)",
      "Scope-validated safety guardrails",
    ],
    ctaLabel: "View Details",
    ctaHref: "/products/shannon",
    ctaStyle: {
      border: "1px solid rgba(251,146,60,0.5)",
      color: "#fb923c",
      backgroundColor: "transparent",
    },
    accentColor: "#fb923c",
  },
  {
    image: "/images/siem-dashboard.jpg",
    badgeText: "Phase 1 Active",
    badgeBg: "rgba(16,185,129,0.15)",
    badgeColor: "#10b981",
    name: "Auresta Security Platform",
    href: "/services",
    description:
      "Full-lifecycle OSS security stack. Prevention to recovery. Wazuh SIEM, threat intel, IR case management, and SOAR automation.",
    bullets: [
      "Wazuh SIEM + XDR (live)",
      "Suricata IDS/IPS",
      "TheHive + MISP threat intelligence",
      "n8n SOAR automation",
      "Deployed on sovereign K3s infrastructure",
    ],
    ctaLabel: "View Services",
    ctaHref: "/services",
    ctaStyle: {
      backgroundColor: "rgba(16,185,129,0.15)",
      color: "#10b981",
      border: "1px solid rgba(16,185,129,0.35)",
    },
    accentColor: "#10b981",
  },
  {
    image: "/images/threat-detection.jpg",
    badgeText: "Coming Q2–Q3 2026",
    badgeBg: "rgba(6,182,212,0.12)",
    badgeColor: "#06b6d4",
    name: "AI Security Tools",
    href: "/tools",
    description:
      "Free AI-powered security tools for Australian SMEs. No account required. Sovereign compute.",
    bullets: [
      "Essential Eight Assessor",
      "AI Posture Scanner",
      "Cyber Insurance Checker",
      "Prompt Injection Tester",
      "Shannon AI Analyst",
    ],
    ctaLabel: "View Tools",
    ctaHref: "/tools",
    ctaStyle: {
      backgroundColor: "rgba(6,182,212,0.12)",
      color: "#06b6d4",
      border: "1px solid rgba(6,182,212,0.3)",
    },
    accentColor: "#06b6d4",
  },
];

const lifecycleColumns = [
  {
    label: "01",
    title: "AI Security Tools",
    role: "Assess",
    desc: "Baseline your security posture. Identify gaps before an attacker does.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    label: "02",
    title: "Security Platform",
    role: "Detect & Respond",
    desc: "Monitor continuously. Detect threats. Respond fast. Recover completely.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "03",
    title: "Shannon Engine",
    role: "Attack & Validate",
    desc: "Prove your defences hold. AI-driven red team that never stops.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v3l2 2" />
      </svg>
    ),
  },
];

export default function ProductsPage() {
  return (
    <div className="animate-fade-in-up">
      {/* ── HERO ── */}
      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products-hero.jpg"
            alt="Auresta products"
            fill
            priority
            className="object-cover"
            style={{ opacity: 0.30 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 70%), rgba(8,11,20,0.88)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono mb-6"
            style={{
              backgroundColor: "rgba(6,182,212,0.1)",
              border: "1px solid rgba(6,182,212,0.25)",
              color: "#06b6d4",
            }}
          >
            Australian-built · Sovereign infrastructure · AI-native
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-text-primary mb-5">
            Products
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            Enterprise security technology — built in Australia, deployed on sovereign infrastructure.
          </p>
        </div>
      </section>

      {/* ── PRODUCT CARDS ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <TiltCard key={p.name}>
              <div
                style={{
                  backgroundColor: "#0f1623",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Card image */}
                <div style={{ position: "relative", height: "200px", flexShrink: 0 }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    style={{ opacity: 0.85 }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, #0f1623 100%)",
                    }}
                  />
                </div>

                {/* Card body */}
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Gradient top line */}
                  <div
                    style={{
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(6,182,212,0.4) 50%, transparent)",
                      marginBottom: "20px",
                    }}
                  />

                  {/* Status badge */}
                  <div style={{ marginBottom: "14px" }}>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: p.badgeBg,
                        color: p.badgeColor,
                        border: `1px solid ${p.badgeColor}40`,
                      }}
                    >
                      {p.badgeText}
                    </span>
                  </div>

                  {/* Name */}
                  <h2
                    className="text-xl font-black text-text-primary mb-3"
                    style={{ lineHeight: 1.2 }}
                  >
                    {p.name}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span
                          style={{
                            color: p.accentColor,
                            flexShrink: 0,
                            display: "inline-flex",
                            alignItems: "center",
                            marginTop: "2px",
                          }}
                        >
                          <CheckIcon />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={p.ctaHref}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm font-semibold transition-all hover:opacity-90 mt-auto"
                    style={p.ctaStyle}
                  >
                    {p.ctaLabel}
                  </Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ── HOW IT ALL CONNECTS ── */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0a0f1a",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary mb-4">
            How It All Connects
          </h2>
          <p className="text-text-secondary mb-16 max-w-2xl mx-auto text-lg">
            Shannon attacks. The Platform detects. The Tools assess. Together they cover the full security lifecycle.
          </p>

          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
            {lifecycleColumns.map((col, idx) => (
              <div key={col.label} className="flex flex-col md:flex-row items-center flex-1 min-w-0">
                {/* Column card */}
                <TiltCard className="flex-1 w-full">
                  <div
                    style={{
                      backgroundColor: "#0f1623",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "12px",
                      padding: "32px 24px",
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        height: "1px",
                        background:
                          "linear-gradient(90deg, transparent, rgba(6,182,212,0.4) 50%, transparent)",
                        marginBottom: "24px",
                      }}
                    />
                    <div
                      className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-5"
                      style={{
                        backgroundColor: "rgba(6,182,212,0.1)",
                        border: "1px solid rgba(6,182,212,0.25)",
                        color: "#06b6d4",
                      }}
                    >
                      {col.icon}
                    </div>
                    <div
                      className="text-xs font-mono uppercase tracking-widest mb-2"
                      style={{ color: "#06b6d4" }}
                    >
                      {col.role}
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-3">{col.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{col.desc}</p>
                  </div>
                </TiltCard>

                {/* Arrow between columns */}
                {idx < lifecycleColumns.length - 1 && (
                  <div
                    className="flex-shrink-0 mx-4 my-4 md:my-0 rotate-90 md:rotate-0"
                    style={{ color: "rgba(6,182,212,0.5)" }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
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
            "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(59,130,246,0.06) 100%)",
          borderTop: "1px solid rgba(6,182,212,0.15)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Want to see the platform in action?
          </h2>
          <p className="text-text-secondary mb-8 text-lg">
            Book a demo and we&apos;ll walk you through the full security lifecycle — from posture assessment to autonomous red team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold transition-all hover:opacity-90"
            style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
          >
            Book a demo
          </Link>
        </div>
      </section>
    </div>
  );
}
