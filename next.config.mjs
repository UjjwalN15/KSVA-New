/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",

  images: {
    unoptimized: true, // Image optimization is disabled in static builds
  },
};

export default nextConfig;

