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
        minimumCacheTTL: 43200, //12 hours
    },
}

export default nextConfig
