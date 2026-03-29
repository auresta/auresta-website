"use client";

import Link from "next/link";

const services = [
  {
    title: "AI Security Auditing",
    description:
      "Essential Eight maturity assessment + AI-augmented vulnerability scanning. Board-ready reports with cyber insurance evidence.",
    price: "From $3,500",
    icon: "🔍",
  },
  {
    title: "Agentic Threat Simulation",
    description:
      "Autonomous AI agents simulate full attack chains end-to-end — from recon to data exfiltration. Finds what scanners miss.",
    price: "From $15,000",
    icon: "🤖",
  },
  {
    title: "Security-by-Design Consulting",
    description:
      "Embedded security architecture for AI product teams. Threat modelling, prompt injection, model extraction, data leakage.",
    price: "From $250/hr",
    icon: "🛡️",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((svc) => (
        <div
          key={svc.title}
          className="relative rounded-lg p-6 transition-all duration-300 hover:shadow-cyan"
          style={{
            backgroundColor: "#111827",
            borderLeft: "3px solid #06b6d4",
            border: "1px solid rgba(255,255,255,0.08)",
            borderLeftWidth: "3px",
            borderLeftColor: "#06b6d4",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "0 0 32px rgba(6,182,212,0.2), 0 4px 24px rgba(0,0,0,0.4)";
            (e.currentTarget as HTMLDivElement).style.borderColor =
              "rgba(6,182,212,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "0 4px 24px rgba(0,0,0,0.3)";
            (e.currentTarget as HTMLDivElement).style.borderColor =
              "rgba(255,255,255,0.08)";
          }}
        >
          <div className="text-3xl mb-4">{svc.icon}</div>
          <h3 className="text-lg font-bold text-text-primary mb-2">
            {svc.title}
          </h3>
          <p className="text-sm text-text-secondary mb-4 leading-relaxed">
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
              (e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(6,182,212,0.7)";
            }}
          >
            Learn more →
          </Link>
        </div>
      ))}
    </div>
  );
}
