const C = { top: '#9DB7DD', left: '#5F7FB0', right: '#46669A' }
const CY = { top: '#33B8F0', left: '#0E6A9E', right: '#0B5580' }
const N = { top: '#2E5677', left: '#193C57', right: '#102A3F' }

function Slab({ x, y, w, d, h, c, delay, children }: { x: number; y: number; w: number; d: number; h: number; c: typeof C; delay: number; children?: React.ReactNode }) {
  const top = `M0 0 L${w} ${w * 0.5} L${w - d} ${w * 0.5 + d * 0.5} L${-d} ${d * 0.5} Z`
  const left = `M${-d} ${d * 0.5} L${w - d} ${w * 0.5 + d * 0.5} L${w - d} ${w * 0.5 + d * 0.5 + h} L${-d} ${d * 0.5 + h} Z`
  const right = `M${w - d} ${w * 0.5 + d * 0.5} L${w} ${w * 0.5} L${w} ${w * 0.5 + h} L${w - d} ${w * 0.5 + d * 0.5 + h} Z`
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="hero-art-rise" style={{ animationDelay: `${delay}ms` }}>
        <path d={left} fill={c.left} />
        <path d={right} fill={c.right} />
        <path d={top} fill={c.top} />
        {children}
      </g>
    </g>
  )
}

export default function HeroArt({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 560 250" className="h-auto w-full" role="img" aria-label={label}>
      <path d="M120 120 C 200 120, 220 60, 300 60" className="hero-art-flow" stroke="#7D9CCB" strokeWidth="2" fill="none" strokeDasharray="5 7" />
      <path d="M120 130 C 220 140, 240 120, 320 130" className="hero-art-flow" stroke="#7D9CCB" strokeWidth="2" fill="none" strokeDasharray="5 7" />
      <path d="M120 140 C 210 170, 260 190, 330 190" className="hero-art-flow" stroke="#7D9CCB" strokeWidth="2" fill="none" strokeDasharray="5 7" />
      <Slab x={70} y={70} w={70} d={60} h={34} c={C} delay={0}>
        <circle cx={35} cy={30} r={11} fill="#0A0A0A" opacity="0.25" />
      </Slab>
      <Slab x={70} y={40} w={70} d={60} h={22} c={CY} delay={120} />
      <Slab x={70} y={14} w={70} d={60} h={18} c={N} delay={240} />
      <Slab x={330} y={30} w={90} d={34} h={12} c={C} delay={500}>
        <path d="M-20 14 L50 49 L56 46 L-14 11 Z" fill="#0A0A0A" opacity="0.35" />
      </Slab>
      <Slab x={350} y={90} w={110} d={60} h={10} c={N} delay={700}>
        <path d="M-12 12 L40 38" stroke="#7D9CCB" strokeWidth="5" strokeLinecap="round" />
        <path d="M-24 22 L18 43" stroke="#9DB7DD" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      </Slab>
      <Slab x={480} y={150} w={56} d={90} h={14} c={CY} delay={900}>
        <path d="M-60 34 L-12 58" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
      </Slab>
    </svg>
  )
}
