'use client'

/**
 * useInView — fires once when an element enters the viewport.
 * Uses IntersectionObserver under the hood. No external dependencies.
 * Designed for "play once on enter" viewport animations.
 *
 * @example
 *   const [ref, inView] = useInView({ threshold: 0.15 })
 *   return <div ref={ref} className={inView ? 'animate-slide-up' : 'opacity-0'} />
 */

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  /** 0–1: fraction of element visible before triggering. Default: 0.1 */
  threshold?: number
  /** CSS margin around root. Default: '0px 0px -60px 0px' (fires slightly before bottom edge) */
  rootMargin?: string
  /** If true, resets when element leaves view so it re-animates on scroll back. Default: false */
  repeat?: boolean
}

type UseInViewReturn = [React.RefObject<HTMLElement | null>, boolean]

export function useInView({
  threshold = 0.1,
  rootMargin = '0px 0px -60px 0px',
  repeat = false,
}: UseInViewOptions = {}): UseInViewReturn {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced-motion preference — immediately mark as visible
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (!repeat) observer.disconnect()
        } else if (repeat) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, repeat])

  return [ref, inView]
}
