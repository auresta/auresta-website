import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Auresta AI",
  description:
    "Terms of Service governing the use of the Auresta AI website and the cybersecurity services provided by Auresta AI Pty Ltd.",
};

export default function TermsPage() {
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
          <h1 className="text-4xl font-black text-text-primary mb-2">Terms of Service</h1>
          <p className="text-text-muted text-sm">
            Auresta AI Pty Ltd — Last updated: June 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mx-auto prose prose-invert"
          style={{ color: "#94a3b8", lineHeight: "1.8" }}
        >
          <div className="space-y-10">
            <div>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website at
                auresta.com.au and any cybersecurity services provided by{" "}
                <strong className="text-text-primary">Auresta AI Pty Ltd</strong> (&quot;Auresta&quot;,
                &quot;we&quot;, &quot;us&quot;). By accessing this website or engaging our services, you agree
                to these Terms. If you do not agree, please do not use the site or our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">1. Use of This Website</h2>
              <p>
                This website is provided for general information about our services. You agree not to use it
                to:
              </p>
              <ul className="mt-3 space-y-1 list-disc pl-5 text-sm">
                <li>Attempt to gain unauthorised access to any part of the site, its infrastructure, or connected systems</li>
                <li>Probe, scan, or test the vulnerability of the site without our prior written authorisation</li>
                <li>Interfere with the availability of the site (including denial-of-service activity)</li>
                <li>Submit false, misleading, or unlawful information via our forms</li>
              </ul>
              <p className="mt-3">
                Responsible disclosure of security issues is welcome — see our{" "}
                <a href="/.well-known/security.txt" style={{ color: "#06b6d4" }}>security.txt</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">2. Services and Engagements</h2>
              <p>
                Any cybersecurity services we provide — including Essential Eight assessments, security
                consulting, threat simulation, and related work — are governed by a separate written
                engagement agreement, statement of work, or proposal (&quot;Engagement Terms&quot;). Where
                these Terms conflict with the Engagement Terms, the Engagement Terms prevail for that
                engagement.
              </p>
              <p className="mt-3">
                All testing, scanning, and assessment activity is performed only within an explicitly agreed
                scope and only with your authorisation. We do not conduct security testing against any system
                without written permission from its owner.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">3. Bookings and Enquiries</h2>
              <p>
                Submitting an enquiry, booking a free assessment, or requesting product early access does not
                create a binding contract for services. It is an expression of interest that we will respond
                to. We reserve the right to decline any enquiry or engagement at our discretion. Information
                you submit is handled in accordance with our{" "}
                <a href="/privacy" style={{ color: "#06b6d4" }}>Privacy Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">4. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, and the Auresta and Shannon
                names and marks — is owned by or licensed to Auresta and is protected by applicable
                intellectual property laws. You may not reproduce, distribute, or create derivative works from
                this content without our prior written consent. Deliverables produced during an engagement are
                governed by the relevant Engagement Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">5. Disclaimers</h2>
              <p>
                This website and its content are provided on an &quot;as is&quot; and &quot;as available&quot;
                basis without warranties of any kind, whether express or implied, to the maximum extent
                permitted by law. Information on this site is general in nature and does not constitute
                professional security, legal, or compliance advice. No security service can guarantee complete
                protection against all threats; our services reduce risk but do not eliminate it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">6. Australian Consumer Law</h2>
              <p>
                Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or
                remedy conferred by the <strong className="text-text-primary">Competition and Consumer Act 2010</strong> (Cth)
                (including the Australian Consumer Law) or any other law that cannot lawfully be excluded. Where
                our liability can be limited, it is limited — at our option — to resupplying the relevant
                services or paying the cost of having them resupplied.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Auresta is not liable for any indirect, incidental,
                special, or consequential loss, or any loss of profits, revenue, data, or goodwill, arising
                out of or in connection with your use of this website. Liability arising from a specific
                engagement is governed by the relevant Engagement Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">8. Third-Party Links</h2>
              <p>
                This site links to third-party services (for example, our scheduling provider). We are not
                responsible for the content, policies, or practices of third-party websites. Your use of those
                services is governed by their own terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">9. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. The current version is always available at
                auresta.com.au/terms. Your continued use of the website after changes are posted constitutes
                acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Victoria, Australia. You submit to the
                non-exclusive jurisdiction of the courts of Victoria and the Commonwealth of Australia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">11. Contact</h2>
              <p>
                Questions about these Terms can be directed to{" "}
                <a href="mailto:team@auresta.com.au" style={{ color: "#06b6d4" }}>
                  team@auresta.com.au
                </a>{" "}
                or in writing to Auresta AI Pty Ltd, Melbourne, Victoria, Australia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
