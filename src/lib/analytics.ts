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

/**
 * Fire a Google Ads conversion event.
 * Requires NEXT_PUBLIC_GADS_CONVERSION_FORM_SUBMIT and/or
 * NEXT_PUBLIC_GADS_CONVERSION_EMAIL_CLICK set as "AW-XXXXX/YYYYYY".
 */
function fireGadsConversion(
  conversionLabel: string | undefined,
  value?: number,
  currency?: string
): void {
  if (!conversionLabel) return
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'conversion', {
    send_to: conversionLabel,
    ...(value !== undefined && { value }),
    ...(currency && { currency }),
  })
}

/**
 * Track lead form submission — fires GA4 event + Google Ads conversion.
 */
export function trackLeadFormConversion(): void {
  trackFormSubmit('contact-form')
  fireGadsConversion(process.env.NEXT_PUBLIC_GADS_CONVERSION_FORM_SUBMIT, 500, 'CAD')
}

/**
 * Track email link click — fires GA4 event + Google Ads conversion.
 */
export function trackEmailClick(): void {
  trackEvent('email_click', { location: 'footer' })
  fireGadsConversion(process.env.NEXT_PUBLIC_GADS_CONVERSION_EMAIL_CLICK, 50, 'CAD')
}
