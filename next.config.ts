import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/opencode-sponsor',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
