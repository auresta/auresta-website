import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseTrail from "@/components/MouseTrail";

// Fonts are fetched at build time and served from our own origin, so there is
// no runtime request to fonts.googleapis.com / fonts.gstatic.com. That keeps
// visitor IPs off Google, removes a render-blocking round trip the old CSS
// @import cost us, and lets the CSP drop both Google origins.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Auresta AI — Sovereign Security Software for Australian Enterprise",
  description:
    "Auresta builds sovereign AI-security products: SecureForge IDP for continuously-enforced SOCI and Essential Eight compliance, and Shannon Engine for agentic threat simulation — running on Australian compute.",
  keywords: [
    "SecureForge",
    "internal developer platform",
    "Shannon Engine",
    "security software",
    "Essential Eight",
    "SOCI Act",
    "AI security",
    "sovereign Australian compute",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg-primary text-text-primary font-inter min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MouseTrail />
      </body>
    </html>
  );
}
