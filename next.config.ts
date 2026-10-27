import type { NextConfig } from "next";

const longCache = [
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable",
  },
];

const nextConfig: NextConfig = {
  // Hostinger Node hosting runs standalone (not static export). Explicit standalone
  // also lets `headers()` apply — required to fix the 4h browser-cache PSI issue.
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: longCache,
      },
      {
        source: "/images/:path*",
        headers: longCache,
      },
      {
        source: "/icon.png",
        headers: longCache,
      },
      {
        source: "/:path*\\.(js|css|woff2|woff|ttf|otf|eot|webp|avif|jpg|jpeg|png|gif|svg|ico)",
        headers: longCache,
      },
    ];
  },
};

export default nextConfig;
