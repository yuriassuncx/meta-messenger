/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'platform-lookaside.fbsbx.com', 'github.com'],
  },
  experimental: {
    appDir: true,
  }
}
