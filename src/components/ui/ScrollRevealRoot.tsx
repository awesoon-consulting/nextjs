'use client'

/**
 * @file     ScrollRevealRoot.tsx
 * @layer    src > components > ui
 * @readme   ./README.md
 * @purpose  Mounts a single page-level IntersectionObserver that reveals any
 *           `.reveal` element (emitted by the AnimateIn component) when it
 *           scrolls into view. Replaces ~20 per-element observers with one.
 *
 *           Elements above the fold at mount time animate immediately; below-
 *           fold elements animate when scrolled near. No content is hidden if
 *           JS is disabled — CSS gating (`html.js-ready .reveal { opacity: 0 }`)
 *           only hides content when the anti-FOUC script has marked the doc
 *           as JS-ready, and the observer runs right after mount.
 * @depends  globals.css .reveal/.in-view rules
 */

import { useEffect } from 'react'

export default function ScrollRevealRoot() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Respect reduced-motion: reveal everything immediately, skip observer.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in-view'))
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in-view'))
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
      { rootMargin: '0px 0px -60px 0px', threshold: 0.08 }
    )

    const observe = () => {
      document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => observer.observe(el))
    }

    observe()

    // New `.reveal` elements may mount after initial paint (route changes,
    // lazy hydration, etc). A lightweight MutationObserver picks them up.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.matches?.('.reveal:not(.in-view)')) observer.observe(node)
          node.querySelectorAll?.('.reveal:not(.in-view)').forEach((el) => observer.observe(el))
        })
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
