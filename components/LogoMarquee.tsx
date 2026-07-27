/* eslint-disable @next/next/no-img-element */
"use client";

// Self-hosted SVG logos (public/images/logos) — required by the site CSP
// (img-src 'self'); external logo CDNs are blocked at runtime.
const logos = [
  { src: "/images/logos/kubernetes.svg", alt: "Kubernetes" },
  { src: "/images/logos/backstage.svg", alt: "Backstage" },
  { src: "/images/logos/crossplane.svg", alt: "Crossplane" },
  { src: "/images/logos/opa.svg", alt: "Open Policy Agent" },
  { src: "/images/logos/kyverno.svg", alt: "Kyverno" },
  { src: "/images/logos/sigstore.svg", alt: "Sigstore" },
  { src: "/images/logos/istio.svg", alt: "Istio" },
  { src: "/images/logos/falco.svg", alt: "Falco" },
  { src: "/images/logos/trivy.svg", alt: "Trivy" },
  { src: "/images/logos/vault.svg", alt: "HashiCorp Vault" },
  { src: "/images/logos/argocd.svg", alt: "Argo CD" },
];

export default function LogoMarquee() {
  // Two copies back-to-back → the -50% keyframe loops seamlessly.
  const track = [...logos, ...logos];
  return (
    <div className="logo-marquee" role="group" aria-label="Open-source components SecureForge is built on">
      <div className="logo-marquee-track">
        {track.map((logo, i) => {
          const dup = i >= logos.length;
          return (
            <div className="logo-marquee-item" key={i} aria-hidden={dup ? true : undefined}>
              <img src={logo.src} alt={dup ? "" : logo.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
