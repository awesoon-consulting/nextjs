/**
 * Site configuration,  navigation, social links, contact info, solution slugs.
 * Import from this file whenever you need site-wide constants.
 */

export const siteConfig = {
  name: 'Awesoon',
  tagline: 'Your ops outgrew your tools. We fix that.',
  url: 'https://awesoon.com',
  logoPath: '/images/logo-placeholder.svg',

  contact: {
    email: 'hello@awesoon.com',
    privacyEmail: 'privacy@awesoon.com',
    phone: '+1 (555) 000-0000', // PLACEHOLDER
    address: '4609-1480 Howe Street, Vancouver, BC, Canada',
  },

  nav: {
    main: [
      { labelKey: 'nav.home', href: '/' },
      { labelKey: 'nav.solutions', href: '/solutions' },
      { labelKey: 'nav.insights', href: '/insights' },
      { labelKey: 'nav.about', href: '/about' },
    ] as const,
    cta: { labelKey: 'nav.cta', href: '/contact' },
  },

  social: {
    linkedin: 'https://linkedin.com/company/awesoon', // PLACEHOLDER
    twitter: 'https://twitter.com/awesoon', // PLACEHOLDER
  },

  footer: {
    solutionLinks: [
      { labelKey: 'solutions.cards.opsOutgrown.title', href: '/solutions/ops-outgrown-tools' },
      { labelKey: 'solutions.cards.spreadsheetOps.title', href: '/solutions/spreadsheet-operations' },
      { labelKey: 'solutions.cards.systemIntegration.title', href: '/solutions/system-integration' },
      { labelKey: 'solutions.cards.erpImplementation.title', href: '/solutions/erp-implementation' },
      { labelKey: 'solutions.cards.crmImplementation.title', href: '/solutions/crm-implementation' },
      { labelKey: 'solutions.cards.apiIntegrations.title', href: '/solutions/api-integrations' },
      { labelKey: 'solutions.cards.vendorManagement.title', href: '/solutions/vendor-management' },
      { labelKey: 'solutions.cards.systemsAudit.title', href: '/solutions/systems-audit' },
    ] as const,
    companyLinks: [
      { labelKey: 'nav.about', href: '/about' },
      { labelKey: 'nav.insights', href: '/insights' },
      { labelKey: 'nav.cta', href: '/contact' },
    ] as const,
    legalLinks: [
      { labelKey: 'footer.privacy', href: '/privacy' },
      { labelKey: 'footer.terms', href: '/terms' },
      { labelKey: 'footer.cookies', href: '/cookies' },
    ] as const,
  },

  solutionSlugs: [
    'ops-outgrown-tools',
    'spreadsheet-operations',
    'system-integration',
    'erp-implementation',
    'crm-implementation',
    'api-integrations',
    'vendor-management',
    'systems-audit',
  ] as const,

  locales: ['en', 'fr', 'es'] as const,
  defaultLocale: 'en' as const,
}

export type SolutionSlug = (typeof siteConfig.solutionSlugs)[number]
export type Locale = (typeof siteConfig.locales)[number]
