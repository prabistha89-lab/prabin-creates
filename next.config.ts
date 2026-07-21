import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vinext's local image optimisation endpoint does not currently serve this
  // project's local portrait reliably. Direct static delivery preserves
  // responsive sizing while preventing broken profile images.
  images: {
    unoptimized: true,
  },
  typescript: {
    tsconfigPath: "tsconfig.vercel.json",
  },
};

export default nextConfig;
