import { useMessages, useTranslations } from 'next-intl'

const SERIES = [18, 22, 21, 27, 25, 31, 36, 41]
const KPIS = [
  { key: 'spend', value: '$2,400' },
  { key: 'leads', value: '41' },
  { key: 'cost', value: '$58' },
  { key: 'rate', value: '3.2%' },
] as const

export default function AdReporting() {
  const t = useTranslations('advertisingPage.reporting')
  const points = (useMessages() as { advertisingPage: { reporting: { points: string[] } } }).advertisingPage.reporting.points
  const max = 45
  const xy = SERIES.map((v, i) => [20 + i * (460 / (SERIES.length - 1)), 170 - (v / max) * 150] as const)
  const line = xy.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
  const area = `${line} L${xy[xy.length - 1][0]} 170 L${xy[0][0]} 170 Z`

  return (
    <section className="w-full bg-primary py-20 sm:py-24" aria-labelledby="reporting-title">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <p className="text-sm font-semibold text-[#7D9CCB]">{t('eyebrow')}</p>
          <h2 id="reporting-title" className="mt-2 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300">{t('subtitle')}</p>
          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-base text-white">
                <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00AEEF]" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <figure className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">{t('sampleBadge')}</span>
            <span className="flex items-center gap-2 text-xs text-neutral-300">
              <span className="ad-pulse h-2 w-2 rounded-full bg-[#00AEEF]" aria-hidden="true" />
              {t('updated')}
            </span>
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {KPIS.map((k) => (
              <div key={k.key} className="rounded-2xl bg-white/[0.04] p-3.5">
                <dt className="text-xs text-neutral-400">{t(`kpis.${k.key}`)}</dt>
                <dd className="mt-1 font-heading text-xl font-semibold text-white tabular-nums">{k.value}</dd>
              </div>
            ))}
          </dl>
          <svg viewBox="0 0 500 190" className="mt-5 h-auto w-full" role="img" aria-label={`${t('chartLabel')}: ${SERIES.join(', ')}`}>
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1={20} x2={480} y1={20 + i * 50} y2={20 + i * 50} stroke="#FFFFFF" strokeOpacity={0.06} />
            ))}
            <path d={area} fill="#00AEEF" fillOpacity={0.12} />
            <path d={line} fill="none" stroke="#00AEEF" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" pathLength={1} className="ad-draw" />
            {xy.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i === xy.length - 1 ? 5 : 3} fill={i === xy.length - 1 ? '#FFFFFF' : '#00AEEF'} />
            ))}
          </svg>
          <p className="text-xs text-neutral-400">{t('weeks')}</p>
          <div className="mt-5 rounded-2xl border border-white/10 p-4">
            <p className="text-sm font-semibold text-[#7D9CCB]">{t('summaryLabel')}</p>
            <p className="mt-1 text-base leading-relaxed text-white">{t('summary')}</p>
          </div>
          <figcaption className="mt-4 text-xs text-neutral-400">{t('sampleNote')}</figcaption>
        </figure>
      </div>
    </section>
  )
}
