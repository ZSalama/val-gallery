import type { MetadataRoute } from 'next'
import { galleryRoutes, siteUrl } from '@/lib/site'

const routes = ['/', '/about', '/cart', ...galleryRoutes]

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '/' || route === '/gallery' ? 'weekly' : 'monthly',
        priority: route === '/' ? 1 : route === '/gallery' ? 0.9 : 0.7,
    }))
}
