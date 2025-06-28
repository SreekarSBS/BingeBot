import type { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.nflxext.com',
        pathname: '/**',
      },
    ],
  },
}
 
export default config