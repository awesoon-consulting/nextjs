import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Breadcrumbs, DataSoon, Framing, Hero, JsonLd, SourceLine, card } from '@/src/components/procurement/ui'
import { COUNTRY_SLUGS, CURRENCY, ISO, getReportData } from '@/src/lib/procurement/data'
import { fmt, getCopy, money } from '@/src/lib/procurement/copy'
import { breadcrumbLd, datasetLd, graph, pageMeta } from '@/src/lib/procurement/seo'

export const revalidate = 86400

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = getCopy(locale).report
  const data = await getReportData()
  return pageMeta(locale, '/procurement/report', t.metaTitle, t.metaDescription, !!data && data.quarters.length >= 2)
}

export default async function ReportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const copy = getCopy(locale)
  const t = copy.report
  const data = await getReportData()
  const ready = !!data && data.quarters.length >= 2
  const path = `/${locale}/procurement/report`
  const ld = graph(
    breadcrumbLd([
      { name: copy.crumb, path: `/${locale}/procurement` },
      { name: t.title, path },
    ]),
    ...(ready ? [datasetLd({ name: t.title, description: t.metaDescription, path, sources: data.sources, countries: COUNTRY_SLUGS.map((c) => ISO[c]) })] : []),
  )

  return (
    <div className="bg-[#0A0A0A] text-white">
      <JsonLd data={ld} />
      <Hero>
        <Breadcrumbs items={[{ name: copy.crumb, href: `/${locale}/procurement` }, { name: t.eyebrow }]} />
        <h1 className="mt-5 max-w-4xl font-heading text-[2.1rem] leading-[1.1] font-bold tracking-tight sm:text-5xl">{t.title}</h1>
      </Hero>
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {!data ? (
          <DataSoon locale={locale} />
        ) : !ready ? (
          <div className={`${card} p-8`} role="status">
            <p className="max-w-2xl text-lg text-neutral-200">{fmt(t.placeholder, { first: data.quarters[0] ?? '' })}</p>
          </div>
        ) : (
          <section aria-labelledby="report-table" className={`${card} p-6`}>
            <h2 id="report-table" className="font-heading text-2xl font-bold">
              {t.tableTitle}
            </h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm">
                <thead className="border-b border-white/10 text-left text-neutral-300">
                  <tr>
                    <th scope="col" className="py-2 pr-4">{t.colCountry}</th>
                    <th scope="col" className="py-2 pr-4">{t.colQuarter}</th>
                    <th scope="col" className="py-2 pr-4 text-right">{t.colAwards}</th>
                    <th scope="col" className="py-2 text-right">{t.colMedian}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.rows.map((r) => (
                    <tr key={r.country + r.quarter} className="border-b border-white/5 last:border-0">
                      <td className="py-3 pr-4">{copy.countries[r.country]}</td>
                      <td className="py-3 pr-4 tabular-nums">{r.quarter}</td>
                      <td className="py-3 pr-4 text-right tabular-nums">{r.awards}</td>
                      <td className="py-3 text-right tabular-nums">{money(locale, r.median, CURRENCY[r.country]) ?? copy.table.notStated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <SourceLine sources={data.sources} locale={locale} />
          </section>
        )}
      </div>
      <Framing title={t.framingTitle} paragraphs={t.framing} />
    </div>
  )
}
