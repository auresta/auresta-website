import type { Metadata } from "next";
import SecureForgeContent from "./SecureForgeContent";

export const metadata: Metadata = {
  title: "SecureForge IDP — Secure by default. Compliant by design. | Auresta",
  description:
    "SecureForge is an internal developer platform that turns Australia's security-compliance obligations — SOCI Act CIRMP, ACSC Essential Eight, the Cyber Security Act 2024 — into continuously-enforced, developer-friendly guardrails. Any-cloud, sovereign, CNCF-native.",
  alternates: { canonical: "/products/secureforge" },
  openGraph: {
    title: "SecureForge IDP — Secure by default. Compliant by design.",
    description:
      "Turn Australia's toughest security-compliance obligations into continuously-enforced, developer-friendly guardrails. Ship fast, stay compliant, prove it on demand.",
    url: "/products/secureforge",
    type: "website",
  },
};

export default function SecureForgePage() {
  return <SecureForgeContent />;
}
