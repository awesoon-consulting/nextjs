import { fmt } from '@/src/lib/procurement/format'

// Bars are drawn to scale from zero; the axis ticks are whole award counts.
export default function AwardsChart({ months, locale, label }: { months: { month: string; count: number }[]; locale: string; label: string }) {
  const max = Math.max(1, ...months.map((m) => m.count))
  const step = Math.max(1, Math.ceil(max / 4))
  const top = step * Math.ceil(max / step)
  const ticks = Array.from({ length: top / step + 1 }, (_, i) => i * step)
  const W = 640
  const H = 220
  const L = 36
  const B = 28
  const plotH = H - B - 8
  const bw = (W - L) / months.length
  const y = (v: number) => 8 + plotH - (v / top) * plotH
  const mfmt = new Intl.DateTimeFormat(locale, { month: 'short', timeZone: 'UTC' })

  return (
    <figure>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={fmt(label, { max })} className="h-auto w-full">
        {ticks.map((v) => (
          <g key={v}>
            <line x1={L} x2={W} y1={y(v)} y2={y(v)} stroke="rgb(255 255 255 / 0.08)" />
            <text x={L - 8} y={y(v) + 4} textAnchor="end" fontSize="11" fill="#A3A3A3">
              {v}
            </text>
          </g>
        ))}
        {months.map((m, i) => {
          const h = (m.count / top) * plotH
          const x = L + i * bw + bw * 0.18
          return (
            <g key={m.month}>
              <title>{`${m.month}: ${m.count}`}</title>
              <rect x={x} y={y(m.count)} width={bw * 0.64} height={h} rx={3} fill="#7D9CCB" className="ps-rise" />
              {m.count > 0 && (
                <text x={x + bw * 0.32} y={y(m.count) - 5} textAnchor="middle" fontSize="11" fill="#E5E5E5">
                  {m.count}
                </text>
              )}
              <text x={L + i * bw + bw / 2} y={H - 8} textAnchor="middle" fontSize="11" fill="#A3A3A3">
                {mfmt.format(new Date(`${m.month}-01T00:00:00Z`))}
              </text>
            </g>
          )
        })}
      </svg>
    </figure>
  )
}
