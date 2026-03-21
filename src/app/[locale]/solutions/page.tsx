import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import SolutionGrid from '@/src/components/sections/SolutionGrid'
import CTABlock from '@/src/components/sections/CTABlock'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'solutions' })

  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default function SolutionsPage() {
  return (
    <>
      <div className="pt-16">
        <SolutionGrid />
        <CTABlock />
      </div>
    </>
  )
}
