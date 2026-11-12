import { useMessages, useTranslations } from 'next-intl'

type Msgs = { advertisingPage: { keep: { items: { title: string; text: string }[] }; faq: { items: { q: string; a: string }[] } } }

export function AdKeep() {
  const t = useTranslations('advertisingPage.keep')
  const items = (useMessages() as Msgs).advertisingPage.keep.items
  return (
    <section className="w-full bg-primary py-20 sm:py-24" aria-labelledby="ad-keep-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="ad-keep-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-300">{t('subtitle')}</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((x, i) => (
            <li key={x.title} className="rounded-3xl border border-white/[0.08] bg-[#111827] p-6 transition-colors hover:border-white/20">
              <svg viewBox="0 0 56 44" className="h-9 w-auto" aria-hidden="true">
                <path d="M28 4 L52 18 L28 32 L4 18 Z" fill={['#33B8F0', '#7FD6F7', '#2E5677', '#33B8F0', '#7FD6F7'][i]} />
                <path d="M4 18 L28 32 L28 42 L4 28 Z" fill="#0E6A9E" />
                <path d="M52 18 L28 32 L28 42 L52 28 Z" fill="#0B5580" />
              </svg>
              <h3 className="mt-4 font-heading text-base font-semibold text-white">{x.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{x.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function AdFaq() {
  const t = useTranslations('advertisingPage.faq')
  const items = (useMessages() as Msgs).advertisingPage.faq.items
  return (
    <section className="w-full bg-[#0B1322] py-20 sm:py-24" aria-labelledby="ad-faq-title">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="ad-faq-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('title')}
        </h2>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {items.map((x) => (
            <details key={x.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-lg font-semibold text-white hover:text-[#B9CCE6]">
                {x.q}
                <svg className="h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-45 motion-reduce:transition-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="pb-5 text-base leading-relaxed text-neutral-300">{x.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
