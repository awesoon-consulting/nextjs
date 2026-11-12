'use client'

import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import { BID_CATEGORIES, COUNTRIES, COUNTRY_SCHEMES, LEAD_SLUGS, type CategoryGroup, type Country } from '@/src/data/public-sector'
import { chipClass } from './ProcurementAssistant'

const GROUPS = ['all', 'it', 'creative', 'staffing'] as const

export default function CategoryTable() {
  const t = useTranslations('publicSector')
  const [q, setQ] = useState('')
  const [group, setGroup] = useState<CategoryGroup | 'all'>('all')
  const [country, setCountry] = useState<Country>('ca')

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return BID_CATEGORIES.filter((c) => group === 'all' || c.group === group).filter((c) => {
      if (!needle) return true
      const hay = [
        t(`categories.items.${c.slug}.name`),
        t(`categories.items.${c.slug}.service`),
        t(`categories.items.${c.slug}.keywords`),
      ]
        .join(' ')
        .toLowerCase()
      return hay.includes(needle)
    })
  }, [q, group, t])

  const schemes = COUNTRY_SCHEMES[country].join(' · ')

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full lg:max-w-sm">
          <label htmlFor="ps-cat-search" className="mb-2 block text-sm font-semibold text-neutral-300">
            {t('categories.searchLabel')}
          </label>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 focus-within:border-white focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#7D9CCB]">
            <svg className="h-4 w-4 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
            </svg>
            <input
              id="ps-cat-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t('categories.searchPlaceholder')}
              className="min-h-11 min-w-0 flex-1 bg-transparent text-base text-white placeholder:text-neutral-400 focus-visible:outline-none!"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <div>
            <p id="ps-group-label" className="mb-2 text-sm font-semibold text-neutral-300">
              {t('categories.groupLabel')}
            </p>
            <div role="group" aria-labelledby="ps-group-label" className="flex flex-wrap gap-2">
              {GROUPS.map((g) => (
                <button key={g} type="button" aria-pressed={group === g} onClick={() => setGroup(g)} className={chipClass(group === g)}>
                  {t(`categories.groups.${g}`)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p id="ps-cc-label" className="mb-2 text-sm font-semibold text-neutral-300">
              {t('categories.countryLabel')}
            </p>
            <div role="group" aria-labelledby="ps-cc-label" className="flex flex-wrap gap-2">
              {COUNTRIES.map((c) => (
                <button key={c} type="button" aria-pressed={country === c} onClick={() => setCountry(c)} className={chipClass(country === c)}>
                  {c.toUpperCase()}
                  <span className="sr-only"> {t(`assistant.countries.${c}`)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-neutral-400" aria-live="polite">
        {t('categories.count', { shown: rows.length, total: BID_CATEGORIES.length })}
      </p>

      <div className="mt-3 overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{t('categories.title')}</caption>
          <thead className="hidden bg-white/[0.04] md:table-header-group">
            <tr>
              <th scope="col" className="px-5 py-3.5 text-sm font-semibold text-neutral-300">{t('categories.colCategory')}</th>
              <th scope="col" className="px-5 py-3.5 text-sm font-semibold text-neutral-300">{t('categories.colService')}</th>
              <th scope="col" className="px-5 py-3.5 text-sm font-semibold text-neutral-300">{t('categories.colCodes')} <span className="font-normal text-neutral-400">({schemes})</span></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr key={c.slug} className="block border-t border-white/10 px-5 py-4 transition-colors first:border-t-0 hover:bg-white/[0.03] md:table-row md:p-0 md:first:border-t">
                <th scope="row" className="block text-left align-top font-heading text-base font-semibold text-white md:table-cell md:px-5 md:py-4">
                  {t(`categories.items.${c.slug}.name`)}
                  {LEAD_SLUGS.includes(c.slug) && (
                    <span className="ml-2 inline-flex rounded-full bg-[#00AEEF]/15 px-2 py-0.5 align-middle font-body text-xs font-semibold text-[#7FD6F7]">
                      {t('categories.lead')}
                    </span>
                  )}
                </th>
                <td className="mt-1 block align-top text-[15px] text-neutral-300 md:mt-0 md:table-cell md:px-5 md:py-4">
                  {t(`categories.items.${c.slug}.service`)}
                </td>
                <td className="mt-2 block align-top text-sm md:mt-0 md:table-cell md:px-5 md:py-4">
                  <span className="font-semibold text-neutral-200 md:hidden">{schemes}: </span>
                  <span className="text-neutral-400">{t('categories.codesOnRequest')}</span>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr className="block md:table-row">
                <td colSpan={3} className="block px-5 py-8 text-center text-neutral-300 md:table-cell">
                  {t('categories.empty')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
