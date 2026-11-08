import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { siteConfig } from './config/site'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  // Validate that the incoming locale parameter is valid
  if (!locale || !siteConfig.locales.includes(locale as (typeof siteConfig.locales)[number])) {
    notFound()
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
