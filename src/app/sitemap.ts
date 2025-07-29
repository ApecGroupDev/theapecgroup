// app/sitemap.ts
import type { MetadataRoute } from 'next'

export const revalidate = 86400 // Re-generate daily

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.theapecgroup.com'

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/our-team`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/petroleum-companies-jobs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/canopy-imaging-solutions`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/environmental-compliance-solutions`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/gas-station-construction`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/gas-station-electrical`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/gas-station-financing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/gas-station-pump-advertising`,
      lastModified: new Date(),
    },
    // Add more static pages as needed
  ]
}
