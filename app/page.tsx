"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TerminalAnimation from "@/components/TerminalAnimation";
import ParticleNetwork from "@/components/ParticleNetwork";
import StatBar from "@/components/StatBar";
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

const services = [
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
    title: "Security-by-Design Engineering",
    description:
      "Embedded security architecture for AI product teams. Threat modelling, prompt injection, model extraction, data leakage.",
    price: "Scoped per engagement",
    icon: <ShieldCheckIcon />,
  },
];

const products = [
  {
    name: "SecureForge IDP",
    tagline: "Secure by default. Compliant by design.",
    description:
      "An internal developer platform that turns SOCI Act CIRMP, ACSC Essential Eight and Cyber Security Act 2024 obligations into continuously-enforced guardrails. Golden paths, policy-as-code and a signed supply chain — compliance evidence is generated, not gathered.",
    status: "Onboarding design partners",
    href: "/products/secureforge",
    icon: <ShieldCheckIcon />,
  },
  {
    name: "Shannon Engine",
    tagline: "Prove your defences hold.",
    description:
      "An AI-driven red team that never stops. Autonomous agents rehearse full attack chains end to end — recon through exfiltration — so gaps surface on your schedule rather than an adversary's.",
    status: "Available",
    href: "/products/shannon",
    icon: <NetworkGraphIcon />,
  },
];

const ServerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2"/>
    <path d="M6 6h.01M6 18h.01"/>
    <path d="M10 6h4M10 18h4"/>
  </svg>
);

const LayersIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 2 10 6.5-10 6.5L2 8.5z"/>
    <path d="m2 15 10 6.5 10-6.5"/>
    <path d="m2 11.5 10 6.5 10-6.5"/>
  </svg>
);

const BadgeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z"/>
    <path d="M12 17v5"/>
    <path d="M9 20h6"/>
  </svg>
);

const whyAuresta = [
  {
    icon: <ServerIcon />,
    title: "Sovereign Compute",
    desc: "On-premises AI inference — your vulnerability data never leaves Australian soil. No cloud. No offshore risk.",
  },
  {
    icon: <LayersIcon />,
    title: "AI Builder Perspective",
    desc: "We've built AI-powered products across healthcare, construction, and agriculture. We know the attack surface from the inside.",
  },
  {
    icon: <BadgeIcon />,
    title: "AIGP Certified",
    desc: "AI Governance Professional certification + Essential Eight implementation experience. Compliance and security, combined.",
  },
];

const complianceItems = [
  "Essential Eight",
  "Privacy Act 1988",
  "SOCI Act",
  "APRA CPS 234",
];

const defaultShadow = "0 1px 3px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3)";
const hoverShadow = "0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(6,182,212,0.15)";

function ServiceCardInline({ svc }: { svc: { title: string; description: string; price: string; icon: React.ReactNode } }) {
  const [shadow, setShadow] = useState(defaultShadow);
  return (
    <TiltCard>
    <div
      className="relative rounded-xl p-6 flex flex-col transition-all duration-300"
      style={{
        backgroundColor: "#0f1623",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "12px",
        boxShadow: shadow,
        height: "100%",
      }}
      onMouseEnter={() => setShadow(hoverShadow)}
      onMouseLeave={() => setShadow(defaultShadow)}
    >
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4) 50%, transparent)", marginBottom: "24px", borderRadius: "1px" }} />
      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: "rgba(6,182,212,0.1)", color: "#06b6d4" }}>
        {svc.icon}
      </div>
      <h3 className="text-lg font-bold text-text-primary mb-2">{svc.title}</h3>
      <p className="text-sm text-text-secondary mb-4 leading-relaxed flex-1">{svc.description}</p>
      <div className="text-sm font-semibold mb-4" style={{ color: "#06b6d4" }}>{svc.price}</div>
      <Link href="/services" className="inline-flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: "rgba(6,182,212,0.7)" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(6,182,212,0.7)"; }}
      >
        Learn more →
      </Link>
    </div>
    </TiltCard>
  );
}

function ProductCardInline({ product }: { product: { name: string; tagline: string; description: string; status: string; href: string; icon: React.ReactNode } }) {
  const [shadow, setShadow] = useState(defaultShadow);
  return (
    <TiltCard>
    <div
      className="relative rounded-xl p-7 flex flex-col transition-all duration-300"
      style={{
        backgroundColor: "#0f1623",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "12px",
        boxShadow: shadow,
        height: "100%",
      }}
      onMouseEnter={() => setShadow(hoverShadow)}
      onMouseLeave={() => setShadow(defaultShadow)}
    >
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4) 50%, transparent)", marginBottom: "24px", borderRadius: "1px" }} />
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0" style={{ backgroundColor: "rgba(6,182,212,0.1)", color: "#06b6d4" }}>
          {product.icon}
        </div>
        <span
          className="text-xs font-mono px-2.5 py-1 rounded-full whitespace-nowrap"
          style={{ backgroundColor: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", color: "#06b6d4" }}
        >
          {product.status}
        </span>
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-1.5">{product.name}</h3>
      <p className="text-sm font-medium mb-3" style={{ color: "#06b6d4" }}>{product.tagline}</p>
      <p className="text-sm text-text-secondary mb-5 leading-relaxed flex-1">{product.description}</p>
      <Link href={product.href} className="inline-flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: "rgba(6,182,212,0.7)" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(6,182,212,0.7)"; }}
      >
        Explore {product.name} →
      </Link>
    </div>
    </TiltCard>
  );
}

function WhyCard({ item }: { item: { icon: React.ReactNode; title: string; desc: string } }) {
  const [shadow, setShadow] = useState(defaultShadow);
  return (
    <TiltCard>
    <div
      className="rounded-xl p-7 transition-all duration-300"
      style={{
        backgroundColor: "#0f1623",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "12px",
        boxShadow: shadow,
      }}
      onMouseEnter={() => setShadow(hoverShadow)}
      onMouseLeave={() => setShadow(defaultShadow)}
    >
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4) 50%, transparent)", marginBottom: "24px", borderRadius: "1px" }} />
      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: "rgba(6,182,212,0.1)", color: "#06b6d4" }}>
        {item.icon}
      </div>
      <h3 className="text-lg font-bold text-text-primary mb-3">{item.title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
    </div>
    </TiltCard>
  );
}

export default function HomePage() {
  return (
    <div className="animate-fade-in-up">
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at -5% 0%, rgba(6,182,212,0.12) 0%, transparent 60%), #080b14",
        }}
      >
        {/* Atmospheric background image — very subtle texture */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-server-room.jpg"
            alt="Server infrastructure"
            fill
            priority
            className="object-cover"
            style={{ opacity: 0.35 }}
          />
        </div>
        {/* Particle network overlay */}
        <ParticleNetwork />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full mb-6"
                style={{
                  backgroundColor: "rgba(6,182,212,0.12)",
                  border: "1px solid rgba(6,182,212,0.3)",
                  color: "#06b6d4",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "#06b6d4" }}
                />
                Sovereign Australian Compute · AIGP Certified
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-text-primary mb-6">
                <span className="shimmer-text">Sovereign</span>{" "}
                <span style={{ color: "#06b6d4" }}>Security Software</span>
                <br />
                for Australian Enterprise
              </h1>

              <p className="text-lg text-text-secondary mb-8 max-w-xl leading-relaxed">
                We build the platforms that make security continuous —
                SecureForge for SOCI and Essential Eight guardrails, Shannon
                Engine for agentic threat simulation. Australian-owned, running
                on sovereign compute.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
                >
                  Explore our products →
                </Link>
                <a
                  href="https://calendly.com/team-auresta/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm transition-all hover:bg-white/5"
                  style={{
                    border: "1px solid rgba(6,182,212,0.4)",
                    color: "#06b6d4",
                  }}
                >
                  Book a 30-minute call
                </a>
              </div>
            </div>

            {/* Right — terminal */}
            <div className="lg:pl-8">
              <TerminalAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        style={{
          backgroundColor: "#0e1421",
          borderTop: "1px solid rgba(6,182,212,0.2)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <StatBar />
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#06b6d4" }}>
              Our products
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Security platforms we build and own
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Auresta is a product company. We build sovereign security software
              for regulated Australian organisations — engineered in-house, run
              on Australian compute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {products.map((product) => (
              <ProductCardInline key={product.name} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm transition-all hover:bg-white/5"
              style={{ border: "1px solid rgba(6,182,212,0.4)", color: "#06b6d4" }}
            >
              See the full product range →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0a0f1a",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#06b6d4" }}>
              Engineering services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Get the platforms working in your estate
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Focused engagements that take teams from first assessment to
              embedded security — built on the same engineering that goes into
              our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <ServiceCardInline key={svc.title} svc={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AURESTA ── */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home-why.jpg"
            alt="Security operations"
            fill
            className="object-cover"
            style={{ opacity: 0.5 }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(14,20,33,0.82)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Why Auresta
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              We&apos;re not a traditional security firm. We&apos;re AI engineers who
              understand the threat landscape from first principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyAuresta.map((item) => (
              <WhyCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE PRESSURE ── */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cyber-lock.jpg" alt="Compliance" fill className="object-cover" style={{ opacity: 0.30 }} />
          <div className="absolute inset-0" style={{ background: "rgba(8,11,20,0.88)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            The Regulatory Clock Is Ticking
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {complianceItems.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: "rgba(6,182,212,0.12)",
                  border: "1px solid rgba(6,182,212,0.35)",
                  color: "#06b6d4",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Queensland government agencies must reach Essential Eight Level 2 by
            mid-2026. Cyber insurers are increasingly requiring baseline
            compliance proof. The cost of inaction — regulatory penalties, claim
            rejections, breach liability — now far exceeds the cost of an
            assessment.{" "}
            <span className="text-text-primary font-medium">
              Don&apos;t wait until after an incident.
            </span>
          </p>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(59,130,246,0.08) 100%)",
          borderTop: "1px solid rgba(6,182,212,0.2)",
          borderBottom: "1px solid rgba(6,182,212,0.2)",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Image src="/images/office-tech.jpg" alt="Platform walkthrough" fill className="object-cover" style={{ opacity: 0.25 }} />
          <div className="absolute inset-0" style={{ background: "rgba(8,11,20,0.88)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Ready to see it in your environment?
          </h2>
          <p className="text-text-secondary mb-8 text-lg">
            Book a 30-minute walkthrough. We&apos;ll map SecureForge and Shannon
            Engine to the obligations you actually carry, and show you what
            continuous compliance looks like in practice — no obligation, no
            sales pressure.
          </p>
          <a
            href="https://calendly.com/team-auresta/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md font-bold text-base transition-all hover:opacity-90"
            style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
          >
            Book a 30-Minute Platform Walkthrough
          </a>
        </div>
      </section>
    </div>
  );
}

