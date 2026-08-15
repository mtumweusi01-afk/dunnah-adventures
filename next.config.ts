import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every internal href in this codebase uses a trailing slash, so each
  // route exports as `path/index.html`, which GitHub Pages serves at
  // `/path/` automatically (no server-side rewrite needed).
  trailingSlash: true,

  // GitHub Pages hosts static files only — no Node server, no ISR, no API
  // routes, no image optimization endpoint. `output: "export"` makes
  // `next build` emit a plain static `out/` directory.
  output: "export",

  // No <Image> optimization server exists under static export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
