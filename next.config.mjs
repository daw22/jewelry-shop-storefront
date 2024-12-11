/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.shopify.com"]
  },
  experimental: {
    isr: false,
  },
};

export default nextConfig;
