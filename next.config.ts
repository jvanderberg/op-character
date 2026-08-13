import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? "/op-character" : undefined,
  assetPrefix: process.env.GITHUB_ACTIONS ? "/op-character" : undefined,
};

export default nextConfig;
