/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

// Content-Security-Policy.
//  - 'unsafe-inline' (script) is required by Next.js's inline bootstrap/runtime
//    scripts and by Cloudflare's same-origin email-decode snippet.
//  - 'unsafe-inline' (style) is required by the site's inline `style={{…}}` usage.
//  - 'unsafe-eval' is only needed by the dev HMR runtime, so it is scoped to dev.
//  - fonts.googleapis.com / fonts.gstatic.com are required by the Google Fonts
//    @import in app/globals.css (Inter + JetBrains Mono).
const csp = [
  `default-src 'self'`,
  `base-uri 'self'`,
  `object-src 'none'`,
  `frame-ancestors 'none'`,
  `form-action 'self'`,
  `img-src 'self' data: blob:`,
  `font-src 'self' data: https://fonts.gstatic.com`,
  `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  `upgrade-insecure-requests`,
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // HSTS: 2 years + subdomains + preload. NOTE: `preload` is a long-term
  // commitment — every auresta.com.au subdomain must serve valid HTTPS. Drop
  // `preload` if that is ever not true. If HSTS is also set at Cloudflare,
  // confirm there is no duplicate header after deploy.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig = {
  reactStrictMode: true,
  // Strip the `X-Powered-By: Next.js` fingerprint.
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
