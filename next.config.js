const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'packy-bucket.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...defaultConfig,
      ...config,
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: `https://dev.packyforyou.shop/api/:path*`,
          },
          {
            source: '/admin/:path*',
            destination: `https://packy-bucket.s3.ap-northeast-2.amazonaws.com/admin/:path*`,
          },
        ]
      },
    }
  }

  return {
    ...defaultConfig,
    ...config,
  }
}
