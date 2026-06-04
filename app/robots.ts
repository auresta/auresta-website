import type { MetadataRoute } from "next";

const BASE = "https://www.auresta.com.au";

// NOTE: Cloudflare currently serves a "Managed robots.txt" at the edge, which
// may take precedence over this file. To use this one, disable the managed
// robots.txt / AI-crawler feature in the Cloudflare dashboard (or replicate the
// rules there).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
