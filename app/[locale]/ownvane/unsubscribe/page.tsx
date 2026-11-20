import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import TokenAction from '../_components/TokenAction'
import { geist } from '../_components/fonts'
import '../ownvane.css'

interface Props {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ token?: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'ownvane.unsubscribe' })
  return { title: t('title'), robots: { index: false, follow: false } }
}

export default async function UnsubscribePage({ params, searchParams }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const { token } = await searchParams
  const t = await getTranslations({ locale, namespace: 'ownvane' })
  return (
    <div className={`ov ${geist.variable}`}>
      <section className="ov-token">
        <div className="ov-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/ownvane/ownvane-emblem-wordmark-night.svg" alt={t('logoAlt')} width={120} height={14} />
          <h1>{t('unsubscribe.title')}</h1>
          <p>{t('unsubscribe.lead')}</p>
          <TokenAction
            token={token ?? ''}
            endpoint="/api/ownvane-waitlist/unsubscribe"
            labels={{ button: t('unsubscribe.button'), done: t('unsubscribe.done'), invalid: t('unsubscribe.invalid'), error: t('unsubscribe.error') }}
          />
        </div>
      </section>
    </div>
  )
}
