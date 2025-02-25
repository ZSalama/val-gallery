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
    },
}

export default nextConfig
