/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: 'http://localhost:5500/',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/sign-in' },
      '/sign-in': { page: '/sign-in' },
      '/sign-up': { page: '/sign-up' },
      '/expense-bill': { page: '/expense-bill' },
      // '/expenseBill/edit': { page: '/expenseBill/edit' },
      // '/expenseBill/create': { page: '/expenseBill/create' },
      '/epproval-records': { page: '/epproval-records' },
    }
  }, 
}

module.exports = nextConfig
