import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function SampleBrief() {
  const t = useTranslations('sampleBrief')
  const a = useTranslations('assistant')
  const rows = [
    ['workflowLabel', 'workflow'],
    ['heardLabel', 'heard'],
  ] as const

  return (
    <section className="w-full bg-neutral-100 py-24 dark:bg-[#0B1322]" aria-labelledby="sample-title">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 id="sample-title" className=" font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl dark:text-white">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary dark:text-neutral-300">{t('text')}</p>
        </div>
        <article className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl sm:p-8 dark:border-white/[0.08] dark:bg-[#111827]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-4 dark:border-white/10">
            <span className="flex items-center gap-2 font-heading text-base font-semibold text-text-primary dark:text-white">
              <Image src="/images/retina-logo.png" alt="" width={22} height={22} />
              {a('briefLabel')}
            </span>
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-text-secondary dark:bg-white/10 dark:text-neutral-300">{t('badge')}</span>
          </div>
          <dl className="mt-5 space-y-5">
            {rows.map(([l, v]) => (
              <div key={l}>
                <dt className="text-sm font-semibold text-text-muted dark:text-neutral-400">{t(l)}</dt>
                <dd className="mt-1 text-base text-text-primary dark:text-white">{t(v)}</dd>
              </div>
            ))}
            <div>
              <dt className="text-sm font-semibold text-text-muted dark:text-neutral-400">{t('stepsLabel')}</dt>
              <dd>
                <ol className="mt-2 space-y-3">
                  {[1, 2, 3].map((n) => (
                    <li key={n} className="flex gap-3 rounded-2xl bg-neutral-100 p-4 dark:bg-white/[0.04]">
                      <span className="font-heading text-sm font-semibold text-accent dark:text-[#00AEEF]">0{n}</span>
                      <span>
                        <span className="block font-heading text-sm font-semibold text-text-primary dark:text-white">{a(`brief${n}Title`)}</span>
                        <span className="block text-sm text-text-secondary dark:text-neutral-300">{a(`brief${n}Text`)}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </dd>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {(['manual', 'next'] as const).map((k) => (
                <div key={k}>
                  <dt className="text-sm font-semibold text-text-muted dark:text-neutral-400">{t(`${k}Label`)}</dt>
                  <dd className="mt-1 text-sm text-text-primary dark:text-white">{t(k)}</dd>
                </div>
              ))}
            </div>
          </dl>
        </article>
      </div>
    </section>
  )
}
