"use client";

import Link from "next/link";
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
          <Link href="/" className="flex items-baseline gap-0.5 group">
            <span
              className="text-xl font-bold tracking-wider text-text-primary group-hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AURESTA
            </span>
            <sup
              className="text-xs font-bold ml-0.5"
              style={{ color: "#06b6d4" }}
            >
              AI
            </sup>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
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
            <Link
              href="/contact"
              className="text-sm font-semibold px-4 py-2 rounded-md transition-all navbar-cta"
              style={{
                backgroundColor: "#06b6d4",
                color: "#080b14",
              }}
            >
              Book Assessment
            </Link>
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
              <Link
                href="/contact"
                className="text-sm font-semibold px-4 py-2 rounded-md text-center mx-2"
                style={{ backgroundColor: "#06b6d4", color: "#080b14" }}
                onClick={() => setMenuOpen(false)}
              >
                Book Assessment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
