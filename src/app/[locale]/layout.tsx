import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import ConsentManager from '@/src/components/layout/ConsentManager'
import { ThemeProvider } from '@/src/components/layout/ThemeProvider'
import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import FloatingCTA from '@/src/components/layout/FloatingCTA'
import UtmCapture from '@/src/components/layout/UtmCapture'
import { siteConfig } from '@/src/config/site'
import '@/app/globals.css'

/**
 * Root locale layout.
 * Wires up: fonts → ThemeProvider → NextIntl → ConsentManager
 * ThemeProvider manages dark/light class on <html>.
 * FloatingCTA is injected globally and conditionally shows after scroll.
 */

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url

  return {
    title: {
      default: `${siteConfig.name},  ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description:
      'Independent operations consulting for growing manufacturing, distribution, and industrial companies. ERP, CRM, system integration, warehouse automation, and post-launch support.',
    keywords: [
      'operations consulting',
      'ERP implementation',
      'ERP support',
      'CRM implementation',
      'CRM support',
      'system integration',
      'warehouse automation',
      'custom API development',
      'ecommerce development',
      'post-launch support',
      'manufacturing consulting',
      'distribution operations',
      'Vancouver operations consulting',
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
        'Independent operations consulting for growing manufacturing, distribution, and industrial companies.',
      locale: locale,
      alternateLocale: siteConfig.locales.filter((l) => l !== locale),
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteConfig.name},  ${siteConfig.tagline}`,
      description:
        'Independent operations consulting for growing manufacturing, distribution, and industrial companies.',
      images: ['/images/og-image.png'],
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

// Cache rendered pages for 1 hour, serve stale while revalidating
export const revalidate = 3600

export function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }))
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages()
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const gadsId = process.env.NEXT_PUBLIC_GADS_ID

  return (
    <html lang={locale} className={`${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-FOUC: apply stored theme class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem('awesoon_theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){d.classList.add('dark')}d.classList.add('js-ready')}catch(e){}})()`,
          }}
        />
        {/* Contentsquare */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=document.createElement('script');s.async=true;s.src='https://t.contentsquare.net/uxa/66f129fd9d3e4.js';document.head.appendChild(s);})();`,
          }}
        />
      </head>
      <body className="font-body bg-surface dark:bg-primary text-text-primary dark:text-white antialiased transition-colors duration-200">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider>
            <ConsentManager>
              {/* Skip to content link for accessibility */}
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
              >
                Skip to main content
              </a>

              <Navbar />

              <main id="main-content" tabIndex={-1}>
                {children}
              </main>

              <Footer />

              {/* Floating conversion CTA,  shows after scrolling past hero */}
              <FloatingCTA />
              <UtmCapture />
            </ConsentManager>
          </ThemeProvider>
        </NextIntlClientProvider>

        {/* gtag loaded at end of body so it never blocks page render */}
        {(gadsId || gaMeasurementId) && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gadsId || gaMeasurementId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${gadsId ? `gtag('config','${gadsId}');` : ''}${gaMeasurementId ? `gtag('config','${gaMeasurementId}');` : ''}`,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
