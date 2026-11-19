import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import TokenAction from '../_components/TokenAction'

interface Props {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ token?: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'tapbody.unsubscribe' })
  return { title: t('title'), robots: { index: false, follow: false } }
}

export default async function UnsubscribePage({ params, searchParams }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const { token } = await searchParams
  const t = await getTranslations({ locale, namespace: 'tapbody.unsubscribe' })
  return (
    <section className="min-h-[70vh] bg-[#120B0E] pt-32 pb-20 text-[#F8EFEB]">
      <div className="mx-auto flex max-w-xl flex-col items-start gap-6 px-4 sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.18em] text-[#C9ABA3]">TAPBODY</p>
        <h1 className="text-3xl font-semibold">{t('title')}</h1>
        <p className="text-lg text-[#E3CFC8]">{t('lead')}</p>
        <TokenAction
          token={token ?? ''}
          endpoint="/api/tapbody-waitlist/unsubscribe"
          labels={{ button: t('button'), done: t('done'), invalid: t('invalid'), error: t('error') }}
        />
      </div>
    </section>
  )
}
