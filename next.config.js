/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: ['images.unsplash.com'], // Add other domains if needed
  },
  // Enable static exports for static site generation
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Change the output directory
  distDir: 'build',
  // Optional: Set the base path if your site is served from a subdirectory
  // basePath: '/your-base-path',
  // Optional: Configure the build ID
  generateBuildId: async () => {
    return 'hospital-website-build';
  },
  // Optional: Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Optional: Disable source maps in production
  productionBrowserSourceMaps: false,
  // Optional: Configure webpack
  webpack: (config, { isServer }) => {
    // Custom webpack configuration if needed
    return config;
  },
  // Optional: Configure headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
