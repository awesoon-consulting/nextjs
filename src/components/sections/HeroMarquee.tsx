/**
 * @file     HeroMarquee.tsx
 * @layer    src > components > sections
 * @purpose  Full-width "platforms we work with" marquee that sits immediately
 *           below the hero. First thing visitors see on scroll. Builds instant
 *           credibility by showing we work with tools they recognize.
 * @depends  Platform data from /src/data/platforms.ts
 */

import { flagshipPlatforms } from '@/src/data/platforms'

export default function HeroMarquee() {
  // Duplicate the list so the scroll animation loops seamlessly
  const doubled = [...flagshipPlatforms, ...flagshipPlatforms]

  return (
    <section
      className="w-full border-y border-neutral-200 bg-white py-8 dark:border-white/10 dark:bg-primary/60"
      aria-label="Platforms we work with"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-white/50">
          Platforms we work with every day
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div className="flex gap-12 sm:gap-16 animate-marquee whitespace-nowrap py-2">
          {doubled.map((platform, i) => (
            <a
              key={platform.slug + i}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${platform.name} — ${platform.fit}`}
              className="flex-shrink-0 flex items-center gap-3 px-2 group transition-all duration-200 hover:scale-110"
            >
              {/* White tile for consistent contrast across light/dark modes */}
              <div className="flex items-center justify-center h-14 w-28 rounded-xl bg-white border border-neutral-200 shadow-sm dark:border-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/platforms/${platform.slug}.svg`}
                  alt={platform.name}
                  style={{ height: '36px', width: 'auto', maxWidth: '96px' }}
                  className="object-contain"
                  loading="eager"
                />
              </div>
              <span className="text-sm font-semibold text-text-primary dark:text-white/80 group-hover:text-accent dark:group-hover:text-white transition-colors whitespace-nowrap hidden sm:inline">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
