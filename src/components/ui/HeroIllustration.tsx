'use client'

/**
 * @file     HeroIllustration.tsx
 * @layer    src > components > ui
 * @readme   ./README.md
 * @purpose  Loads animated SVG as static file (fast on Safari) with HTML link overlays
 * @depends  React
 */

import Link from 'next/link'

interface HeroIllustrationProps {
  locale: string
}

const hotspots = [
  { key: 'hub', href: '/solutions', top: '38.6%', left: '40.9%', w: '18.2%', h: '18.2%' },
  { key: 'erp', href: '/solutions/erp-implementation', top: '6.8%', left: '43.2%', w: '13.6%', h: '11.4%' },
  { key: 'crm', href: '/solutions/crm-implementation', top: '40.9%', left: '79.5%', w: '13.6%', h: '11.4%' },
  { key: 'wms', href: '/solutions/mobile-warehouse-barcoding', top: '77.3%', left: '43.2%', w: '13.6%', h: '11.4%' },
  { key: 'api', href: '/solutions/api-integrations', top: '40.9%', left: '6.8%', w: '13.6%', h: '11.4%' },
  { key: 'bi', href: '/solutions/systems-audit', top: '11.4%', left: '77.3%', w: '12.7%', h: '10.5%' },
  { key: 'ai', href: '/solutions/ai-operations', top: '72.7%', left: '10%', w: '12.7%', h: '10.5%' },
] as const

export default function HeroIllustration({ locale }: HeroIllustrationProps) {
  return (
    <div className="relative w-full h-full">
      {/* Static SVG loaded natively by the browser; not parsed through React */}
      <object
        type="image/svg+xml"
        data="/images/hero-illustration.svg"
        className="w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        Operations systems illustration
      </object>

      {/* Invisible link hotspots positioned over each node */}
      {hotspots.map(({ key, href, top, left, w, h }) => (
        <Link
          key={key}
          href={`/${locale}${href}`}
          className="absolute rounded-xl cursor-pointer hover:bg-amber-500/5 transition-colors duration-200"
          style={{ top, left, width: w, height: h }}
          aria-label={key === 'hub' ? 'View all solutions' : `View ${key.toUpperCase()} solution`}
        />
      ))}
    </div>
  )
}
