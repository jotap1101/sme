import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    globalNotFound: true,
  },
  images: {
    remotePatterns: [new URL('https://placehold.co/600x400.png')],
  },
};

export default nextConfig;
