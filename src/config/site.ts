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
      href: '/consulting',
      solutions: ['systems-audit', 'operational-process-foundations', 'ops-outgrown-tools', 'vendor-management', 'project-management'],
      extras: [
        { labelKey: 'serviceItems.itExpert', href: '/consulting/it-expert-services' },
        { labelKey: 'serviceItems.permanentDevelopers', href: '/consulting/permanent-developers' },
      ],
    },
    {
      key: 'programming',
      href: '/software-development',
      solutions: ['custom-api-development', 'ecommerce-development'],
      extras: [
        { labelKey: 'serviceItems.applicationProgramming', href: '/software-development/application-programming' },
        { labelKey: 'serviceItems.clientServer', href: '/software-development/client-server-programming' },
        { labelKey: 'serviceItems.databaseDesign', href: '/software-development/database-design' },
        { labelKey: 'serviceItems.databaseInterfaces', href: '/software-development/database-interfaces' },
        { labelKey: 'serviceItems.interfaceDevelopment', href: '/software-development/interface-development' },
        { labelKey: 'serviceItems.gameMaintenance', href: '/games/maintenance' },
      ],
    },
    {
      key: 'automation',
      href: '/automation',
      solutions: ['system-integration', 'api-integrations', 'ai-operations', 'spreadsheet-operations', 'mobile-warehouse-barcoding'],
      extras: [{ labelKey: 'serviceItems.dbaas', href: '/automation/database-management-service' }],
    },
    {
      key: 'erpCrm',
      href: '/erp-crm',
      solutions: ['erp-implementation', 'crm-implementation'],
      extras: [
        { labelKey: 'serviceItems.erpDatabaseApps', href: '/erp-crm/erp-database-applications' },
        { labelKey: 'serviceItems.crmSetup', href: '/erp-crm/crm-setup' },
      ],
    },
    {
      key: 'design',
      href: '/design',
      solutions: [],
      extras: [
        { labelKey: 'serviceItems.artDesign', href: '/design#art' },
        { labelKey: 'serviceItems.uiDesign', href: '/design#interface' },
        { labelKey: 'serviceItems.brandSystems', href: '/design#brand' },
      ],
    },
    {
      key: 'advertising',
      href: '/advertising',
      solutions: [],
      extras: [
        { labelKey: 'serviceItems.campaigns', href: '/advertising' },
        { labelKey: 'serviceItems.production', href: '/advertising' },
        { labelKey: 'serviceItems.banner', href: '/advertising' },
        { labelKey: 'serviceItems.playbooks', href: '/advertising' },
      ],
    },
  ] as const,

  social: {
    linkedin: 'https://www.linkedin.com/in/ray-rasouli/',
  },

  team: {
    ray: {
      name: 'Ray Rasouli',
      linkedin: 'https://www.linkedin.com/in/ray-rasouli/',
      photo: '/images/about-us/ray-rasouli.jpeg',
      portrait: '/images/about-us/ray-rasouli-portrait.png',
      initials: 'RR',
    },
  },

  footer: {
    solutionLinks: [
      { labelKey: 'solutions.cards.aiOperations.title', slug: 'ai-operations', href: '/automation/ai-operations' },
      { labelKey: 'solutions.cards.opsOutgrown.title', slug: 'ops-outgrown-tools', href: '/consulting/ops-outgrown-tools' },
      { labelKey: 'solutions.cards.spreadsheetOps.title', slug: 'spreadsheet-operations', href: '/automation/spreadsheet-operations' },
      { labelKey: 'solutions.cards.systemIntegration.title', slug: 'system-integration', href: '/automation/system-integration' },
      { labelKey: 'solutions.cards.erpImplementation.title', slug: 'erp-implementation', href: '/erp-crm/erp-implementation' },
      { labelKey: 'solutions.cards.crmImplementation.title', slug: 'crm-implementation', href: '/erp-crm/crm-implementation' },
      { labelKey: 'solutions.cards.apiIntegrations.title', slug: 'api-integrations', href: '/automation/api-integrations' },
      { labelKey: 'solutions.cards.customApiDevelopment.title', slug: 'custom-api-development', href: '/software-development/custom-api-development' },
      { labelKey: 'solutions.cards.ecommerceDevelopment.title', slug: 'ecommerce-development', href: '/software-development/ecommerce-development' },
      { labelKey: 'solutions.cards.vendorManagement.title', slug: 'vendor-management', href: '/consulting/software-selection' },
      { labelKey: 'solutions.cards.systemsAudit.title', slug: 'systems-audit', href: '/consulting/systems-audit' },
      { labelKey: 'solutions.cards.mobileWarehouse.title', slug: 'mobile-warehouse-barcoding', href: '/automation/mobile-warehouse-barcoding' },
      { labelKey: 'solutions.cards.projectManagement.title', slug: 'project-management', href: '/consulting/project-management' },
      { labelKey: 'solutions.cards.processFoundations.title', slug: 'operational-process-foundations', href: '/consulting/operational-process-foundations' },
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
