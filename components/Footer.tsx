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
            <p className="text-sm text-text-secondary leading-relaxed">
              AI-powered cybersecurity for Australian SMEs — enterprise-grade protection, built on sovereign infrastructure.
            </p>
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
