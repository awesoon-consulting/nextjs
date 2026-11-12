import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import ProcurementAssistant from '@/src/components/sections/public-sector/ProcurementAssistant'
import CategoryTable from '@/src/components/sections/public-sector/CategoryTable'
import FounderBand from '@/src/components/sections/FounderBand'
import TrackedEmailLink from '@/src/components/ui/TrackedEmailLink'
import { siteConfig } from '@/src/config/site'
import { BID_CATEGORIES, CAPABILITY_PDF } from '@/src/data/public-sector'

const PATH = '/public-sector'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'publicSector' })
  const title = t('meta.title')
  const description = t('meta.description')
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${PATH}`,
      languages: { en: `/en${PATH}`, fr: `/fr${PATH}`, es: `/es${PATH}`, 'x-default': `/en${PATH}` },
    },
    openGraph: { type: 'website', title, description, url: `/${locale}${PATH}`, siteName: siteConfig.name, locale },
    twitter: { card: 'summary_large_image', title, description },
  }
}

const primaryBtn =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5]'
const ghostBtn =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/[0.08]'

function DownloadIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14" />
    </svg>
  )
}

export default async function PublicSectorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'publicSector' })
  const count = BID_CATEGORIES.length
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url
  const pageUrl = `${baseUrl}/${locale}${PATH}`
  const faqKeys = [1, 2, 3, 4, 5, 6, 7] as const
  const howKeys = [1, 2, 3] as const

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Awesoon Technologies Inc.',
        alternateName: siteConfig.name,
        url: baseUrl,
        email: siteConfig.contact.email,
        founder: { '@type': 'Person', name: 'Ray Rasouli' },
        address: { '@type': 'PostalAddress', addressLocality: 'Vancouver', addressRegion: 'BC', addressCountry: 'CA' },
        areaServed: ['CA', 'US', 'GB', 'AU'].map((c) => ({ '@type': 'Country', name: c })),
        sameAs: [siteConfig.social.linkedin],
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: t('meta.title'),
        description: t('meta.description'),
        url: pageUrl,
        provider: { '@id': `${baseUrl}/#organization` },
        audience: { '@type': 'Audience', audienceType: 'Government buyers' },
        areaServed: ['CA', 'US', 'GB', 'AU'].map((c) => ({ '@type': 'Country', name: c })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t('categories.title'),
          itemListElement: BID_CATEGORIES.map((c) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: t(`categories.items.${c.slug}.name`), description: t(`categories.items.${c.slug}.service`) },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqKeys.map((k) => ({
          '@type': 'Question',
          name: t(`faq.q${k}`),
          acceptedAnswer: { '@type': 'Answer', text: t(`faq.a${k}`, { count }) },
        })),
      },
    ],
  }

  const facts: [string, string, boolean][] = [
    [t('facts.legalName'), 'Awesoon Technologies Inc.', false],
    [t('facts.based'), t('facts.basedValue'), false],
    [t('facts.serves'), t('facts.servesValue'), false],
    [t('facts.languages'), t('facts.languagesValue'), false],
    [t('facts.owner'), t('facts.ownerValue'), false],
    [t('facts.registrations'), t('facts.onRequest'), true],
    [t('facts.insurance'), t('facts.onRequest'), true],
    [t('facts.references'), t('facts.referencesValue'), true],
  ]

  return (
    <div className="bg-primary text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24" aria-labelledby="ps-title">
        <div
          className="pointer-events-none absolute top-24 right-[-10%] h-[620px] w-[900px] max-w-[160vw] opacity-[0.16]"
          style={{ background: 'radial-gradient(closest-side, #0F1D33, #00AEEF 55%, transparent)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_minmax(0,560px)] lg:gap-16 lg:px-8">
          <div className="lg:pt-6">
            <p className="text-sm font-semibold text-[#7FD6F7]">{t('hero.eyebrow')}</p>
            <h1 id="ps-title" className="mt-3 font-heading text-[2.25rem] leading-[1.06] font-bold tracking-tight text-white sm:text-5xl xl:text-[3.5rem]">
              {t('hero.title')}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-300">{t('hero.subtitle')}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={CAPABILITY_PDF(locale)} download className={primaryBtn}>
                <DownloadIcon />
                {t('hero.ctaPdf')}
                <span className="hidden text-sm font-normal text-neutral-600 sm:inline">{t('hero.ctaPdfMeta')}</span>
              </a>
              <Link href={`/${locale}/contact`} className={ghostBtn}>
                {t('hero.ctaCall')}
              </Link>
            </div>
            <ul className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-neutral-300 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {[t('hero.fact1'), t('hero.fact2'), t('hero.fact3', { count })].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00AEEF]" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <ProcurementAssistant />
        </div>
      </section>

      <section id="categories" className="scroll-mt-24 border-t border-white/10 py-20 sm:py-24" aria-labelledby="ps-cat-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="ps-cat-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('categories.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-neutral-300">{t('categories.subtitle')}</p>
          <div className="mt-10">
            <CategoryTable />
          </div>
        </div>
      </section>

      <section id="capability-statement" className="scroll-mt-24 bg-[#0D1420] py-20 sm:py-24" aria-labelledby="ps-cs-title">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col rounded-3xl border border-white/10 bg-[#111827] p-7 sm:p-9">
            <div className="flex items-start gap-5">
              <div className="hidden h-[104px] w-[80px] flex-shrink-0 rounded-md bg-white p-2.5 shadow-lg sm:block" aria-hidden="true">
                <div className="h-1.5 w-8 rounded bg-[#0F1D33]" />
                <div className="mt-2 space-y-1">
                  {[1, 0.8, 0.9, 0.6, 1, 0.7, 0.85, 0.5].map((w, i) => (
                    <div key={i} className="h-1 rounded bg-neutral-300" style={{ width: `${w * 100}%` }} />
                  ))}
                </div>
                <div className="mt-2 h-1 w-6 rounded bg-[#00AEEF]" />
              </div>
              <div>
                <h2 id="ps-cs-title" className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {t('statement.title')}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-300">{t('statement.text')}</p>
              </div>
            </div>
            <ul className="mt-7 space-y-3">
              {(['item1', 'item2', 'item3', 'item4'] as const).map((k) => (
                <li key={k} className="flex items-start gap-3 text-base text-neutral-200">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[#00AEEF]" fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  {t(`statement.${k}`)}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:flex-wrap">
              <a href={CAPABILITY_PDF(locale)} download className={primaryBtn}>
                <DownloadIcon />
                {t('statement.download')}
              </a>
              <Link href={`/${locale}/public-sector/capability-statement`} className={ghostBtn}>
                {t('statement.tailored')}
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 p-7 sm:p-9">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">{t('facts.title')}</h2>
            <dl className="mt-6 divide-y divide-white/10">
              {facts.map(([k, v, pending]) => (
                <div key={k} className="grid gap-1 py-3.5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <dt className="text-sm font-semibold text-neutral-400">{k}</dt>
                  <dd className={pending ? 'text-base text-neutral-300 italic' : 'text-base text-white'}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="ps-how-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="ps-how-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('how.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-neutral-300">{t('how.subtitle')}</p>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {howKeys.map((k) => (
              <li key={k} className="rounded-2xl border border-white/10 bg-[#111827] p-7 transition-colors hover:border-white/[0.16]">
                <span className="font-heading text-sm font-semibold text-[#7FD6F7]">0{k}</span>
                <h3 className="mt-3 font-heading text-xl font-semibold text-white">{t(`how.item${k}Title`)}</h3>
                <p className="mt-2 text-base leading-relaxed text-neutral-300">{t(`how.item${k}Text`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 sm:py-24" aria-labelledby="ps-faq-title">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
          <h2 id="ps-faq-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('faq.title')}
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqKeys.map((k) => (
              <details key={k} className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-lg font-semibold text-white transition-colors hover:text-[#7FD6F7] [&::-webkit-details-marker]:hidden">
                  {t(`faq.q${k}`)}
                  <svg className="h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform group-open:rotate-45 motion-reduce:transition-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="pb-5 text-base leading-relaxed text-neutral-300">{t(`faq.a${k}`, { count })}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-20 sm:py-24" aria-labelledby="ps-contact-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-[#111827] p-7 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 id="ps-contact-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t('contact.title')}
              </h2>
              <p className="mt-3 max-w-xl text-lg text-neutral-300">{t('contact.text')}</p>
              <p className="mt-5 flex items-center gap-2 text-base font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
                {t('contact.reply')}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-heading text-lg font-semibold text-white">{t('contact.name')}</p>
              <p className="-mt-2 text-sm text-neutral-400">{t('contact.role')}</p>
              <TrackedEmailLink email={siteConfig.contact.email} className="break-all text-base text-[#7FD6F7] underline-offset-4 hover:underline" />
              <div className="mt-2 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link href={`/${locale}/contact`} className={primaryBtn}>
                  {t('hero.ctaCall')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FounderBand />

      <section className="relative w-full overflow-hidden bg-[#0F1D33] py-24" aria-labelledby="ps-closing-title">
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="ps-closing-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {t('closing.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">{t('closing.text')}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={`/${locale}/contact`} className={primaryBtn}>
              {t('closing.cta')}
            </Link>
            <a href={CAPABILITY_PDF(locale)} download className={ghostBtn}>
              <DownloadIcon />
              {t('hero.ctaPdf')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
