import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for the "use cache" directive (see src/services/home.service.ts).
  cacheComponents: true,
  images: {
    // Local, trusted SVG icon assets (e.g. public/images/mission-ias, /heritage)
    // are blocked by the optimizer by default as an XSS precaution. These are
    // ours, so allow them, locked down per Next's documented guidance.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
