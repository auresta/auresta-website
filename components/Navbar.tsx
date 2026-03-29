"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(8, 11, 20, 0.95)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center rounded-lg px-2 py-1.5"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            {/* Icon */}
            <Image
              src="/images/logo-mark.png"
              alt="Auresta"
              width={36}
              height={36}
              style={{ mixBlendMode: "screen", filter: "brightness(1.5) contrast(1.2)", flexShrink: 0 }}
            />
            {/* Wordmark — no gap */}
            <div className="flex items-baseline leading-none pr-1">
              <span
                className="font-black text-white"
                style={{ fontSize: "17px", letterSpacing: "0.13em" }}
              >
                AURESTA
              </span>
              <sup
                className="font-bold ml-0.5 pr-0.5"
                style={{ color: "#06b6d4", fontSize: "9px", verticalAlign: "super" }}
              >
                AI
              </sup>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/services"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/tools"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/about"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://calendly.com/team-auresta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-4 py-2 rounded-md transition-all navbar-cta"
              style={{
                backgroundColor: "#06b6d4",
                color: "#080b14",
              }}
            >
              Book Assessment
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-secondary hover:text-text-primary p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/products"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors px-2"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/services"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors px-2"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/tools"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors px-2"
                onClick={() => setMenuOpen(false)}
              >
                Tools
              </Link>
              <Link
                href="/about"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors px-2"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors px-2"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://calendly.com/team-auresta/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-4 py-2 rounded-md text-center mx-2"
                style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
                onClick={() => setMenuOpen(false)}
              >
                Book Assessment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
