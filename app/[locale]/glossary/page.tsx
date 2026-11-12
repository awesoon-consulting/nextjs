import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { GLOSSARY, asLocale } from '@/src/data/glossary'
import GlossaryIndex from '@/src/components/sections/glossary/GlossaryIndex'
import GlossaryAssistant from '@/src/components/sections/glossary/GlossaryAssistant'
import AskButton from '@/src/components/sections/glossary/AskButton'
import { Closing, Crumbs, Faq, Hero, SideCta } from '@/src/components/sections/glossary/Shell'
import { JsonLd, baseUrl, pageMeta } from '@/src/components/sections/glossary/seo'
import { ghostBtn, h2, primaryBtn } from '@/src/components/sections/glossary/ui'

const PATH = '/glossary'
const CATEGORY_ORDER = ['operations', 'finance', 'erp', 'crm', 'integration', 'automation', 'systems', 'data', 'support', 'design', 'advertising', 'procurement']

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'glossaryPage' })
  return pageMeta(locale, PATH, t('meta.title'), t('meta.description'))
}

export default async function GlossaryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'glossaryPage' })
  const l = asLocale(locale)
  const items = GLOSSARY.map((g) => ({ slug: g.slug, term: g.copy[l].term, definition: g.copy[l].definition, category: g.category })).sort((a, b) =>
    a.term.localeCompare(b.term, l)
  )
  const about = t.raw('about') as { q: string; a: string }[]
  const url = `${baseUrl()}/${locale}${PATH}`
  const contact = `/${locale}/contact`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${url}#set`,
    name: t('meta.title'),
    description: t('meta.description'),
    url,
    inLanguage: locale,
    publisher: { '@type': 'Organization', name: 'Awesoon Technologies Inc.', url: baseUrl(), founder: { '@type': 'Person', name: 'Ray Rasouli' } },
    hasDefinedTerm: items.map((i) => ({ '@type': 'DefinedTerm', name: i.term, description: i.definition, url: `${url}/${i.slug}` })),
  }

  return (
    <div className="bg-[#0A0A0A]">
      <JsonLd data={jsonLd} />
      <Hero
        crumbs={<Crumbs items={[{ label: t('crumbHome'), href: `/${locale}` }, { label: t('crumbGlossary') }]} />}
        pill={t('badge')}
        title={t('title')}
        lede={t('lede')}
        actions={
          <>
            <Link href={contact} className={primaryBtn}>{t('cta')}</Link>
            <AskButton className={ghostBtn}>{t('askHero')}</AskButton>
          </>
        }
        meta={`${t('total', { count: items.length })} · ${t('term.reviewed')}`}
        aside={<GlossaryAssistant mode={{ kind: 'index' }} topic={t('crumbGlossary')} />}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-8">
        <div className="min-w-0">
          <section id="terms" aria-label={t('tocTerms')} className="scroll-mt-28">
            <GlossaryIndex items={items} categories={CATEGORY_ORDER} />
          </section>
          <section id="about" aria-labelledby="about-h" className="mt-20 scroll-mt-28">
            <h2 id="about-h" className={h2}>{t('aboutTitle')}</h2>
            <div className="mt-6"><Faq items={about} /></div>
          </section>
        </div>
        <SideCta
          title={t('sideTitle')}
          body={t('sideBody')}
          cta={t('cta')}
          note={t('ctaNote')}
          href={contact}
          tocLabel={t('onPage')}
          toc={[{ id: 'terms', label: t('tocTerms') }, { id: 'about', label: t('tocAbout') }]}
        />
      </div>
      <Closing title={t('closeTitle')} body={t('closeBody')} cta={t('cta')} note={t('ctaNote')} href={contact} />
    </div>
  )
}
