'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { COUNTRIES, ROLES, WAGES, computeCost, hourlyWage, regionsFor, type Country, type Role, type WageCountry } from '@/src/lib/tools/cost'
import ResultCard from './ResultCard'
import { chipClass, fieldClass } from './styles'

const DEFAULT_REGION: Record<WageCountry, string> = { CA: 'Ontario', US: 'Texas', AU: 'New South Wales' }

export default function CostCalculator() {
  const t = useTranslations('tools.calc')
  const locale = useLocale()
  const params = useSearchParams()

  const [country, setCountry] = useState<Country>(() => {
    const c = params.get('c') as Country
    return COUNTRIES.includes(c) ? c : 'CA'
  })
  const [region, setRegion] = useState(() => {
    const c = params.get('c') as WageCountry
    const r = params.get('r') ?? ''
    return c in WAGES && regionsFor(c).includes(r) ? r : DEFAULT_REGION[c in WAGES ? c : 'CA']
  })
  const [roles, setRoles] = useState<Role[]>(() => {
    const picked = (params.get('roles') ?? '').split(',').filter((r): r is Role => ROLES.includes(r as Role))
    return picked.length ? picked : ['dataEntry']
  })
  const clamp = (v: string | null, max: number, fallback: number) => {
    const n = Number(v)
    return Number.isInteger(n) && n >= 1 && n <= max ? n : fallback
  }
  const [people, setPeople] = useState(() => clamp(params.get('p'), 60, 2))
  const [hours, setHours] = useState(() => clamp(params.get('h'), 40, 10))

  const wc = country === 'UK' ? null : country
  const data = wc ? WAGES[wc] : null
  const money = useMemo(
    () => (cur: string, max = 0) => new Intl.NumberFormat(locale, { style: 'currency', currency: cur, maximumFractionDigits: max, minimumFractionDigits: max }),
    [locale]
  )
  const num = (n: number, d = 0) => new Intl.NumberFormat(locale, { maximumFractionDigits: d }).format(n)
  const result = wc ? computeCost({ country: wc, region, roles, hoursPerWeek: hours, people }) : null

  function pickCountry(c: Country) {
    setCountry(c)
    if (c !== 'UK') setRegion(DEFAULT_REGION[c])
  }
  const toggle = (r: Role) => setRoles((cur) => (cur.includes(r) ? cur.filter((x) => x !== r) : [...cur, r]))

  const query = new URLSearchParams({ c: country, ...(wc ? { r: region } : {}), roles: roles.join(','), h: String(hours), p: String(people) })
  const shareUrl = `/${locale}/tools/manual-work-cost-calculator?${query}`
  const cost = result && data ? money(data.currency).format(result.yearlyCost) : ''
  const summary = t('summary', { region, hours, people, cost })
  const period = data ? (data.period.endsWith('-S1') ? t('auPeriod', { year: data.period.slice(0, 4) }) : data.period) : ''
  const maxCost = result ? Math.max(...result.breakdown.map((b) => b.cost), 1) : 1

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <div className="tl-rise min-w-0 flex-1 rounded-3xl border border-white/[0.08] bg-[#0D1117] p-6 sm:p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <span id="calc-country" className="font-semibold text-white">
              {t('country')}
            </span>
            <div role="group" aria-labelledby="calc-country" className="flex flex-wrap gap-2">
              {COUNTRIES.map((c) => (
                <button key={c} type="button" aria-pressed={country === c} onClick={() => pickCountry(c)} className={chipClass(country === c)}>
                  {t(`countries.${c}`)}
                </button>
              ))}
            </div>
          </div>

          {wc ? (
            <label className="flex flex-col gap-2.5">
              <span className="font-semibold text-white">{t(`regionWord.${wc}`)}</span>
              <select value={region} onChange={(e) => setRegion(e.target.value)} className={`${fieldClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%23A3A3A3%22 stroke-width=%221.6%22 fill=%22none%22/></svg>')] bg-[right_16px_center] bg-no-repeat pr-10`}>
                {regionsFor(wc).map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <label className="flex flex-col gap-2.5">
              <span className="font-semibold text-white">{t('regionWord.UK')}</span>
              <select disabled className={`${fieldClass} cursor-not-allowed text-neutral-300 opacity-80`}>
                <option>{t('ukShort')}</option>
              </select>
            </label>
          )}

          <div className="flex flex-col gap-2.5">
            <span id="calc-roles" className="font-semibold text-white">
              {t('roles')}
            </span>
            <div role="group" aria-labelledby="calc-roles" className="flex flex-col gap-2">
              {ROLES.map((r) => {
                const on = roles.includes(r)
                const h = wc ? hourlyWage(wc, region, r) : undefined
                return (
                  <button
                    key={r}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(r)}
                    className={`flex min-h-12 items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D9CCB] ${
                      on ? 'border-[#7D9CCB] bg-[#7D9CCB]/10 text-white hover:bg-[#7D9CCB]/[0.16]' : 'border-white/10 bg-white/[0.03] text-neutral-200 hover:border-white/20 hover:bg-white/[0.06]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span aria-hidden="true" className={`flex h-5 w-5 items-center justify-center rounded-md border text-xs ${on ? 'border-[#7D9CCB] bg-[#7D9CCB] text-[#0A0A0A]' : 'border-white/30'}`}>
                        {on ? '✓' : ''}
                      </span>
                      {t(`roleNames.${r}`)}
                    </span>
                    {wc && data && <span className="text-sm whitespace-nowrap text-neutral-300">{h === undefined ? t('noWage') : t('perHour', { wage: money(data.currency, 2).format(h) })}</span>}
                  </button>
                )
              })}
            </div>
          </div>

          <label className="flex flex-col">
            <span className="flex justify-between font-semibold text-white">
              <span>{t('people')}</span>
              <span>{people}</span>
            </span>
            <input type="range" min={1} max={60} value={people} onChange={(e) => setPeople(Number(e.target.value))} className="tl-range" />
          </label>
          <label className="flex flex-col">
            <span className="flex justify-between font-semibold text-white">
              <span>{t('hours')}</span>
              <span>{hours}</span>
            </span>
            <input type="range" min={1} max={40} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="tl-range" />
          </label>
          <p className="text-sm text-neutral-400">{t('privacy')}</p>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-6">
        {result && data && wc ? (
          <div className="tl-rise rounded-3xl bg-[#0F1D33] p-6 text-white sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-semibold tracking-[0.06em] text-neutral-300 uppercase">
                {t('estimate')} · {region}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-200">{t('liveData')}</span>
            </div>
            {roles.length && result.breakdown.length ? (
              <>
                <p key={cost} aria-live="polite" className="tl-pop mt-6 font-heading text-5xl leading-none font-semibold tracking-tight sm:text-6xl">
                  {cost}
                </p>
                <p className="mt-3 text-base text-neutral-200">{t('perYear')}</p>
                <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {[
                    [num(result.yearlyHours), t('hoursYear')],
                    [num(result.fullTimePeople, 1), t('fullTime')],
                    [money(data.currency, 2).format(result.averageHourly), t('avgHour')],
                  ].map(([v, l]) => (
                    <div key={l} className="rounded-2xl bg-white/[0.06] p-4">
                      <p className="font-heading text-xl font-semibold">{v}</p>
                      <p className="mt-1 text-[13px] text-neutral-300">{l}</p>
                    </div>
                  ))}
                </div>
                {result.breakdown.length > 1 && (
                  <ul className="mt-6 flex flex-col gap-3">
                    {result.breakdown.map((b) => (
                      <li key={b.role} className="flex flex-col gap-1.5">
                        <span className="flex justify-between text-sm">
                          <span>{t(`roleNames.${b.role}`)}</span>
                          <span className="text-neutral-200">{money(data.currency).format(b.cost)}</span>
                        </span>
                        <span className="block h-2 rounded-full bg-white/10" aria-hidden="true">
                          <span className="tl-bar block h-2 rounded-full bg-[#7D9CCB]" style={{ width: `${(b.cost / maxCost) * 100}%` }} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <p className="mt-6 text-lg text-neutral-200">{t('pickRole')}</p>
            )}
            <p className="mt-6 text-[13px] leading-relaxed text-neutral-300">
              {t('basis')} {t('basisFte', { hours: wc === 'AU' ? 38 : 40 })}
            </p>
          </div>
        ) : (
          <div className="tl-rise rounded-3xl bg-[#0F1D33] p-6 text-white sm:p-8">
            <span className="text-xs font-semibold tracking-[0.06em] text-neutral-300 uppercase">{t('countries.UK')}</span>
            <p className="mt-4 font-heading text-2xl font-semibold">{t('ukShort')}</p>
            <p className="mt-3 text-base leading-relaxed text-neutral-200">{t('ukSoon')}</p>
          </div>
        )}

        {result && data && result.breakdown.length > 0 && (
          <ResultCard tool="calc" toolName={t('meta.title')} summary={summary} shareUrl={shareUrl} />
        )}

        {data && wc && (
          <div className="rounded-3xl border border-white/[0.08] p-6 text-[13px] leading-relaxed text-neutral-300 sm:p-8">
            <h2 className="mb-2 font-heading text-base font-semibold text-white">{t('sourceTitle')}</h2>
            <p>
              {wc === 'US'
                ? t('usNote', { codes: Object.values(WAGES.US.occupations).join(', ') })
                : wc === 'CA'
                  ? t('caNote', { occupation: WAGES.CA.occupation, code: WAGES.CA.occupationCode })
                  : t('auNote', { occupation: WAGES.AU.occupation })}
            </p>
            <p className="mt-2">
              {t('sourceLine', { source: data.source })}{' '}
              <a href={data.url} className="text-[#9DB5DC] underline underline-offset-2 hover:text-white" rel="noopener" target="_blank">
                {new URL(data.url).hostname}
              </a>
            </p>
            <p className="mt-1">
              {t('period', { period })} {t('fetched', { date: data.run.slice(0, 10) })}
            </p>
            <p className="mt-1">{t('licence', { licence: data.licence })}</p>
          </div>
        )}
      </div>
    </div>
  )
}
