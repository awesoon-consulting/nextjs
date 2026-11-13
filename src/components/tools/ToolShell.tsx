import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import ClosingBand from '@/src/components/sections/ClosingBand'
import { siteConfig } from '@/src/config/site'
import { TOOL_CSS } from './styles'

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url

export async function toolMetadata(locale: string, path: string, ns: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: ns })
  const url = `${baseUrl}/${locale}${path}`
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: url,
      languages: { ...Object.fromEntries(siteConfig.locales.map((l) => [l, `${baseUrl}/${l}${path}`])), 'x-default': `${baseUrl}/en${path}` },
    },
    openGraph: { type: 'website', url, siteName: siteConfig.name, title: t('title'), description: t('description'), locale, images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: t('title') }] },
    twitter: { card: 'summary_large_image', title: t('title'), description: t('description'), images: ['/images/og-image.png'] },
  }
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  }
}

export function appLd(locale: string, path: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: `${baseUrl}/${locale}${path}`,
    inLanguage: locale,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: baseUrl, founder: { '@type': 'Person', name: 'Ray Rasouli' } },
  }
}

export async function ToolFaq({ locale, ns, items }: { locale: string; ns: string; items: { q: string; a: string }[] }) {
  const t = await getTranslations({ locale, namespace: ns })
  return (
    <section className="w-full bg-[#0B1322] py-20" aria-labelledby={`${ns}-faq`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id={`${ns}-faq`} className="font-heading text-3xl font-bold tracking-tight text-white">
          {t('faqTitle')}
        </h2>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {items.map((i) => (
            <details key={i.q} className="group py-2">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-2 text-lg font-semibold text-white hover:text-[#C7D4EA] focus-visible:outline-2 focus-visible:outline-[#7D9CCB]">
                {i.q}
                <span aria-hidden="true" className="text-2xl text-neutral-400 transition-transform group-open:rotate-45 motion-reduce:transition-none">
                  +
                </span>
              </summary>
              <p className="pb-4 text-base leading-relaxed text-neutral-300">{i.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export async function ToolShell({ locale, title, text, crumb, children, faqNs, faq, eyebrow }: { eyebrow?: string; locale: string; title: string; text: string; crumb?: string; children: React.ReactNode; faqNs: string; faq: { q: string; a: string }[] }) {
  const t = await getTranslations({ locale, namespace: 'tools' })
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: TOOL_CSS }} />
      <section className="mx-auto max-w-7xl px-4 pt-28 pb-6 sm:px-8 sm:pt-32">
        {crumb && (
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-neutral-400">
            <Link href={`/${locale}/tools`} className="rounded text-neutral-300 underline-offset-4 hover:text-white hover:underline">
              {t('crumb')}
            </Link>{' '}
            <span aria-hidden="true">/</span> <span aria-current="page">{crumb}</span>
          </nav>
        )}
        {eyebrow && <p className="mb-4 text-sm font-semibold text-[#C7D4EA]">{eyebrow}</p>}
        <h1 className="tl-rise max-w-4xl font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-[52px]">{title}</h1>
        <p className="tl-rise mt-4 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl" style={{ animationDelay: '60ms' }}>
          {text}
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-4 pt-4 pb-20 sm:px-8">{children}</section>
      <ToolFaq locale={locale} ns={faqNs} items={faq} />
      <ClosingBand title={t('closing.title')} text={t('closing.text')} />
    </>
  )
}
