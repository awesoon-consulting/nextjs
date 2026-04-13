'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'
import { getConsent, setConsent as persistConsent, ConsentCategories } from '@/src/lib/consent'
import CookieBanner from './CookieBanner'
import Modal from '@/src/components/ui/Modal'
import Checkbox from '@/src/components/ui/Checkbox'
import Button from '@/src/components/ui/Button'
import { useTranslations } from 'next-intl'

// Declare gtag on window
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

interface ConsentContextValue {
  consent: ConsentCategories | null
  updateConsent: (categories: ConsentCategories) => void
}

const ConsentContext = createContext<ConsentContextValue>({
  consent: null,
  updateConsent: () => undefined,
})

export function useConsent() {
  return useContext(ConsentContext)
}

function applyGtagConsent(categories: ConsentCategories) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  window.gtag('consent', 'update', {
    analytics_storage: categories.analytics ? 'granted' : 'denied',
    ad_storage: categories.marketing ? 'granted' : 'denied',
    ad_user_data: categories.marketing ? 'granted' : 'denied',
    ad_personalization: categories.marketing ? 'granted' : 'denied',
  })
}

function initGtagConsentDefaults() {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function (...args: unknown[]) {
      window.dataLayer?.push(args)
    }
  }
  // Default all to denied,  GDPR compliant
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  })
}

interface ConsentManagerProps {
  children: ReactNode
}

export default function ConsentManager({ children }: ConsentManagerProps) {
  const t = useTranslations('cookie')
  const [consent, setConsentState] = useState<ConsentCategories | null>(() => getConsent())
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [draftConsent, setDraftConsent] = useState<ConsentCategories>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  // Initialize gtag consent defaults immediately (SSR-safe)
  useEffect(() => {
    initGtagConsentDefaults()
    if (consent) {
      applyGtagConsent(consent)
    }
  }, [consent])

  // Listen for consent-updated events from CookieBanner
  useEffect(() => {
    const handler = () => {
      const stored = getConsent()
      if (stored) {
        setConsentState(stored)
        applyGtagConsent(stored)
      }
    }
    window.addEventListener('consent-updated', handler)
    return () => window.removeEventListener('consent-updated', handler)
  }, [])

  const updateConsent = useCallback((categories: ConsentCategories) => {
    persistConsent(categories)
    setConsentState(categories)
    applyGtagConsent(categories)
    window.dispatchEvent(new Event('consent-updated'))
  }, [])

  const openManager = useCallback(() => {
    const storedConsent = getConsent()
    setDraftConsent(storedConsent ?? consent ?? { necessary: true, analytics: false, marketing: false })
    setIsModalOpen(true)
  }, [consent])

  useEffect(() => {
    const handleOpenManager = () => openManager()

    window.addEventListener('open-cookie-manager', handleOpenManager)
    return () => window.removeEventListener('open-cookie-manager', handleOpenManager)
  }, [openManager])

  function savePreferences() {
    updateConsent(draftConsent)
    setIsModalOpen(false)
  }

  return (
    <ConsentContext.Provider value={{ consent, updateConsent }}>
      {children}

      {/* Cookie Banner (shows only if no consent stored) */}
      <CookieBanner onManage={openManager} />

      {/* Preferences Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('manager.title')}
        size="md"
      >
        <div className="space-y-6">
          {/* Necessary */}
          <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-white/10 dark:bg-secondary/45">
            <div>
              <p className="text-sm font-semibold text-text-primary">
                {t('manager.categories.necessary.title')}
              </p>
              <p className="text-sm text-text-muted mt-0.5">
                {t('manager.categories.necessary.description')}
              </p>
            </div>
            <span className="text-xs font-medium text-success bg-success-light px-2 py-1 rounded-full flex-shrink-0 ml-4">
              {t('manager.categories.necessary.alwaysOn')}
            </span>
          </div>

          {/* Analytics */}
          <div className="rounded-lg border border-neutral-200 p-4 dark:border-white/10 dark:bg-secondary/35">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  {t('manager.categories.analytics.title')}
                </p>
                <p className="text-sm text-text-muted mt-0.5">
                  {t('manager.categories.analytics.description')}
                </p>
              </div>
              <Checkbox
                label=""
                checked={draftConsent.analytics}
                onChange={(e) =>
                  setDraftConsent((prev) => ({ ...prev, analytics: e.target.checked }))
                }
                aria-label={t('manager.categories.analytics.title')}
                className="flex-shrink-0 mt-0.5"
              />
            </div>
          </div>

          {/* Marketing */}
          <div className="rounded-lg border border-neutral-200 p-4 dark:border-white/10 dark:bg-secondary/35">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  {t('manager.categories.marketing.title')}
                </p>
                <p className="text-sm text-text-muted mt-0.5">
                  {t('manager.categories.marketing.description')}
                </p>
              </div>
              <Checkbox
                label=""
                checked={draftConsent.marketing}
                onChange={(e) =>
                  setDraftConsent((prev) => ({ ...prev, marketing: e.target.checked }))
                }
                aria-label={t('manager.categories.marketing.title')}
                className="flex-shrink-0 mt-0.5"
              />
            </div>
          </div>

          <Button variant="primary" size="md" fullWidth onClick={savePreferences}>
            {t('manager.save')}
          </Button>
        </div>
      </Modal>
    </ConsentContext.Provider>
  )
}
