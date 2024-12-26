import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* experimental:{
    serverActions: true,
  }, */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://samaritana-blog.onrender.com'
      },
      {
        protocol: 'https',
        hostname: 'https://res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'https://cloudinary.com'
      },
    ]
  }
};

export default nextConfig;
