import Link from "next/link";
import TerminalAnimation from "@/components/TerminalAnimation";

const stats = [
  { value: "USD 10B+", label: "AU Cybersecurity Market" },
  { value: "Every 6 Min", label: "Cybercrime Reported in AU" },
  { value: "30,000", label: "Security Professional Shortage" },
  { value: "~$46K", label: "Average SME Incident Cost" },
];

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

const whyAuresta = [
  {
    icon: "🖥️",
    title: "Sovereign Compute",
    desc: "RTX Pro 6000 Blackwell on-premises inference — your vulnerability data never leaves Australian soil. No cloud. No offshore risk.",
  },
  {
    icon: "🧱",
    title: "AI Builder Perspective",
    desc: "We've built AI-powered products across healthcare, construction, and agriculture. We know the attack surface from the inside.",
  },
  {
    icon: "🏅",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
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
                AI-Powered{" "}
                <span style={{ color: "#06b6d4" }}>Cybersecurity</span>
                <br />
                for Australian Business
              </h1>

              <p className="text-lg text-text-secondary mb-8 max-w-xl leading-relaxed">
                Enterprise-grade protection at SME price points — powered by
                frontier AI models and sovereign Australian compute.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
                >
                  Book a Free Assessment
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm transition-all hover:bg-white/5"
                  style={{
                    border: "1px solid rgba(6,182,212,0.4)",
                    color: "#06b6d4",
                  }}
                >
                  View Services →
                </Link>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-black mb-1"
                  style={{ color: "#06b6d4" }}
                >
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              What We Do
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Three integrated offerings designed to protect, test, and advise —
              from first audit to embedded security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="relative rounded-lg p-6 service-card"
                style={{
                  backgroundColor: "#111827",
                  borderLeft: "3px solid #06b6d4",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeftWidth: "3px",
                  borderLeftColor: "#06b6d4",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
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
                  className="inline-flex items-center gap-1 text-sm font-medium learn-more-link"
                  style={{ color: "rgba(6,182,212,0.7)" }}
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AURESTA ── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#0e1421" }}
      >
        <div className="max-w-7xl mx-auto">
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
              <div
                key={item.title}
                className="rounded-lg p-7"
                style={{
                  backgroundColor: "#141c2e",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE PRESSURE ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
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
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(59,130,246,0.08) 100%)",
          borderTop: "1px solid rgba(6,182,212,0.2)",
          borderBottom: "1px solid rgba(6,182,212,0.2)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Ready to know where you stand?
          </h2>
          <p className="text-text-secondary mb-8 text-lg">
            Book a free 30-minute security assessment. No obligation, no sales
            pressure — just an honest baseline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md font-bold text-base transition-all hover:opacity-90"
            style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
          >
            Book a Free 30-Minute Security Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
