import type { MetadataRoute } from 'next'
import { siteDescription, siteName } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteName,
        short_name: 'VAB Gallery',
        description: siteDescription,
        start_url: '/',
        display: 'standalone',
        background_color: '#202020',
        theme_color: '#202020',
    }
}
