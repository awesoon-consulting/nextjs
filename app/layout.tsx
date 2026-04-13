/**
 * Root layout,  minimal wrapper.
 * The [locale] layout handles fonts, i18n, consent, navbar, and footer.
 * This file is required by Next.js App Router.
 * Includes Google Ads tag at the root level so it's present even on
 * redirect pages (Google's tag checker hits / before following redirects).
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gadsId = process.env.NEXT_PUBLIC_GADS_ID
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en">
      <head>
        {gadsId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gadsId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gadsId}');${gaId ? `gtag('config','${gaId}');` : ''}`,
              }}
            />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}
