import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{
        backgroundColor: "#0e1421",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-0.5 mb-3">
              <span className="text-lg font-bold tracking-wider text-text-primary">
                AURESTA
              </span>
              <sup className="text-xs font-bold ml-0.5" style={{ color: "#06b6d4" }}>
                AI
              </sup>
            </div>
            <p className="text-sm text-text-muted mb-2">Auresta AI Pty Ltd</p>
            <p className="text-sm text-text-muted mb-2">ABN: [Pending Registration]</p>
            <p className="text-sm" style={{ color: "#06b6d4" }}>
              🇦🇺 Australian Owned &amp; Operated
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wide">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/services"
                className="text-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wide">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:team@auresta.com.au"
                className="text-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                team@auresta.com.au
              </a>
              <p className="text-sm text-text-muted">Melbourne, Australia</p>
              <p className="text-sm text-text-muted">
                On-site: Melbourne &amp; Sydney
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-sm text-text-muted">
            © 2026 Auresta AI Pty Ltd. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Australian Privacy Act 1988 Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
