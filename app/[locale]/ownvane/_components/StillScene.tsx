// The illustrated still of each step: paints with the page, stays for no-JS, low-power and no-WebGL visitors.
// Groups show per step from the root's data-step (ownvane.css).
const HOUSES = [40, 200, 360, 520, 1080, 1240, 1400, 1560]

function House({ x, w = 100, h = 70, y = 520, className }: { x: number; w?: number; h?: number; y?: number; className?: string }) {
  const r = w * 0.45
  return <path className={className} d={`M${x - w / 2} ${y}V${y - h}H${x + w / 2}V${y}M${x - w / 2 - 8} ${y - h + 2} ${x} ${y - h - r} ${x + w / 2 + 8} ${y - h + 2}`} />
}

export default function StillScene() {
  return (
    <svg className="ov-still" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" fill="none" strokeLinejoin="round" aria-hidden="true">
      <g stroke="#EDF0F3" strokeOpacity=".08">
        <path d="M0 560H1600M0 610H1600M0 680H1600M0 780H1600" />
        <path d="M100 900 500 560M450 900 650 560M800 900V560M1150 900 950 560M1500 900 1100 560" />
      </g>
      <g stroke="#EDF0F3" strokeOpacity=".3" strokeWidth="1.2">
        {HOUSES.map((x, i) => (
          <House key={x} x={x} h={60 + (i % 3) * 14} className={i === 2 || i === 5 ? 'ov-s-client' : undefined} />
        ))}
      </g>
      <g className="ov-s-hero" strokeWidth="1.8">
        <House x={800} w={170} h={120} y={530} />
      </g>
      <g className="ov-s-sign" strokeWidth="1.4">
        <path d="M915 530V440H965" />
        <rect x="945" y="452" width="64" height="38" rx="2" />
      </g>
      <g className="ov-s-ads" strokeWidth="1.4">
        <circle cx="420" cy="150" r="22" />
        <circle cx="800" cy="100" r="22" />
        <circle cx="1180" cy="150" r="22" />
        <path strokeOpacity=".35" strokeDasharray="4 8" d="M420 172Q560 260 790 330M800 122V320M1180 172Q1040 260 810 330" />
        <circle cx="520" cy="228" r="5" className="ov-s-dot" />
        <circle cx="660" cy="290" r="5" className="ov-s-dot is-blue" />
        <circle cx="800" cy="220" r="5" className="ov-s-dot is-violet" />
        <circle cx="1060" cy="250" r="5" className="ov-s-dot" />
      </g>
      <g className="ov-s-ai" strokeWidth="1.4">
        <rect x="960" y="250" width="250" height="150" rx="10" stroke="#EDF0F3" strokeOpacity=".7" />
        <path stroke="#EDF0F3" strokeOpacity=".7" d="M990 290H1170M990 318H1140M990 346H1090" />
        <rect x="1110" y="362" width="76" height="26" rx="6" className="ov-s-fill" />
      </g>
      <g className="ov-s-portal" strokeWidth="1.4">
        <path d="M360 430Q580 260 790 380M1240 430Q1020 260 810 380" />
        <circle cx="575" cy="322" r="5" className="ov-s-dot" />
        <circle cx="1025" cy="322" r="5" className="ov-s-dot" />
      </g>
      <g className="ov-s-plans" strokeWidth="1.4">
        <House x={560} w={90} h={64} y={800} className="ov-s-muted" />
        <House x={800} w={120} h={90} y={800} />
        <House x={1010} w={64} h={50} y={800} className="ov-s-muted" />
        <House x={1090} w={64} h={50} y={800} className="ov-s-muted" />
        <House x={1050} w={64} h={50} y={760} className="ov-s-muted" />
      </g>
      <g className="ov-s-yours" strokeWidth="1.6">
        <rect x="680" y="350" width="240" height="230" rx="4" />
      </g>
    </svg>
  )
}
