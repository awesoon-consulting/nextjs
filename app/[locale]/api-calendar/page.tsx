import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { RECENT_DAYS, getCalendar } from '@/src/lib/cost-platform/calendar'
import { baseUrl, formatDate } from '@/src/lib/cost-platform/shared'
import CalendarView from '@/src/components/cost-platform/CalendarView'
import { CtaBand, DataSoon, Hero, JsonLd, Prose, breadcrumbLd, linkCls } from '@/src/components/cost-platform/ui'

export const revalidate = 86400

const PATH = '/api-calendar'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'costPlatform.calendar' })
  const cal = await getCalendar()
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: cal && cal.recent.length + cal.upcoming.length > 0 ? undefined : { index: false, follow: true },
    alternates: { canonical: `/${locale}${PATH}`, languages: { en: `/en${PATH}`, fr: `/fr${PATH}`, es: `/es${PATH}`, 'x-default': `/en${PATH}` } },
    openGraph: { type: 'website', title: t('metaTitle'), description: t('metaDescription'), url: `/${locale}${PATH}`, siteName: siteConfig.name, locale },
  }
}

export default async function ApiCalendarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'costPlatform' })
  const cal = await getCalendar()
  const base = baseUrl()
  const crumbs = [
    { name: t('common.home'), href: `/${locale}` },
    { name: t('calendar.breadcrumb'), href: `/${locale}${PATH}` },
  ]
  const latest = cal?.sources.map((s) => s.lastUpdated).filter((x): x is string => !!x).sort().at(-1)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbLd(base, crumbs),
      ...(cal
        ? [
            {
              '@type': 'Dataset',
              name: t('calendar.title'),
              description: t('calendar.metaDescription'),
              url: `${base}/${locale}${PATH}`,
              isAccessibleForFree: true,
              creator: cal.sources.map((s) => ({ '@type': 'Organization', name: s.name, url: s.url })),
              publisher: { '@type': 'Organization', name: 'Awesoon Technologies Inc.', founder: { '@type': 'Person', name: 'Ray Rasouli' } },
              ...(latest ? { dateModified: latest } : {}),
            },
          ]
        : []),
    ],
  }

  return (
    <div className="bg-primary text-white">
      <JsonLd data={jsonLd} />
      <Hero crumbs={crumbs} eyebrow={t('calendar.eyebrow')} title={t('calendar.title')}>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">{t('calendar.intro')}</p>
        {latest && (
          <p className="mt-4 text-sm text-neutral-400">
            {t('common.lastUpdated')}: {formatDate(latest, locale)}
          </p>
        )}
      </Hero>

      {!cal ? (
        <DataSoon title={t('common.soonTitle')} text={t('common.soonText')} cta={t('common.bookCall')} href={`/${locale}/contact`} />
      ) : (
        <CalendarView locale={locale} upcoming={cal.upcoming} recent={cal.recent} vendors={cal.vendors} days={RECENT_DAYS} email={siteConfig.contact.email} />
      )}

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <Prose>
            <p>{t('calendar.framing1')}</p>
            <p>{t('calendar.framing2')}</p>
          </Prose>
          {cal && cal.sources.length > 0 && (
            <div>
              <h2 className="font-heading text-lg font-semibold text-white">{t('common.source')}</h2>
              <ul className="mt-3 space-y-3 text-sm text-neutral-400">
                {cal.sources.map((s) => (
                  <li key={s.id}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className={`${linkCls} text-neutral-200`}>
                      {s.name}
                    </a>
                    <br />
                    {t('common.licence')}: {s.licence}
                    {s.lastUpdated && ` · ${t('common.lastUpdated')}: ${formatDate(s.lastUpdated, locale)}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <CtaBand title={t('integration.ctaTitle')} text={t('integration.ctaText')} cta={t('common.bookCall')} href={`/${locale}/contact`} note={t('common.founderLine')} />
    </div>
  )
}
