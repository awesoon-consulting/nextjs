'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { TOOLS, type ToolHub } from '@/src/data/tools'
import { chipClass, ghostBtn, primaryBtn } from './styles'

const FILTERS: ('all' | ToolHub)[] = ['all', 'automation', 'procurement', 'erpCrm', 'consulting', 'design', 'advertising']

export default function ToolsHub({ previews }: { previews: Record<string, string> }) {
  const t = useTranslations('tools.hub')
  const tr = useTranslations('tools.result')
  const locale = useLocale()
  const [filter, setFilter] = useState<'all' | ToolHub>('all')
  const [help, setHelp] = useState(false)
  const shown = TOOLS.filter((tool) => filter === 'all' || tool.hub === filter)

  return (
    <>
      <div role="group" aria-label={t('filterLabel')} className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)} className={chipClass(filter === f)}>
            {t(`filters.${f}`)}
          </button>
        ))}
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((tool, i) => {
          const live = !!tool.path
          const n = String(TOOLS.indexOf(tool) + 1).padStart(2, '0')
          const body = (
            <>
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-neutral-400">
                  {n} · {t(`filters.${tool.hub}`)}
                </span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${live ? 'bg-[#7D9CCB]/20 text-[#C7D4EA]' : 'bg-white/[0.06] text-neutral-300'}`}>{live ? t('live') : t('soon')}</span>
              </div>
              <h2 className={`mt-4 font-heading font-semibold text-white ${live ? 'text-2xl' : 'text-lg'}`}>{t(`tools.${tool.id}.name`)}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-300">{t(`tools.${tool.id}.outcome`)}</p>
              {live && previews[tool.id] && (
                <div className="mt-5 rounded-2xl bg-[#0F1D33] p-5">
                  <p className="text-[11px] font-semibold tracking-[0.06em] text-neutral-300 uppercase">{t('previewLabel')}</p>
                  <p className="mt-2 font-heading text-lg text-white">{previews[tool.id]}</p>
                </div>
              )}
              <p className={`mt-auto pt-5 text-sm font-semibold ${live ? 'text-white' : 'text-neutral-400'}`}>
                {live ? (
                  <>
                    {t('open')} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                  </>
                ) : (
                  t('soonNote')
                )}
              </p>
            </>
          )
          return (
            <li key={tool.id} className={`tl-rise flex ${live && filter === 'all' ? 'lg:col-span-2' : ''}`} style={{ animationDelay: `${i * 40}ms` }}>
              {live ? (
                <Link
                  href={`/${locale}${tool.path}`}
                  className="tl-card group flex w-full flex-col rounded-3xl border border-white/[0.12] bg-[#111827] p-6 hover:border-[#7D9CCB]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D9CCB]"
                >
                  {body}
                </Link>
              ) : (
                <div className="flex w-full flex-col rounded-3xl border border-dashed border-white/[0.12] bg-white/[0.02] p-6">{body}</div>
              )}
            </li>
          )
        })}
      </ul>

      <div className="mt-16 rounded-3xl border border-white/[0.08] bg-[#0D1117] p-6 sm:p-10">
        <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">{t('helpTitle')}</h2>
        <p className="mt-3 max-w-2xl text-lg text-neutral-300">{t('helpText')}</p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          <Link href={`/${locale}/tools/manual-work-cost-calculator`} className={ghostBtn}>
            {t('helpCost')}
          </Link>
          <Link href={`/${locale}/tools/procurement-code-finder`} className={ghostBtn}>
            {t('helpCodes')}
          </Link>
          <button type="button" aria-expanded={help} onClick={() => setHelp(true)} className={ghostBtn}>
            {t('helpOther')}
          </button>
        </div>
        {help && (
          <div className="tl-rise mt-5 flex flex-wrap items-center gap-4 rounded-2xl bg-[#0F1D33] p-5" role="status">
            <p className="text-white">{t('helpOtherReply')}</p>
            <Link href={`/${locale}/contact`} className={primaryBtn}>
              {tr('book')}
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
