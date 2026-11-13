import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import DigestSignup from '@/src/components/procurement/DigestSignup'
import TenderTable from '@/src/components/procurement/TenderTable'
import { Breadcrumbs, DataSoon, Framing, Hero, JsonLd, Section, SourceLine, card } from '@/src/components/procurement/ui'
import { CURRENCY, ISO, getDigestData, isCountry, type CountrySlug } from '@/src/lib/procurement/data'
import { categoryName, date, fmt, getCopy, money } from '@/src/lib/procurement/copy'
import { breadcrumbLd, datasetLd, graph, pageMeta } from '@/src/lib/procurement/seo'
import { siteConfig } from '@/src/config/site'

export const revalidate = 86400

export function generateStaticParams() {
  return []
}

type Params = Promise<{ locale: string; country: string }>

async function load(params: Params) {
  const { locale, country } = await params
  if (!isCountry(country)) notFound()
  return { locale, c: country as CountrySlug, data: await getDigestData(country) }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, c, data } = await load(params)
  const copy = getCopy(locale)
  const vars = { country: copy.countries[c], countryIn: copy.countryIn[c] }
  return pageMeta(locale, `/procurement/digest/${c}`, fmt(copy.digest.metaTitle, vars), fmt(copy.digest.metaDescription, vars), !!data?.indexable)
}

export default async function DigestPage({ params }: { params: Params }) {
  const { locale, c, data } = await load(params)
  setRequestLocale(locale)
  const copy = getCopy(locale)
  const t = copy.digest
  const vars = { country: copy.countries[c], countryIn: copy.countryIn[c] }
  const path = `/${locale}/procurement/digest/${c}`
  const cur = CURRENCY[c]
  const ld = graph(
    breadcrumbLd([
      { name: copy.crumb, path: `/${locale}/procurement` },
      { name: fmt(t.title, vars), path },
    ]),
    ...(data ? [datasetLd({ name: fmt(t.metaTitle, vars), description: fmt(t.metaDescription, vars), path, sources: data.sources, countries: [ISO[c]] })] : []),
  )

  return (
    <div className="bg-[#0A0A0A] text-white">
      <JsonLd data={ld} />
      <Hero>
        <Breadcrumbs items={[{ name: copy.crumb, href: `/${locale}/procurement` }, { name: t.eyebrow }]} />
        <h1 className="mt-5 max-w-4xl font-heading text-[2.1rem] leading-[1.1] font-bold tracking-tight sm:text-5xl">{fmt(t.title, vars)}</h1>
        {data && <p className="mt-4 text-lg text-neutral-300">{fmt(t.range, { from: date(locale, data.from)!, to: date(locale, data.to)! })}</p>}
      </Hero>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <div className="min-w-0 space-y-14">
          {!data ? (
            <DataSoon locale={locale} />
          ) : (
            <>
              <Section id="new-tenders" title={t.tendersTitle}>
                <div className="mt-5">
                  {data.tenders.length ? <TenderTable rows={data.tenders} locale={locale} currency={cur} t={copy.table} withSoonFilter={false} /> : <p className="text-neutral-300">{t.tendersEmpty}</p>}
                </div>
                <SourceLine sources={data.sources} locale={locale} />
              </Section>
              <Section id="new-awards" title={t.awardsTitle}>
                {data.awards.length ? (
                  <ul className="mt-5 divide-y divide-white/10 rounded-2xl border border-white/10">
                    {data.awards.map((a, i) => (
                      <li key={i} className="px-5 py-4 transition-colors hover:bg-white/[0.04]">
                        <p className="font-medium text-white">
                          {a.url ? (
                            <a href={a.url} target="_blank" rel="noopener" className="hover:text-[#9DB6DC]">
                              {a.title}
                              <span className="sr-only"> ({copy.table.opensNew})</span>
                            </a>
                          ) : (
                            a.title
                          )}
                        </p>
                        <p className="mt-1 text-sm text-neutral-400">
                          {a.buyer && a.buyerSlug && (
                            <Link href={`/${locale}/procurement/buyers/${a.buyerSlug}`} className="text-neutral-300 hover:text-white">
                              {a.buyer}
                            </Link>
                          )}
                          {[a.supplier && ` · ${copy.table.supplier}: ${a.supplier}`, a.awarded && ` · ${date(locale, a.awarded)}`, a.value !== null && ` · ${money(locale, a.value, a.currency ?? cur)}`]
                            .filter(Boolean)
                            .join('')}
                        </p>
                        {a.categories[0] && <p className="mt-1 text-xs text-neutral-400">{categoryName(locale, a.categories[0])}</p>}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 text-neutral-300">{t.awardsEmpty}</p>
                )}
                <SourceLine sources={data.sources} locale={locale} />
              </Section>
            </>
          )}
        </div>
        <aside aria-labelledby="digest-signup" className="lg:sticky lg:top-28 lg:self-start">
          <DigestSignup t={t} locale={locale} country={copy.countries[c]} to={siteConfig.contact.email} />
          <div className={`${card} mt-4 p-5 text-sm text-neutral-300`}>
            {(['ca', 'us', 'uk', 'au'] as const)
              .filter((x) => x !== c)
              .map((x) => (
                <Link key={x} href={`/${locale}/procurement/digest/${x}`} className="mr-4 inline-block min-h-11 py-3 underline underline-offset-4 hover:text-white">
                  {copy.countries[x]}
                </Link>
              ))}
          </div>
        </aside>
      </div>
      <Framing title={t.framingTitle} paragraphs={t.framing.map((p) => fmt(p, vars))} />
    </div>
  )
}
