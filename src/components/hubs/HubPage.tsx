import Link from 'next/link'
import { getMessages, getTranslations } from 'next-intl/server'
import ClosingBand from '@/src/components/sections/ClosingBand'
import FounderBand from '@/src/components/sections/FounderBand'
import { getInsightBySlug } from '@/src/data/insights'
import { HUB_INSIGHTS, HUB_SPOKES, getSpokeView, spokeKeywords, spokePath, type HubId } from '@/src/data/hubs'
import { breadcrumbLd, jsonLdScript, provider, baseUrl } from '@/src/lib/seo'
import HubAssistant from './HubAssistant'
import HubChooser from './HubChooser'
import AskButton from './AskButton'
import Breadcrumbs from './Breadcrumbs'

type HubMsgs = { hubs: { hub: Record<HubId, { faq: { q: string; a: string }[]; choose: { spoke: string; label: string }[] }> } }

export default async function HubPage({ hub, locale }: { hub: HubId; locale: string }) {
  const t = await getTranslations({ locale })
  const th = await getTranslations({ locale, namespace: `hubs.hub.${hub}` })
  const tc = await getTranslations({ locale, namespace: 'hubs.chrome' })
  const m = (await getMessages({ locale })) as unknown as HubMsgs
  const tr = (k: string) => t(k as Parameters<typeof t>[0])
  const spokes = HUB_SPOKES[hub].map((s) => getSpokeView(s, locale, tr)!).map((v) => ({ ...v, href: `/${locale}${spokePath(v.slug)}` }))
  const name = th('name')
  const faq = m.hubs.hub[hub].faq
  const choose = m.hubs.hub[hub].choose
  const insights = HUB_INSIGHTS[hub].map((s) => getInsightBySlug(s)).filter((x) => !!x)
  const crumbs = [
    { name: tc('home'), path: '' },
    { name: tc('services'), path: '/solutions' },
    { name, path: `/${hub}` },
  ]

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      description: th('metaDescription'),
      url: `${baseUrl()}/${locale}/${hub}`,
      areaServed: 'North America',
      provider: provider(),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name,
        itemListElement: spokes.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, url: `${baseUrl()}${s.href}` } })),
      },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    breadcrumbLd(locale, crumbs),
  ]

  const h2 = 'font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl'
  const cta = 'inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#0A0A0A] hover:bg-[#E5E5E5]'

  return (
    <div className="bg-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20" aria-labelledby="hub-title">
        <div className="pointer-events-none absolute top-0 right-[-10%] h-[620px] w-[820px] max-w-[160vw] opacity-[0.16]" style={{ background: 'radial-gradient(closest-side, #00AEEF, #0F1D33 60%, transparent)' }} aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs items={crumbs} locale={locale} />
          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-14">
            <div className="lg:pt-4">
              <p className="text-sm font-semibold text-[#7D9CCB]">{spokes.length} {tc('services').toLowerCase()}</p>
              <h1 id="hub-title" className="mt-3 font-heading text-[2.1rem] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                {th('title')}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">{th('answer')}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link href={`/${locale}/contact`} className={cta}>
                  {t('closing.cta')}
                </Link>
                <a href="#hub-assistant" className="group inline-flex items-center gap-2 text-base font-semibold text-white underline-offset-4 hover:underline">
                  {tc('askHero')}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                </a>
              </div>
              <p className="mt-6 text-sm text-neutral-400">{tc('trust')}</p>
            </div>
            <HubAssistant hub={hub} hubName={name} starters={choose.slice(0, 3).map((c) => c.label)} spokes={spokes.map((s) => ({ slug: s.slug, title: s.title, href: s.href, keywords: spokeKeywords(s.slug) }))} />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0B1322] py-20 sm:py-24" aria-labelledby="hub-spokes">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold text-[#7D9CCB]">{tc('spokesKicker')}</p>
          <h2 id="hub-spokes" className={`mt-2 ${h2}`}>
            {tc('spokesTitle', { hub: name.toLowerCase() })}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-300">{tc('spokesIntro')}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {spokes.map((s, i) => (
              <li key={s.slug} className="hub-card group relative flex flex-col rounded-3xl border border-white/[0.08] bg-[#111827] p-6 hover:border-white/25">
                <span className="font-heading text-sm font-semibold text-[#00AEEF]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-heading text-xl font-semibold text-white">
                  <Link href={s.href} className="after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-neutral-300">{s.answer}</p>
                <div className="relative z-10 mt-5 flex items-center gap-5">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white" aria-hidden="true">
                    {tc('readPage')} <span className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                  </span>
                  <AskButton text={s.title} label={tc('askAbout')} className="text-sm text-neutral-300 underline-offset-4 hover:text-white hover:underline" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full py-20 sm:py-24" aria-labelledby="hub-chooser">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="hub-chooser" className={h2}>
            {tc('chooserTitle')}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-300">{tc('chooserIntro')}</p>
          <HubChooser
            options={choose.map((c) => {
              const s = spokes.find((x) => x.slug === c.spoke)!
              return { slug: c.spoke, label: c.label, title: s.title, answer: s.answer, href: s.href }
            })}
            labels={{ startHere: tc('startHere'), readPage: tc('readPage'), askFits: tc('askFits'), group: tc('chooserTitle') }}
          />
        </div>
      </section>

      {insights.length > 0 && (
        <section className="w-full bg-[#0B1322] py-20 sm:py-24" aria-labelledby="hub-insights">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 id="hub-insights" className={h2}>
              {tc('insightsTitle')}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {insights.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${locale}/insights/${p.slug}`} className="block h-full rounded-3xl border border-white/[0.08] bg-[#111827] p-6 hover:border-white/25">
                    <p className="text-sm text-[#7D9CCB]">{p.category}</p>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-neutral-300">{p.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="w-full py-20 sm:py-24" aria-labelledby="hub-faq">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_340px]">
          <div>
            <h2 id="hub-faq" className={h2}>
              {tc('faqTitle')}
            </h2>
            <Faq items={faq} />
          </div>
          <aside className="h-fit rounded-3xl border border-white/[0.08] bg-[#111827] p-6 lg:sticky lg:top-28">
            <h2 className="font-heading text-xl font-semibold text-white">{tc('sideTitle')}</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">{tc('sideText')}</p>
            <Link href={`/${locale}/contact`} className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A0A0A] hover:bg-[#E5E5E5]">
              {t('closing.cta')}
            </Link>
            <p className="mt-3 text-center text-xs text-neutral-400">{tc('sideNote')}</p>
          </aside>
        </div>
      </section>

      <FounderBand />
      <ClosingBand title={th('closingTitle')} text={th('closingText')} />
    </div>
  )
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
      {items.map((x) => (
        <details key={x.q} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-lg font-semibold text-white hover:text-[#B9CCE6]">
            {x.q}
            <svg className="h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-45 motion-reduce:transition-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeWidth={2} d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="pb-5 text-base leading-relaxed text-neutral-300">{x.a}</p>
        </details>
      ))}
    </div>
  )
}
