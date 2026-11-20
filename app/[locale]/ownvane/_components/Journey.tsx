'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { STEPS, type Step } from './journey-scene'
import StillScene from './StillScene'

type Labels = { label: string; next: string; back: string; progress: string }
type Scene = { go: (s: Step, instant?: boolean) => void; start: () => void; stop: () => void; dispose: () => void }

const FLIGHT_MS = 1700
const LAST = STEPS.length - 1

function stepFromHash(): number {
  const i = STEPS.indexOf(window.location.hash.slice(1) as Step)
  return i < 0 ? 0 : i
}

function isField(el: EventTarget | null) {
  return el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|SELECT|TEXTAREA|BUTTON)$/.test(el.tagName))
}

// Server-rendered sections are the page for crawlers and no-JS visitors; this upgrades them into a guided journey.
export default function Journey({ className, labels, titles, children }: { className: string; labels: Labels; titles: string[]; children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const scene = useRef<Scene | null>(null)
  const [index, setIndex] = useState(0)
  const [settled, setSettled] = useState(true)
  const [live, setLive] = useState(false)
  const indexRef = useRef(0)
  const lock = useRef(0)
  const settleTimer = useRef(0)
  const motion = useRef({ reduce: false, webgl: false })

  const go = useCallback((next: number, opts: { push?: boolean; instant?: boolean } = {}) => {
    const i = Math.max(0, Math.min(LAST, next))
    const prev = indexRef.current
    if (i === prev && !opts.instant) return
    indexRef.current = i
    setIndex(i)
    const step = STEPS[i]
    if (opts.push !== false) {
      const url = step === 'intro' ? window.location.pathname + window.location.search : `#${step}`
      window.history.pushState(null, '', url)
    }
    const instant = opts.instant || motion.current.reduce || !scene.current
    scene.current?.go(step, instant)
    window.clearTimeout(settleTimer.current)
    if (instant) setSettled(true)
    else {
      setSettled(false)
      settleTimer.current = window.setTimeout(() => setSettled(true), FLIGHT_MS * 0.85)
    }
    if (step === 'waitlist') {
      requestAnimationFrame(() => document.getElementById('ov-waitlist-title')?.focus({ preventScroll: true }))
    }
  }, [])

  // Initial step from the URL, back and forward, anchor links to steps, keys, wheel and swipe.
  useEffect(() => {
    const el = root.current
    if (!el) return
    motion.current.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // The browser scrolls to a fragment's element on load; the journey owns the viewport, so undo that scroll.
    const unscroll = () => {
      if (STEPS.includes(window.location.hash.slice(1) as Step)) window.scrollTo(0, 0)
    }
    if (window.location.hash) {
      go(stepFromHash(), { push: false, instant: true })
      unscroll()
      // The fragment and restore scrolls land at different moments per browser; hold the top until the visitor acts.
      const stopHolding = () => {
        window.removeEventListener('scroll', unscroll)
        ;['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((t) => window.removeEventListener(t, stopHolding))
      }
      window.addEventListener('scroll', unscroll, { passive: true })
      ;['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((t) => window.addEventListener(t, stopHolding, { once: true, passive: true }))
      window.setTimeout(stopHolding, 2500)
    }

    const onPop = () => go(stepFromHash(), { push: false })
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!a || !el.contains(a)) return
      const i = STEPS.indexOf(a.getAttribute('href')!.slice(1) as Step)
      if (i < 0) return
      e.preventDefault()
      go(i)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return
      const rect = el.getBoundingClientRect()
      if (rect.bottom < 80 || rect.top > window.innerHeight / 2) return
      const atForm = indexRef.current === LAST
      if (e.key === 'Escape') {
        if (!atForm) {
          e.preventDefault()
          go(LAST)
        }
        return
      }
      if (isField(e.target) && !(e.target instanceof HTMLButtonElement && e.target.closest('.ov-controls'))) return
      if (e.key === 'ArrowRight' || (!atForm && (e.key === 'ArrowDown' || e.key === 'PageDown'))) {
        e.preventDefault()
        go(indexRef.current + 1)
      } else if (e.key === 'ArrowLeft' || (!atForm && (e.key === 'ArrowUp' || e.key === 'PageUp'))) {
        e.preventDefault()
        go(indexRef.current - 1)
      }
    }
    // One wheel gesture moves one step. The waitlist step never captures the wheel, so the form scrolls normally.
    let acc = 0
    let accReset = 0
    const onWheel = (e: WheelEvent) => {
      const i = indexRef.current
      if (i === LAST || e.ctrlKey) return
      const panel = (e.target as HTMLElement).closest('.ov-step')
      if (panel && panel.scrollHeight > panel.clientHeight + 1) {
        const atTop = panel.scrollTop <= 0
        const atEnd = panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 1
        if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atTop)) return
      }
      if (i === 0 && e.deltaY < 0) return
      e.preventDefault()
      const now = performance.now()
      if (now < lock.current) return
      window.clearTimeout(accReset)
      accReset = window.setTimeout(() => (acc = 0), 220)
      acc += Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX
      if (Math.abs(acc) < 40) return
      lock.current = now + (motion.current.reduce ? 450 : 1000)
      go(i + (acc > 0 ? 1 : -1))
      acc = 0
    }
    let touch: { x: number; y: number; onStage: boolean } | null = null
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      const target = e.target as HTMLElement
      touch = { x: t.clientX, y: t.clientY, onStage: !target.closest('.ov-step, .ov-controls, .ov-bar') }
    }
    const onTouchMove = (e: TouchEvent) => {
      if (touch?.onStage && indexRef.current !== LAST && e.cancelable) e.preventDefault()
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (!touch) return
      const t = e.changedTouches[0]
      const dx = t.clientX - touch.x
      const dy = t.clientY - touch.y
      const start = touch
      touch = null
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) go(indexRef.current + (dx < 0 ? 1 : -1))
      else if (start.onStage && indexRef.current !== LAST && Math.abs(dy) > 60) go(indexRef.current + (dy < 0 ? 1 : -1))
    }

    window.addEventListener('popstate', onPop)
    el.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('popstate', onPop)
      el.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      window.clearTimeout(settleTimer.current)
    }
  }, [go])

  // three.js loads after first paint and idle. Low-power or no-WebGL devices keep the illustrated stills.
  useEffect(() => {
    const box = stage.current
    if (!box) return
    const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number }
    const probe = document.createElement('canvas')
    const webgl = Boolean(probe.getContext('webgl2') || probe.getContext('webgl'))
    const lowPower = (navigator.hardwareConcurrency || 8) <= 2 || (nav.deviceMemory ?? 8) <= 2 || Boolean(nav.connection?.saveData)
    if (!webgl || lowPower) return
    motion.current.webgl = true

    let cancelled = false
    let idle = 0
    let cleanup = () => {}
    async function boot() {
      if (cancelled || !box) return
      const [T, { createJourneyScene }] = await Promise.all([import('three'), import('./journey-scene')])
      if (cancelled) return
      const canvas = document.createElement('canvas')
      canvas.className = 'ov-canvas'
      box.appendChild(canvas)
      const lite = window.innerWidth < 835 || (navigator.hardwareConcurrency || 8) <= 4
      let s: Scene
      try {
        s = createJourneyScene(T, canvas, box, { lite, still: motion.current.reduce, flightMs: FLIGHT_MS })
      } catch {
        canvas.remove()
        return
      }
      scene.current = s
      s.go(STEPS[indexRef.current], true)
      requestAnimationFrame(() => setLive(true))
      let onScreen = false
      const io = new IntersectionObserver((entries) => {
        onScreen = entries[0].isIntersecting
        if (onScreen && !document.hidden) s.start()
        else s.stop()
      })
      io.observe(box)
      const onVisibility = () => (document.hidden || !onScreen ? s.stop() : s.start())
      document.addEventListener('visibilitychange', onVisibility)
      cleanup = () => {
        io.disconnect()
        document.removeEventListener('visibilitychange', onVisibility)
        s.dispose()
        scene.current = null
        canvas.remove()
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

  const step = STEPS[index]
  const progress = labels.progress.replace('{n}', String(index + 1)).replace('{total}', String(STEPS.length))

  return (
    <div ref={root} className={`${className} ov-j`} data-step={step} data-settled={settled ? 'true' : 'false'} data-live={live ? 'true' : 'false'} role="region" aria-label={labels.label}>
      <div ref={stage} className="ov-stage" aria-hidden="true">
        <StillScene />
      </div>
      {children}
      <nav className="ov-controls" aria-label={`${labels.back} / ${labels.next}`}>
        <button type="button" className="ov-ctl ov-back" onClick={() => go(index - 1)} disabled={index === 0}>
          {labels.back}
        </button>
        <div className="ov-progress" role="progressbar" aria-valuemin={1} aria-valuemax={STEPS.length} aria-valuenow={index + 1} aria-valuetext={progress}>
          <span style={{ transform: `scaleX(${(index + 1) / STEPS.length})` }} />
        </div>
        <span className="ov-count" aria-hidden="true">
          {index + 1} / {STEPS.length}
        </span>
        <button type="button" className="ov-btn ov-next" onClick={() => go(index + 1)} disabled={index === LAST}>
          {labels.next}
        </button>
      </nav>
      <p className="ov-sr" aria-live="polite">
        {index > 0 ? `${progress}: ${titles[index]}` : ''}
      </p>
    </div>
  )
}
