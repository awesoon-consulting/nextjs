'use client'

/**
 * @file     PlatformHeroChips.tsx
 * @layer    src > components > sections
 * @purpose  Compact inline platform logo chips shown in the solution page hero.
 *           Clicking a chip smooth-scrolls to the full PlatformStack section below.
 * @depends  Platform data from /src/data/platforms.ts
 */

import type { Platform } from '@/src/data/platforms'

interface PlatformHeroChipsProps {
  platforms: Platform[]
  /** ID of the full platforms section to scroll to */
  scrollTargetId: string
  label?: string
}

export default function PlatformHeroChips({
  platforms,
  scrollTargetId,
  label = 'Platforms we implement',
}: PlatformHeroChipsProps) {
  if (!platforms || platforms.length === 0) return null

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const target = document.getElementById(scrollTargetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Limit to 5 chips max so the hero stays clean
  const shown = platforms.slice(0, 5)
  const extra = platforms.length - shown.length

  return (
    <div className="mt-8 flex items-center gap-3 flex-wrap">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted dark:text-white/50">
        {label}
      </span>
      <div className="flex items-center gap-2 flex-wrap">
        {shown.map((platform) => (
          <button
            key={platform.slug}
            type="button"
            onClick={handleClick}
            aria-label={`See how we implement ${platform.name} — scroll to platforms section`}
            className="group flex items-center gap-2 h-10 pl-2 pr-3.5 rounded-full bg-white border border-neutral-200 shadow-sm hover:border-accent hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-white/25 dark:hover:border-accent"
          >
            <span className="flex items-center justify-center h-6 w-8 rounded-md bg-white flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/platforms/${platform.slug}.svg`}
                alt=""
                style={{ height: '20px', width: 'auto', maxWidth: '28px' }}
                className="object-contain"
              />
            </span>
            <span className="text-xs font-semibold text-neutral-900 group-hover:text-accent transition-colors whitespace-nowrap">
              {platform.name}
            </span>
          </button>
        ))}
        {extra > 0 && (
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex items-center gap-1 h-10 px-4 rounded-full bg-accent/10 text-xs font-semibold text-accent hover:bg-accent hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:bg-accent/20 dark:hover:bg-accent dark:hover:text-primary"
            aria-label="See all platforms"
          >
            +{extra} more
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
