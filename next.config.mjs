/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};

export default nextConfig;
