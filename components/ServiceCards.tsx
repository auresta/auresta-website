"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useState } from "react";
import TiltCard from "@/components/TiltCard";

const MagnifyingGlassIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
    <path d="M8 11h6"/>
    <path d="M11 8v6"/>
    <path d="M7 7l1 1M15 7l-1 1M7 15l1-1M15 15l-1-1"/>
  </svg>
);

const NetworkGraphIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2"/>
    <circle cx="4" cy="6" r="2"/>
    <circle cx="20" cy="6" r="2"/>
    <circle cx="4" cy="18" r="2"/>
    <circle cx="20" cy="18" r="2"/>
    <path d="M6 6.5 10.5 11M17.5 6.5 13.5 11M6 17.5l4.5-4.5M17.5 17.5 13.5 13"/>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const services: { title: string; description: string; price: string; icon: ReactNode }[] = [
  {
    title: "AI Security Auditing",
    description:
      "Essential Eight maturity assessment + AI-augmented vulnerability scanning. Board-ready reports with cyber insurance evidence.",
    price: "From $3,500",
    icon: <MagnifyingGlassIcon />,
  },
  {
    title: "Agentic Threat Simulation",
    description:
      "Autonomous AI agents simulate full attack chains end-to-end — from recon to data exfiltration. Finds what scanners miss.",
    price: "From $15,000",
    icon: <NetworkGraphIcon />,
  },
  {
    title: "Security-by-Design Consulting",
    description:
      "Embedded security architecture for AI product teams. Threat modelling, prompt injection, model extraction, data leakage.",
    price: "From $250/hr",
    icon: <ShieldCheckIcon />,
  },
];

const defaultShadow = "0 1px 3px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3)";
const hoverShadow = "0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(6,182,212,0.15)";

function ServiceCard({ svc }: { svc: typeof services[0] }) {
  const [shadow, setShadow] = useState(defaultShadow);

  return (
    <TiltCard>
    <div
      className="relative rounded-xl p-6 transition-all duration-300 flex flex-col"
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
      <div
        className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg"
        style={{ backgroundColor: "rgba(6,182,212,0.1)", color: "#06b6d4" }}
      >
        {svc.icon}
      </div>
      <h3 className="text-lg font-bold text-text-primary mb-2">
        {svc.title}
      </h3>
      <p className="text-sm text-text-secondary mb-4 leading-relaxed flex-1">
        {svc.description}
      </p>
      <div
        className="text-sm font-semibold mb-4"
        style={{ color: "#06b6d4" }}
      >
        {svc.price}
      </div>
      <Link
        href="/services"
        className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
        style={{ color: "rgba(6,182,212,0.7)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "rgba(6,182,212,0.7)";
        }}
      >
        Learn more →
      </Link>
    </div>
    </TiltCard>
  );
}

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((svc) => (
        <ServiceCard key={svc.title} svc={svc} />
      ))}
    </div>
  );
}
