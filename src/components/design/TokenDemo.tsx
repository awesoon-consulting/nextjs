'use client'

import { useState, type CSSProperties } from 'react'
import { useTranslations } from 'next-intl'

const COLOURS = { navy: '#7D9CCB', cyan: '#00AEEF', amber: '#E0A458', mint: '#5EC8A0' } as const
const TYPES = {
  sora: 'var(--font-heading), Sora, sans-serif',
  inter: 'var(--font-body), Inter, sans-serif',
  serif: 'Georgia, "Times New Roman", serif',
} as const
const CORNERS = { round: 18, soft: 10, square: 2 } as const

type Colour = keyof typeof COLOURS
type Type = keyof typeof TYPES
type Corner = keyof typeof CORNERS
type Token = 'colour' | 'type' | 'corners'

function Group<K extends string>({
  label,
  options,
  value,
  onPick,
  name,
  swatch,
}: {
  label: string
  options: K[]
  value: K
  onPick: (k: K) => void
  name: (k: K) => string
  swatch?: (k: K) => string
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-neutral-300">{label}</legend>
      <div className="-mx-4 mt-2 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mt-2.5 sm:flex-wrap sm:overflow-visible sm:px-0">
        {options.map((k) => (
          <label
            key={k}
            className={`relative inline-flex min-h-10 flex-shrink-0 cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-sm sm:px-3.5 sm:py-2 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#7D9CCB] ${
              value === k ? 'border-white bg-white text-[#0A0A0A]' : 'border-white/10 bg-white/5 text-neutral-200 hover:border-white/25 hover:text-white'
            }`}
          >
            <input type="radio" name={label} checked={value === k} onChange={() => onPick(k)} className="sr-only" />
            {swatch && <span className="h-4 w-4 rounded-full ring-1 ring-black/20" style={{ background: swatch(k) }} aria-hidden="true" />}
            {name(k)}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function TokenDemo() {
  const t = useTranslations('designPage.demo')
  const [colour, setColour] = useState<Colour>('navy')
  const [type, setType] = useState<Type>('sora')
  const [corner, setCorner] = useState<Corner>('round')
  const [last, setLast] = useState<Token | null>(null)
  const [pulse, setPulse] = useState(0)

  const touch = (tk: Token) => {
    setLast(tk)
    setPulse((n) => n + 1)
  }

  const vars = {
    '--tk-accent': COLOURS[colour],
    '--tk-font': TYPES[type],
    '--tk-radius': `${CORNERS[corner]}px`,
    '--tk-radius-sm': `${Math.max(2, CORNERS[corner] / 2)}px`,
  } as CSSProperties

  const asset = 'tk-asset relative flex flex-col overflow-hidden border border-white/[0.08] bg-[#111827] p-4'
  const tag = (label: string) => <p className="mb-3 text-xs font-semibold text-neutral-400">{label}</p>
  const lines: [Token, string, string][] = [
    ['colour', '--accent', COLOURS[colour]],
    ['type', '--font', t(`types.${type}`)],
    ['corners', '--radius', `${CORNERS[corner]}px`],
  ]

  return (
    <section id="token-demo" className="relative w-full overflow-hidden bg-[#0A0A0A] py-24" aria-labelledby="demo-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-sm font-semibold text-[#7D9CCB]">{t('eyebrow')}</p>
            <h2 id="demo-title" className="mt-2 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('title')}
            </h2>
            <p className="mt-4 text-base text-neutral-300 sm:text-lg">{t('subtitle')}</p>
            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
              <Group
                label={t('colour')}
                options={Object.keys(COLOURS) as Colour[]}
                value={colour}
                onPick={(k) => {
                  setColour(k)
                  touch('colour')
                }}
                name={(k) => t(`colours.${k}`)}
                swatch={(k) => COLOURS[k]}
              />
              <Group
                label={t('type')}
                options={Object.keys(TYPES) as Type[]}
                value={type}
                onPick={(k) => {
                  setType(k)
                  touch('type')
                }}
                name={(k) => t(`types.${k}`)}
              />
              <Group
                label={t('corners')}
                options={Object.keys(CORNERS) as Corner[]}
                value={corner}
                onPick={(k) => {
                  setCorner(k)
                  touch('corners')
                }}
                name={(k) => t(`cornerNames.${k}`)}
              />
            </div>
            <pre className="mt-8 hidden rounded-2xl border border-white/[0.08] bg-[#111827] p-4 font-mono text-[13px] leading-6 text-neutral-300 lg:block" aria-hidden="true">
              {lines.map(([tk, k, v]) => (
                <span key={tk} className={`block rounded px-1 transition-colors duration-500 ${last === tk ? 'bg-white/10 text-white' : ''}`}>
                  <span className="text-[#7D9CCB]">{k}</span>: {v};
                </span>
              ))}
            </pre>
          </div>

          <div style={vars} className="tk-stage relative lg:order-none">
            <p className="sr-only" aria-live="polite">
              {pulse > 0 ? t('updated') : ''}
            </p>
            <div className="mb-4 flex h-8 items-center">
              {pulse > 0 && (
                <span key={pulse} className="tk-badge inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full" style={{ background: 'var(--tk-accent)' }} />
                  {t('updated')}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div key={`b${pulse}`} className={`${asset} tk-pop`} style={{ borderRadius: 'var(--tk-radius)' }}>
                {tag(t('assetButton'))}
                <div className="flex flex-1 flex-col items-start justify-center gap-2.5">
                  <span className="tk-fill px-4 py-2.5 text-sm font-semibold text-[#0A0A0A]" style={{ borderRadius: 'var(--tk-radius-sm)', fontFamily: 'var(--tk-font)' }}>
                    {t('buttonPrimary')}
                  </span>
                  <span className="tk-line border px-4 py-2 text-sm font-semibold" style={{ borderRadius: 'var(--tk-radius-sm)', fontFamily: 'var(--tk-font)' }}>
                    {t('buttonSecondary')}
                  </span>
                </div>
              </div>

              <div key={`c${pulse}`} className={`${asset} tk-pop`} style={{ borderRadius: 'var(--tk-radius)', animationDelay: '60ms' }}>
                {tag(t('assetCard'))}
                <p className="tk-text text-xs font-semibold">{t('cardKicker')}</p>
                <p className="mt-1 text-lg leading-tight font-semibold text-white" style={{ fontFamily: 'var(--tk-font)' }}>
                  {t('cardTitle')}
                </p>
                <div className="mt-3 flex h-10 items-end gap-1.5" aria-hidden="true">
                  {[40, 55, 48, 70, 85, 100].map((h, i) => (
                    <span key={i} className="tk-fill w-full" style={{ height: `${h}%`, opacity: 0.35 + i * 0.13, borderRadius: 'var(--tk-radius-sm) var(--tk-radius-sm) 2px 2px' }} />
                  ))}
                </div>
                <p className="mt-2 hidden text-xs text-neutral-300 sm:block">{t('cardText')}</p>
                <p className="tk-text mt-2 text-sm font-semibold">{t('cardAction')} →</p>
              </div>

              <div key={`s${pulse}`} className={`${asset} tk-pop`} style={{ borderRadius: 'var(--tk-radius)', animationDelay: '120ms' }}>
                {tag(t('assetSocial'))}
                <div className="tk-fill relative flex min-h-[150px] flex-1 flex-col justify-between p-3.5 sm:aspect-square sm:flex-none lg:aspect-[16/10] text-[#0A0A0A] sm:p-5" style={{ borderRadius: 'var(--tk-radius-sm)' }}>
                  <span className="self-start rounded-full bg-[#0A0A0A] px-2.5 py-1 text-[10px] font-semibold text-white">{t('socialKicker')}</span>
                  <p className="text-lg leading-[1.05] font-bold sm:text-3xl" style={{ fontFamily: 'var(--tk-font)' }}>
                    {t('socialTitle')}
                  </p>
                  <p className="text-[11px] font-semibold opacity-80">{t('socialHandle')}</p>
                </div>
              </div>

              <div key={`a${pulse}`} className={`${asset} tk-pop`} style={{ borderRadius: 'var(--tk-radius)', animationDelay: '180ms' }}>
                {tag(t('assetApp'))}
                <div className="mx-auto w-full max-w-[220px] flex-1 border-[5px] border-[#1F2937] bg-[#0A0A0A] p-3" style={{ borderRadius: 'calc(var(--tk-radius) + 8px)' }}>
                  <p className="text-base font-semibold text-white sm:text-lg" style={{ fontFamily: 'var(--tk-font)' }}>
                    {t('appTitle')}
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {(['appItem1', 'appItem2', 'appItem3'] as const).map((k) => (
                      <li key={k} className="flex items-center gap-2 bg-[#111827] px-2 py-1.5 text-[11px] text-neutral-200 sm:text-xs" style={{ borderRadius: 'var(--tk-radius-sm)' }}>
                        <span className="tk-fill flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full" aria-hidden="true">
                          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="#0A0A0A" strokeWidth="2">
                            <path d="M2.5 6.2l2.2 2.2 4.8-4.8" />
                          </svg>
                        </span>
                        <span className="leading-tight">{t(k)}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="tk-fill mt-3 block py-1.5 text-center text-xs font-semibold text-[#0A0A0A]" style={{ borderRadius: 'var(--tk-radius-sm)', fontFamily: 'var(--tk-font)' }}>
                    {t('appAction')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
