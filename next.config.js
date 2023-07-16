/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["robohash.org"],
  },
}

module.exports = nextConfig
