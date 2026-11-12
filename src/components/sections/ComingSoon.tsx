import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export default async function ComingSoon({ locale, titleKey }: { locale: string; titleKey: string }) {
  const t = await getTranslations({ locale })
  return (
    <section className="flex min-h-[70vh] w-full items-center bg-white pt-16 dark:bg-primary">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <p className="text-sm font-semibold tracking-wider text-text-muted uppercase dark:text-neutral-400">{t(titleKey)}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-text-primary dark:text-white">{t('placeholder.title')}</h1>
        <p className="mt-4 text-lg text-text-secondary dark:text-neutral-300">{t('placeholder.text')}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={`/${locale}/contact`} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary dark:bg-white dark:text-primary dark:hover:bg-[#E5E5E5]">
            {t('placeholder.cta')}
          </Link>
          <Link href={`/${locale}`} className="rounded-full border border-neutral-200 px-6 py-3 text-sm font-semibold text-text-primary transition-colors dark:border-white/10 dark:text-white dark:hover:bg-white/[0.08] dark:hover:text-white">
            {t('placeholder.back')}
          </Link>
        </div>
      </div>
    </section>
  )
}
