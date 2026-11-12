import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function ClosingBand() {
  const t = useTranslations('closing')
  const locale = useLocale()
  return (
    <section className="relative w-full overflow-hidden bg-[#0F1D33] py-20 sm:py-24" aria-labelledby="closing-title">
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 id="closing-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {t('title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">{t('text')}</p>
        <div className="relative mt-10 inline-flex">
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
            {[200, 340, 480, 620].map((d) => (
              <span key={d} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" style={{ width: d, height: d }} />
            ))}
          </div>
          <Link
            href={`/${locale}/contact`}
            className="relative rounded-full bg-white px-7 py-4 text-base font-semibold text-[#0F1D33] transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1D33]"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
