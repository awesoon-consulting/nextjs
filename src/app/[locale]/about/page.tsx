import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import TeamGrid from '@/src/components/sections/TeamGrid'
import CTABlock from '@/src/components/sections/CTABlock'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  return {
    title: t('title'),
    description: t('hero.subtext'),
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  const values = [0, 1, 2, 3] as const

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-5xl sm:text-6xl text-text-inverse mb-6">
            {t('hero.headline')}
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">{t('hero.subtext')}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-text-primary mb-6">
            {t('mission.title')}
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed">{t('mission.text')}</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="values-heading"
            className="font-heading font-bold text-4xl text-text-primary text-center mb-12"
          >
            {t('values.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((idx) => (
              <div
                key={idx}
                className="p-8 bg-surface-elevated rounded-2xl border border-neutral-200 shadow-sm"
              >
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">
                  {t(`values.items.${idx}.title`)}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {t(`values.items.${idx}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamGrid />

      {/* CTA */}
      <CTABlock />
    </>
  )
}
