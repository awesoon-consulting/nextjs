import type { Metadata } from 'next'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import ToolsHub from '@/src/components/tools/ToolsHub'
import { JsonLd, ToolShell, baseUrl, faqLd, toolMetadata } from '@/src/components/tools/ToolShell'
import { computeCost, WAGES } from '@/src/lib/tools/cost'
import { buildSearcher, type CodeIndex } from '@/src/lib/tools/codeSearch'
import codes from '@/src/data/procurement-codes.json'
import { TOOLS } from '@/src/data/tools'
import { siteConfig } from '@/src/config/site'

type Msgs = { tools: { hub: { faq: { q: string; a: string }[] } } }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(locale, '/tools', 'tools.hub.meta')
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'tools.hub' })
  const faq = ((await getMessages({ locale })) as unknown as Msgs).tools.hub.faq
  const example = computeCost({ country: 'CA', region: 'Ontario', roles: ['dataEntry'], hoursPerWeek: 10, people: 1 })
  const cost = new Intl.NumberFormat(locale, { style: 'currency', currency: WAGES.CA.currency, maximumFractionDigits: 0 }).format(example.yearlyCost)
  const graphic = buildSearcher(codes as unknown as CodeIndex).search('graphic design').UNSPSC[0]
  const previews = {
    calculator: t('calcPreview', { hours: 10, region: 'Ontario', cost }),
    finder: t('finderPreview', { code: graphic.code }),
  }
  const list = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('meta.title'),
    itemListElement: TOOLS.filter((x) => x.path).map((x, i) => ({ '@type': 'ListItem', position: i + 1, url: `${baseUrl}/${locale}${x.path}`, name: t(`tools.${x.id}.name`) })),
    publisher: { '@type': 'Organization', name: siteConfig.name, founder: { '@type': 'Person', name: 'Ray Rasouli' } },
  }
  return (
    <>
      <JsonLd data={list} />
      <JsonLd data={faqLd(faq)} />
      <ToolShell locale={locale} title={t('title')} text={t('text')} faqNs="tools.hub" faq={faq} eyebrow={t('eyebrow')}>
        <ToolsHub previews={previews} />
      </ToolShell>
    </>
  )
}
