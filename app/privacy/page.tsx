export default function PrivacyPage() {
  return (
    <div className="animate-fade-in-up">
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(6,182,212,0.06) 0%, transparent 70%), #080b14",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black text-text-primary mb-2">Privacy Policy</h1>
          <p className="text-text-muted text-sm">
            Auresta AI Pty Ltd — Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mx-auto prose prose-invert"
          style={{ color: "#94a3b8", lineHeight: "1.8" }}
        >
          <div className="space-y-10">
            {/* Intro */}
            <div>
              <p>
                Auresta AI Pty Ltd (&quot;Auresta&quot;, &quot;we&quot;, &quot;us&quot;) is committed to protecting the privacy of our clients
                and website visitors. This policy is compliant with the <strong className="text-text-primary">Australian Privacy Act 1988</strong>{" "}
                (Cth) and the Australian Privacy Principles (APPs).
              </p>
            </div>

            {/* Data Classification */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">1. Data Classification</h2>
              <p>We handle client data at four classification levels:</p>
              <ul className="mt-3 space-y-2 list-none pl-0">
                {[
                  { level: "RESTRICTED", desc: "Vulnerability scan results, attack paths, security findings — highest sensitivity" },
                  { level: "CONFIDENTIAL", desc: "Client system inventories, network diagrams, business context" },
                  { level: "INTERNAL", desc: "Engagement deliverables, reports, communication records" },
                  { level: "PUBLIC", desc: "General correspondence, invoicing details, publicly available information" },
                ].map((item) => (
                  <li
                    key={item.level}
                    className="flex items-start gap-3 p-3 rounded-md"
                    style={{ backgroundColor: "#111827", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span
                      className="text-xs font-bold font-mono px-2 py-0.5 rounded flex-shrink-0"
                      style={{ backgroundColor: "rgba(6,182,212,0.15)", color: "#06b6d4" }}
                    >
                      {item.level}
                    </span>
                    <span className="text-sm">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Encryption */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">2. Encryption</h2>
              <p>
                All data is encrypted at rest using AES-256 and in transit using TLS 1.3 or higher.
                Vulnerability data, scan results, and client security artefacts are stored on sovereign
                Australian infrastructure and are never processed on offshore cloud platforms without
                explicit written consent.
              </p>
            </div>

            {/* Offshore Transfer */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">3. Offshore Data Transfer</h2>
              <p>
                We operate sovereign compute infrastructure located in Melbourne, Australia (RTX Pro 6000 Blackwell).
                All AI inference for security-related tasks runs on-premises. Vulnerability scan data, attack
                surface maps, and security reports are <strong className="text-text-primary">never transferred offshore</strong> without
                your explicit written consent. This is a core commitment, not a footnote.
              </p>
              <p className="mt-3">
                Where third-party services are used (e.g., communication platforms, project management tools),
                we ensure they meet Australian data residency standards or we obtain prior consent per APP 8.
              </p>
            </div>

            {/* Retention */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">4. Data Retention</h2>
              <div className="space-y-3">
                {[
                  { item: "Raw scan data and temporary vulnerability artefacts", retention: "30 days" },
                  { item: "Final engagement reports and deliverables", retention: "12 months" },
                  { item: "Audit trails, engagement records, and compliance evidence", retention: "7 years" },
                  { item: "Contact form and pre-sales correspondence", retention: "24 months" },
                ].map((row) => (
                  <div
                    key={row.item}
                    className="flex items-start justify-between gap-4 p-3 rounded-md"
                    style={{ backgroundColor: "#111827", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span className="text-sm">{row.item}</span>
                    <span
                      className="text-xs font-bold font-mono flex-shrink-0"
                      style={{ color: "#06b6d4" }}
                    >
                      {row.retention}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collection */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">5. Information We Collect</h2>
              <p>We collect only what is necessary to deliver our services:</p>
              <ul className="mt-3 space-y-1 list-disc pl-5 text-sm">
                <li>Contact details (name, email, phone, company) provided via our contact form or direct communication</li>
                <li>Technical information about your systems within the agreed scope of an engagement</li>
                <li>Basic usage analytics on our website (anonymised, no personal identifiers)</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            {/* Rights */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">6. Your Rights</h2>
              <p>Under the Australian Privacy Act 1988, you have the right to:</p>
              <ul className="mt-3 space-y-1 list-disc pl-5 text-sm">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or outdated information</li>
                <li>Request deletion of your data (subject to legal retention obligations)</li>
                <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:team@auresta.com.au" style={{ color: "#06b6d4" }}>
                  team@auresta.com.au
                </a>
                . We will respond within 30 days.
              </p>
            </div>

            {/* Incidents */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">7. Data Breach Notification</h2>
              <p>
                In the event of an eligible data breach under the Notifiable Data Breaches (NDB) scheme,
                we will notify affected individuals and the OAIC as required by law, typically within 30 days
                of becoming aware of the breach.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">8. Contact</h2>
              <p>
                For privacy enquiries or complaints, contact our Privacy Officer at{" "}
                <a href="mailto:team@auresta.com.au" style={{ color: "#06b6d4" }}>
                  team@auresta.com.au
                </a>{" "}
                or in writing to Auresta AI Pty Ltd, Melbourne, Victoria, Australia.
              </p>
              <p className="mt-3 text-xs text-text-muted">
                This policy may be updated periodically. Material changes will be communicated to active clients.
                The current version is always available at auresta.com.au/privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
