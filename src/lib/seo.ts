import type { Metadata } from 'next'
import { siteConfig } from '@/src/config/site'

export const baseUrl = () => process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url

export function pageMetadata(locale: string, path: string, title: string, description: string): Metadata {
  const url = `${baseUrl()}/${locale}${path}`
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ...Object.fromEntries(siteConfig.locales.map((l) => [l, `${baseUrl()}/${l}${path}`])), 'x-default': `${baseUrl()}/en${path}` },
    },
    openGraph: { title, description, type: 'website', url },
  }
}

export function breadcrumbLd(locale: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${baseUrl()}/${locale}${it.path}` })),
  }
}

export const provider = () => ({
  '@type': 'Organization',
  name: 'Awesoon Technologies Inc.',
  url: baseUrl(),
  founder: { '@type': 'Person', name: 'Ray Rasouli' },
})

export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') }
}
