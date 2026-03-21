'use client'

/**
 * AnimateIn — wraps any content and applies a CSS entrance animation
 * once the element scrolls into the viewport.
 *
 * Uses useInView (IntersectionObserver) + pure CSS transforms — no
 * external animation library required.
 *
 * Variants:
 *   'fade'        — opacity 0 → 1
 *   'slide-up'    — translateY(32px) + fade
 *   'slide-left'  — translateX(-32px) + fade  (content enters from left)
 *   'slide-right' — translateX(32px) + fade   (content enters from right)
 *   'scale'       — scale(0.92) + fade
 *
 * @example
 *   <AnimateIn variant="slide-up" delay={200}>
 *     <Card>...</Card>
 *   </AnimateIn>
 *
 * @see /src/hooks/useInView.ts
 */

import { useInView } from '@/src/hooks/useInView'
import type { ReactNode, CSSProperties } from 'react'

export type AnimateInVariant = 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale'

interface AnimateInProps {
  children: ReactNode
  variant?: AnimateInVariant
  /** Delay in ms before animation starts once in view. Default: 0 */
  delay?: number
  /** Duration in ms. Default: 600 */
  duration?: number
  /** Easing function. Default: cubic-bezier(0.16, 1, 0.3, 1) — snappy ease-out */
  easing?: string
  /** Pass extra className to the wrapper div */
  className?: string
  /** IntersectionObserver threshold. Default: 0.1 */
  threshold?: number
}

const hiddenStyles: Record<AnimateInVariant, CSSProperties> = {
  fade:        { opacity: 0 },
  'slide-up':  { opacity: 0, transform: 'translateY(32px)' },
  'slide-left':  { opacity: 0, transform: 'translateX(-32px)' },
  'slide-right': { opacity: 0, transform: 'translateX(32px)' },
  scale:       { opacity: 0, transform: 'scale(0.92)' },
}

const visibleStyles: CSSProperties = {
  opacity: 1,
  transform: 'none',
}

export default function AnimateIn({
  children,
  variant = 'slide-up',
  delay = 0,
  duration = 600,
  easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
  className = '',
  threshold = 0.1,
}: AnimateInProps) {
  const [ref, inView] = useInView({ threshold })

  const style: CSSProperties = {
    ...(inView ? visibleStyles : hiddenStyles[variant]),
    transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
    willChange: 'opacity, transform',
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={style}
      className={className}
    >
      {children}
    </div>
  )
}
