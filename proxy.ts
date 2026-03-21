import createMiddleware from 'next-intl/middleware'
import { siteConfig } from './src/config/site'

export default createMiddleware({
  locales: siteConfig.locales,
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: 'always',
})

export const config = {
  // Match all pathnames except for:
  // - /api routes
  // - /_next (Next.js internals)
  // - /images, /fonts (static assets in /public)
  // - favicon.ico, robots.txt, sitemap.xml
  matcher: ['/((?!api|_next|images|fonts|favicon.ico|robots.txt|sitemap.xml).*)'],
}
