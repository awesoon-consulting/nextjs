import type { Metadata } from 'next'
import { siteConfig } from '@/src/config/site'
import type { Source } from './data'

export const baseUrl = () => process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url

export function pageMeta(locale: string, path: string, title: string, description: string, indexable: boolean): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { en: `/en${path}`, fr: `/fr${path}`, es: `/es${path}`, 'x-default': `/en${path}` },
    },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: { type: 'website', title, description, url: `/${locale}${path}`, siteName: siteConfig.name, locale },
  }
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${baseUrl()}${it.path}` })),
  }
}

export function datasetLd(opts: { name: string; description: string; path: string; sources: Source[]; countries: string[] }) {
  const updated = opts.sources.map((s) => s.updated).filter(Boolean).sort().pop()
  return {
    '@type': 'Dataset',
    name: opts.name,
    description: opts.description,
    url: `${baseUrl()}${opts.path}`,
    isAccessibleForFree: true,
    creator: { '@type': 'Organization', name: 'Awesoon Technologies Inc.', url: baseUrl(), founder: { '@type': 'Person', name: 'Ray Rasouli' } },
    license: opts.sources[0]?.licenceUrl,
    isBasedOn: opts.sources.map((s) => ({ '@type': 'Dataset', name: s.name, url: s.url, license: s.licenceUrl, creditText: s.attribution })),
    spatialCoverage: opts.countries.map((c) => ({ '@type': 'Country', name: c })),
    ...(updated ? { dateModified: updated } : {}),
  }
}

export const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes })
