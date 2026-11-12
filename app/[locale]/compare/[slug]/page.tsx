import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { COMPARISONS, getAllComparisonSlugs, getComparison } from '@/src/data/compare'
import { asLocale, getTerm } from '@/src/data/glossary'
import GlossaryAssistant from '@/src/components/sections/glossary/GlossaryAssistant'
import AskButton from '@/src/components/sections/glossary/AskButton'
import Situations from '@/src/components/sections/glossary/Situations'
import { Closing, Crumbs, Faq, Hero, SideCta } from '@/src/components/sections/glossary/Shell'
import { JsonLd, baseUrl, pageMeta } from '@/src/components/sections/glossary/seo'
import { eyebrow, ghostBtn, h2, lift, primaryBtn } from '@/src/components/sections/glossary/ui'

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) => getAllComparisonSlugs().map((slug) => ({ locale, slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const c = getComparison(slug)
  if (!c) return {}
  const copy = c.copy[asLocale(locale)]
  return pageMeta(locale, `/compare/${slug}`, copy.title, copy.intro, 'article')
}

export default async function ComparisonPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const c = getComparison(slug)
  if (!c) notFound()
  const t = await getTranslations({ locale, namespace: 'comparePage' })
  const tg = await getTranslations({ locale, namespace: 'glossaryPage' })
  const l = asLocale(locale)
  const copy = c.copy[l]
  const contact = `/${locale}/contact`
  const fmt = (d: string) => new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(d))
  const url = `${baseUrl()}/${locale}/compare/${c.slug}`
  const terms = c.relatedTerms.map(getTerm).filter((x) => x !== undefined)
  const others = COMPARISONS.filter((x) => x.slug !== c.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: copy.title,
        description: copy.intro,
        url,
        inLanguage: locale,
        dateModified: c.checked,
        author: { '@type': 'Person', name: 'Ray Rasouli' },
        publisher: { '@type': 'Organization', name: 'Awesoon Technologies Inc.', url: baseUrl() },
        about: [{ '@type': 'SoftwareApplication', name: c.a }, { '@type': 'SoftwareApplication', name: c.b }],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('crumbHome'), item: `${baseUrl()}/${locale}` },
          { '@type': 'ListItem', position: 2, name: t('crumbCompare'), item: `${baseUrl()}/${locale}/compare` },
          { '@type': 'ListItem', position: 3, name: copy.title, item: url },
        ],
      },
      { '@type': 'FAQPage', mainEntity: copy.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  }

  return (
    <div className="bg-[#0A0A0A]">
      <JsonLd data={jsonLd} />
      <Hero
        crumbs={<Crumbs items={[{ label: t('crumbHome'), href: `/${locale}` }, { label: t('crumbCompare'), href: `/${locale}/compare` }, { label: `${c.a} vs ${c.b}` }]} />}
        pill={t('badge')}
        title={copy.title}
        lede={copy.intro}
        actions={
          <>
            <Link href={contact} className={primaryBtn}>{t('cta')}</Link>
            <AskButton className={ghostBtn}>{t('askHero')}</AskButton>
          </>
        }
        meta={(t.raw('trust') as string[]).join(' · ')}
        aside={<GlossaryAssistant mode={{ kind: 'compare', a: c.a, b: c.b }} topic={`${c.a} vs ${c.b}`} />}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-8">
        <div className="min-w-0 space-y-20">
          <section id="verdict" aria-labelledby="verdict-h" className="scroll-mt-28">
            <p className={eyebrow}>{t('verdictEyebrow')}</p>
            <h2 id="verdict-h" className={`${h2} mt-2`}>{t('verdictTitle')}</h2>
            <p className="mt-2 text-base text-neutral-400">{t('verdictNote')}</p>
            <Situations items={copy.situations} label={t('situationsLabel')} inSituation={t('inSituation')} askLabel={t('askHero')} />
          </section>

          <section id="table" aria-labelledby="table-h" className="scroll-mt-28">
            <h2 id="table-h" className={h2}>{t('sideTitle')}</h2>
            <div className="mt-6 hidden overflow-hidden rounded-3xl border border-white/[0.08] md:block">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">{`${c.a} vs ${c.b}`}</caption>
                <thead className="bg-white/[0.04] text-neutral-300">
                  <tr>
                    <th scope="col" className="w-[18%] px-5 py-4 font-semibold">{t('area')}</th>
                    <th scope="col" className="px-5 py-4 font-heading text-base font-bold text-white">{c.a}</th>
                    <th scope="col" className="px-5 py-4 font-heading text-base font-bold text-white">{c.b}</th>
                    <th scope="col" className="w-[20%] px-5 py-4 font-semibold">{t('source')}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.facts.map((f, i) => (
                    <tr key={i} className="border-t border-white/[0.06] align-top transition-colors hover:bg-white/[0.03]">
                      <th scope="row" className="px-5 py-4 font-semibold text-white">{f.area[l]}</th>
                      <td className="px-5 py-4 leading-relaxed text-neutral-200">{f.a[l]}</td>
                      <td className="px-5 py-4 leading-relaxed text-neutral-200">{f.b[l]}</td>
                      <td className="px-5 py-4 text-neutral-400">
                        <Sources f={f} asOf={t('asOf', { date: fmt(f.asOf) })} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-6 space-y-3 md:hidden">
              {c.facts.map((f, i) => (
                <li key={i} className="rounded-2xl border border-white/[0.08] bg-[#111827] p-5">
                  <p className="font-heading text-base font-bold text-white">{f.area[l]}</p>
                  <dl className="mt-3 space-y-3 text-sm">
                    <div><dt className="font-semibold text-[#7FD6F7]">{c.a}</dt><dd className="mt-1 leading-relaxed text-neutral-200">{f.a[l]}</dd></div>
                    <div><dt className="font-semibold text-[#7FD6F7]">{c.b}</dt><dd className="mt-1 leading-relaxed text-neutral-200">{f.b[l]}</dd></div>
                  </dl>
                  <div className="mt-3 text-sm text-neutral-400"><Sources f={f} asOf={t('asOf', { date: fmt(f.asOf) })} /></div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-neutral-400">{t('sourceNote', { date: fmt(c.checked) })}</p>
            <div className="mt-6 flex gap-4 rounded-3xl border border-white/[0.08] p-6">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#00AEEF]" aria-hidden="true" />
              <div>
                <p className="font-heading text-lg font-bold text-white">{t('noCommission')}</p>
                <p className="mt-1 text-base text-neutral-300">{t('noCommissionBody')}</p>
              </div>
            </div>
          </section>

          <section id="framing" aria-labelledby="framing-h" className="scroll-mt-28">
            <h2 id="framing-h" className={h2}>{t('framingTitle')}</h2>
            <div className="mt-6 max-w-3xl space-y-4">
              {copy.framing.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-neutral-200">{p}</p>
              ))}
            </div>
          </section>

          <section id="faq" aria-labelledby="faq-h" className="scroll-mt-28">
            <h2 id="faq-h" className={h2}>{t('faqTitle')}</h2>
            <div className="mt-6"><Faq items={copy.faq} /></div>
          </section>

          <section aria-labelledby="rel-h">
            <h2 id="rel-h" className={h2}>{t('relatedTitle')}</h2>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {terms.map((g) => (
                <li key={g.slug}>
                  <Link href={`/${locale}/glossary/${g.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/[0.1]">
                    {g.copy[l].term}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { kind: tg('term.hubKind'), title: tg(`hubs.${c.hub}`), href: `/${locale}${c.hub}` },
                ...others.map((x) => ({ kind: tg('term.compareKind'), title: x.copy[l].title, href: `/${locale}/compare/${x.slug}` })),
              ].map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className={`flex h-full flex-col rounded-2xl border border-white/[0.08] p-5 ${lift}`}>
                    <span className="self-start rounded-full bg-white/[0.06] px-2.5 py-0.5 text-xs text-neutral-300">{r.kind}</span>
                    <span className="mt-3 font-heading text-lg font-semibold text-white">{r.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <SideCta
          title={t('asideTitle')}
          body={t('asideBody')}
          cta={t('cta')}
          note={t('ctaNote')}
          href={contact}
          tocLabel={t('onPage')}
          toc={[
            { id: 'verdict', label: t('tocVerdict') },
            { id: 'table', label: t('tocTable') },
            { id: 'framing', label: t('tocFraming') },
            { id: 'faq', label: t('tocFaq') },
          ]}
        />
      </div>
      <Closing title={t('closeTitle')} body={t('closeBody')} cta={t('cta')} note={t('ctaNote')} href={contact} />
    </div>
  )
}

function Sources({ f, asOf }: { f: { sources: { label: string; url: string }[] }; asOf: string }) {
  return (
    <span className="flex flex-col gap-1">
      {f.sources.map((s) => (
        <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="rounded text-[#9DB8E0] underline underline-offset-4 transition-colors hover:text-white">
          {s.label}
        </a>
      ))}
      <span className="text-xs">{asOf}</span>
    </span>
  )
}
