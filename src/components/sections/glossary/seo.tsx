import type { Metadata } from 'next'
import { siteConfig } from '@/src/config/site'

export const baseUrl = () => process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url

export function pageMeta(locale: string, path: string, title: string, description: string, type: 'website' | 'article' = 'website'): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { en: `/en${path}`, fr: `/fr${path}`, es: `/es${path}`, 'x-default': `/en${path}` },
    },
    openGraph: { type, title, description, url: `/${locale}${path}`, siteName: siteConfig.name, locale },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
