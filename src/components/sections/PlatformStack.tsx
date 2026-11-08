'use client'

/**
 * @file     PlatformStack.tsx
 * @layer    src > components > sections
 * @readme   ./README.md
 * @purpose  Interactive colorful platform badges with smooth animated detail card.
 *           Hover a logo to preview, click active logo to open vendor site.
 *           The detail card cross-fades and smoothly animates height.
 * @depends  Platform data from /src/data/platforms.ts
 */

import { useState } from 'react'
import type { Platform } from '@/src/data/platforms'

interface PlatformStackProps {
  platforms: Platform[]
  heading?: string
  subheading?: string
  tapHint?: string
}

export default function PlatformStack({
  platforms,
  heading,
  subheading,
}: PlatformStackProps) {
  const [active, setActive] = useState<number>(0)

  if (!platforms || platforms.length === 0) return null

  const activePlatform = platforms[active]

  function handleLogoClick(i: number, url: string) {
    if (i === active) {
      // Clicking the already-active logo opens the vendor site
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      setActive(i)
    }
  }

  return (
    <div>
      {heading && (
        <div className="mb-6">
          <h2 className="font-heading font-bold text-2xl text-text-primary mb-2 dark:text-white">
            {heading}
          </h2>
          {subheading && (
            <p className="text-sm text-text-secondary dark:text-neutral-400">{subheading}</p>
          )}
        </div>
      )}

      {/* Detail card: content cross-fades on change */}
      <div className="mb-4 rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 shadow-sm dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.02] overflow-hidden">
        <div key={active} className="p-5 platform-detail-anim">
          <div className="flex items-start gap-4">
            <a
              href={activePlatform.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${activePlatform.name} website`}
              className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-xl bg-white border border-neutral-200 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md dark:bg-white dark:border-white/20"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/platforms/${activePlatform.slug}.svg`}
                alt=""
                style={{ height: '36px', width: 'auto', maxWidth: '52px' }}
                className="object-contain"
              />
            </a>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h3 className="font-heading font-bold text-lg text-text-primary dark:text-white">
                  {activePlatform.name}
                </h3>
                <a
                  href={activePlatform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent hover:bg-accent hover:text-white dark:bg-accent/20 dark:hover:bg-accent dark:hover:text-primary transition-all"
                >
                  Visit site
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-text-secondary dark:text-neutral-300 leading-relaxed">
                {activePlatform.fit}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Logo grid: wide 4-col layout */}
      <div
        role="tablist"
        aria-label="Platforms"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      >
        {platforms.map((platform, i) => {
          const isActive = active === i
          return (
            <button
              key={platform.slug + i}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={
                isActive
                  ? `Open ${platform.name} website`
                  : `Select ${platform.name} to see how it fits`
              }
              onClick={() => handleLogoClick(i, platform.url)}
              onMouseEnter={() => setActive(i)}
              className={[
                'group relative flex flex-col items-center justify-center gap-2 py-5 px-2',
                'rounded-xl border-2 transition-all duration-300 ease-out cursor-pointer',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                isActive
                  ? 'border-accent bg-accent/[0.06] shadow-md dark:border-accent dark:bg-accent/[0.08]'
                  : 'border-neutral-200 bg-white hover:border-accent/50 hover:-translate-y-0.5 hover:shadow-md dark:border-white/15 dark:bg-white/[0.04] dark:hover:border-white/30 dark:hover:bg-white/[0.08]',
              ].join(' ')}
            >
              {/* White tile for logo so brand colors always have contrast */}
              <div className="pointer-events-none flex items-center justify-center h-12 w-20 rounded-lg bg-white border border-neutral-200 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/platforms/${platform.slug}.svg`}
                  alt={platform.name}
                  style={{ height: '32px', width: 'auto', maxWidth: '72px' }}
                  className={[
                    'object-contain transition-transform duration-300 ease-out',
                    isActive ? 'scale-110' : 'group-hover:scale-105',
                  ].join(' ')}
                />
              </div>
              <span
                className={[
                  'pointer-events-none text-[11px] font-semibold leading-none truncate w-full text-center transition-colors duration-300',
                  isActive
                    ? 'text-accent dark:text-accent'
                    : 'text-text-primary dark:text-white/70',
                ].join(' ')}
              >
                {platform.name}
              </span>
              {isActive && (
                <span className="pointer-events-none absolute top-1.5 right-1.5 inline-flex items-center gap-0.5 rounded-full bg-accent/15 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-accent">
                  <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
