"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const E8Icon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/>
    <path d="M9 12h6M9 16h4"/>
  </svg>
);

const ScannerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
    <path d="M3 12h18"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const InsuranceIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const InjectionIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 6 4-4 4 4"/>
    <path d="M12 2v10.3"/>
    <path d="M4 12.6c0 4.1 3.5 7.4 8 7.4s8-3.3 8-7.4"/>
    <path d="M9 16h6"/>
  </svg>
);

const AiAnalystIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8"/>
    <rect x="4" y="4" width="16" height="12" rx="2"/>
    <path d="M2 20h20"/>
    <path d="M9 20v-2M15 20v-2"/>
    <circle cx="12" cy="10" r="2"/>
    <path d="M9 14s.5-1.5 3-1.5 3 1.5 3 1.5"/>
  </svg>
);

const tools = [
  {
    icon: <E8Icon />,
    title: "Essential Eight Assessor",
    desc: "Answer 40 questions and get your Essential Eight maturity score instantly — with a prioritised gap report and board-ready PDF.",
  },
  {
    icon: <ScannerIcon />,
    title: "AI Posture Scanner",
    desc: "Passive scan of your public attack surface — DNS, SSL, email config, exposed services. No credentials required.",
  },
  {
    icon: <InsuranceIcon />,
    title: "Cyber Insurance Readiness Checker",
    desc: "Map your security controls against AU insurer requirements. Know your gaps before your next renewal.",
  },
  {
    icon: <InjectionIcon />,
    title: "Prompt Injection Tester",
    desc: "Test your LLM API endpoint against 50+ injection attack patterns. For teams shipping AI-powered products.",
  },
  {
    icon: <AiAnalystIcon />,
    title: "Shannon — AI Security Analyst",
    desc: "Ask our AI security analyst anything — CVEs, Essential Eight, incident response, compliance. Powered by sovereign compute.",
  },
];

const defaultShadow = "0 1px 3px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3)";
const hoverShadow = "0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(6,182,212,0.15)";

function ToolCard({ tool }: { tool: typeof tools[0] }) {
  const [shadow, setShadow] = useState(defaultShadow);

  return (
    <div
      className="relative rounded-xl p-6 flex flex-col transition-all duration-300"
      style={{
        backgroundColor: "#0f1623",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "12px",
        boxShadow: shadow,
      }}
      onMouseEnter={() => setShadow(hoverShadow)}
      onMouseLeave={() => setShadow(defaultShadow)}
    >
      {/* Top accent line */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4) 50%, transparent)",
          marginBottom: "24px",
          borderRadius: "1px",
        }}
      />

      <div className="flex items-start justify-between gap-3 mb-4">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
          style={{ backgroundColor: "rgba(6,182,212,0.1)", color: "#06b6d4" }}
        >
          {tool.icon}
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
          style={{
            backgroundColor: "rgba(6,182,212,0.15)",
            color: "#06b6d4",
          }}
        >
          Coming Soon
        </span>
      </div>

      <h3 className="text-lg font-bold text-text-primary mb-2">{tool.title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed flex-1">{tool.desc}</p>
    </div>
  );
}

export default function ToolsPage() {
  return (
    <div className="animate-fade-in-up">
      {/* ── HERO ── */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tools-hero.jpg"
            alt="Security tools"
            fill
            priority
            className="object-cover"
            style={{ opacity: 0.20 }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(8,11,20,0.88)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full mb-6"
            style={{
              backgroundColor: "rgba(6,182,212,0.12)",
              border: "1px solid rgba(6,182,212,0.3)",
              color: "#06b6d4",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#06b6d4" }}
            />
            Free to use · No account required
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-text-primary mb-6">
            Security <span style={{ color: "#06b6d4" }}>Tools</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            AI-powered security tools built for Australian businesses. Free to use. No account required.
          </p>
        </div>
      </section>

      {/* ── TOOLS GRID ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.title} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(59,130,246,0.08) 100%)",
          borderTop: "1px solid rgba(6,182,212,0.2)",
          borderBottom: "1px solid rgba(6,182,212,0.2)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Want the full picture?
          </h2>
          <p className="text-text-secondary mb-8 text-lg">
            Book a free 30-minute assessment with our team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md font-bold text-base transition-all hover:opacity-90"
            style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
          >
            Book a Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
