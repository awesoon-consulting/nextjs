'use client'

import { useEffect, useRef, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { siteConfig } from '@/src/config/site'

const localeNames: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
}

interface LanguageSwitcherProps {
  className?: string
  direction?: 'down' | 'up'
}

export default function LanguageSwitcher({ className = '', direction = 'down' }: LanguageSwitcherProps) {
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  function switchLocale(newLocale: string) {
    const segments = pathname.split('/')
    segments[1] = newLocale
    setOpen(false)
    router.push(segments.join('/'))
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('language')}
        className="inline-flex items-center gap-1.5 rounded-full p-2 text-sm font-medium text-text-muted transition-colors hover:bg-neutral-100 hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
        </svg>
        <span className="uppercase">{locale}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t('language')}
          className={`absolute right-0 z-[60] min-w-36 rounded-2xl border border-neutral-200 bg-white p-1.5 shadow-xl dark:border-white/10 dark:bg-[#111827] ${direction === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'}`}
        >
          {siteConfig.locales.map((loc) => (
            <li key={loc}>
              <button
                type="button"
                role="option"
                aria-selected={loc === locale}
                lang={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-white/10 ${loc === locale ? 'font-semibold text-text-primary dark:text-white' : 'text-text-secondary dark:text-neutral-300'}`}
              >
                {localeNames[loc]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
