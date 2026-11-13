import { MetadataRoute } from 'next'
import { siteConfig } from '@/src/config/site'
import { HUB_IDS, HUB_SPOKES, spokePath } from '@/src/data/hub-map'
import { getAllSupportSlugs } from '@/src/data/support'
import { getAllInsightSlugs } from '@/src/data/insights'
import { getAllGameSlugs } from '@/src/data/games'
import { getAllCaseStudies } from '@/src/data/work'
import { procurementSitemap } from '@/src/lib/procurement/sitemap'
import { getAllTermSlugs } from '@/src/data/glossary'
import { getAllComparisonSlugs } from '@/src/data/compare'
import { TOOL_SITEMAP_PATHS } from '@/src/data/tools'

export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url
  const locales = siteConfig.locales
  const spokePaths = [...HUB_IDS.flatMap((h) => HUB_SPOKES[h].map(spokePath)), spokePath('maintenance')]
  const supportSlugs = getAllSupportSlugs()
  const insightSlugs = getAllInsightSlugs()
  const gameSlugs = getAllGameSlugs()

  const entries: MetadataRoute.Sitemap = []

  // Static pages per locale
  const staticPaths = ['', '/solutions', '/support', '/insights', '/about', '/contact', '/games', '/design', '/work', '/public-sector', '/advertising', '/glossary', '/compare', ...HUB_IDS.map((h) => `/${h}`)]

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

    for (const path of [...getAllTermSlugs().map((s) => `/glossary/${s}`), ...getAllComparisonSlugs().map((s) => `/compare/${s}`)]) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}${path}`])) },
      })
    }

    for (const path of spokePaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}${path}`])),
        },
      })
    }

    // Support pages
    for (const slug of supportSlugs) {
      entries.push({
        url: `${baseUrl}/${locale}/support/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/support/${slug}`])
          ),
        },
      })
    }

    // Game pages
    for (const slug of gameSlugs) {
      entries.push({
        url: `${baseUrl}/${locale}/games/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/games/${slug}`])
          ),
        },
      })
    }

    // Free tools
    for (const path of TOOL_SITEMAP_PATHS) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${path}`])
          ),
        },
      })
    }

    for (const cs of getAllCaseStudies()) {
      entries.push({
        url: `${baseUrl}/${locale}/work/${cs.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/work/${cs.slug}`])
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

  // AI-facing files
  entries.push({
    url: `${baseUrl}/llms.txt`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  })
  entries.push({
    url: `${baseUrl}/llms-full.txt`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  })

  entries.push(...(await procurementSitemap(baseUrl)))

  return entries
}
