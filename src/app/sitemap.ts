import { MetadataRoute } from 'next'
import { siteConfig } from '@/src/config/site'
import { getAllSolutionSlugs } from '@/src/data/solutions'
import { getAllInsightSlugs } from '@/src/data/insights'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url
  const locales = siteConfig.locales
  const solutionSlugs = getAllSolutionSlugs()
  const insightSlugs = getAllInsightSlugs()

  const entries: MetadataRoute.Sitemap = []

  // Static pages per locale
  const staticPaths = ['', '/solutions', '/insights', '/about', '/contact']

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${path}`])
          ),
        },
      })
    }

    // Solution pages
    for (const slug of solutionSlugs) {
      entries.push({
        url: `${baseUrl}/${locale}/solutions/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/solutions/${slug}`])
          ),
        },
      })
    }

    // Insight pages
    for (const slug of insightSlugs) {
      entries.push({
        url: `${baseUrl}/${locale}/insights/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/insights/${slug}`])
          ),
        },
      })
    }
  }

  return entries
}
