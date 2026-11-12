import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { asLocale, getAllTermSlugs, getTerm } from '@/src/data/glossary'
import { comparisonsForTerm } from '@/src/data/compare'
import GlossaryAssistant from '@/src/components/sections/glossary/GlossaryAssistant'
import AskButton from '@/src/components/sections/glossary/AskButton'
import TermDiagram from '@/src/components/sections/glossary/TermDiagram'
import { Closing, Crumbs, Faq, Hero, SideCta } from '@/src/components/sections/glossary/Shell'
import { JsonLd, baseUrl, pageMeta } from '@/src/components/sections/glossary/seo'
import { card, eyebrow, ghostBtn, h2, lift, mid, primaryBtn } from '@/src/components/sections/glossary/ui'

type Props = { params: Promise<{ locale: string; term: string }> }

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) => getAllTermSlugs().map((term) => ({ locale, term })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, term } = await params
  const g = getTerm(term)
  if (!g) return {}
  const t = await getTranslations({ locale, namespace: 'glossaryPage' })
  const c = g.copy[asLocale(locale)]
  return pageMeta(locale, `/glossary/${term}`, t('term.metaTitle', { term: locale === 'fr' ? c.term : mid(c.term) }), c.definition, 'article')
}

export default async function TermPage({ params }: Props) {
  const { locale, term } = await params
  setRequestLocale(locale)
  const g = getTerm(term)
  if (!g) notFound()
  const t = await getTranslations({ locale, namespace: 'glossaryPage' })
  const l = asLocale(locale)
  const c = g.copy[l]
  const related = g.related.map(getTerm).filter((x) => x !== undefined)
  const compares = comparisonsForTerm(g.slug)
  const contact = `/${locale}/contact`
  const setUrl = `${baseUrl()}/${locale}/glossary`
  const url = `${setUrl}/${g.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'DefinedTerm',
        '@id': `${url}#term`,
        name: c.term,
        description: c.definition,
        url,
        inLanguage: locale,
        inDefinedTermSet: { '@type': 'DefinedTermSet', '@id': `${setUrl}#set`, name: t('meta.title'), url: setUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('crumbHome'), item: `${baseUrl()}/${locale}` },
          { '@type': 'ListItem', position: 2, name: t('crumbGlossary'), item: setUrl },
          { '@type': 'ListItem', position: 3, name: c.term, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }

  const toc = [
    { id: 'definition', label: t('term.tocWhat') },
    ...(c.diagram ? [{ id: 'how', label: t('term.tocHow') }] : []),
    { id: 'breaks', label: t('term.tocBreaks') },
    { id: 'related', label: t('term.tocRelated') },
    { id: 'faq', label: t('term.tocFaq') },
  ]

  return (
    <div className="bg-[#0A0A0A]">
      <JsonLd data={jsonLd} />
      <Hero
        crumbs={
          <Crumbs items={[{ label: t('crumbHome'), href: `/${locale}` }, { label: t('crumbGlossary'), href: `/${locale}/glossary` }, { label: c.term }]} />
        }
        pill={t('badgeTerm')}
        title={t('term.h1', { term: locale === 'fr' ? c.term : mid(c.term) })}
        lede={c.definition}
        actions={
          <>
            <Link href={contact} className={primaryBtn}>{t('cta')}</Link>
            <AskButton className={ghostBtn}>{t('askHero')}</AskButton>
          </>
        }
        meta={`${t(`categories.${g.category}`)} · ${t('term.reviewed')}`}
        aside={<GlossaryAssistant mode={{ kind: 'term', term: c.term }} topic={c.term} />}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-8">
        <div className="min-w-0 space-y-20">
          <section id="definition" aria-labelledby="def-h" className="scroll-mt-28">
            <h2 id="def-h" className={h2}>{t('term.explainTitle')}</h2>
            <div className="mt-6 max-w-3xl space-y-4">
              {c.explanation.split('\n\n').map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-neutral-200">{p}</p>
              ))}
            </div>
          </section>

          {c.diagram && (
            <section id="how" aria-labelledby="how-h" className="scroll-mt-28">
              <h2 id="how-h" className={h2}>{t('term.howTitle')}</h2>
              <p className="mt-2 text-base text-neutral-400">{t('term.howNote')}</p>
              <div className={`${card} mt-6 p-5 sm:p-8`}>
                <TermDiagram steps={c.diagram} />
              </div>
            </section>
          )}

          <section id="breaks" aria-labelledby="breaks-h" className="scroll-mt-28">
            <p className={eyebrow}>{t('term.breaksEyebrow')}</p>
            <h2 id="breaks-h" className={`${h2} mt-2`}>{t('term.breaksTitle')}</h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {c.breaks.map((b, i) => (
                <li key={i} className={`rounded-2xl border border-white/[0.08] bg-[#111827] p-5 ${lift}`}>
                  <span className="font-heading text-sm font-bold text-[#7FD6F7]">{String(i + 1).padStart(2, '0')}</span>
                  <p className="mt-2 text-base font-semibold text-white">{b.title}</p>
                  <p className="mt-2 text-base leading-relaxed text-neutral-300">{b.detail}</p>
                </li>
              ))}
            </ol>
            <AskButton text={t('term.askBreaks')} className={`${ghostBtn} mt-6 min-h-11 px-5 text-sm`}>
              {t('term.askBreaks')}
            </AskButton>
          </section>

          <section id="related" aria-labelledby="rel-h" className="scroll-mt-28">
            <h2 id="rel-h" className={h2}>{t('term.relatedTitle')}</h2>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${locale}/glossary/${r.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/[0.1]">
                    {r.copy[l].term}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section id="faq" aria-labelledby="faq-h" className="scroll-mt-28">
            <h2 id="faq-h" className={h2}>{t('term.faqTitle')}</h2>
            <div className="mt-6"><Faq items={c.faq} /></div>
          </section>

          <section aria-labelledby="pages-h">
            <h2 id="pages-h" className={h2}>{t('term.pagesTitle')}</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { kind: t('term.hubKind'), title: t(`hubs.${g.hub}`), href: `/${locale}${g.hub}` },
                ...compares.map((x) => ({ kind: t('term.compareKind'), title: x.copy[l].title, href: `/${locale}/compare/${x.slug}` })),
                { kind: t('term.glossaryKind'), title: t('term.backToGlossary'), href: `/${locale}/glossary` },
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
          title={t('term.sideTitle', { term: c.term })}
          body={t('term.sideBody')}
          cta={t('cta')}
          note={t('ctaNote')}
          href={contact}
          tocLabel={t('onPage')}
          toc={toc}
        />
      </div>
      <Closing title={t('term.closeTitle', { term: mid(c.term) })} body={t('term.closeBody')} cta={t('cta')} note={t('ctaNote')} href={contact} />
    </div>
  )
}
