/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.squarespace-cdn.com", "upload.wikimedia.org"]
  }
}

module.exports = nextConfig
