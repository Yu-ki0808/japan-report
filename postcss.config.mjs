/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的エクスポートを有効化
  basePath: process.env.NODE_ENV === 'production' ? '/japan-report' : '', // リポジトリ名を指定
  images: {
    unoptimized: true, // GitHub Pagesでは画像最適化を無効化
  },
  trailingSlash: true, // 静的エクスポート時にディレクトリ形式のURLをサポート
};

export default nextConfig;