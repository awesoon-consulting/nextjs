const LAYERS = [
  { top: '#33B8F0', left: '#0E6A9E', right: '#0B5580' },
  { top: '#7FD6F7', left: '#00AEEF', right: '#0090C6' },
  { top: '#2E5677', left: '#193C57', right: '#102A3F' },
]

const CX = 200
const CY = 70

function iso(gx: number, gz: number, layer: number) {
  return { x: CX + (gx - gz) * 34, y: CY + (gx + gz) * 19 + layer * 62 }
}

function seeded(i: number) {
  const s = Math.sin(i * 127.1) * 43758.5453
  return s - Math.floor(s)
}

const NODES = Array.from({ length: 27 }, (_, i) => {
  const layer = Math.floor(i / 9)
  const gx = (i % 9) % 3
  const gz = Math.floor((i % 9) / 3)
  const home = iso(gx, gz, layer)
  const mess = { x: 30 + seeded(i) * 340, y: 30 + seeded(i + 40) * 270, r: (seeded(i + 80) - 0.5) * 70 }
  return { i, layer, gx, gz, home, mess }
})

const LINKS: [number, number][] = []
NODES.forEach((a) =>
  NODES.forEach((b) => {
    if (b.i <= a.i || a.layer !== b.layer) return
    if (Math.abs(a.gx - b.gx) + Math.abs(a.gz - b.gz) === 1) LINKS.push([a.i, b.i])
  }),
)
NODES.forEach((a) => {
  if (a.layer < 2) LINKS.push([a.i, a.i + 9])
})

export default function IsoNodes({ clean, label }: { clean: boolean; label: string }) {
  return (
    <svg viewBox="0 0 400 340" className="h-full w-full" role="img" aria-label={label}>
      <g style={{ opacity: clean ? 1 : 0, transition: 'opacity 700ms ease' }}>
        {LINKS.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={NODES[a].home.x}
            y1={NODES[a].home.y}
            x2={NODES[b].home.x}
            y2={NODES[b].home.y}
            className="stroke-[#0F1D33]/30 dark:stroke-white/20"
            strokeWidth={1.25}
          />
        ))}
      </g>
      {NODES.map((n) => {
        const c = LAYERS[n.layer]
        const p = clean ? n.home : n.mess
        const r = clean ? 0 : n.mess.r
        return (
          <g
            key={n.i}
            style={{
              transform: `translate(${p.x}px, ${p.y}px) rotate(${r}deg)`,
              transition: `transform 900ms cubic-bezier(0.16, 1, 0.3, 1) ${n.i * 18}ms, opacity 600ms`,
              opacity: clean ? 1 : 0.55,
            }}
          >
            <path d="M0 -10 L17 0 L0 10 L-17 0 Z" fill={c.top} />
            <path d="M-17 0 L0 10 L0 18 L-17 8 Z" fill={c.left} />
            <path d="M17 0 L0 10 L0 18 L17 8 Z" fill={c.right} />
          </g>
        )
      })}
    </svg>
  )
}
