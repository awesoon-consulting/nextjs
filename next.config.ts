import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import { solutionRedirects } from './src/data/redirects'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    const towerDraftPages = ['privacy', 'support'].flatMap((page) => [
      { source: `/games/tower-draft/${page}`, destination: `/en/games/${page}`, permanent: true },
      { source: `/:locale(en|fr|es)/games/tower-draft/${page}`, destination: `/:locale/games/${page}`, permanent: true },
    ])
    return [...solutionRedirects(), ...towerDraftPages]
  },
  // The Tower Draft web taster is a static Expo export in public/play/tower-draft, served without a locale.
  async rewrites() {
    return [
      { source: '/play/tower-draft', destination: '/play/tower-draft/index.html' },
      { source: '/play/tower-draft/', destination: '/play/tower-draft/index.html' },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // The TapBody demo is framed by the TapBody page on this same site.
        source: '/images/tapbody/demo/:path*',
        headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }],
      },
      {
        // The Tower Draft page frames the taster from this same site.
        source: '/play/tower-draft/:path*',
        headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }],
      },
      {
        source: '/play/tower-draft/_expo/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

export default withNextIntl(nextConfig)
