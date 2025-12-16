/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = nextConfig