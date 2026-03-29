import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseTrail from "@/components/MouseTrail";

export const metadata: Metadata = {
  title: "Auresta AI — AI-Powered Cybersecurity for Australian Business",
  description:
    "Enterprise-grade cybersecurity at SME price points. Essential Eight assessments, agentic threat simulation, and security-by-design consulting — powered by frontier AI models and sovereign Australian compute.",
  keywords: [
    "cybersecurity",
    "Essential Eight",
    "AI security",
    "Australian SME",
    "penetration testing",
    "security audit",
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
