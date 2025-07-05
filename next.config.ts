import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.nflxext.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'occ-0-4857-3663.1.nflxso.net',
        pathname: '/**', // ✅ Allow all paths
      },
    ],
  },
}

export default config
