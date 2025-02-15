/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // Ensures proper deployment on Vercel
  images: {
    unoptimized: true, // Image optimization is disabled in static builds
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint checks during builds
  },
  experimental: {
    fontLoaders: [], // Disable default font loading behavior
  },
};

export default nextConfig;
