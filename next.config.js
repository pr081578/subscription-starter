/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true
  },
  images: {
    domains: [
      'files.stripe.com'

    ]
  }
};

module.exports = nextConfig;
