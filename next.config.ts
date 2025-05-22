import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    authInterrupts: true,
  },
  images: {
    domains: ["media.istockphoto.com"],
  },
};

export default nextConfig;
