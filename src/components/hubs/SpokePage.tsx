import Link from 'next/link'
import { getMessages, getTranslations } from 'next-intl/server'
import ClosingBand from '@/src/components/sections/ClosingBand'
import PlatformStack from '@/src/components/sections/PlatformStack'
import { getInsightBySlug } from '@/src/data/insights'
import { getPlatformsForSolution } from '@/src/data/platforms'
import { HUB_SPOKES, getSpokeView, spokeKeywords, spokePath, type SpokeView } from '@/src/data/hubs'
import { breadcrumbLd, jsonLdScript, provider, baseUrl } from '@/src/lib/seo'
import HubAssistant from './HubAssistant'
import Breadcrumbs from './Breadcrumbs'
import { Faq } from './HubPage'

type Shared = { hubs: { chrome: { spoke: { sharedHow: string[]; sharedKeep: string[]; sharedFaq: { q: string; a: string }[] } } } }

export async function spokeFaq(v: SpokeView, locale: string) {
  const ts = await getTranslations({ locale, namespace: 'hubs.chrome.spoke' })
  const shared = ((await getMessages({ locale })) as unknown as Shared).hubs.chrome.spoke
  return v.faq ?? [{ q: ts('includesQ', { title: v.title.toLowerCase() }), a: v.whatWeDo.join('. ') + '.' }, ...shared.sharedFaq]
}

function Dot({ tone }: { tone: 'warn' | 'ok' }) {
  return <span className={`mt-2 h-2 w-2 flex-shrink-0 rounded-full ${tone === 'warn' ? 'bg-[#F59E0B]' : 'bg-[#00AEEF]'}`} aria-hidden="true" />
}

export default async function SpokePage({ view: v, locale }: { view: SpokeView; locale: string }) {
  const t = await getTranslations({ locale })
  const tc = await getTranslations({ locale, namespace: 'hubs.chrome' })
  const ts = await getTranslations({ locale, namespace: 'hubs.chrome.spoke' })
  const shared = ((await getMessages({ locale })) as unknown as Shared).hubs.chrome.spoke
  const tr = (k: string) => t(k as Parameters<typeof t>[0])
  const hubName = v.hub === 'games' ? t('hubs.chrome.index.extra.games.name') : t(`hubs.hub.${v.hub}.name` as Parameters<typeof t>[0])
  const hubPath = `/${v.hub}`
  const path = spokePath(v.slug)
  const faq = await spokeFaq(v, locale)
  const how = v.howItRuns ?? shared.sharedHow
  const keep = v.keep ?? shared.sharedKeep
  const platforms = v.platformSlug ? getPlatformsForSolution(v.platformSlug) : []
  const insights = v.insights.map((s) => getInsightBySlug(s)).filter((x) => !!x)
  const related = v.related.map((s) => ({ slug: s, title: getSpokeView(s, locale, tr)?.title ?? s, href: `/${locale}${spokePath(s)}` }))
  const assistantSpokes = (v.hub === 'games' ? [v.slug, ...v.related] : HUB_SPOKES[v.hub]).map((s) => ({
    slug: s,
    title: getSpokeView(s, locale, tr)?.title ?? s,
    href: `/${locale}${spokePath(s)}`,
    keywords: s === v.slug ? [] : spokeKeywords(s),
  }))
  const crumbs = [
    { name: tc('home'), path: '' },
    { name: tc('services'), path: '/solutions' },
    { name: hubName, path: hubPath },
    { name: v.title, path },
  ]
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: v.title,
      serviceType: v.portalCategory ?? v.title,
      description: v.seo,
      url: `${baseUrl()}/${locale}${path}`,
      areaServed: 'North America',
      provider: provider(),
      isRelatedTo: { '@type': 'Service', name: hubName, url: `${baseUrl()}/${locale}${hubPath}` },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    breadcrumbLd(locale, crumbs),
  ]
  const h2 = 'font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl'
  const cta = 'inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#0A0A0A] hover:bg-[#E5E5E5]'

  return (
    <div className="bg-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20" aria-labelledby="spoke-title">
        <div className="pointer-events-none absolute top-0 right-[-10%] h-[560px] w-[760px] max-w-[160vw] opacity-[0.14]" style={{ background: 'radial-gradient(closest-side, #00AEEF, #0F1D33 60%, transparent)' }} aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs items={crumbs} locale={locale} />
          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,460px)] lg:gap-14">
            <div className="lg:pt-4">
              <Link href={`/${locale}${hubPath}`} className="text-sm font-semibold text-[#7D9CCB] hover:text-white">
                {ts('partOf', { hub: hubName.toLowerCase() })}
              </Link>
              <h1 id="spoke-title" className="mt-3 font-heading text-[2.1rem] leading-[1.08] font-bold tracking-tight text-white sm:text-5xl">
                {v.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">{v.answer}</p>
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
            <HubAssistant hub={v.slug} hubName={v.title} spokes={assistantSpokes} starters={v.problem.slice(0, 2)} />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0B1322] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0 space-y-14">
            <div>
              <h2 className={h2}>{ts('problemTitle')}</h2>
              {v.headline && <p className="mt-4 font-heading text-lg font-semibold text-[#B9CCE6]">{v.headline}</p>}
              <ul className="mt-6 space-y-3">
                {v.problem.map((p) => (
                  <li key={p} className="flex gap-3 text-base leading-relaxed text-neutral-300">
                    <Dot tone="warn" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={h2}>{ts('whatWeDoTitle')}</h2>
              <ol className="mt-6 space-y-4">
                {v.whatWeDo.map((p, i) => (
                  <li key={p} className="flex gap-4 text-base leading-relaxed text-neutral-300">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/15 font-heading text-sm font-semibold text-white">{i + 1}</span>
                    <span className="pt-1">{p}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className={h2}>{ts('howTitle')}</h2>
              <ol className="mt-6 grid gap-4 md:grid-cols-3">
                {how.map((p, i) => (
                  <li key={p} className="hub-card rounded-3xl border border-white/[0.08] bg-[#111827] p-5">
                    <span className="font-heading text-sm font-semibold text-[#00AEEF]">{String(i + 1).padStart(2, '0')}</span>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-200">{p}</p>
                  </li>
                ))}
              </ol>
            </div>
            {platforms.length > 0 && (
              <div id="platforms-section" className="scroll-mt-24">
                <PlatformStack platforms={platforms} heading={ts('platformsTitle')} subheading={ts('platformsSubtitle')} tapHint={ts('platformsTapHint')} />
              </div>
            )}
            {v.outcomes && (
              <div>
                <h2 className={h2}>{ts('outcomesTitle')}</h2>
                <ul className="mt-6 space-y-3">
                  {v.outcomes.map((p) => (
                    <li key={p} className="flex gap-3 text-base leading-relaxed text-neutral-300">
                      <Dot tone="ok" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h2 className={h2}>{ts('keepTitle')}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {keep.map((p) => (
                  <li key={p} className="rounded-2xl border border-white/[0.08] bg-[#111827] p-5 text-sm leading-relaxed text-neutral-200">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            {v.portalCategory && (
              <div className="rounded-3xl border border-[#00AEEF]/30 bg-[#0F1D33] p-6">
                <h2 className="font-heading text-lg font-semibold text-white">{ts('govTitle')}</h2>
                <p className="mt-2 text-base text-neutral-300">{ts('govText', { category: `“${v.portalCategory}”` })}</p>
                <p className="mt-1 text-sm text-neutral-400">{ts('govCodes')}</p>
                <Link href={`/${locale}/public-sector`} className="mt-4 inline-flex text-sm font-semibold text-white underline underline-offset-4 hover:text-[#B9CCE6]">
                  {ts('govLink')}
                </Link>
              </div>
            )}
            <div>
              <h2 className={h2}>{tc('faqTitle')}</h2>
              <Faq items={faq} />
            </div>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-6">
              <h2 className="font-heading text-xl font-semibold text-white">{tc('sideTitle')}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{tc('sideText')}</p>
              <Link href={`/${locale}/contact`} className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A0A0A] hover:bg-[#E5E5E5]">
                {t('closing.cta')}
              </Link>
            </div>
            <nav aria-labelledby="spoke-related">
              <h2 id="spoke-related" className="text-sm font-semibold text-neutral-400">
                {ts('relatedTitle')}
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href={`/${locale}${hubPath}`} className="block rounded-2xl border border-white/10 p-3 text-sm font-semibold text-white hover:border-white/30">
                    {hubName}
                  </Link>
                </li>
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={r.href} className="block rounded-2xl border border-white/10 p-3 text-sm text-neutral-200 hover:border-white/30 hover:text-white">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {insights.length > 0 && (
              <nav aria-labelledby="spoke-insights">
                <h2 id="spoke-insights" className="text-sm font-semibold text-neutral-400">
                  {tc('insightsTitle')}
                </h2>
                <ul className="mt-3 space-y-2">
                  {insights.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/${locale}/insights/${p.slug}`} className="block rounded-2xl border border-white/10 p-3 text-sm text-neutral-200 hover:border-white/30 hover:text-white">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </aside>
        </div>
      </section>

      <ClosingBand title={ts('closingTitle')} text={ts('closingText')} />
    </div>
  )
}
