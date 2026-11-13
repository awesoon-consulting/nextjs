import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { getSpokeView, spokePath } from '@/src/data/hubs'

export default async function RelatedSpokes({ slugs, locale }: { slugs: string[]; locale: string }) {
  const t = await getTranslations({ locale })
  const tr = (k: string) => t(k as Parameters<typeof t>[0])
  const items = slugs.map((s) => getSpokeView(s, locale, tr)).filter((v) => !!v)
  return (
    <section className="w-full bg-[#0B1322] py-16 sm:py-20" aria-labelledby="related-spokes">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="related-spokes" className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {t('hubs.chrome.spoke.relatedTitle')}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((v) => (
            <li key={v.slug}>
              <Link href={`/${locale}${spokePath(v.slug)}`} className="hub-card group block h-full rounded-3xl border border-white/[0.08] bg-[#111827] p-6 hover:border-white/25">
                <h3 className="font-heading text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-300">{v.answer}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  {t('hubs.chrome.readPage')} <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
