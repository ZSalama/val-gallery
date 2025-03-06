import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd2oeo8w8j25w98.cloudfront.net',
                pathname: '/**',
            },
        ],
        minimumCacheTTL: 864000, //24 hours
        qualities: [25, 50, 75],
    },
}

export default nextConfig
