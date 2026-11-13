import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import AwardsChart from '@/src/components/procurement/AwardsChart'
import TenderTable from '@/src/components/procurement/TenderTable'
import { Breadcrumbs, DataSoon, Framing, Hero, JsonLd, Section, SourceLine, Stat, card, ghostBtn, primaryBtn } from '@/src/components/procurement/ui'
import { CATEGORY_SLUGS, CURRENCY, ISO, getCategoryData, isCountry, type CountrySlug } from '@/src/lib/procurement/data'
import { categoryName, categoryService, fmt, getCopy, money } from '@/src/lib/procurement/copy'
import { breadcrumbLd, datasetLd, graph, pageMeta } from '@/src/lib/procurement/seo'
import { CAPABILITY_PDF } from '@/src/data/public-sector'

export const revalidate = 86400

export function generateStaticParams() {
  return []
}

type Params = Promise<{ locale: string; country: string; category: string }>

async function load(params: Params) {
  const { locale, country, category } = await params
  if (!isCountry(country) || !CATEGORY_SLUGS.includes(category)) notFound()
  return { locale, c: country as CountrySlug, category, data: await getCategoryData(country, category) }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, c, category, data } = await load(params)
  const t = getCopy(locale)
  const vars = { category: categoryName(locale, category), countryIn: t.countryIn[c] }
  return pageMeta(locale, `/procurement/${c}/${category}`, fmt(t.category.metaTitle, vars), fmt(t.category.metaDescription, vars), !!data?.indexable)
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { locale, c, category, data } = await load(params)
  setRequestLocale(locale)
  const copy = getCopy(locale)
  const t = copy.category
  const name = categoryName(locale, category)
  const vars = { category: name, countryIn: copy.countryIn[c] }
  const path = `/${locale}/procurement/${c}/${category}`
  const cur = CURRENCY[c]
  const median = data ? money(locale, data.median, cur) : null
  const sourceNames = data ? data.sources.map((s) => s.name).join(', ') : ''

  const crumbs = [
    { name: copy.crumb, path: `/${locale}/procurement` },
    { name: copy.countries[c], path: `/${locale}/procurement` },
    { name, path },
  ]
  const ld = graph(
    breadcrumbLd(crumbs),
    ...(data ? [datasetLd({ name: fmt(t.title, vars), description: fmt(t.metaDescription, vars), path, sources: data.sources, countries: [ISO[c]] })] : []),
    ...(data
      ? [
          {
            '@type': 'FAQPage',
            mainEntity: t.faq.map(([q, a]) => ({ '@type': 'Question', name: fmt(q, vars), acceptedAnswer: { '@type': 'Answer', text: fmt(a, { ...vars, sources: sourceNames }) } })),
          },
        ]
      : []),
  )

  return (
    <div className="bg-[#0A0A0A] text-white">
      <JsonLd data={ld} />
      <Hero>
        <Breadcrumbs items={[{ name: copy.crumb, href: `/${locale}/procurement` }, { name: copy.countries[c], href: `/${locale}/procurement` }, { name }]} />
        <h1 className="mt-5 max-w-4xl font-heading text-[2.1rem] leading-[1.1] font-bold tracking-tight sm:text-5xl">{fmt(t.title, vars)}</h1>
        {data && (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-200">
            {fmt(t.summary, { open: data.openCount, awards: data.awards12, countryIn: copy.countryIn[c] })}{' '}
            {median ? fmt(t.summaryMedian, { median }) : t.summaryNone}
          </p>
        )}
        <p className="mt-4 max-w-3xl leading-relaxed text-neutral-400">{fmt(t.framing[0], vars)}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={`/${locale}/contact`} className={primaryBtn}>
            {t.ctaCall}
          </Link>
          <Link href={`/${locale}/procurement/digest/${c}`} className={ghostBtn}>
            {t.ctaDigest}
          </Link>
        </div>
      </Hero>

      <div className="mx-auto max-w-7xl space-y-16 px-4 pb-16 sm:px-6 lg:px-8">
        {!data ? (
          <DataSoon locale={locale} />
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              <Stat label={t.kOpen} value={String(data.openCount)} />
              <Stat label={t.kSoon} value={String(data.soon)} />
              <Stat label={t.kAwards} value={String(data.awards12)} />
              <Stat label={t.kMedian} value={money(locale, data.median, cur, true) ?? copy.table.notStated} note={t.kMedianNote} />
            </div>

            <Section id="open-tenders" title={t.openTitle}>
              <div className="mt-5">
                {data.open.length ? <TenderTable rows={data.open} locale={locale} currency={cur} t={copy.table} /> : <p className="text-neutral-300">{fmt(t.openEmpty, vars)}</p>}
              </div>
              <SourceLine sources={data.sources} locale={locale} />
            </Section>

            <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
              <section aria-labelledby="awards-chart" className={`${card} p-6`}>
                <h2 id="awards-chart" className="font-heading text-2xl font-bold">
                  {t.chartTitle}
                </h2>
                <div className="mt-5">
                  <AwardsChart months={data.months} locale={locale} label={t.chartLabel} />
                </div>
                <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  {[
                    [t.chartAwards, String(data.awards12)],
                    [t.chartTotal, money(locale, data.total, cur, true) ?? copy.table.notStated],
                    [t.chartMedian, money(locale, data.median, cur, true) ?? copy.table.notStated],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-xs font-semibold tracking-wide text-neutral-400 uppercase">{k}</dt>
                      <dd className="mt-1 font-heading text-xl font-bold tabular-nums">{v}</dd>
                    </div>
                  ))}
                </dl>
                <SourceLine sources={data.sources} locale={locale} />
              </section>
              <section aria-labelledby="top-buyers" className={`${card} p-6`}>
                <h2 id="top-buyers" className="font-heading text-2xl font-bold">
                  {t.buyersTitle}
                </h2>
                {data.topBuyers.length ? (
                  <ol className="mt-4 divide-y divide-white/10">
                    {data.topBuyers.map((b) => (
                      <li key={b.slug}>
                        <Link href={`/${locale}/procurement/buyers/${b.slug}`} className="-mx-2 flex min-h-11 flex-col rounded-lg px-2 py-3 transition-colors hover:bg-white/[0.05]">
                          <span className="text-sm font-medium text-white">{b.name}</span>
                          <span className="mt-0.5 text-xs text-neutral-400 tabular-nums">
                            {fmt(t.buyerAwards, { n: b.awards })}
                            {b.total > 0 && ` · ${money(locale, b.total, cur, true)}`}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="mt-3 text-sm text-neutral-300">{t.buyersEmpty}</p>
                )}
                <SourceLine sources={data.sources} locale={locale} />
              </section>
            </div>
          </>
        )}

        <Section id="how" title={t.howTitle}>
          <p className="mt-3 max-w-3xl text-neutral-300">{fmt(t.howLead, { service: categoryService(locale, category).toLowerCase() })}</p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.how.map(([h, d], i) => (
              <li key={h} className={`${card} p-5`}>
                <span className="font-heading text-sm font-bold text-[#9DB6DC] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-2 font-heading font-semibold">{h}</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-300">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#7D9CCB]/30 bg-[#0D1420] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-heading text-lg font-bold">{t.capTitle}</p>
              <p className="mt-1 text-sm text-neutral-300">{t.capText}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={CAPABILITY_PDF(locale)} download className={`${primaryBtn} min-h-11 px-5 py-2 text-sm`}>
                PDF
              </a>
              <Link href={`/${locale}/public-sector`} className={`${ghostBtn} min-h-11 px-5 py-2 text-sm`}>
                {t.capCta}
              </Link>
            </div>
          </div>
        </Section>

        <Section id="faq" title={t.faqTitle}>
          <div className="mt-5 divide-y divide-white/10 rounded-2xl border border-white/10">
            {t.faq.map(([q, a]) => (
              <details key={q} className="group px-5">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold transition-colors hover:text-[#C9D7EC]">
                  {fmt(q, vars)}
                  <span aria-hidden="true" className="text-xl text-neutral-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 leading-relaxed text-neutral-300">{fmt(a, { ...vars, sources: sourceNames || copy.countries[c] })}</p>
              </details>
            ))}
          </div>
        </Section>
      </div>
      <Framing title={t.framingTitle} paragraphs={t.framing.slice(1).map((p) => fmt(p, vars))} />
    </div>
  )
}
