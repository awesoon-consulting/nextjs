'use client'

import { useEffect, useRef } from 'react'

// The SVG street paints with the page; three.js loads after first paint and idle, never under reduced motion.
export default function Street() {
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = box.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) return

    let cancelled = false
    let cleanup = () => {}
    let idle = 0

    async function boot() {
      if (cancelled || !el) return
      const nav = navigator as Navigator & { connection?: { saveData?: boolean } }
      const lite = window.innerWidth < 835 || (navigator.hardwareConcurrency || 8) <= 4 || Boolean(nav.connection?.saveData)
      const [T, { createStreet }] = await Promise.all([import('three'), import('./street-scene')])
      if (cancelled) return
      const canvas = document.createElement('canvas')
      el.appendChild(canvas)
      let street: ReturnType<typeof createStreet>
      try {
        street = createStreet(T, canvas, el, lite)
      } catch {
        canvas.remove()
        return
      }
      requestAnimationFrame(() => el.classList.add('is-live'))
      let onScreen = false
      const io = new IntersectionObserver((entries) => {
        onScreen = entries[0].isIntersecting
        if (onScreen && !document.hidden) street.start()
        else street.stop()
      })
      io.observe(el)
      const onVisibility = () => (document.hidden || !onScreen ? street.stop() : street.start())
      const onReduce = (e: MediaQueryListEvent) => {
        if (e.matches) {
          street.stop()
          el.classList.remove('is-live')
        }
      }
      document.addEventListener('visibilitychange', onVisibility)
      reduce.addEventListener('change', onReduce)
      cleanup = () => {
        io.disconnect()
        document.removeEventListener('visibilitychange', onVisibility)
        reduce.removeEventListener('change', onReduce)
        street.dispose()
        canvas.remove()
        el.classList.remove('is-live')
      }
    }

    function later() {
      if (typeof window.requestIdleCallback === 'function') idle = window.requestIdleCallback(() => void boot(), { timeout: 2000 })
      else idle = window.setTimeout(() => void boot(), 200)
    }
    if (document.readyState === 'complete') later()
    else window.addEventListener('load', later, { once: true })

    return () => {
      cancelled = true
      window.removeEventListener('load', later)
      if (typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(idle)
      window.clearTimeout(idle)
      cleanup()
    }
  }, [])

  return (
    <div className="ov-street" ref={box} aria-hidden="true">
      <svg viewBox="0 0 1600 640" preserveAspectRatio="xMidYMax slice" fill="none" strokeLinejoin="round">
        <g stroke="#EDF0F3" strokeOpacity=".1">
          <path d="M0 560H1600M0 600H1600M0 520H1600" />
          <path d="M200 640 500 480M500 640 650 480M800 640V480M1100 640 950 480M1400 640 1100 480" />
        </g>
        <g stroke="#EDF0F3" strokeOpacity=".3" strokeWidth="1.2">
          <path d="M120 500V430H210V500M110 432 165 392 220 432" />
          <path d="M300 505V420H400V505M290 422 350 378 410 422" />
          <path d="M480 500V440H560V500M470 442 520 405 570 442" />
          <path d="M1040 500V440H1120V500M1030 442 1080 405 1130 442" />
          <path d="M1200 505V418H1300V505M1190 420 1250 376 1310 420" />
          <path d="M1390 500V432H1480V500M1380 434 1435 394 1490 434" />
        </g>
        <g stroke="#6BD1D2" strokeWidth="1.6">
          <path d="M720 510V400H880V510M705 402 800 330 895 402" />
        </g>
        <g fill="#6BD1D2">
          <circle cx="640" cy="300" r="3" />
          <circle cx="960" cy="260" r="3" fill="#8EC5FF" />
          <circle cx="760" cy="230" r="3" fill="#B9A7FF" />
        </g>
      </svg>
    </div>
  )
}
