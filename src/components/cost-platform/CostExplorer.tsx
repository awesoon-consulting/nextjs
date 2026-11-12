'use client'

import Link from 'next/link'
import { useId, useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import type { WageRow } from '@/src/lib/cost-platform/cost'
import { card, chip } from './ui'

interface Neighbour {
  slug: string
  name: string
  rows: WageRow[]
}

interface Props {
  locale: string
  region: string
  countryPath: string
  currency: string
  rows: WageRow[]
  neighbours: Neighbour[]
}

const PREFERRED = ['43-4151', '43-9021']

function Slider({ label, value, set, min, max, step = 1, suffix = '' }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step?: number; suffix?: string }) {
  const id = useId()
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm text-neutral-300">
          {label}
        </label>
        <output htmlFor={id} className="font-heading text-lg font-semibold text-white tabular-nums">
          {value}
          {suffix}
        </output>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[#9DB6DC]" />
    </div>
  )
}

export default function CostExplorer({ locale, region, countryPath, currency, rows, neighbours }: Props) {
  const t = useTranslations('costPlatform')
  const codes = rows.map((r) => r.code)
  const [code, setCode] = useState(PREFERRED.find((c) => codes.includes(c)) ?? codes[0] ?? '')
  const [people, setPeople] = useState(2)
  const [hours, setHours] = useState(10)
  const [weeks, setWeeks] = useState(48)
  const [oncost, setOncost] = useState(20)
  const [fullTime, setFullTime] = useState(40)
  const [own, setOwn] = useState(25)
  const ownId = useId()

  const money = useMemo(() => new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 }), [locale, currency])
  const money2 = useMemo(() => new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }), [locale, currency])
  const plain = useMemo(() => new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }), [locale])

  const hourly = (r: WageRow) => {
    const v = (r.median ?? r.mean)!
    return r.unit === 'hourly' ? v : r.unit === 'weekly' ? v / fullTime : v / (52 * fullTime)
  }
  const yearlyAt = (rate: number) => people * hours * weeks * rate * (1 + oncost / 100)

  const row = rows.find((r) => r.code === code)
  const rate = row ? hourly(row) : own
  const yearly = yearlyAt(rate)
  const hoursYear = people * hours * weeks
  const needsFullTime = rows.some((r) => r.unit !== 'hourly')

  const compare = neighbours
    .map((n) => {
      const r = n.rows.find((x) => x.code === code)
      return r ? { ...n, yearly: yearlyAt(hourly(r)) } : null
    })
    .filter((x): x is Neighbour & { yearly: number } => !!x)

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" aria-label={t('calc.title')}>
      <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-8 lg:grid-cols-[1fr_minmax(0,400px)]">
        <div className="order-2 min-w-0 space-y-12 lg:order-1">
          {rows.length > 0 && (
            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">{t('cost.tableTitle', { region })}</h2>
              <p className="mt-2 text-neutral-400">{t('cost.tableHint')}</p>
              <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full sm:min-w-[520px] border-collapse text-left text-[15px] tabular-nums">
                  <thead className="bg-white/[0.03] text-xs font-semibold tracking-wide text-neutral-400 uppercase">
                    <tr>
                      <th scope="col" className="px-4 py-3">{t('cost.colOccupation')}</th>
                      <th scope="col" className="hidden px-4 py-3 sm:table-cell">{t('cost.colCode')}</th>
                      <th scope="col" className="px-4 py-3 text-right">{t('cost.colMedian')}</th>
                      <th scope="col" className="px-4 py-3 text-right">{t('cost.colMean')}</th>
                      <th scope="col" className="px-4 py-3"><span className="sr-only">{t('cost.use')}</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => {
                      const on = r.code === code
                      return (
                        <tr key={r.code} className={`border-t border-white/10 transition-colors ${on ? 'bg-[#0F1D33]' : 'hover:bg-white/[0.03]'}`}>
                          <th scope="row" className="px-4 py-3 font-medium text-white">{r.name}</th>
                          <td className="hidden px-4 py-3 whitespace-nowrap text-neutral-400 sm:table-cell">{r.code}</td>
                          <td className="px-4 py-3 text-right whitespace-nowrap text-neutral-200">
                            {r.median != null ? money.format(r.median) : '·'} <span className="text-xs text-neutral-400">{t(`cost.unit.${r.unit}`)}</span>
                          </td>
                          <td className="px-4 py-3 text-right whitespace-nowrap text-neutral-200">{r.mean != null ? money.format(r.mean) : '·'}</td>
                          <td className="px-4 py-2 text-right">
                            <button
                              type="button"
                              onClick={() => setCode(r.code)}
                              aria-pressed={on}
                              className={`min-h-10 rounded-full px-4 text-sm font-semibold whitespace-nowrap transition-colors ${on ? 'bg-white text-[#0A0A0A]' : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/[0.08]'}`}
                            >
                              {on ? t('cost.inUse') : t('cost.use')}
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">{t('cost.compareTitle')}</h2>
            <p className="mt-2 text-neutral-400">{t('cost.compareHint')}</p>
            {compare.length ? (
              <ul className="mt-5 flex flex-wrap gap-3">
                {compare.map((n) => {
                  const d = n.yearly - yearly
                  const pct = yearly ? Math.round((d / yearly) * 100) : 0
                  return (
                    <li key={n.slug}>
                      <Link href={`${countryPath}/${n.slug}`} className={chip}>
                        <span className="font-semibold text-white">{n.name}</span>
                        <span className="tabular-nums">{money.format(n.yearly)}</span>
                        <span className={`tabular-nums ${pct > 0 ? 'text-[#FCA5A5]' : pct < 0 ? 'text-[#86EFAC]' : 'text-neutral-400'}`}>
                          {pct > 0 ? '+' : ''}
                          {pct}%
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="mt-5 text-neutral-400">{t('cost.compareNone')}</p>
            )}
          </div>
        </div>

        <div className={`${card} order-1 p-6 sm:p-8 lg:sticky lg:top-24 lg:order-2`}>
          <p className="text-xs font-semibold tracking-[0.08em] text-[#9DB6DC] uppercase">
            {t('calc.title')} · {region}
          </p>
          <div className="mt-4 border-b border-white/10 pb-6" aria-live="polite">
            <p className="text-sm text-neutral-300">{t('calc.yearly')}</p>
            <p className="mt-1 font-heading text-5xl font-semibold tracking-tight text-white tabular-nums">{money.format(yearly)}</p>
            <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
              <div>
                <dt className="text-neutral-400">{t('calc.monthly')}</dt>
                <dd className="mt-0.5 font-semibold text-white tabular-nums">{money.format(yearly / 12)}</dd>
              </div>
              <div>
                <dt className="text-neutral-400">{t('calc.hoursYear')}</dt>
                <dd className="mt-0.5 font-semibold text-white tabular-nums">{plain.format(hoursYear)}</dd>
              </div>
              <div>
                <dt className="text-neutral-400">{t('calc.fte')}</dt>
                <dd className="mt-0.5 font-semibold text-white tabular-nums">{plain.format(hoursYear / (fullTime * weeks))}</dd>
              </div>
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-neutral-400">
              {row
                ? t('calc.basis', { region, stat: row.median != null ? t('calc.median') : t('calc.mean'), rate: money2.format(rate), occupation: row.name.toLowerCase() })
                : t('calc.basisOwn')}{' '}
              {t('calc.note')}
            </p>
          </div>
          <div className="mt-6 space-y-3">
            {!row && (
              <div>
                <label htmlFor={ownId} className="text-sm text-neutral-300">
                  {t('calc.wage')}
                </label>
                <input
                  id={ownId}
                  type="number"
                  min={1}
                  step={0.5}
                  value={own}
                  onChange={(e) => setOwn(Math.max(0, Number(e.target.value)))}
                  className="mt-1 h-12 w-full rounded-xl border border-white/15 bg-[#0A0A0A] px-4 text-white tabular-nums transition-colors hover:border-white/30"
                />
              </div>
            )}
            <Slider label={t('calc.people')} value={people} set={setPeople} min={1} max={25} />
            <Slider label={t('calc.hours')} value={hours} set={setHours} min={1} max={40} />
            <Slider label={t('calc.weeks')} value={weeks} set={setWeeks} min={40} max={52} />
            <Slider label={t('calc.oncost')} value={oncost} set={setOncost} min={0} max={50} suffix="%" />
            {needsFullTime && row && row.unit !== 'hourly' && <Slider label={t('calc.fullTime')} value={fullTime} set={setFullTime} min={30} max={45} />}
          </div>
        </div>
      </div>
    </section>
  )
}
