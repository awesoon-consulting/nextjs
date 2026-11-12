import type { Metadata } from 'next'
import Link from 'next/link'
import { setRequestLocale } from 'next-intl/server'
import TenderTable from '@/src/components/procurement/TenderTable'
import { Breadcrumbs, DataSoon, Framing, Hero, JsonLd, Section, SourceLine, Stat, card, ghostBtn } from '@/src/components/procurement/ui'
import { CURRENCY, ISO, getBuyerData } from '@/src/lib/procurement/data'
import { categoryName, date, fmt, getCopy, money } from '@/src/lib/procurement/copy'
import { breadcrumbLd, datasetLd, graph, pageMeta } from '@/src/lib/procurement/seo'

export const revalidate = 86400

export function generateStaticParams() {
  return []
}

type Params = Promise<{ locale: string; slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params
  const t = getCopy(locale).buyer
  const data = await getBuyerData(slug)
  const name = data && !data.missing ? data.name : t.missingTitle
  return pageMeta(locale, `/procurement/buyers/${slug}`, fmt(t.metaTitle, { buyer: name }), fmt(t.metaDescription, { buyer: name }), !!data && !data.missing && data.indexable)
}

export default async function BuyerPage({ params }: { params: Params }) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const copy = getCopy(locale)
  const t = copy.buyer
  const data = await getBuyerData(slug)
  const path = `/${locale}/procurement/buyers/${slug}`

  if (!data || data.missing) {
    return (
      <div className="bg-[#0A0A0A] text-white">
        <Hero>
          <Breadcrumbs items={[{ name: copy.crumb, href: `/${locale}/procurement` }, { name: data ? t.missingTitle : copy.soon.title }]} />
          <div className="mt-8">
            {data ? (
              <div className={`${card} p-8`}>
                <h1 className="font-heading text-3xl font-bold">{t.missingTitle}</h1>
                <p className="mt-3 text-neutral-300">{t.missingText}</p>
                <Link href={`/${locale}/procurement`} className={`${ghostBtn} mt-6`}>
                  {t.back}
                </Link>
              </div>
            ) : (
              <DataSoon locale={locale} />
            )}
          </div>
        </Hero>
      </div>
    )
  }

  const c = data.country
  const cur = CURRENCY[c]
  const vars = { buyer: data.name, country: copy.countries[c] }
  const ld = graph(
    breadcrumbLd([
      { name: copy.crumb, path: `/${locale}/procurement` },
      { name: data.name, path },
    ]),
    datasetLd({ name: fmt(t.metaTitle, vars), description: fmt(t.metaDescription, vars), path, sources: data.sources, countries: [ISO[c]] }),
  )
  const maxCat = Math.max(1, ...data.categories.map((x) => x.count))

  return (
    <div className="bg-[#0A0A0A] text-white">
      <JsonLd data={ld} />
      <Hero>
        <Breadcrumbs items={[{ name: copy.crumb, href: `/${locale}/procurement` }, { name: data.name }]} />
        <p className="mt-6 text-sm font-semibold text-[#9DB6DC]">{fmt(t.eyebrow, vars)}</p>
        <h1 className="mt-2 max-w-4xl font-heading text-[2.1rem] leading-[1.1] font-bold tracking-tight sm:text-5xl">{data.name}</h1>
        <p className="mt-5 max-w-3xl text-lg text-neutral-200">{fmt(t.summary, { awards: data.awards, awards12: data.awards12 })}</p>
      </Hero>

      <div className="mx-auto max-w-7xl space-y-14 px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Stat label={t.kAwards} value={String(data.awards)} />
          <Stat label={t.kAwards12} value={String(data.awards12)} />
          <Stat label={t.kMedian} value={money(locale, data.median, cur, true) ?? copy.table.notStated} note={copy.category.kMedianNote} />
          <Stat label={t.kOpen} value={String(data.open.length)} />
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <section aria-labelledby="buys" className={`${card} p-6`}>
            <h2 id="buys" className="font-heading text-2xl font-bold">
              {t.catsTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {data.categories.map((x) => (
                <li key={x.slug}>
                  <Link href={`/${locale}/procurement/${c}/${x.slug}`} className="group block rounded-lg transition-colors">
                    <span className="flex justify-between gap-3 text-sm">
                      <span className="text-neutral-200 group-hover:text-white group-hover:underline">{categoryName(locale, x.slug)}</span>
                      <span className="text-neutral-400 tabular-nums">{x.count}</span>
                    </span>
                    <span className="mt-1.5 block h-1.5 rounded-full bg-white/[0.06]">
                      <span className="block h-1.5 rounded-full bg-[#7D9CCB]" style={{ width: `${(x.count / maxCat) * 100}%` }} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <SourceLine sources={data.sources} locale={locale} />
          </section>

          <section aria-labelledby="recent" className={`${card} p-6`}>
            <h2 id="recent" className="font-heading text-2xl font-bold">
              {t.recentTitle}
            </h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead className="border-b border-white/10 text-left text-neutral-300">
                  <tr>
                    <th scope="col" className="py-2 pr-4 font-semibold">{copy.table.title}</th>
                    <th scope="col" className="py-2 pr-4 font-semibold">{copy.table.supplier}</th>
                    <th scope="col" className="py-2 pr-4 font-semibold">{copy.table.awarded}</th>
                    <th scope="col" className="py-2 text-right font-semibold">{copy.table.value}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recent.map((a, i) => (
                    <tr key={i} className="border-b border-white/5 align-top transition-colors last:border-0 hover:bg-white/[0.04]">
                      <td className="py-3 pr-4 text-white">
                        {a.url ? (
                          <a href={a.url} target="_blank" rel="noopener" className="hover:text-[#9DB6DC]">
                            {a.title}
                            <span className="sr-only"> ({copy.table.opensNew})</span>
                          </a>
                        ) : (
                          a.title
                        )}
                      </td>
                      <td className="py-3 pr-4 text-neutral-300">{a.supplier ?? copy.table.notStated}</td>
                      <td className="py-3 pr-4 whitespace-nowrap text-neutral-300 tabular-nums">{date(locale, a.awarded)}</td>
                      <td className="py-3 text-right whitespace-nowrap text-neutral-300 tabular-nums">{money(locale, a.value, a.currency ?? cur) ?? copy.table.notStated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <SourceLine sources={data.sources} locale={locale} />
          </section>
        </div>

        <Section id="buyer-open" title={t.openTitle}>
          <div className="mt-5">
            {data.open.length ? <TenderTable rows={data.open} locale={locale} currency={cur} t={copy.table} withSoonFilter={false} /> : <p className="text-neutral-300">{t.openEmpty}</p>}
          </div>
          <SourceLine sources={data.sources} locale={locale} />
        </Section>
      </div>
      <Framing title={t.framingTitle} paragraphs={t.framing.map((p) => fmt(p, vars))} />
    </div>
  )
}
