/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://awesoon.com',
  generateRobotsTxt: false, // We maintain our own robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/*/404', '/*/500'],
  alternateRefs: [
    { href: 'https://awesoon.com/en', hreflang: 'en' },
    { href: 'https://awesoon.com/fr', hreflang: 'fr' },
    { href: 'https://awesoon.com/es', hreflang: 'es' },
  ],
  transform: async (config, path) => {
    // Home pages get higher priority
    const priority = path === '/' || path.match(/^\/(en|fr|es)\/?$/) ? 1.0 : 0.7
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
