import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // whitelist Cloudinary domain here
  },
};

export default nextConfig;
