import Image from 'next/image'
import { games } from '@/src/data/games'
import s from './work.module.css'

type Visual = 'website' | 'factory' | 'pipeline' | 'design' | 'games'

const MOCK: Record<string, string[]> = {
  en: ['What slows your team down?', 'Tell me what you do by hand.', 'We re-type orders into the ERP.', 'Here is a first brief.'],
  fr: ['Qu’est-ce qui ralentit votre équipe ?', 'Dites-moi ce que vous faites à la main.', 'Nous ressaisissons les commandes.', 'Voici un premier brief.'],
  es: ['¿Qué frena a tu equipo?', 'Cuéntame qué haces a mano.', 'Copiamos pedidos al ERP.', 'Aquí tienes un primer brief.'],
}

function Website({ locale }: { locale: string }) {
  const m = MOCK[locale] ?? MOCK.en
  return (
    <div className="absolute inset-x-6 top-6 bottom-0 overflow-hidden rounded-t-xl border border-white/10 bg-[#0A0A0A] shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-1.5">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-white/20" />
        ))}
        <span className="ml-3 h-4 flex-1 rounded-full bg-white/[0.06]" />
      </div>
      <div className="space-y-2.5 p-4">
        <p className="text-center font-heading text-base font-bold text-white sm:text-lg">{m[0]}</p>
        <div className="mx-auto h-2 w-1/2 rounded-full bg-white/25" />
        <div className="mt-4 space-y-2 rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <p className={`${s.bubble} w-fit max-w-[80%] rounded-xl rounded-tl-sm bg-white/10 px-3 py-1.5 text-xs text-white/85`} style={{ animationDelay: '0s' }}>{m[1]}</p>
          <p className={`${s.bubble} ml-auto w-fit max-w-[80%] rounded-xl rounded-tr-sm bg-[#0E6A9E] px-3 py-1.5 text-xs text-white`} style={{ animationDelay: '0.9s' }}>{m[2]}</p>
          <p className={`${s.bubble} w-fit max-w-[85%] rounded-xl rounded-tl-sm bg-white/10 px-3 py-1.5 text-xs text-white/85`} style={{ animationDelay: '1.8s' }}>{m[3]}</p>
          <div className="flex gap-1.5 pt-1">
            {['EN', 'FR', 'ES'].map((l) => (
              <span key={l} className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] font-semibold text-white/70">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Factory() {
  const icons = games.slice(0, 10)
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="none">
        {[0, 1, 2, 3, 4].map((i) => {
          const d = `M60 110 C 140 110, 150 ${30 + i * 40}, 230 ${30 + i * 40}`
          return (
            <g key={i}>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={1.5} />
              <circle r={3} fill="#00AEEF" className={s.dot} style={{ offsetPath: `path('${d}')`, animationDelay: `${i * 0.7}s` }} />
            </g>
          )
        })}
      </svg>
      <div className="relative mr-auto ml-2 flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-[#00AEEF]/50 bg-[#0F1D33] text-[10px] font-semibold text-white/80 shadow-[0_0_40px_rgba(0,174,239,0.25)]">
        <span className="mb-1 h-5 w-5 rounded-md border-2 border-[#00AEEF]" />1 kit
      </div>
      <div className="relative grid grid-cols-5 gap-2 transition-transform duration-500 group-hover:scale-[1.04]">
        {icons.map((g) => (
          <Image key={g.slug} src={g.icon} alt="" width={44} height={44} className="h-9 w-9 rounded-[10px] shadow-lg shadow-black/40 sm:h-11 sm:w-11 sm:rounded-xl" />
        ))}
      </div>
    </div>
  )
}

function Pipeline() {
  const sources = ['US', 'CA', 'UK', 'AU']
  return (
    <div className="absolute inset-0">
      <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
        {sources.map((c, i) => {
          const y = 40 + i * 47
          const d = `M86 ${y} C 180 ${y}, 200 110, 286 110`
          return (
            <g key={c}>
              <rect x={30} y={y - 15} width={56} height={30} rx={8} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
              <text x={58} y={y + 4} textAnchor="middle" fontSize={11} fontWeight={600} fill="rgba(255,255,255,0.8)">
                {c}
              </text>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={1.5} />
              <circle r={3} fill="#00AEEF" className={s.dot} style={{ offsetPath: `path('${d}')`, animationDelay: `${i * 0.9}s` }} />
            </g>
          )
        })}
        <g className="origin-center transition-transform duration-500 group-hover:scale-105" style={{ transformBox: 'fill-box' }}>
          <ellipse cx={330} cy={84} rx={42} ry={12} fill="#17304F" stroke="#00AEEF" strokeOpacity={0.6} />
          <path d="M288 84 V136 A42 12 0 0 0 372 136 V84" fill="#0F1D33" stroke="#00AEEF" strokeOpacity={0.6} />
          <path d="M288 110 A42 12 0 0 0 372 110" fill="none" stroke="#00AEEF" strokeOpacity={0.35} />
        </g>
      </svg>
    </div>
  )
}

function Design() {
  const swatches = ['#0A0A0A', '#0F1D33', '#17304F', '#0E6A9E', '#00AEEF', '#FAFAFA']
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-4 p-6">
      <div className="flex gap-2 transition-transform duration-500 group-hover:-translate-y-1">
        {swatches.map((c) => (
          <span key={c} className="h-10 flex-1 rounded-lg border border-white/10" style={{ background: c }} />
        ))}
      </div>
      <div className="flex items-end gap-4">
        <span className="font-heading text-5xl font-bold leading-none text-white">Aa</span>
        <span className="pb-1 text-sm text-white/60">Sora / Inter</span>
      </div>
      <div className="flex gap-2">
        <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#0A0A0A]">Primary</span>
        <span className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white">Hover</span>
        <span className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white outline-2 outline-offset-2 outline-[#00AEEF]">Focus</span>
      </div>
    </div>
  )
}

function Games() {
  const picks = ['loop-weaver', 'stack-snap', 'tidy-tiles']
    .map((slug) => games.find((g) => g.slug === slug))
    .filter((g): g is (typeof games)[number] => !!g)
  const pose = [
    'translate-x-[-62%] rotate-[-9deg] group-hover:translate-x-[-78%] group-hover:rotate-[-13deg]',
    'z-10 translate-y-[-4%] group-hover:translate-y-[-10%]',
    'translate-x-[62%] rotate-[9deg] group-hover:translate-x-[78%] group-hover:rotate-[13deg]',
  ]
  return (
    <div className={`${s.fan} absolute inset-0 flex items-start justify-center pt-6`}>
      {picks.map((g, i) => (
        <div key={g.slug} className={`absolute w-[30%] max-w-[118px] overflow-hidden rounded-[14px] border border-white/15 shadow-2xl shadow-black/60 ${pose[i]}`}>
          <Image src={g.screenshots[0].src} alt="" width={880} height={1912} sizes="120px" className="h-auto w-full" />
        </div>
      ))}
    </div>
  )
}

export default function WorkVisual({ visual, locale }: { visual: Visual; locale: string }) {
  return (
    <div className="relative h-56 overflow-hidden bg-[radial-gradient(120%_90%_at_70%_0%,#17304F_0%,#0F1D33_45%,#0A0A0A_100%)] sm:h-64" aria-hidden="true">
      {visual === 'website' && <Website locale={locale} />}
      {visual === 'factory' && <Factory />}
      {visual === 'pipeline' && <Pipeline />}
      {visual === 'design' && <Design />}
      {visual === 'games' && <Games />}
    </div>
  )
}
