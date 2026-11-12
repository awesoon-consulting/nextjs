import type { MetadataRoute } from 'next'
import { getCostIndex } from './cost'
import { getCalendar } from './calendar'
import { getIntegrationsIndex } from './integrations'

// Only pages that are indexable today: an empty or thin page stays out of the sitemap.
export async function costPlatformSitemap(baseUrl: string, locales: readonly string[]): Promise<MetadataRoute.Sitemap> {
  const [groups, idx, cal] = await Promise.all([getCostIndex(), getIntegrationsIndex(), getCalendar()])
  const paths: string[] = []
  const regions = (groups ?? []).flatMap((g) => g.regions.filter((r) => r.indexable).map((r) => `/cost/${g.slug}/${r.slug}`))
  if (regions.length) paths.push('/cost', ...regions)
  if (idx?.pairs.length) paths.push('/integrations', ...idx.pairs.map((p) => `/integrations/${p.slug}`))
  if (cal && cal.recent.length + cal.upcoming.length > 0) paths.push('/api-calendar')
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '/api-calendar' ? ('daily' as const) : ('monthly' as const),
      priority: 0.6,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}${path}`])) },
    })),
  )
}
