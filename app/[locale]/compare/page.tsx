import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { COMPARISONS } from '@/src/data/compare'
import { asLocale } from '@/src/data/glossary'
import GlossaryAssistant from '@/src/components/sections/glossary/GlossaryAssistant'
import AskButton from '@/src/components/sections/glossary/AskButton'
import { Closing, Crumbs, Hero } from '@/src/components/sections/glossary/Shell'
import { JsonLd, baseUrl, pageMeta } from '@/src/components/sections/glossary/seo'
import { ghostBtn, lift, primaryBtn } from '@/src/components/sections/glossary/ui'

const PATH = '/compare'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'comparePage' })
  return pageMeta(locale, PATH, t('meta.title'), t('meta.description'))
}

export default async function ComparePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'comparePage' })
  const l = asLocale(locale)
  const contact = `/${locale}/contact`
  const url = `${baseUrl()}/${locale}${PATH}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('meta.title'),
    url,
    itemListElement: COMPARISONS.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.copy[l].title, url: `${url}/${c.slug}` })),
  }

  return (
    <div className="bg-[#0A0A0A]">
      <JsonLd data={jsonLd} />
      <Hero
        crumbs={<Crumbs items={[{ label: t('crumbHome'), href: `/${locale}` }, { label: t('crumbCompare') }]} />}
        pill={t('badge')}
        title={t('title')}
        lede={t('lede')}
        actions={
          <>
            <Link href={contact} className={primaryBtn}>{t('cta')}</Link>
            <AskButton className={ghostBtn}>{t('askHero')}</AskButton>
          </>
        }
        meta={(t.raw('trust') as string[]).join(' · ')}
        aside={<GlossaryAssistant mode={{ kind: 'compare' }} topic={t('crumbCompare')} />}
      />
      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <li key={c.slug}>
              <Link href={`/${locale}/compare/${c.slug}`} className={`group flex h-full flex-col rounded-3xl border border-white/[0.08] bg-[#111827] p-6 ${lift}`}>
                <span className="flex items-center gap-2 font-heading text-sm font-semibold text-[#7FD6F7]">
                  {c.a} <span className="text-neutral-500">vs</span> {c.b}
                </span>
                <span className="mt-3 font-heading text-xl font-bold text-white">{c.copy[l].title}</span>
                <span className="mt-3 flex-1 text-base leading-relaxed text-neutral-300">{c.copy[l].short}</span>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-white">
                  {t('read')}
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex gap-4 rounded-3xl border border-white/[0.08] p-6">
          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#00AEEF]" aria-hidden="true" />
          <div>
            <p className="font-heading text-lg font-bold text-white">{t('noCommission')}</p>
            <p className="mt-1 text-base text-neutral-300">{t('noCommissionBody')}</p>
          </div>
        </div>
      </div>
      <Closing title={t('closeTitle')} body={t('closeBody')} cta={t('cta')} note={t('ctaNote')} href={contact} />
    </div>
  )
}
