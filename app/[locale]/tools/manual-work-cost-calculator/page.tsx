import { Suspense } from 'react'
import type { Metadata } from 'next'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import CostCalculator from '@/src/components/tools/CostCalculator'
import { JsonLd, ToolShell, appLd, faqLd, toolMetadata } from '@/src/components/tools/ToolShell'

const PATH = '/tools/manual-work-cost-calculator'
type Msgs = { tools: { calc: { faq: { q: string; a: string }[] } } }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return toolMetadata(locale, PATH, 'tools.calc.meta')
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'tools.calc' })
  const faq = ((await getMessages({ locale })) as unknown as Msgs).tools.calc.faq
  return (
    <>
      <JsonLd data={appLd(locale, PATH, t('meta.title'), t('meta.description'))} />
      <JsonLd data={faqLd(faq)} />
      <ToolShell locale={locale} title={t('title')} text={t('text')} crumb={t('meta.title').split(':')[0]} faqNs="tools.calc" faq={faq}>
        <Suspense>
          <CostCalculator />
        </Suspense>
      </ToolShell>
    </>
  )
}
