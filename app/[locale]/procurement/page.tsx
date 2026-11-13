import type { Metadata } from 'next'
import Link from 'next/link'
import { setRequestLocale } from 'next-intl/server'
import HubSwitcher, { Tile } from '@/src/components/procurement/HubSwitcher'
import { DataSoon, Framing, Hero, JsonLd, SourceLine, card, ghostBtn, textLink } from '@/src/components/procurement/ui'
import { COUNTRY_SLUGS, CURRENCY, ISO, getHubData } from '@/src/lib/procurement/data'
import { categoryName, date, fmt, getCopy, money } from '@/src/lib/procurement/copy'
import { breadcrumbLd, datasetLd, graph, pageMeta } from '@/src/lib/procurement/seo'

export const revalidate = 86400

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = getCopy(locale).hub
  const data = await getHubData()
  const indexable = !!data && COUNTRY_SLUGS.some((c) => data.countries[c].categories.some((x) => x.open > 0 || x.awards12 >= 3))
  return pageMeta(locale, '/procurement', t.metaTitle, t.metaDescription, indexable)
}

export default async function ProcurementHub({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const copy = getCopy(locale)
  const t = copy.hub
  const data = await getHubData()

  const ld = graph(
    breadcrumbLd([{ name: copy.crumb, path: `/${locale}/procurement` }]),
    ...(data
      ? [datasetLd({ name: t.metaTitle, description: t.metaDescription, path: `/${locale}/procurement`, sources: COUNTRY_SLUGS.flatMap((c) => data.countries[c].sources), countries: COUNTRY_SLUGS.map((c) => ISO[c]) })]
      : []),
  )

  return (
    <div className="bg-[#0A0A0A] text-white">
      <JsonLd data={ld} />
      <Hero>
        <p className="text-sm font-semibold text-[#9DB6DC]">{t.eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-heading text-[2.25rem] leading-[1.08] font-bold tracking-tight sm:text-5xl">{t.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">{t.lead}</p>
      </Hero>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {!data ? (
          <DataSoon locale={locale} />
        ) : (
          <HubSwitcher
            label={t.countryLabel}
            panels={COUNTRY_SLUGS.map((c) => {
              const d = data.countries[c]
              return {
                country: c,
                label: copy.countries[c],
                content: (
                  <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
                    <section aria-labelledby={`cats-${c}`}>
                      <h2 id={`cats-${c}`} className="font-heading text-2xl font-bold">
                        {t.categoriesTitle}
                      </h2>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {[...d.categories]
                          .sort((a, b) => b.open - a.open || b.awards12 - a.awards12)
                          .map((x) => (
                            <Tile
                              key={x.slug}
                              href={`/${locale}/procurement/${c}/${x.slug}`}
                              name={categoryName(locale, x.slug)}
                              open={x.open}
                              awards={x.awards12}
                              openLabel={t.open}
                              awardsLabel={t.awards12}
                            />
                          ))}
                      </div>
                      <SourceLine sources={d.sources} locale={locale} />
                    </section>
                    <aside className="space-y-6">
                      <section aria-labelledby={`new-${c}`} className={`${card} p-6`}>
                        <h2 id={`new-${c}`} className="font-heading text-xl font-bold">
                          {t.newestTitle}
                        </h2>
                        {d.newest.length === 0 ? (
                          <p className="mt-3 text-sm text-neutral-300">{fmt(t.newestEmpty, { country: copy.countries[c] })}</p>
                        ) : (
                          <ul className="mt-4 divide-y divide-white/10">
                            {d.newest.map((n, i) => (
                              <li key={i} className="py-3">
                                {n.url ? (
                                  <a href={n.url} target="_blank" rel="noopener" className="text-sm font-medium text-white transition-colors hover:text-[#9DB6DC]">
                                    {n.title}
                                    <span className="sr-only"> ({copy.table.opensNew})</span>
                                  </a>
                                ) : (
                                  <span className="text-sm font-medium">{n.title}</span>
                                )}
                                <p className="mt-1 text-xs text-neutral-400">
                                  {[n.buyer, n.closes && `${copy.table.closes} ${date(locale, n.closes)}`, money(locale, n.value, n.currency ?? CURRENCY[c], true)]
                                    .filter(Boolean)
                                    .join(' · ')}
                                </p>
                              </li>
                            ))}
                          </ul>
                        )}
                        <Link href={`/${locale}/procurement/digest/${c}`} className={`${textLink} mt-4 inline-block text-sm text-neutral-200`}>
                          {fmt(t.digestLink, { country: copy.countries[c] })}
                        </Link>
                      </section>
                      <section aria-labelledby={`report-${c}`} className="rounded-2xl border border-[#7D9CCB]/30 bg-[#0D1420] p-6">
                        <h2 id={`report-${c}`} className="font-heading text-xl font-bold">
                          {t.reportTitle}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-300">{t.reportText}</p>
                        <Link href={`/${locale}/procurement/report`} className={`${ghostBtn} mt-5 min-h-11 px-5 py-2 text-sm`}>
                          {t.reportCta}
                        </Link>
                      </section>
                    </aside>
                  </div>
                ),
              }
            })}
          />
        )}
      </div>
      <Framing title={t.framingTitle} paragraphs={t.framing} />
    </div>
  )
}
