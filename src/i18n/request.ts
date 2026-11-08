import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { siteConfig } from '../config/site'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  if (!locale || !siteConfig.locales.includes(locale as (typeof siteConfig.locales)[number])) {
    notFound()
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
