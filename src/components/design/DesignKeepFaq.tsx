import { getMessages, getTranslations } from 'next-intl/server'

const ICONS = [
  'M7 3h7l5 5v13H7zM14 3v5h5',
  'M12 3a9 9 0 100 18 2 2 0 002-2v-1a2 2 0 012-2h1a4 4 0 004-4 9 9 0 00-9-9zM7.5 11h.01M10 7h.01M15 7h.01',
  'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  'M5 4h11l3 3v13H5zM9 9h6M9 13h6M9 17h4',
]

export default async function DesignKeepFaq({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'designPage' })
  const m = (await getMessages({ locale })) as unknown as {
    designPage: { keep: { items: { title: string; text: string }[] }; faq: { items: { q: string; a: string }[] } }
  }

  return (
    <>
      <section className="w-full bg-[#0B1322] py-24" aria-labelledby="keep-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="keep-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('keep.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-300">{t('keep.subtitle')}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {m.designPage.keep.items.map((it, i) => (
              <li key={it.title} className="design-lift rounded-3xl border border-white/[0.08] bg-[#111827] p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F1D33]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#7D9CCB]" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={ICONS[i]} />
                  </svg>
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-white">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">{it.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="w-full bg-[#0A0A0A] py-24" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="faq-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('faq.title')}
          </h2>
          <div className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {m.designPage.faq.items.map((f) => (
              <details key={f.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-4 font-heading text-base font-semibold text-white sm:text-lg [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <svg className="h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="pb-5 text-[15px] leading-relaxed text-neutral-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
