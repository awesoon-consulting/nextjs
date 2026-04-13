import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import { siteConfig } from './src/config/site'

const intlMiddleware = createMiddleware({
  locales: siteConfig.locales,
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: 'always',
})

export default function proxy(request: NextRequest) {
  const response = intlMiddleware(request)

  // Enable Vercel CDN caching for all locale pages
  // s-maxage=3600: CDN caches for 1 hour
  // stale-while-revalidate=86400: serve stale for 24h while refreshing in background
  if (!request.nextUrl.pathname.startsWith('/api')) {
    response.headers.set(
      'CDN-Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=86400'
    )
    response.headers.set(
      'Vercel-CDN-Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=86400'
    )
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next|images|fonts|llms|favicon.ico|favicon.png|icon.png|apple-icon.png|robots.txt|sitemap.xml).*)'],
}
