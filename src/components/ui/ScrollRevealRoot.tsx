'use client'

/**
 * @file     ScrollRevealRoot.tsx
 * @layer    src > components > ui
 * @readme   ./README.md
 * @purpose  Mounts a single page-level IntersectionObserver that reveals any
 *           `.reveal` element (emitted by the AnimateIn component) when it
 *           scrolls into view. Replaces ~20 per-element observers with one.
 *
 *           Content is never hidden until this component has mounted: it
 *           marks every `.reveal` already in the viewport as `.in-view` and
 *           only then adds `html.reveal-ready`, which is what the CSS keys
 *           `opacity: 0` off. Slow or failed hydration therefore degrades to
 *           a fully visible page, never blank sections.
 *
 *           Also pauses any `.animate-marquee` while it is scrolled out of
 *           view so the infinite transform animation costs nothing offscreen.
 * @depends  globals.css .reveal/.in-view/.reveal-ready and .is-offscreen rules
 */

import { useEffect } from 'react'

const REVEAL_ROOT_MARGIN = '0px 0px -60px 0px'

function isInViewport(el: Element) {
  const r = el.getBoundingClientRect()
  return r.bottom > 0 && r.top < window.innerHeight - 60 && r.right > 0 && r.left < window.innerWidth
}

export default function ScrollRevealRoot() {
  useEffect(() => {
    const html = document.documentElement
    const revealAll = () =>
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in-view'))

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      revealAll()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: REVEAL_ROOT_MARGIN, threshold: 0.08 }
    )

    const observe = (root: ParentNode) => {
      root.querySelectorAll('.reveal:not(.in-view)').forEach((el) => observer.observe(el))
    }

    // Anything already on screen is revealed synchronously, in the same
    // frame that hiding is switched on, so above-fold content never flashes.
    document.querySelectorAll('.reveal').forEach((el) => {
      if (isInViewport(el)) el.classList.add('in-view')
    })
    html.classList.add('reveal-ready')
    observe(document)

    const marqueeObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle('is-offscreen', !entry.isIntersecting)
      }
    })
    const observeMarquees = (root: ParentNode) => {
      root.querySelectorAll('.animate-marquee').forEach((el) => marqueeObserver.observe(el))
    }
    observeMarquees(document)

    // New elements may mount after initial paint (route changes, lazy
    // hydration). A lightweight MutationObserver picks them up.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.matches('.reveal:not(.in-view)')) observer.observe(node)
          if (node.matches('.animate-marquee')) marqueeObserver.observe(node)
          observe(node)
          observeMarquees(node)
        })
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      marqueeObserver.disconnect()
      mo.disconnect()
      html.classList.remove('reveal-ready')
    }
  }, [])

  return null
}
