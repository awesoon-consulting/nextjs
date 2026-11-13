'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { Tender } from '@/src/lib/procurement/data'
import type { Copy } from '@/src/lib/procurement/copy'
import { date, fmt, money } from '@/src/lib/procurement/format'

type Col = 'title' | 'buyer' | 'closes' | 'value'

export default function TenderTable({ rows, locale, currency, t, withSoonFilter = true }: { rows: Tender[]; locale: string; currency: string; t: Copy['table']; withSoonFilter?: boolean }) {
  const [sort, setSort] = useState<{ col: Col; dir: 1 | -1 }>({ col: 'closes', dir: 1 })
  const [soonOnly, setSoonOnly] = useState(false)
  const [now] = useState(() => Date.now())

  const shown = useMemo(() => {
    const week = now + 7 * 864e5
    const list = soonOnly ? rows.filter((r) => r.closes && new Date(r.closes).getTime() < week) : rows
    const key = (r: Tender) =>
      sort.col === 'value' ? (r.value ?? -1) : sort.col === 'closes' ? (r.closes ? Date.parse(r.closes) : Infinity) : (r[sort.col] ?? '').toLowerCase()
    return [...list].sort((a, b) => (key(a) < key(b) ? -1 : key(a) > key(b) ? 1 : 0) * sort.dir)
  }, [rows, sort, soonOnly, now])

  const head = (col: Col, label: string, className = '') => {
    const active = sort.col === col
    return (
      <th scope="col" aria-sort={active ? (sort.dir === 1 ? 'ascending' : 'descending') : 'none'} className={`px-4 py-3 text-left font-semibold ${className}`}>
        <button
          type="button"
          onClick={() => setSort({ col, dir: active ? (sort.dir === 1 ? -1 : 1) : 1 })}
          className="inline-flex min-h-11 items-center gap-1 rounded text-neutral-300 transition-colors hover:text-white"
          aria-label={fmt(t.sortBy, { col: label })}
        >
          {label}
          <span aria-hidden="true" className={active ? 'text-[#9DB6DC]' : 'text-neutral-600'}>
            {active && sort.dir === -1 ? '↓' : '↑'}
          </span>
        </button>
      </th>
    )
  }

  return (
    <div>
      {withSoonFilter && (
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-300">
          <label className="inline-flex min-h-11 cursor-pointer items-center gap-2">
            <input type="checkbox" checked={soonOnly} onChange={(e) => setSoonOnly(e.target.checked)} className="h-5 w-5 accent-[#7D9CCB]" />
            {t.soonOnly}
          </label>
          <span aria-live="polite">{fmt(t.shown, { n: shown.length })}</span>
        </div>
      )}
      <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 sm:hidden">
        {shown.map((r, i) => (
          <li key={i} className="p-4">
            {r.url ? (
              <a href={r.url} target="_blank" rel="noopener" className="font-medium text-white hover:text-[#9DB6DC]">
                {r.title}
                <span className="sr-only"> ({t.opensNew})</span>
              </a>
            ) : (
              <span className="font-medium text-white">{r.title}</span>
            )}
            {r.buyer && r.buyerSlug && (
              <Link href={`/${locale}/procurement/buyers/${r.buyerSlug}`} className="mt-1 block text-sm text-neutral-300 hover:text-white">
                {r.buyer}
              </Link>
            )}
            <p className="mt-1 text-sm text-neutral-400 tabular-nums">
              {t.closes} {date(locale, r.closes) ?? t.notStated} · {money(locale, r.value, r.currency ?? currency) ?? t.notStated}
            </p>
          </li>
        ))}
      </ul>
      <div className="hidden overflow-x-auto rounded-2xl border border-white/10 sm:block">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="border-b border-white/10 bg-white/[0.03]">
            <tr>
              {head('title', t.title, 'w-[44%]')}
              {head('buyer', t.buyer)}
              {head('closes', t.closes)}
              {head('value', t.value, 'text-right')}
            </tr>
          </thead>
          <tbody>
            {shown.map((r, i) => {
              const soon = r.closes && new Date(r.closes).getTime() < now + 7 * 864e5
              return (
                <tr key={i} className="border-b border-white/5 align-top transition-colors last:border-0 hover:bg-white/[0.04]">
                  <td className="px-4 py-3 text-white">
                    {r.url ? (
                      <a href={r.url} target="_blank" rel="noopener" className="transition-colors hover:text-[#9DB6DC]">
                        {r.title}
                        <span className="sr-only"> ({t.opensNew})</span>
                      </a>
                    ) : (
                      r.title
                    )}
                  </td>
                  <td className="px-4 py-3 text-neutral-300">
                    {r.buyer && r.buyerSlug ? (
                      <Link href={`/${locale}/procurement/buyers/${r.buyerSlug}`} className="transition-colors hover:text-white">
                        {r.buyer}
                      </Link>
                    ) : (
                      (r.buyer ?? t.notStated)
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-neutral-300 tabular-nums">
                    {soon && <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#F5B454]" aria-hidden="true" />}
                    {date(locale, r.closes) ?? t.notStated}
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap text-neutral-300 tabular-nums">{money(locale, r.value, r.currency ?? currency) ?? t.notStated}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
