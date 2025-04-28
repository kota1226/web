/** @type {import('next').NextConfig} */

// const dns = require('dns');
// dns.setDefaultResultOrder('ipv4first');

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    optimizeCss: true,
  },
  eslint: {
    dirs: ["app"],
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
};
module.exports = nextConfig;
