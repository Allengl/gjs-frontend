/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: 'http://localhost:3000/',
  distDir: 'dists',
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
      '/expense-bill/create': { page: '/expense-bill/create' },
      '/expenseBill/edit': { page: '/expenseBill/edit' },
      '/approval-records': { page: '/approval-records' },
    }
  }, 
}

module.exports = nextConfig
