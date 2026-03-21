'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { hasConsent, setConsent } from '@/src/lib/consent'
import Button from '@/src/components/ui/Button'

interface CookieBannerProps {
  onManage: () => void
}

export default function CookieBanner({ onManage }: CookieBannerProps) {
  const t = useTranslations()
  const locale = useLocale()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show if consent hasn't been recorded
    if (!hasConsent()) {
      setIsVisible(true)
    }
  }, [])

  function acceptAll() {
    setConsent({ necessary: true, analytics: true, marketing: true })
    setIsVisible(false)
    // Notify ConsentManager to update gtag
    window.dispatchEvent(new Event('consent-updated'))
  }

  function rejectAll() {
    setConsent({ necessary: true, analytics: false, marketing: false })
    setIsVisible(false)
    window.dispatchEvent(new Event('consent-updated'))
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-primary border border-white/10 rounded-2xl shadow-xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex-1 min-w-0">
            <p className="font-heading font-semibold text-text-inverse text-base mb-1">
              {t('cookie.banner.title')}
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {t('cookie.banner.description')}{' '}
              <Link
                href={`/${locale}/cookies`}
                className="text-accent underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                {t('cookie.banner.learnMore')}
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 flex-shrink-0">
            <Button variant="ghost" size="sm" onClick={onManage} className="text-neutral-300 hover:text-text-inverse">
              {t('cookie.banner.manage')}
            </Button>
            <Button variant="outline" size="sm" onClick={rejectAll}>
              {t('cookie.banner.rejectAll')}
            </Button>
            <Button variant="primary" size="sm" onClick={acceptAll}>
              {t('cookie.banner.acceptAll')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
