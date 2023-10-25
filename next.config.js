/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: './',
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
