/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  // output: "standalone",
  trailingSlash: true, // When exporting a static site, using the trailingSlash option ensures that every route gets a .html file
  // images: {
  //   domains: ['raw.githubusercontent.com'],
  // },

  images: {
    unoptimized: true, // Disable Next.js optimized images for static exports
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '', // Leave empty if not using a specific port
        pathname: '/**', // Allow all paths
      },
    ],
  },
  // Add assetPrefix if deploying to a subpath like GitHub Pages
  //assetPrefix: './',
  
};

export default nextConfig;
