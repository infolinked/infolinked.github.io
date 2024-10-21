/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // images: {
  //   domains: ['raw.githubusercontent.com'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '', // Leave empty if not using a specific port
        pathname: '/**', // Allow all paths
      },
    ],
  },
};

export default nextConfig;
