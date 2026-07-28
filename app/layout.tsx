import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseTrail from "@/components/MouseTrail";

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
    <html lang="en" className="dark">
      <body className="bg-bg-primary text-text-primary font-inter min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MouseTrail />
      </body>
    </html>
  );
}
