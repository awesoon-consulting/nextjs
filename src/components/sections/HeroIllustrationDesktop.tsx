'use client'

/**
 * @file     HeroIllustrationDesktop.tsx
 * @layer    src > components > sections
 * @purpose  Client-only wrapper that lazy-loads the 55-animation hero SVG
 *           only when the viewport is >= 1024px. Mobile Safari never sees
 *           the SVG in its DOM at all, which is the only reliable way to
 *           stop SMIL animations from choking the main thread.
 * @depends  HeroIllustration (lazy), useMediaQuery
 */

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const HeroIllustration = dynamic(() => import('@/src/components/ui/HeroIllustration'), {
  ssr: false,
  loading: () => null,
})

interface Props {
  locale: string
}

export default function HeroIllustrationDesktop({ locale }: Props) {
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(min-width: 1024px)')
    const update = () => setCanRender(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  if (!canRender) return null

  return (
    <div className="relative w-[540px] h-[540px]">
      <HeroIllustration locale={locale} />
    </div>
  )
}
