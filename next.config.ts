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
      {
        protocol: 'https',
        hostname: 'https://lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
    ]
  }
};

export default nextConfig;
