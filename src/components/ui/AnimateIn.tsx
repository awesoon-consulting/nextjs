/**
 * @file     AnimateIn.tsx
 * @layer    src > components > ui
 * @readme   ./README.md
 * @purpose  Viewport-entry fade/slide wrapper. CSS-only: emits classes that
 *           hook into the keyframes declared in app/globals.css. A single
 *           page-level IntersectionObserver (mounted by ScrollRevealRoot in
 *           the root layout) adds `.in-view` to elements as they scroll into
 *           the viewport, at which point the CSS animation plays once.
 *
 *           This component is a **server component** — no hooks, no client
 *           boundary. It can be used inside server components without
 *           forcing them into the client bundle.
 *
 *           Replaces the prior React-based implementation which created one
 *           IntersectionObserver + two useState/useEffect hooks per instance
 *           (~20 instances on the homepage alone).
 * @depends  app/globals.css keyframes, ScrollRevealRoot page-level observer
 */

import type { ReactNode, CSSProperties } from 'react'

export type AnimateInVariant = 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale'

interface AnimateInProps {
  children: ReactNode
  variant?: AnimateInVariant
  /** Delay in ms before the animation starts. Rounded to the nearest 100ms. */
  delay?: number
  /** Duration in ms. Default 600. */
  duration?: number
  /** Extra className. */
  className?: string
  /**
   * Unused (kept for API compatibility with the previous React-based
   * component). Threshold is now controlled globally by ScrollRevealRoot.
   */
  threshold?: number
}

const variantClass: Record<AnimateInVariant, string> = {
  fade: 'anim-fade-in',
  'slide-up': 'anim-slide-up',
  'slide-left': 'anim-slide-left',
  'slide-right': 'anim-slide-right',
  scale: 'anim-scale-in',
}

export default function AnimateIn({
  children,
  variant = 'slide-up',
  delay = 0,
  duration = 600,
  className = '',
}: AnimateInProps) {
  const style: CSSProperties = {}
  if (duration !== 600) style.animationDuration = `${duration}ms`
  if (delay > 0) style.animationDelay = `${delay}ms`

  return (
    <div
      data-animate
      className={`reveal ${variantClass[variant]} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}
