import type { MetadataRoute } from 'next'
import { siteConfig } from '@/src/config/site'
import { getIndexablePages } from './data'

// Only pages that pass the quality gates reach the sitemap.
export async function procurementSitemap(baseUrl: string): Promise<MetadataRoute.Sitemap> {
  const pages = await getIndexablePages()
  if (!pages) return []
  const paths = [
    ...(pages.hub ? ['/procurement'] : []),
    ...pages.categories.map((p) => `/procurement/${p.country}/${p.category}`),
    ...pages.digests.map((c) => `/procurement/digest/${c}`),
    ...pages.buyers.map((b) => `/procurement/buyers/${b}`),
  ]
  return siteConfig.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: path === '/procurement' ? 0.8 : 0.6,
      alternates: { languages: Object.fromEntries(siteConfig.locales.map((l) => [l, `${baseUrl}/${l}${path}`])) },
    })),
  )
}
