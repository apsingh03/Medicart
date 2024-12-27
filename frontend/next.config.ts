import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "cdn01.pharmeasy.in",
      "m.media-amazon.com",
      "assets.pharmeasy.in",
    ], // Add your allowed image hostnames here
  },
};

export default nextConfig;
