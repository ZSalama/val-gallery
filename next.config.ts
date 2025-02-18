import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'val-gallery.s3.us-east-1.amazonaws.com',
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig
