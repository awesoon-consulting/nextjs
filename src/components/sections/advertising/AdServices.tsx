'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { useMessages, useTranslations } from 'next-intl'

const TABS = ['campaigns', 'production', 'banner', 'playbooks'] as const
type Tab = { name: string; line: string; includes: string[]; system: string }

function TabArt({ id }: { id: (typeof TABS)[number] }) {
  const tile = (x: number, y: number, w: number, h: number, fill: string, key?: string | number) => (
    <rect key={key} x={x} y={y} width={w} height={h} rx={6} fill={fill} />
  )
  return (
    <svg viewBox="0 0 320 200" className="h-auto w-full" aria-hidden="true">
      <rect x={0} y={0} width={320} height={200} rx={18} fill="#0B1322" />
      {id === 'campaigns' &&
        [0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${36 + i * 90} ${60 - i * 8})`} opacity={1 - i * 0.2}>
            {tile(0, 0, 70, 90, '#17304F')}
            {tile(10, 12, 50, 8, '#00AEEF')}
            {tile(10, 28, 36, 6, '#7D9CCB')}
            {tile(10, 62, 30, 14, '#FFFFFF')}
          </g>
        ))}
      {id === 'production' && (
        <g>
          {tile(30, 70, 70, 60, '#00AEEF')}
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <path d={`M100 100 C 140 100, 150 ${40 + i * 40}, 190 ${40 + i * 40}`} stroke="#7D9CCB" strokeOpacity={0.5} strokeWidth={2} fill="none" />
              {tile(196, 26 + i * 40, 90, 28, ['#17304F', '#193C57', '#0E6A9E', '#17304F'][i])}
              {tile(206, 36 + i * 40, 40, 6, '#FFFFFF')}
            </g>
          ))}
        </g>
      )}
      {id === 'banner' && (
        <g>
          {tile(24, 24, 272, 34, '#17304F')}
          {tile(34, 36, 120, 10, '#00AEEF')}
          {tile(24, 72, 120, 104, '#193C57')}
          {tile(36, 86, 80, 10, '#FFFFFF')}
          {tile(160, 72, 46, 104, '#0E6A9E')}
          {tile(220, 72, 76, 64, '#17304F')}
          {tile(220, 148, 76, 28, '#00AEEF')}
        </g>
      )}
      {id === 'playbooks' && (
        <g>
          {tile(60, 30, 200, 140, '#17304F')}
          <line x1={160} y1={30} x2={160} y2={170} stroke="#0B1322" strokeWidth={3} />
          {[0, 1, 2, 3].map((i) => tile(76, 52 + i * 26, 64 - (i % 2) * 18, 7, i === 0 ? '#00AEEF' : '#7D9CCB', i))}
          {['#00AEEF', '#7D9CCB', '#FFFFFF', '#0E6A9E'].map((c, i) => (
            <circle key={c} cx={186 + (i % 2) * 34} cy={70 + Math.floor(i / 2) * 40} r={12} fill={c} />
          ))}
        </g>
      )}
    </svg>
  )
}

export default function AdServices() {
  const t = useTranslations('advertisingPage.services')
  const tabs = (useMessages() as { advertisingPage: { services: { tabs: Record<string, Tab> } } }).advertisingPage.services.tabs
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLButtonElement | null)[]>([])
  const id = TABS[active]
  const tab = tabs[id]

  function onKey(e: KeyboardEvent) {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    e.preventDefault()
    const n = (active + d + TABS.length) % TABS.length
    setActive(n)
    refs.current[n]?.focus()
  }

  return (
    <section className="w-full bg-primary py-20 sm:py-24" aria-labelledby="ad-services-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="ad-services-title" className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-300">{t('subtitle')}</p>
        <div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap" role="tablist" aria-label={t('title')} onKeyDown={onKey}>
          {TABS.map((k, i) => (
            <button
              key={k}
              ref={(el) => {
                refs.current[i] = el
              }}
              id={`ad-tab-${k}`}
              role="tab"
              aria-selected={i === active}
              aria-controls="ad-service-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium ${
                i === active ? 'border-white bg-white text-[#0A0A0A]' : 'border-white/10 text-neutral-300 hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              {tabs[k].name}
            </button>
          ))}
        </div>
        <div
          id="ad-service-panel"
          role="tabpanel"
          aria-labelledby={`ad-tab-${id}`}
          className="mt-6 grid overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111827] lg:grid-cols-[1fr_1.1fr]"
        >
          <div key={id} className="ad-fade p-6 sm:p-10">
            <h3 className="font-heading text-2xl font-semibold text-white">{tab.name}</h3>
            <p className="mt-3 text-lg leading-relaxed text-neutral-300">{tab.line}</p>
            <p className="mt-7 text-sm font-semibold text-neutral-400">{t('includesLabel')}</p>
            <ul className="mt-3 space-y-2.5">
              {tab.includes.map((x) => (
                <li key={x} className="flex gap-3 text-base text-white">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00AEEF]" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-2xl border border-[#00AEEF]/25 bg-[#0B1322] p-4">
              <p className="text-sm font-semibold text-[#7D9CCB]">{t('systemLabel')}</p>
              <p className="mt-1 text-base text-white">{tab.system}</p>
            </div>
          </div>
          <div className="flex items-center bg-white/[0.02] p-6 sm:p-10">
            <div key={id} className="ad-fade w-full">
              <TabArt id={id} />
            </div>
          </div>
        </div>
        <p className="mt-5 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-neutral-200">{t('comingNextLabel')}</span>
          {t('comingNext')}
        </p>
      </div>
    </section>
  )
}
