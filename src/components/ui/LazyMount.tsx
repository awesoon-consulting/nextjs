'use client'

/**
 * @file     LazyMount.tsx
 * @layer    src > components > ui
 * @purpose  Mounts children only when the wrapper enters the viewport (or on
 *           user interaction). Reserves space via a minHeight placeholder so
 *           there's no layout shift. Massively reduces initial RSC payload
 *           and client JS execution on mobile by deferring below-fold work.
 * @depends  IntersectionObserver
 */

import { useEffect, useRef, useState, ReactNode } from 'react'

interface LazyMountProps {
  children: ReactNode
  /** How many pixels beyond the viewport to start mounting. Default 400. */
  rootMargin?: string
  /** Placeholder min-height to avoid layout shift. Default 400px. */
  minHeight?: number
  /** Force mount immediately (disable lazy behaviour) */
  disabled?: boolean
}

export default function LazyMount({
  children,
  rootMargin = '400px',
  minHeight = 400,
  disabled = false,
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(disabled)

  useEffect(() => {
    if (disabled || mounted) return
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setMounted(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setMounted(true)
            observer.disconnect()
            break
          }
        }
      },
      { rootMargin }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [disabled, mounted, rootMargin])

  if (mounted) {
    return <>{children}</>
  }

  return (
    <div
      ref={ref}
      style={{ minHeight }}
      aria-hidden="true"
    />
  )
}
