import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cgi-bin/', '/admin/', '/login', '/register'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.theapecgroup.com'}/sitemap.xml`,
  }
}
