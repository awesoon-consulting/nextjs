import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { getIntegrationsIndex, getPair, type PlatformFacts } from '@/src/lib/cost-platform/integrations'
import { baseUrl } from '@/src/lib/cost-platform/shared'
import FlowDiagram from '@/src/components/cost-platform/FlowDiagram'
import PromptBox from '@/src/components/cost-platform/PromptBox'
import { CtaBand, DataSoon, Hero, JsonLd, SourceLine, breadcrumbLd, card, chip, ghostBtn, linkCls, primaryBtn } from '@/src/components/cost-platform/ui'

export const revalidate = 86400

type Params = { locale: string; pair: string }

export async function generateStaticParams() {
  const idx = await getIntegrationsIndex()
  return siteConfig.locales.flatMap((locale) => (idx?.pairs ?? []).map((p) => ({ locale, pair: p.slug })))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, pair } = await params
  const t = await getTranslations({ locale, namespace: 'costPlatform' })
  const res = await getPair(pair)
  const path = `/integrations/${pair}`
  const alternates = { canonical: `/${locale}${path}`, languages: { en: `/en${path}`, fr: `/fr${path}`, es: `/es${path}`, 'x-default': `/en${path}` } }
  if (res.state !== 'ok') return { title: t('common.soonTitle'), robots: { index: false, follow: true }, alternates }
  const v = { a: res.pair.a.name, b: res.pair.b.name }
  const title = t('integration.metaTitle', v)
  const description = t('integration.metaDescription', v)
  return { title, description, alternates, openGraph: { type: 'article', title, description, url: `/${locale}${path}`, siteName: siteConfig.name, locale } }
}

export default async function IntegrationPairPage({ params }: { params: Promise<Params> }) {
  const { locale, pair } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'costPlatform' })
  const res = await getPair(pair)
  if (res.state === 'missing') notFound()
  const contact = `/${locale}/contact`
  const base = baseUrl()

  if (res.state === 'soon') {
    const crumbs = [
      { name: t('common.home'), href: `/${locale}` },
      { name: t('integrationsIndex.breadcrumb'), href: `/${locale}/integrations` },
    ]
    return (
      <div className="bg-primary text-white">
        <Hero crumbs={crumbs} title={t('integrationsIndex.title')}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">{t('integrationsIndex.intro')}</p>
        </Hero>
        <DataSoon title={t('common.soonTitle')} text={t('common.soonText')} cta={t('common.bookCall')} href={contact} />
      </div>
    )
  }

  const { a, b } = res.pair
  const cat = (p: PlatformFacts) => t(`integration.categories.${p.category}`)
  const authList = (p: PlatformFacts) => (p.auth.length ? p.auth.map((x) => (t.has(`integration.authNames.${x}`) ? t(`integration.authNames.${x}`) : x)).join(', ') : t('integration.authNone'))
  const v = { a: a.name, b: b.name, catA: cat(a), catB: cat(b) }
  const path = `/${locale}/integrations/${pair}`
  const crumbs = [
    { name: t('common.home'), href: `/${locale}` },
    { name: t('integrationsIndex.breadcrumb'), href: `/${locale}/integrations` },
    { name: t('integration.metaTitle', v), href: path },
  ]
  const spec = t('common.fromSpec')
  const rows: { k: string; fa: React.ReactNode; fb: React.ReactNode; fromSpec: boolean }[] = [
    { k: t('integration.auth'), fa: authList(a), fb: authList(b), fromSpec: true },
    { k: t('integration.webhooks'), fa: t(a.webhooks ? 'integration.webhooksYes' : 'integration.webhooksNo'), fb: t(b.webhooks ? 'integration.webhooksYes' : 'integration.webhooksNo'), fromSpec: true },
    {
      k: t('integration.objects'),
      fa: (
        <a href={a.specUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
          {t('integration.readSpec')}
        </a>
      ),
      fb: (
        <a href={b.specUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
          {t('integration.readSpec')}
        </a>
      ),
      fromSpec: true,
    },
    { k: t('integration.limits'), fa: t('integration.limitsNote'), fb: t('integration.limitsNote'), fromSpec: false },
    { k: t('integration.version'), fa: a.version ?? '·', fb: b.version ?? '·', fromSpec: true },
  ]
  const cats = [...new Set([a.category, b.category])]
  const breaks = cats.map((c) => ({ c, items: t.raw(`integration.breaks.${c}`) as string[] }))
  const labels = { source: t('common.source'), licence: t('common.licence'), lastUpdated: t('common.lastUpdated'), period: t('common.period'), notYet: t('common.notYet') }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbLd(base, crumbs),
      {
        '@type': 'Dataset',
        name: t('integration.tableTitle') + `: ${a.name}, ${b.name}`,
        description: t('integration.metaDescription', v),
        url: `${base}${path}`,
        isAccessibleForFree: true,
        license: 'https://creativecommons.org/publicdomain/zero/1.0/',
        creator: { '@type': 'Organization', name: 'APIs.guru', url: 'https://apis.guru/' },
        publisher: { '@type': 'Organization', name: 'Awesoon Technologies Inc.', founder: { '@type': 'Person', name: 'Ray Rasouli' } },
        distribution: [a, b].map((p) => ({ '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: p.specUrl, name: `${p.name} OpenAPI` })),
        ...(res.source?.lastUpdated ? { dateModified: res.source.lastUpdated } : {}),
      },
    ],
  }

  return (
    <div className="bg-primary text-white">
      <JsonLd data={jsonLd} />
      <Hero crumbs={crumbs} title={t('integration.title', v)}>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">{t(a.category === b.category ? 'integration.introSame' : 'integration.intro', v)}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href={contact} className={primaryBtn}>
            {t('common.bookCall')}
          </Link>
          <a href="#prompt" className={ghostBtn}>
            {t('integration.promptTitle')}
          </a>
        </div>
      </Hero>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="facts-title">
        <h2 id="facts-title" className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {t('integration.tableTitle')}
        </h2>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full border-collapse sm:min-w-[560px] text-left text-[15px]">
            <thead className="bg-white/[0.03] text-xs font-semibold tracking-wide text-neutral-400 uppercase">
              <tr>
                <th scope="col" className="w-[28%] px-3 py-3 sm:w-[22%] sm:px-4">{t('integration.fact')}</th>
                <th scope="col" className="px-4 py-3 text-sm tracking-normal text-white normal-case">{a.name}</th>
                <th scope="col" className="px-4 py-3 text-sm tracking-normal text-white normal-case">{b.name}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.k} className="border-t border-white/10 align-top transition-colors hover:bg-white/[0.03]">
                  <th scope="row" className="px-4 py-3.5 font-medium text-neutral-300">{r.k}</th>
                  {[r.fa, r.fb].map((f, i) => (
                    <td key={i} className="px-4 py-3.5 text-neutral-100">
                      <div>{f}</div>
                      {r.fromSpec && <span className="mt-1.5 inline-block rounded-full border border-[#9DB6DC]/30 px-2 py-0.5 text-[11px] font-semibold text-[#9DB6DC]">{spec}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {res.source && <SourceLine source={res.source} labels={labels} locale={locale} />}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="flow-title">
        <div className={`${card} p-6 sm:p-8`}>
          <h2 id="flow-title" className="font-heading text-2xl font-semibold tracking-tight text-white">
            {t('integration.flowTitle')}
          </h2>
          <div className="mt-6">
            <FlowDiagram a={a.name} b={b.name} catA={cat(a)} catB={cat(b)} layer={t('integration.flowLayer')} layerSub={t('integration.flowLayerSub')} retry={t('integration.flowRetry')} label={t('integration.flowTitle')} />
          </div>
          <p className="mt-4 text-center text-sm text-neutral-400">{t('integration.flowNote')}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">{t('integration.breaksTitle')}</h2>
          <p className="mt-2 text-neutral-400">{t('integration.breaksIntro', v)}</p>
          {breaks.map(({ c, items }) => (
            <div key={c} className="mt-6">
              <h3 className="text-sm font-semibold text-[#9DB6DC]">{t(`integration.categories.${c}`)}</h3>
              <ol className="mt-3 space-y-3">
                {items.map((x, i) => (
                  <li key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#0F1D33] text-sm font-semibold text-white tabular-nums">{i + 1}</span>
                    <span className="leading-relaxed text-neutral-200">{x}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <div id="prompt" className="scroll-mt-24">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">{t('integration.promptTitle')}</h2>
          <p className="mt-2 text-neutral-400">{t('integration.promptHint')}</p>
          <div className="mt-5">
            <PromptBox prompt={t('integration.prompt', { ...v, authA: authList(a), authB: authList(b) })} copy={t('integration.copy')} copied={t('integration.copied')} />
          </div>
          {res.related.length > 0 && (
            <div className="mt-10">
              <h3 className="font-heading text-lg font-semibold text-white">{t('integration.relatedTitle')}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {res.related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/${locale}/integrations/${p.slug}`} className={chip}>
                      {p.a.name} + {p.b.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <CtaBand title={t('integration.ctaTitle')} text={t('integration.ctaText')} cta={t('common.bookCall')} href={contact} note={t('common.founderLine')} />
    </div>
  )
}
