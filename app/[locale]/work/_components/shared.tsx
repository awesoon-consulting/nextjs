import Link from 'next/link'
import { askFallback, askTopics, method, tr, workCopy as c } from '@/src/data/work'
import { siteConfig } from '@/src/config/site'
import WorkAssistant from './WorkAssistant'

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url

export function Assistant({ locale, context }: { locale: string; context?: string }) {
  return (
    <WorkAssistant
      locale={locale}
      title={tr(c.askTitle, locale)}
      intro={tr(c.askIntro, locale)}
      placeholder={tr(c.askPlaceholder, locale)}
      send={tr(c.askSend, locale)}
      logLabel={tr(c.askLog, locale)}
      note={tr(c.askNote, locale)}
      cta={tr(c.cta, locale)}
      fallback={tr(askFallback, locale)}
      context={context}
      topics={askTopics.map((t) => ({
        id: t.id,
        chip: tr(t.chip, locale),
        keywords: tr(t.keywords, locale).split(',').map((k) => k.trim().toLowerCase()),
        reply: tr(t.reply, locale),
        link: t.link && { label: tr(t.link.label, locale), href: t.link.href },
      }))}
    />
  )
}

export function PrimaryCta({ locale, className = '' }: { locale: string; className?: string }) {
  return (
    <Link
      href={`/${locale}/contact`}
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] ${className}`}
    >
      {tr(c.cta, locale)}
    </Link>
  )
}

export function MethodStrip({ locale }: { locale: string }) {
  return (
    <section className="w-full border-y border-white/[0.06] bg-[#0F1D33]/40 py-20" aria-labelledby="method-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="method-title" className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {tr(c.methodTitle, locale)}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-neutral-300">{tr(c.methodText, locale)}</p>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {method.map((m, i) => (
            <li key={i} className="group relative rounded-2xl border border-white/[0.08] bg-[#111827] p-5 transition-colors hover:border-[#00AEEF]/50">
              <span className="font-heading text-sm font-semibold tabular-nums text-[#00AEEF]">0{i + 1}</span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-white">{tr(m.title, locale)}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-300">{tr(m.text, locale)}</p>
              {i < method.length - 1 && <span className="absolute top-1/2 -right-2 z-10 hidden h-px w-4 bg-white/20 lg:block" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
