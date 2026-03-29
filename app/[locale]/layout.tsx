import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import { headers } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getLocale, getTranslations } from 'next-intl/server'
import { GoogleAnalytics } from '@next/third-parties/google'
import ConsentManager from '@/src/components/layout/ConsentManager'
import { ThemeProvider } from '@/src/components/layout/ThemeProvider'
import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import { siteConfig } from '@/src/config/site'
import '@/app/globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const headersList = await headers()
  const host = headersList.get('x-forwarded-host') ?? headersList.get('host')
  const protocol =
    headersList.get('x-forwarded-proto') ?? (host?.includes('localhost') ? 'http' : 'https')
  const configuredBaseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url
  const configuredHost = new URL(configuredBaseUrl).host
  const requestBaseUrl = host ? `${protocol}://${host}` : configuredBaseUrl
  const baseUrl = host && host !== configuredHost ? requestBaseUrl : configuredBaseUrl

  return {
    title: {
      default: `${siteConfig.name},  ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description:
      'B2B operations consulting and support for mid-market manufacturing, distribution, and industrial companies. ERP, CRM, ecommerce, custom API development, system integrations, and post-launch support.',
    keywords: [
      'B2B operations consulting',
      'ERP implementation',
      'ERP support',
      'CRM support',
      'system integration',
      'custom API development',
      'ecommerce development',
      'post-launch support',
      'mid-market operations',
      'manufacturing consulting',
      'distribution operations',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        fr: '/fr',
        es: '/es',
        'x-default': '/en',
      },
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      title: `${siteConfig.name},  ${siteConfig.tagline}`,
      description:
        'B2B operations consulting and support for mid-market manufacturing and distribution companies.',
      locale: locale,
      alternateLocale: siteConfig.locales.filter((l) => l !== locale),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteConfig.name},  ${siteConfig.tagline}`,
      description:
        'B2B operations consulting and support for mid-market manufacturing and distribution companies.',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }))
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  const messages = await getMessages()
  const tCommon = await getTranslations('common')
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang={locale} className={`${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body bg-surface text-text-primary antialiased">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <ConsentManager>
              {/* Skip to content link for accessibility */}
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-text-inverse focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
              >
                {tCommon('skipToContent')}
              </a>

              <Navbar />
              <main id="main-content" tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </ConsentManager>
          </NextIntlClientProvider>
        </ThemeProvider>

        {/* GA4,  loaded after body, consent mode handled by ConsentManager */}
        {gaMeasurementId && <GoogleAnalytics gaId={gaMeasurementId} />}
      </body>
    </html>
  )
}
