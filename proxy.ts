import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from './src/config/site'

const intlMiddleware = createMiddleware({
  locales: siteConfig.locales,
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: 'always',
})

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Fast path for the root: emit a permanent 308 redirect that browsers cache
  // indefinitely. next-intl's middleware otherwise returns 307 which iPhone
  // Safari re-checks on every visit, adding 200-400ms per cold navigation.
  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = `/${siteConfig.defaultLocale}`
    const res = NextResponse.redirect(url, 308)
    res.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    return res
  }

  const response = intlMiddleware(request)

  // Enable Vercel CDN caching for all locale pages
  // s-maxage=3600: CDN caches for 1 hour
  // stale-while-revalidate=86400: serve stale for 24h while refreshing in background
  if (!pathname.startsWith('/api')) {
    response.headers.set(
      'CDN-Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=86400'
    )
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next|images|fonts|llms|favicon.ico|favicon.png|icon.png|apple-icon.png|robots.txt|sitemap.xml).*)'],
}
