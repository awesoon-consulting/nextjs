'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

const HIDE_WHEN_VISIBLE = ['#assistant-input', '#closing-title']

export default function FloatingCTA() {
  const locale = useLocale()
  const t = useTranslations('floatingCta')
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [blocked, setBlocked] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const input = document.querySelector('#assistant-input')
      setScrolled(input ? input.getBoundingClientRect().bottom < 0 : window.scrollY > 400)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const seen = new Set<Element>()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)))
      setBlocked(seen.size)
    })
    HIDE_WHEN_VISIBLE.forEach((sel) => {
      const el = document.querySelector(sel)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [pathname])

  if (pathname.includes('/contact')) return null
  const visible = scrolled && blocked === 0

  return (
    <div
      className={`fixed bottom-5 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 lg:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <Link
        href={`/${locale}/contact`}
        tabIndex={visible ? 0 : -1}
        className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0A0A0A] px-6 text-sm font-semibold whitespace-nowrap text-white shadow-[0_12px_32px_-12px_rgba(10,10,10,0.45)]"
      >
        {t('pill')} <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}
