/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', //
  assetPrefix: '../',   //配置静态资源的引用路径
  // basePath: '/portal/apps/com.awspaas.user.apps.app20231017165850',    //配置路由跳转时的前缀
  distDir: 'dists', //配置构建输出目录
  images: {
    unoptimized: true   //配置图片不压缩
  },
  eslint: {
    ignoreDuringBuilds: true, //忽略eslint检查
  },
  typescript: {
    ignoreBuildErrors: true, //忽略ts检查
  },
  reactStrictMode: true, //严格模式
  trailingSlash: true, //配置路由末尾是否加斜杠
  exportPathMap: async function (    //配置路由
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/sign-in': { page: '/sign-in' },
      '/sign-up': { page: '/sign-up' },
      '/expense-bill': { page: '/expense-bill' },
      '/expense-bill/create': { page: '/expense-bill/create' },
      '/expense-bill/edit': { page: '/expense-bill/edit' },
      '/approval-records': { page: '/approval-records' },
    }
  },
}

module.exports = nextConfig
