/**
 * GA4 event helpers.
 * Events only fire if analytics consent has been granted.
 * All calls to window.gtag are guarded.
 */

import { isConsentGranted } from './consent'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/**
 * Track a custom GA4 event.
 * Only fires if analytics consent is granted.
 */
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined') return
  if (!isConsentGranted('analytics')) return
  if (typeof window.gtag !== 'function') return

  window.gtag('event', name, params ?? {})
}

/**
 * Track a page view.
 * Only fires if analytics consent is granted.
 */
export function trackPageView(url: string): void {
  if (typeof window === 'undefined') return
  if (!isConsentGranted('analytics')) return
  if (typeof window.gtag !== 'function') return

  window.gtag('event', 'page_view', {
    page_location: url,
  })
}

/**
 * Track a form step completion.
 */
export function trackFormStep(stepNumber: number, stepName: string): void {
  trackEvent('form_step_complete', {
    step_number: stepNumber,
    step_name: stepName,
  })
}

/**
 * Track form submission.
 */
export function trackFormSubmit(formName: string): void {
  trackEvent('form_submit', { form_name: formName })
}

/**
 * Track CTA button click.
 */
export function trackCTAClick(ctaName: string, location: string): void {
  trackEvent('cta_click', { cta_name: ctaName, location })
}
