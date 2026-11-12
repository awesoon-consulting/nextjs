
const LAYERS = ['#0E6A9E', '#00AEEF', '#193C57']

const MESSY = [
  { x: 40, y: 70, r: -8 },
  { x: 150, y: 30, r: 6 },
  { x: 90, y: 170, r: 4 },
  { x: 200, y: 130, r: -5 },
  { x: 30, y: 270, r: 7 },
  { x: 170, y: 250, r: -6 },
  { x: 110, y: 360, r: 5 },
  { x: 220, y: 340, r: -3 },
]

const MESSY_PATHS = [
  'M70 85 C 140 140, 60 160, 120 185',
  'M180 45 C 120 90, 260 100, 225 145',
  'M120 185 C 200 200, 90 250, 60 285',
  'M225 145 C 160 210, 260 230, 195 265',
  'M60 285 C 140 300, 70 350, 140 375',
  'M195 265 C 280 300, 180 330, 250 355',
  'M250 355 C 290 300, 300 220, 310 200',
  'M140 375 C 230 420, 290 300, 310 260',
]

const ROWS = [130, 210, 290]
const COLS = [130, 195, 260]

export default function WorkflowMap({ progress }: { progress: number }) {
  const p = Math.max(0, Math.min(1, progress))
  const clean = (len: number) => ({
    strokeDasharray: len,
    strokeDashoffset: len * (1 - p),
    transition: 'stroke-dashoffset 1.4s ease-out',
  })

  return (
    <>
      <svg viewBox="0 0 320 420" className="absolute top-0 left-0 h-full w-[calc((100%-50rem)/2)] text-[#0F1D33] dark:text-[#6E8BB5]" aria-hidden="true">
        <g style={{ opacity: 1 - p * 0.55, transition: 'opacity 1.2s' }}>
          {MESSY_PATHS.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="currentColor" strokeOpacity={0.35} strokeWidth={1.5} strokeDasharray="4 6" />
          ))}
          {MESSY.map((m, i) => (
            <rect
              key={i}
              x={m.x}
              y={m.y}
              width={56}
              height={30}
              rx={6}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.4}
              strokeWidth={1.5}
              transform={`rotate(${m.r} ${m.x + 28} ${m.y + 15})`}
            />
          ))}
        </g>
        {[200, 230, 260].map((y, i) => (
          <path key={i} d={`M310 ${y} H 330`} stroke="currentColor" strokeOpacity={0.5} strokeWidth={1.5} style={clean(20)} />
        ))}
      </svg>
      <svg viewBox="0 0 320 420" className="absolute top-0 right-0 h-full w-[calc((100%-50rem)/2)] text-[#0F1D33] dark:text-[#6E8BB5]" aria-hidden="true">
        {ROWS.map((y, r) => (
          <path key={r} d={`M0 ${200 + r * 30} C 60 ${200 + r * 30}, 70 ${y}, ${COLS[0]} ${y}`} fill="none" stroke="currentColor" strokeOpacity={0.5} strokeWidth={1.5} style={clean(160)} />
        ))}
        {ROWS.map((y, r) => (
          <path key={`h${r}`} d={`M${COLS[0]} ${y} H ${COLS[2]}`} fill="none" stroke={LAYERS[r]} strokeWidth={2} style={clean(130)} />
        ))}
        {COLS.map((x, c) => (
          <path key={`v${c}`} d={`M${x} ${ROWS[0]} V ${ROWS[2]}`} fill="none" stroke="currentColor" strokeOpacity={0.35} strokeWidth={1.5} style={clean(160)} />
        ))}
        {ROWS.map((y, r) =>
          COLS.map((x, c) => (
            <rect
              key={`${r}-${c}`}
              x={x - 11}
              y={y - 11}
              width={22}
              height={22}
              rx={6}
              fill={LAYERS[r]}
              style={{ opacity: p > (r * 3 + c) / 12 ? 0.9 : 0, transition: 'opacity 0.6s' }}
            />
          )),
        )}
      </svg>
    </>
  )
}
