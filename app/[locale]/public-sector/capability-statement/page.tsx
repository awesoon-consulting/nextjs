import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import PrintButton from '@/src/components/sections/public-sector/PrintButton'
import { siteConfig } from '@/src/config/site'
import { BID_CATEGORIES, CAPABILITY_PDF, LEAD_SLUGS } from '@/src/data/public-sector'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'publicSector' })
  return {
    title: t('statement.title'),
    robots: { index: false, follow: true },
    alternates: { canonical: `/${locale}/public-sector` },
  }
}

const PRINT_CSS = `
@page { size: letter; margin: 0; }
@media print {
  html, body { background: #fff !important; }
  header, footer, .fixed, .cs-toolbar { display: none !important; }
  .cs-wrap { padding: 0 !important; background: #fff !important; }
  .cs-sheet { box-shadow: none !important; border-radius: 0 !important; margin: 0 !important; }
}
`

export default async function CapabilityStatementPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ c?: string }>
}) {
  const { locale } = await params
  const { c } = await searchParams
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'publicSector' })
  const picked = new Set((c ?? '').split(',').filter(Boolean))
  const highlight = picked.size ? picked : new Set(LEAD_SLUGS)
  const ordered = [...BID_CATEGORIES].sort((a, b) => Number(highlight.has(b.slug)) - Number(highlight.has(a.slug)))

  const company: [string, string][] = [
    [t('facts.legalName'), 'Awesoon Technologies Inc.'],
    [t('facts.based'), t('facts.basedValue')],
    [t('facts.serves'), t('facts.servesValue')],
    [t('facts.languages'), t('facts.languagesValue')],
    [t('facts.registrations'), t('facts.onRequest')],
    [t('facts.insurance'), t('facts.onRequest')],
  ]

  const h = 'text-[10px] font-bold tracking-[0.08em] text-[#0F1D33] uppercase'

  return (
    <div className="cs-wrap bg-primary px-4 pt-28 pb-16 sm:px-6">
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />
      <div className="cs-toolbar mx-auto mb-6 flex max-w-[816px] flex-wrap items-center justify-between gap-3">
        <Link href={`/${locale}/public-sector`} className="rounded-full px-3 py-2 text-sm font-semibold text-neutral-300 transition-colors hover:bg-white/[0.08] hover:text-white">
          ← {t('statement.back')}
        </Link>
        <div className="flex flex-wrap gap-2">
          <a
            href={CAPABILITY_PDF(locale)}
            download
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
          >
            {t('statement.download')}
          </a>
          <PrintButton label={t('statement.print')} />
        </div>
      </div>

      <article className="cs-sheet mx-auto flex min-h-[1056px] max-w-[816px] flex-col overflow-hidden rounded-lg bg-white text-[#0A0A0A] shadow-2xl">
        <div className="flex items-end justify-between gap-6 bg-[#0F1D33] px-12 py-8 text-white">
          <div>
            <p className="font-heading text-[11px] font-semibold tracking-[0.12em] text-[#7FD6F7] uppercase">{t('statement.title')}</p>
            <h1 className="mt-2 font-heading text-[28px] leading-tight font-bold">Awesoon Technologies Inc.</h1>
            <p className="mt-1 text-[13px] text-white/80">{t('hero.title')}</p>
          </div>
          <div className="text-right text-[11px] leading-relaxed text-white/80">
            <p>{siteConfig.contact.email}</p>
            <p>awesoon.com</p>
            <p>{t('facts.basedValue')}</p>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-[1.55fr_1fr] gap-8 px-12 py-8">
          <div className="space-y-6">
            <section>
              <h2 className={h}>{t('statement.who')}</h2>
              <p className="mt-2 text-[12.5px] leading-relaxed text-neutral-800">{t('statement.whoText')}</p>
            </section>
            <section>
              <h2 className={h}>{t('statement.core')}</h2>
              <ul className="mt-2 space-y-1.5">
                {(['core1', 'core2', 'core3', 'core4'] as const).map((k) => (
                  <li key={k} className="flex gap-2 text-[12.5px] text-neutral-800">
                    <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00AEEF]" />
                    {t(`statement.${k}`)}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className={h}>{t('categories.title')}</h2>
              <table className="mt-2 w-full border-collapse text-left text-[11.5px]">
                <tbody>
                  {ordered.map((cat) => {
                    const on = highlight.has(cat.slug)
                    return (
                      <tr key={cat.slug} className={`border-t border-neutral-200 ${on ? 'bg-[#E8F6FD]' : ''}`}>
                        <th scope="row" className="py-1.5 pr-3 pl-2 align-top font-semibold text-[#0A0A0A]">
                          {t(`categories.items.${cat.slug}.name`)}
                        </th>
                        <td className="py-1.5 pr-2 align-top text-neutral-700">
                          {on && picked.size > 0 ? <span className="font-semibold text-[#0E6A9E]">{t('statement.matched')}. </span> : null}
                          {t(`categories.items.${cat.slug}.service`)}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <p className="mt-2 text-[11px] text-neutral-600 italic">{t('categories.codesOnRequest')}</p>
            </section>
          </div>

          <aside className="space-y-6">
            <section>
              <h2 className={h}>{t('statement.company')}</h2>
              <dl className="mt-2 space-y-2">
                {company.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[10.5px] font-semibold text-neutral-500">{k}</dt>
                    <dd className="text-[12px] text-[#0A0A0A]">{v}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section>
              <h2 className={h}>{t('statement.how')}</h2>
              <ul className="mt-2 space-y-2">
                {([1, 2, 3] as const).map((k) => (
                  <li key={k} className="text-[12px] text-neutral-800">
                    <span className="block font-semibold text-[#0A0A0A]">{t(`how.item${k}Title`)}</span>
                    {t(`how.item${k}Text`)}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-md bg-[#F2F5F9] p-3.5">
              <h2 className={h}>{t('statement.contact')}</h2>
              <p className="mt-2 text-[12.5px] font-semibold">{t('contact.name')}</p>
              <p className="text-[11.5px] text-neutral-600">{t('contact.role')}</p>
              <p className="mt-1.5 text-[11.5px] break-all text-[#0E6A9E]">{siteConfig.contact.email}</p>
              <p className="mt-1.5 text-[11.5px] text-neutral-700">{t('contact.reply')}</p>
            </section>
          </aside>
        </div>

        <p className="border-t border-neutral-200 px-12 py-4 text-[10.5px] text-neutral-600">{t('statement.footnote')}</p>
      </article>
    </div>
  )
}
