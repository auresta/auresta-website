import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{
        backgroundColor: "#080d18",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo-mark.png"
                alt="Auresta"
                width={36}
                height={36}
                style={{ mixBlendMode: "screen", filter: "brightness(1.5) contrast(1.2)", flexShrink: 0 }}
              />
              <div className="flex items-baseline leading-none pr-1">
                <span className="font-black text-white" style={{ fontSize: "17px", letterSpacing: "0.13em" }}>AURESTA</span>
                <sup className="font-bold ml-0.5 pr-0.5" style={{ color: "#06b6d4", fontSize: "9px", verticalAlign: "super" }}>AI</sup>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              AI-powered cybersecurity for Australian SMEs — enterprise-grade protection, built on sovereign infrastructure.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com/company/auresta-ai" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center rounded-md transition-all hover:opacity-80"
                style={{ width: 34, height: 34, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/auresta_ai" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center rounded-md transition-all hover:opacity-80"
                style={{ width: 34, height: 34, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://medium.com/@auresta-ai" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center rounded-md transition-all hover:opacity-80"
                style={{ width: 34, height: 34, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-widest">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-text-muted">
              <p>Auresta Pty Ltd</p>
              <p>ABN 72 690 869 820</p>
              <p>L12/350 Collins St<br />Melbourne VIC 3000</p>
              <a href="tel:+61399980428" className="hover:text-text-secondary transition-colors">(03) 9998 0428</a>
              <a href="mailto:team@auresta.com.au" className="hover:text-text-secondary transition-colors" style={{ color: "#06b6d4" }}>team@auresta.com.au</a>
            </div>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-widest">
              Products & Services
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/products" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Products</Link>
              <Link href="/products/shannon" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Shannon Engine</Link>
              <Link href="/services" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Services</Link>
              <Link href="/tools" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Security Tools</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-widest">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/about" className="text-sm text-text-muted hover:text-text-secondary transition-colors">About</Link>
              <Link href="/contact" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Contact</Link>
              <a href="https://calendly.com/team-auresta/30min" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors" style={{ color: "#06b6d4" }}>Book Assessment →</a>
              <Link href="/privacy" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs text-text-muted">
            © 2026 Auresta Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span>Australian Privacy Act 1988 Compliant</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <span>Melbourne, Australia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
