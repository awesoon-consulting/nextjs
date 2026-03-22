'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { siteConfig } from '@/src/config/site'

const localeLabels: Record<string, string> = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
}

const localeNames: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
}

interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(newLocale: string) {
    // Replace current locale prefix in the path
    const segments = pathname.split('/')
    // segments[1] is the locale prefix
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <div
      className={['flex items-center gap-1', className].join(' ')}
      role="navigation"
      aria-label="Language switcher"
    >
      {siteConfig.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          aria-label={`Switch to ${localeNames[loc]}`}
          aria-current={locale === loc ? 'true' : undefined}
          className={[
            'px-2 py-1 text-xs font-semibold rounded transition-colors duration-150',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
            locale === loc
              ? 'bg-accent text-text-inverse'
              : 'text-text-muted hover:text-text-primary hover:bg-neutral-100 dark:hover:text-text-inverse dark:hover:bg-white/10',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  )
}
