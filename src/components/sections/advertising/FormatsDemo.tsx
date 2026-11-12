'use client'

import { useState, type CSSProperties, type ReactNode } from 'react'
import { useTranslations } from 'next-intl'

const IMAGES = ['a', 'b', 'c'] as const
type Img = (typeof IMAGES)[number]

function Art({ img }: { img: Img }) {
  if (img === 'a')
    return (
      <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect width={200} height={200} fill="#0E3A5C" />
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 5 }).map((__, c) => {
            const x = c * 48 + (r % 2) * 24 - 10
            const y = r * 34
            return <path key={`${r}-${c}`} d={`M${x} ${y + 14} L${x + 24} ${y} L${x + 48} ${y + 14} L${x + 24} ${y + 28} Z`} fill={(r + c) % 3 === 0 ? '#00AEEF' : (r + c) % 3 === 1 ? '#0E6A9E' : '#17304F'} />
          }),
        )}
      </svg>
    )
  if (img === 'b')
    return (
      <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect width={200} height={200} fill="#D97706" />
        <rect y={100} width={200} height={100} fill="#B45309" />
        <circle cx={130} cy={90} r={46} fill="#FDE68A" />
        <path d="M0 150 Q 60 120 120 150 T 200 140 V 200 H 0 Z" fill="#7C2D12" />
      </svg>
    )
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <rect width={200} height={200} fill="#0B1020" />
      <circle cx={160} cy={40} r={14} fill="#E0E7FF" />
      {[[0, 90, 30], [32, 60, 26], [60, 110, 34], [96, 40, 28], [126, 80, 30], [158, 100, 42]].map(([x, y, w]) => (
        <g key={x}>
          <rect x={x} y={y} width={w} height={200 - y} fill="#1E293B" />
          {Array.from({ length: 4 }).map((_, i) => (
            <rect key={i} x={x + 6 + (i % 2) * 10} y={y + 10 + Math.floor(i / 2) * 16} width={5} height={7} fill="#00AEEF" opacity={0.8} />
          ))}
        </g>
      ))}
    </svg>
  )
}

function Button({ size, label }: { size: string; label: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-[#0A0A0A] font-semibold whitespace-nowrap text-white" style={{ fontSize: size, padding: '0.35em 0.9em' }}>
      {label}
    </span>
  )
}

function Frame({ size, label, children, className = '', style }: { size: string; label: string; children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <figure className={`flex flex-col gap-2 ${className}`}>
      <div className="relative overflow-hidden rounded-lg bg-white shadow-[0_12px_30px_-18px_rgba(0,0,0,0.8)]" style={{ containerType: 'size', ...style }}>
        {children}
      </div>
      <figcaption className="text-xs text-neutral-400">
        {label} <span className="text-neutral-500">·</span> {size}
      </figcaption>
    </figure>
  )
}

export default function FormatsDemo() {
  const t = useTranslations('advertisingPage.demo')
  const [headline, setHeadline] = useState(t('headline'))
  const [cta, setCta] = useState(t('cta'))
  const [img, setImg] = useState<Img>('a')
  const h = headline.trim() || t('headline')
  const c = cta.trim() || t('cta')
  const brand = t('brand')
  const banner = t('outputsLabel')

  return (
    <section id="formats" className="w-full scroll-mt-20 bg-[#0B1322] py-20 sm:py-24" aria-labelledby="formats-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold text-[#7D9CCB]">{t('eyebrow')}</p>
        <h2 id="formats-title" className="mt-2 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-300">{t('subtitle')}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr]">
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5">
              <label htmlFor="demo-headline" className="text-sm font-semibold text-neutral-200">
                {t('headlineLabel')}
              </label>
              <input
                id="demo-headline"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                maxLength={48}
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-base text-white placeholder:text-neutral-500 hover:border-white/25"
              />
              <p className="mt-1 text-right text-xs text-neutral-400" aria-hidden="true">
                {headline.length}/48
              </p>
              <label htmlFor="demo-cta" className="mt-2 block text-sm font-semibold text-neutral-200">
                {t('ctaLabel')}
              </label>
              <input
                id="demo-cta"
                value={cta}
                onChange={(e) => setCta(e.target.value)}
                maxLength={16}
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-base text-white hover:border-white/25"
              />
              <fieldset className="mt-5">
                <legend className="text-sm font-semibold text-neutral-200">{t('imageLabel')}</legend>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {IMAGES.map((k) => (
                    <label key={k} className="group cursor-pointer">
                      <input type="radio" name="demo-image" value={k} checked={img === k} onChange={() => setImg(k)} className="peer sr-only" />
                      <span className="relative block aspect-square overflow-hidden rounded-xl border-2 border-transparent peer-checked:border-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#7D9CCB] group-hover:border-white/40">
                        <Art img={k} />
                      </span>
                      <span className="mt-1.5 block text-center text-xs text-neutral-300">{t(`images.${k}`)}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
            <p className="rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/10 px-4 py-2 text-center text-sm font-semibold text-white" aria-live="polite">
              {t('count', { count: 6 })}
            </p>
          </div>

          <div className="min-w-0 space-y-6">
            <Frame size="728 × 90" label={banner} style={{ aspectRatio: '728 / 90' }}>
              <div className="absolute inset-0 flex items-center bg-white">
                <div className="relative h-full w-[22%] flex-shrink-0">
                  <Art img={img} />
                </div>
                <p className="min-w-0 flex-1 px-[2.5cqw] font-heading leading-tight font-bold text-[#0A0A0A]" style={{ fontSize: '2.6cqw' }}>
                  {h}
                </p>
                <div className="pr-[2cqw]">
                  <Button size="1.8cqw" label={c} />
                </div>
              </div>
            </Frame>

            <div className="grid grid-cols-[1fr_auto] gap-4 sm:grid-cols-[1fr_120px_1fr] sm:gap-6">
              <div className="space-y-6">
                <Frame size="300 × 250" label={banner} style={{ aspectRatio: '300 / 250' }}>
                  <div className="absolute inset-0 flex flex-col">
                    <div className="relative h-[52%]">
                      <Art img={img} />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-[5cqw]">
                      <p className="font-heading leading-tight font-bold text-[#0A0A0A]" style={{ fontSize: '7.2cqw' }}>
                        {h}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-600" style={{ fontSize: '4.6cqw' }}>
                          {brand}
                        </span>
                        <Button size="4.6cqw" label={c} />
                      </div>
                    </div>
                  </div>
                </Frame>
                <Frame size="320 × 50" label={banner} style={{ aspectRatio: '320 / 50' }}>
                  <div className="absolute inset-0 flex items-center gap-[2.5cqw] px-[2.5cqw]">
                    <div className="relative aspect-square h-[70%] flex-shrink-0 overflow-hidden rounded">
                      <Art img={img} />
                    </div>
                    <p className="min-w-0 flex-1 truncate font-heading font-bold text-[#0A0A0A]" style={{ fontSize: '4.4cqw' }}>
                      {h}
                    </p>
                    <Button size="3.8cqw" label={c} />
                  </div>
                </Frame>
              </div>

              <Frame size="160 × 600" label={banner} className="w-[96px] sm:w-auto" style={{ aspectRatio: '160 / 600' }}>
                <div className="absolute inset-0 flex flex-col">
                  <div className="relative h-[45%]">
                    <Art img={img} />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-[8cqw]">
                    <p className="font-heading leading-tight font-bold break-words text-[#0A0A0A]" style={{ fontSize: '13cqw' }}>
                      {h}
                    </p>
                    <Button size="10cqw" label={c} />
                  </div>
                </div>
              </Frame>

              <Frame size="1080 × 1080" label={t('socialLabel')} className="col-span-2 sm:col-span-1" style={{ aspectRatio: '4 / 5' }}>
                <div className="absolute inset-0 flex flex-col bg-white">
                  <div className="flex items-center gap-[3cqw] p-[4cqw]">
                    <span className="h-[9cqw] w-[9cqw] rounded-full bg-[#0F1D33]" />
                    <span className="leading-tight">
                      <span className="block font-semibold text-[#0A0A0A]" style={{ fontSize: '4.4cqw' }}>
                        {brand}
                      </span>
                      <span className="block text-neutral-600" style={{ fontSize: '3.6cqw' }}>
                        {t('sponsored')}
                      </span>
                    </span>
                  </div>
                  <div className="relative flex-1">
                    <Art img={img} />
                    <p className="absolute right-[5cqw] bottom-[5cqw] left-[5cqw] rounded-lg bg-white/95 p-[3.5cqw] font-heading leading-tight font-bold text-[#0A0A0A]" style={{ fontSize: '6cqw' }}>
                      {h}
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-[4cqw]">
                    <span className="text-neutral-600" style={{ fontSize: '3.8cqw' }}>
                      ♡ {t('likes')}
                    </span>
                    <Button size="4cqw" label={c} />
                  </div>
                </div>
              </Frame>
            </div>

            <figure className="flex flex-col gap-2">
              <div className="rounded-lg bg-white p-5 sm:p-6">
                <p className="text-sm text-[#202124]">
                  <span className="font-bold">{t('sponsored')}</span> <span className="text-neutral-600">· {t('searchUrl')}</span>
                </p>
                <p className="mt-1 text-xl leading-snug text-[#1A0DAB]">
                  {h} | {brand}
                </p>
                <p className="mt-1 text-sm text-[#4D5156]">
                  {c}. {t('searchDesc')}
                </p>
              </div>
              <figcaption className="text-xs text-neutral-400">{t('searchLabel')}</figcaption>
            </figure>
            <p className="text-sm text-neutral-400">{t('note')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
