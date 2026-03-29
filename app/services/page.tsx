import Link from "next/link";
import Image from "next/image";

const verticals = ["Healthcare", "Construction & Engineering", "Agriculture", "Professional Services"];

export default function ServicesPage() {
  return (
    <div className="animate-fade-in-up">
      {/* Header */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Cybersecurity services"
            fill
            priority
            className="object-cover"
            style={{ opacity: 0.22 }}
          />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 70%), rgba(8,11,20,0.85)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-text-primary mb-4">
            Our Services
          </h1>
          <p className="text-lg text-text-secondary">
            Three integrated offerings designed to protect, test, and advise.
          </p>
        </div>
      </section>

      {/* ── SERVICE 1: AI SECURITY AUDITING ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                style={{ backgroundColor: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)" }}
              >
                🔍
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "#06b6d4" }}>
                  Service 01
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                  AI Security Auditing
                </h2>
              </div>
            </div>
            <p className="text-text-secondary max-w-2xl leading-relaxed">
              A structured, three-tier assessment path from baseline compliance to continuous managed security. Each tier
              builds on the last, giving you a clear roadmap to cyber resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div
              className="rounded-lg p-7"
              style={{
                backgroundColor: "#111827",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "3px solid #06b6d4",
                boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
              }}
            >
              <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "rgba(6,182,212,0.6)" }}>
                Tier 1
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-1">Baseline Assessment</h3>
              <div className="text-xl font-black mb-4" style={{ color: "#06b6d4" }}>
                $3,500 – $5,000
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#06b6d4" }}>✓</span>
                  Essential Eight scorecard
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#06b6d4" }}>✓</span>
                  Gap analysis with remediation priorities
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#06b6d4" }}>✓</span>
                  Board-ready executive summary
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#06b6d4" }}>✓</span>
                  Cyber insurance readiness statement
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <p className="text-xs text-text-muted">Best for: First assessment, insurance application, board reporting</p>
              </div>
            </div>

            {/* Tier 2 */}
            <div
              className="rounded-lg p-7 relative"
              style={{
                backgroundColor: "#141c2e",
                border: "1px solid rgba(6,182,212,0.3)",
                borderTop: "3px solid #06b6d4",
                boxShadow: "0 0 32px rgba(6,182,212,0.1), 0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full"
                style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
              >
                Most Popular
              </div>
              <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "rgba(6,182,212,0.6)" }}>
                Tier 2
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-1">AI-Augmented Vulnerability Assessment</h3>
              <div className="text-xl font-black mb-4" style={{ color: "#06b6d4" }}>
                $8,000 – $15,000
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#06b6d4" }}>✓</span>
                  Everything in Tier 1
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#06b6d4" }}>✓</span>
                  AI-driven attack path analysis
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#06b6d4" }}>✓</span>
                  Correlated multi-tool vulnerability results
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#06b6d4" }}>✓</span>
                  Business-impact severity ratings
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#06b6d4" }}>✓</span>
                  Remediation roadmap with cost estimates
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t" style={{ borderColor: "rgba(6,182,212,0.15)" }}>
                <p className="text-xs text-text-muted">Best for: Organisations facing insurer scrutiny or post-incident review</p>
              </div>
            </div>

            {/* Tier 3 */}
            <div
              className="rounded-lg p-7"
              style={{
                backgroundColor: "#111827",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "3px solid #3b82f6",
                boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
              }}
            >
              <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "rgba(59,130,246,0.7)" }}>
                Tier 3
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-1">Managed Security Posture</h3>
              <div className="text-xl font-black mb-4" style={{ color: "#3b82f6" }}>
                $2,500 – $5,000/month
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#3b82f6" }}>✓</span>
                  Monthly security posture reports
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#3b82f6" }}>✓</span>
                  Continuous monitoring alerts
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#3b82f6" }}>✓</span>
                  Quarterly Essential Eight re-assessment
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#3b82f6" }}>✓</span>
                  Annual insurance evidence package
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#3b82f6" }}>✓</span>
                  Priority incident response support
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <p className="text-xs text-text-muted">Best for: Ongoing compliance, regulated industries, APRA/SOCI entities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE DIVIDER BANNER ── */}
      <div className="relative w-full my-4 overflow-hidden" style={{ height: "200px" }}>
        <Image
          src="/images/network-nodes.jpg"
          alt="Network security"
          fill
          className="object-cover"
          style={{ opacity: 0.3 }}
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, #080b14 0%, transparent 30%, transparent 70%, #080b14 100%)"
        }} />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <p className="text-lg font-semibold" style={{ color: "#94a3b8" }}>
            &ldquo;AI-powered adversaries don&apos;t work business hours. Neither do we.&rdquo;
          </p>
        </div>
      </div>

      {/* ── SERVICE 2: AGENTIC THREAT SIMULATION ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0e1421" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{ backgroundColor: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)" }}
                >
                  🤖
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "#06b6d4" }}>
                    Service 02
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                    Agentic Threat Simulation
                  </h2>
                </div>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                Autonomous AI agents run the full attack lifecycle against your environment — the same way a real adversary would.
                No scripts, no playbooks. Adaptive, chained, relentless.
              </p>

              <div
                className="rounded-lg p-6 mb-6"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid rgba(6,182,212,0.2)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                }}
              >
                <h4 className="text-sm font-bold text-text-primary mb-3">What the AI agents cover:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "External reconnaissance",
                    "Initial access attempts",
                    "Lateral movement mapping",
                    "Privilege escalation chains",
                    "Data exfiltration simulation",
                    "Persistence mechanism testing",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span style={{ color: "#06b6d4" }}>›</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-lg p-5"
                style={{
                  backgroundColor: "rgba(6,182,212,0.08)",
                  border: "1px solid rgba(6,182,212,0.2)",
                }}
              >
                <p className="text-sm font-mono" style={{ color: "#06b6d4" }}>
                  💡 DARPA research found AI agents discovered real zero-days at{" "}
                  <strong>$152 per finding</strong> — vs $15,000–$50,000 for traditional penetration testing.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-text-primary mb-6">4-Phase Engagement</h3>

              <div className="space-y-4">
                {[
                  {
                    phase: "01",
                    title: "Scoping & Authorisation",
                    desc: "Define scope, sign rules of engagement, establish communication protocols and emergency stop procedures.",
                  },
                  {
                    phase: "02",
                    title: "Passive Reconnaissance",
                    desc: "AI agents map your external footprint — OSINT, domain enumeration, technology fingerprinting, exposed credentials.",
                  },
                  {
                    phase: "03",
                    title: "Active Simulation",
                    desc: "Autonomous agents attempt attack chains within authorised scope. No manual scripting — adaptive AI decision-making throughout.",
                  },
                  {
                    phase: "04",
                    title: "Reporting & Debrief",
                    desc: "Full attack narrative, evidence chain, CVSS-rated findings, business impact, and prioritised remediation. Board and technical versions.",
                  },
                ].map((p) => (
                  <div
                    key={p.phase}
                    className="flex gap-4 p-5 rounded-lg"
                    style={{
                      backgroundColor: "#111827",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
                    }}
                  >
                    <div
                      className="text-2xl font-black flex-shrink-0 font-mono"
                      style={{ color: "rgba(6,182,212,0.3)" }}
                    >
                      {p.phase}
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">{p.title}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 p-4 rounded-lg flex items-center justify-between"
                style={{
                  backgroundColor: "#141c2e",
                  border: "1px solid rgba(6,182,212,0.25)",
                }}
              >
                <div>
                  <p className="text-sm text-text-secondary">Per engagement</p>
                  <p className="text-2xl font-black" style={{ color: "#06b6d4" }}>
                    From $15,000
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-md font-semibold text-sm"
                  style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner 2 */}
      <div className="relative w-full my-4 overflow-hidden" style={{ height: "180px" }}>
        <Image
          src="/images/services-consulting.jpg"
          alt="Security consulting"
          fill
          className="object-cover"
          style={{ opacity: 0.25 }}
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, #080b14 0%, transparent 30%, transparent 70%, #080b14 100%)"
        }} />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <p className="text-lg font-semibold" style={{ color: "#94a3b8" }}>
            &ldquo;Security isn&apos;t a feature. It&apos;s the foundation.&rdquo;
          </p>
        </div>
      </div>

      {/* ── SERVICE 3: SECURITY BY DESIGN ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
              style={{ backgroundColor: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)" }}
            >
              🛡️
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "#06b6d4" }}>
                Service 03
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                Security-by-Design Consulting
              </h2>
            </div>
          </div>

          <p className="text-text-secondary mb-10 max-w-2xl leading-relaxed">
            Security built into your product from day one — not bolted on after the fact. Especially critical for
            AI-powered products where the attack surface includes prompt injection, model extraction, and data leakage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Architecture Security Review",
                price: "$5,000 – $12,000",
                items: [
                  "Full system threat model (STRIDE framework)",
                  "AI-specific attack surface mapping",
                  "Prompt injection vulnerability analysis",
                  "Model extraction & data leakage assessment",
                  "Security control recommendations",
                ],
              },
              {
                title: "Embedded Security Architect",
                price: "$8,000 – $15,000/month",
                items: [
                  "Fractional Chief Security Architect",
                  "Embedded with your development team",
                  "Architecture decisions review",
                  "Security-first code review guidance",
                  "Incident response standby",
                ],
              },
              {
                title: "AI Product Security Playbook",
                price: "$8,000 – $15,000",
                items: [
                  "LLM security lifecycle documentation",
                  "Red-teaming playbook for your AI stack",
                  "Input/output validation controls",
                  "Model governance framework",
                  "Ongoing update protocol",
                ],
              },
              {
                title: "Cross-Border Data Compliance",
                price: "$5,000 – $8,000",
                items: [
                  "APP 8 cross-border disclosure analysis",
                  "Data residency mapping",
                  "Third-party data processor review",
                  "Privacy impact assessment",
                  "Compliance evidence package",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg p-7"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <h3 className="text-lg font-bold text-text-primary mb-1">{item.title}</h3>
                <p className="text-base font-semibold mb-4" style={{ color: "#06b6d4" }}>
                  {item.price}
                </p>
                <ul className="space-y-2">
                  {item.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span style={{ color: "#06b6d4", flexShrink: 0 }}>✓</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARGET VERTICALS ── */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0e1421",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-lg font-bold text-text-primary mb-6 text-center">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {verticals.map((v) => (
              <span
                key={v}
                className="px-5 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "#141c2e",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(59,130,246,0.06) 100%)",
          borderTop: "1px solid rgba(6,182,212,0.15)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Not sure which service fits?
          </h2>
          <p className="text-text-secondary mb-8">
            Start with a free 30-minute assessment. We&apos;ll map your Essential Eight baseline and recommend a clear path forward.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md font-bold transition-all hover:opacity-90"
            style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
          >
            Book Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
