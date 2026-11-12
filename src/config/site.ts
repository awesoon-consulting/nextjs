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
    email: 'ray.rasouli@awesoontechnologies.com',
    privacyEmail: 'privacy@awesoon.com',
    gamesEmail: 'games@awesoontechnologies.com',
    phone: '+1 (555) 000-0000', // PLACEHOLDER
    address: '4609-1480 Howe Street, Vancouver, BC, Canada',
  },

  games: {
    // Which policy /games/privacy serves. Switch to 'v2' when the first 1.1.0 build is submitted
    // (privacy-v2-with-ads). v1 stays at /games/privacy/v1 either way.
    privacyVersion: 'v1' as 'v1' | 'v2',
  },

  nav: {
    main: [
      { labelKey: 'nav.work', href: '/work' },
      { labelKey: 'nav.publicSector', href: '/public-sector' },
      { labelKey: 'nav.insights', href: '/insights' },
      { labelKey: 'nav.about', href: '/about' },
    ] as const,
    cta: { labelKey: 'nav.bookCall', href: '/contact' },
  },

  services: [
    {
      key: 'consultation',
      href: '/solutions',
      solutions: ['systems-audit', 'operational-process-foundations', 'ops-outgrown-tools', 'vendor-management', 'project-management'],
    },
    {
      key: 'programming',
      href: '/solutions',
      solutions: ['custom-api-development', 'ecommerce-development', 'mobile-warehouse-barcoding'],
    },
    {
      key: 'automation',
      href: '/solutions',
      solutions: ['ai-operations', 'spreadsheet-operations', 'system-integration', 'erp-implementation', 'crm-implementation', 'api-integrations'],
    },
    { key: 'design', href: '/design', solutions: [] },
    { key: 'advertising', href: '/advertising', solutions: [] },
  ] as const,

  social: {
    linkedin: 'https://www.linkedin.com/in/ray-rasouli/',
  },

  team: {
    ray: {
      name: 'Ray Rasouli',
      linkedin: 'https://www.linkedin.com/in/ray-rasouli/',
      photo: '/images/about-us/ray-rasouli.jpeg',
      initials: 'RR',
    },
  },

  footer: {
    solutionLinks: [
      { labelKey: 'solutions.cards.aiOperations.title', href: '/solutions/ai-operations' },
      { labelKey: 'solutions.cards.opsOutgrown.title', href: '/solutions/ops-outgrown-tools' },
      { labelKey: 'solutions.cards.spreadsheetOps.title', href: '/solutions/spreadsheet-operations' },
      { labelKey: 'solutions.cards.systemIntegration.title', href: '/solutions/system-integration' },
      { labelKey: 'solutions.cards.erpImplementation.title', href: '/solutions/erp-implementation' },
      { labelKey: 'solutions.cards.crmImplementation.title', href: '/solutions/crm-implementation' },
      { labelKey: 'solutions.cards.apiIntegrations.title', href: '/solutions/api-integrations' },
      { labelKey: 'solutions.cards.customApiDevelopment.title', href: '/solutions/custom-api-development' },
      { labelKey: 'solutions.cards.ecommerceDevelopment.title', href: '/solutions/ecommerce-development' },
      { labelKey: 'solutions.cards.vendorManagement.title', href: '/solutions/vendor-management' },
      { labelKey: 'solutions.cards.systemsAudit.title', href: '/solutions/systems-audit' },
      { labelKey: 'solutions.cards.mobileWarehouse.title', href: '/solutions/mobile-warehouse-barcoding' },
      { labelKey: 'solutions.cards.projectManagement.title', href: '/solutions/project-management' },
      { labelKey: 'solutions.cards.processFoundations.title', href: '/solutions/operational-process-foundations' },
    ] as const,
    supportLinks: [
      { labelKey: 'support.cards.systemsOperationsSupport.title', href: '/support/systems-operations-support' },
      { labelKey: 'support.cards.crmSupport.title', href: '/support/crm-support' },
      { labelKey: 'support.cards.erpSupport.title', href: '/support/erp-support' },
      { labelKey: 'support.cards.ecommerceSupport.title', href: '/support/ecommerce-support-maintenance' },
    ] as const,
    companyLinks: [
      { labelKey: 'nav.work', href: '/work' },
      { labelKey: 'nav.publicSector', href: '/public-sector' },
      { labelKey: 'nav.insights', href: '/insights' },
      { labelKey: 'nav.about', href: '/about' },
      { labelKey: 'nav.support', href: '/support' },
      { labelKey: 'nav.contact', href: '/contact' },
    ] as const,
    legalLinks: [
      { labelKey: 'footer.privacy', href: '/privacy' },
      { labelKey: 'footer.terms', href: '/terms' },
      { labelKey: 'footer.cookies', href: '/cookies' },
    ] as const,
  },

  solutionSlugs: [
    'ai-operations',
    'ops-outgrown-tools',
    'spreadsheet-operations',
    'system-integration',
    'erp-implementation',
    'crm-implementation',
    'api-integrations',
    'custom-api-development',
    'ecommerce-development',
    'vendor-management',
    'systems-audit',
    'mobile-warehouse-barcoding',
    'project-management',
    'operational-process-foundations',
  ] as const,

  locales: ['en', 'fr', 'es'] as const,
  defaultLocale: 'en' as const,
}

export type SolutionSlug = (typeof siteConfig.solutionSlugs)[number]
export type Locale = (typeof siteConfig.locales)[number]
