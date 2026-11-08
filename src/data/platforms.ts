/**
 * @file     platforms.ts
 * @layer    src > data
 * @readme   ./README.md
 * @purpose  Platform/vendor metadata for each solution page. Drives the PlatformStack component.
 * @depends  none
 */

export interface Platform {
  name: string
  /** Path to SVG in /public/images/platforms/{slug}.svg */
  slug: string
  /** Official vendor homepage (opens in new tab, rel=noopener) */
  url: string
  /** One-liner: when is this the right fit */
  fit: string
}

/**
 * Map of solution slug -> list of platforms we work with.
 * Keep each list to 4-6 platforms. Order = preference/commonality.
 */
export const solutionPlatforms: Record<string, Platform[]> = {
  'erp-implementation': [
    {
      name: 'NetSuite',
      slug: 'netsuite',
      url: 'https://www.netsuite.com/',
      fit: 'Cloud-first, finance-heavy, multi-entity businesses with strong reporting needs.',
    },
    {
      name: 'Odoo',
      slug: 'odoo',
      url: 'https://www.odoo.com/',
      fit: 'Cost-sensitive operations that want a single connected stack without per-module lock-in.',
    },
    {
      name: 'Epicor',
      slug: 'epicor',
      url: 'https://www.epicor.com/',
      fit: 'Manufacturing and distribution shops with complex production workflows.',
    },
    {
      name: 'SAP Business One',
      slug: 'sap',
      url: 'https://www.sap.com/products/erp/business-one.html',
      fit: 'Growing companies that need SAP-grade financial controls without S/4HANA overhead.',
    },
    {
      name: 'Microsoft Dynamics 365',
      slug: 'dynamics',
      url: 'https://www.microsoft.com/en-us/dynamics-365',
      fit: 'Teams already standardized on Microsoft 365 and Power Platform.',
    },
  ],

  'crm-implementation': [
    {
      name: 'Salesforce',
      slug: 'salesforce',
      url: 'https://www.salesforce.com/',
      fit: 'Sales-led orgs with complex pipelines, custom objects, and high forecast accuracy needs.',
    },
    {
      name: 'HubSpot',
      slug: 'hubspot',
      url: 'https://www.hubspot.com/',
      fit: 'Marketing-driven growth teams that want fast adoption and tight sales/marketing alignment.',
    },
    {
      name: 'Zoho CRM',
      slug: 'zoho',
      url: 'https://www.zoho.com/crm/',
      fit: 'Lean teams on a budget who need a full suite without enterprise price tags.',
    },
    {
      name: 'Pipedrive',
      slug: 'pipedrive',
      url: 'https://www.pipedrive.com/',
      fit: 'Small sales teams that want dead-simple pipeline visibility without the configuration rabbit hole.',
    },
  ],

  'mobile-warehouse-barcoding': [
    {
      name: 'NetSuite WMS',
      slug: 'netsuite',
      url: 'https://www.netsuite.com/portal/products/erp/warehouse-management.shtml',
      fit: 'Native WMS for NetSuite customers; mobile picking, putaway, cycle counts.',
    },
    {
      name: 'Odoo Inventory',
      slug: 'odoo',
      url: 'https://www.odoo.com/app/inventory',
      fit: 'Barcode workflows integrated with Odoo manufacturing and sales modules.',
    },
    {
      name: 'Fishbowl',
      slug: 'fishbowl',
      url: 'https://www.fishbowlinventory.com/',
      fit: 'QuickBooks-first warehouses that need real mobile barcoding without a full ERP swap.',
    },
    {
      name: 'Zebra Scanners',
      slug: 'zebra',
      url: 'https://www.zebra.com/us/en/products/mobile-computers.html',
      fit: 'Industrial-grade handheld and wearable scanners for high-volume warehouse floors.',
    },
  ],

  'system-integration': [
    {
      name: 'Celigo',
      slug: 'celigo',
      url: 'https://www.celigo.com/',
      fit: 'iPaaS purpose-built for NetSuite and ecommerce integrations with pre-built connectors.',
    },
    {
      name: 'Boomi',
      slug: 'boomi',
      url: 'https://boomi.com/',
      fit: 'Enterprise-grade integration platform with strong data transformation and governance.',
    },
    {
      name: 'Zapier',
      slug: 'zapier',
      url: 'https://zapier.com/',
      fit: 'Fast automation between SaaS tools when you need speed over depth.',
    },
    {
      name: 'Make (Integromat)',
      slug: 'make',
      url: 'https://www.make.com/',
      fit: 'Visual workflow builder with deeper logic than Zapier for complex multi-step flows.',
    },
    {
      name: 'n8n',
      slug: 'n8n',
      url: 'https://n8n.io/',
      fit: 'Self-hosted, open-source automation for teams that want full data control.',
    },
  ],

  'api-integrations': [
    {
      name: 'Node.js',
      slug: 'nodejs',
      url: 'https://nodejs.org/',
      fit: 'Fast, event-driven middleware for high-throughput API services.',
    },
    {
      name: 'Python',
      slug: 'python',
      url: 'https://www.python.org/',
      fit: 'Data-heavy integrations, ETL pipelines, and AI-enabled workflows.',
    },
    {
      name: 'PostgreSQL',
      slug: 'postgresql',
      url: 'https://www.postgresql.org/',
      fit: 'Reliable transactional database for integration state and audit logs.',
    },
    {
      name: 'Google Cloud',
      slug: 'googlecloud',
      url: 'https://cloud.google.com/',
      fit: 'Serverless functions, Pub/Sub, and managed databases for scalable integrations.',
    },
    {
      name: 'AWS',
      slug: 'aws',
      url: 'https://aws.amazon.com/',
      fit: 'Lambda, SQS, and API Gateway for enterprise-scale integration infrastructure.',
    },
  ],

  'custom-api-development': [
    {
      name: 'Node.js',
      slug: 'nodejs',
      url: 'https://nodejs.org/',
      fit: 'TypeScript/JavaScript APIs with excellent tooling and ecosystem.',
    },
    {
      name: 'Ruby on Rails',
      slug: 'rails',
      url: 'https://rubyonrails.org/',
      fit: 'Rapid API development with strong conventions and mature ORM.',
    },
    {
      name: 'PostgreSQL',
      slug: 'postgresql',
      url: 'https://www.postgresql.org/',
      fit: 'The database we reach for first: relational integrity, JSON support, and battle-tested.',
    },
    {
      name: 'Docker',
      slug: 'docker',
      url: 'https://www.docker.com/',
      fit: 'Containerized deployment for consistent dev, staging, and production environments.',
    },
  ],

  'ecommerce-development': [
    {
      name: 'Shopify',
      slug: 'shopify',
      url: 'https://www.shopify.com/',
      fit: 'The default for B2C and mid-complexity B2B. Fast to launch, easy to operate.',
    },
    {
      name: 'Magento',
      slug: 'magento',
      url: 'https://business.adobe.com/products/magento/magento-commerce.html',
      fit: 'Complex catalogs, B2B pricing, and heavy customization needs.',
    },
    {
      name: 'WooCommerce',
      slug: 'woocommerce',
      url: 'https://woocommerce.com/',
      fit: 'Content-driven stores built on WordPress with full ownership of the stack.',
    },
    {
      name: 'BigCommerce',
      slug: 'bigcommerce',
      url: 'https://www.bigcommerce.com/',
      fit: 'Hybrid SaaS/headless with stronger native B2B features than Shopify Basic.',
    },
  ],

  'spreadsheet-operations': [
    {
      name: 'Airtable',
      slug: 'airtable',
      url: 'https://www.airtable.com/',
      fit: 'First stop off spreadsheets: relational structure with a familiar grid interface.',
    },
    {
      name: 'Notion',
      slug: 'notion',
      url: 'https://www.notion.so/',
      fit: 'Doc-first workflows that need lightweight databases and templates.',
    },
    {
      name: 'Google Sheets',
      slug: 'googlesheets',
      url: 'https://workspace.google.com/products/sheets/',
      fit: 'Augmented with Apps Script automation when a full database migration is overkill.',
    },
    {
      name: 'Monday.com',
      slug: 'monday',
      url: 'https://monday.com/',
      fit: 'Visual workflow management for teams that live in Kanban and timelines.',
    },
  ],

  'ai-operations': [
    {
      name: 'OpenAI',
      slug: 'openai',
      url: 'https://openai.com/',
      fit: 'GPT-4/5 for reasoning, summarization, and customer-facing AI copilots.',
    },
    {
      name: 'Anthropic',
      slug: 'anthropic',
      url: 'https://www.anthropic.com/',
      fit: 'Claude for long-context analysis, document processing, and safer tool use.',
    },
    {
      name: 'LangChain',
      slug: 'langchain',
      url: 'https://www.langchain.com/',
      fit: 'Framework for building RAG pipelines, agents, and multi-step AI workflows.',
    },
    {
      name: 'pgvector',
      slug: 'postgresql',
      url: 'https://github.com/pgvector/pgvector',
      fit: 'Vector search directly in PostgreSQL; no separate vector database to manage.',
    },
  ],

  'vendor-management': [
    {
      name: 'NetSuite',
      slug: 'netsuite',
      url: 'https://www.netsuite.com/',
      fit: 'Evaluated against Acumatica, Epicor, and SAP for finance-led selections.',
    },
    {
      name: 'Salesforce',
      slug: 'salesforce',
      url: 'https://www.salesforce.com/',
      fit: 'Evaluated against HubSpot, Dynamics, and Zoho for sales-led selections.',
    },
    {
      name: 'Shopify',
      slug: 'shopify',
      url: 'https://www.shopify.com/',
      fit: 'Evaluated against Magento and BigCommerce for ecommerce replatforming.',
    },
    {
      name: 'Odoo',
      slug: 'odoo',
      url: 'https://www.odoo.com/',
      fit: 'All-in-one alternative we benchmark when vendors push disconnected suites.',
    },
  ],

  'ops-outgrown-tools': [
    {
      name: 'NetSuite',
      slug: 'netsuite',
      url: 'https://www.netsuite.com/',
      fit: 'The backbone ERP when spreadsheets and QuickBooks stop scaling.',
    },
    {
      name: 'Salesforce',
      slug: 'salesforce',
      url: 'https://www.salesforce.com/',
      fit: 'CRM to replace shared inboxes and deal spreadsheets.',
    },
    {
      name: 'Shopify',
      slug: 'shopify',
      url: 'https://www.shopify.com/',
      fit: 'Storefront when DIY ecommerce platforms start breaking at volume.',
    },
    {
      name: 'Odoo',
      slug: 'odoo',
      url: 'https://www.odoo.com/',
      fit: 'All-in-one alternative for teams that want one connected system.',
    },
  ],

  'operational-process-foundations': [
    {
      name: 'Notion',
      slug: 'notion',
      url: 'https://www.notion.so/',
      fit: 'SOP documentation and runbooks teams will actually read and update.',
    },
    {
      name: 'Confluence',
      slug: 'confluence',
      url: 'https://www.atlassian.com/software/confluence',
      fit: 'Enterprise documentation with permissions and Jira integration.',
    },
    {
      name: 'Airtable',
      slug: 'airtable',
      url: 'https://www.airtable.com/',
      fit: 'Structured process tracking when workflows need more than a checklist.',
    },
  ],

  'project-management': [
    {
      name: 'Jira',
      slug: 'jira',
      url: 'https://www.atlassian.com/software/jira',
      fit: 'Complex implementations with engineering dependencies and sprint tracking.',
    },
    {
      name: 'Asana',
      slug: 'asana',
      url: 'https://asana.com/',
      fit: 'Cross-functional projects with clear ownership and milestones.',
    },
    {
      name: 'Monday.com',
      slug: 'monday',
      url: 'https://monday.com/',
      fit: 'Visual project tracking for teams that prefer boards over tickets.',
    },
    {
      name: 'Linear',
      slug: 'linear',
      url: 'https://linear.app/',
      fit: 'Fast, keyboard-first project management for engineering-led implementations.',
    },
  ],

  'systems-audit': [
    {
      name: 'NetSuite',
      slug: 'netsuite',
      url: 'https://www.netsuite.com/',
      fit: 'ERP health checks and integration audits.',
    },
    {
      name: 'Salesforce',
      slug: 'salesforce',
      url: 'https://www.salesforce.com/',
      fit: 'CRM adoption and data quality reviews.',
    },
    {
      name: 'Shopify',
      slug: 'shopify',
      url: 'https://www.shopify.com/',
      fit: 'Ecommerce stack audits covering apps, integrations, and operational gaps.',
    },
    {
      name: 'Odoo',
      slug: 'odoo',
      url: 'https://www.odoo.com/',
      fit: 'Module usage and configuration audits for Odoo deployments.',
    },
  ],
}

/**
 * Map of support slug -> platforms we support for that service
 */
export const supportPlatforms: Record<string, Platform[]> = {
  'erp-support': [
    {
      name: 'NetSuite',
      slug: 'netsuite',
      url: 'https://www.netsuite.com/',
      fit: 'Post-launch stabilization, SuiteScript, SavedSearch, and workflow support.',
    },
    {
      name: 'Odoo',
      slug: 'odoo',
      url: 'https://www.odoo.com/',
      fit: 'Module support, customization fixes, and upgrade assistance.',
    },
    {
      name: 'Epicor',
      slug: 'epicor',
      url: 'https://www.epicor.com/',
      fit: 'Manufacturing-specific ERP support for Kinetic and ECM environments.',
    },
  ],

  'crm-support': [
    {
      name: 'Salesforce',
      slug: 'salesforce',
      url: 'https://www.salesforce.com/',
      fit: 'Admin support, flow/process builder cleanup, and reporting fixes.',
    },
    {
      name: 'HubSpot',
      slug: 'hubspot',
      url: 'https://www.hubspot.com/',
      fit: 'Lifecycle automation, deal pipeline fixes, and dashboard rebuilds.',
    },
    {
      name: 'Zoho CRM',
      slug: 'zoho',
      url: 'https://www.zoho.com/crm/',
      fit: 'Process alignment, admin support, and workflow automation fixes.',
    },
  ],

  'systems-operations-support': [
    {
      name: 'NetSuite',
      slug: 'netsuite',
      url: 'https://www.netsuite.com/',
      fit: 'ERP operational support across finance, inventory, and reporting.',
    },
    {
      name: 'Salesforce',
      slug: 'salesforce',
      url: 'https://www.salesforce.com/',
      fit: 'CRM operational support and cross-system integration triage.',
    },
    {
      name: 'Shopify',
      slug: 'shopify',
      url: 'https://www.shopify.com/',
      fit: 'Ecommerce operational support when the storefront touches ops.',
    },
    {
      name: 'Odoo',
      slug: 'odoo',
      url: 'https://www.odoo.com/',
      fit: 'Full-suite operational support for Odoo-based operations.',
    },
  ],

  'ecommerce-support-maintenance': [
    {
      name: 'Shopify',
      slug: 'shopify',
      url: 'https://www.shopify.com/',
      fit: 'Storefront support, app coordination, and checkout fixes.',
    },
    {
      name: 'Magento',
      slug: 'magento',
      url: 'https://business.adobe.com/products/magento/magento-commerce.html',
      fit: 'Adobe Commerce support, extension maintenance, and performance tuning.',
    },
    {
      name: 'WooCommerce',
      slug: 'woocommerce',
      url: 'https://woocommerce.com/',
      fit: 'WordPress ecommerce maintenance, plugin support, and security updates.',
    },
  ],
}

export function getPlatformsForSolution(slug: string): Platform[] {
  return solutionPlatforms[slug] ?? []
}

export function getPlatformsForSupport(slug: string): Platform[] {
  return supportPlatforms[slug] ?? []
}

/**
 * Flagship platforms shown in the homepage hero and platforms section.
 * Curated to show ERP, CRM, ecommerce, warehouse, AI, integration — one from each
 * category so visitors see the full breadth without being overwhelmed.
 */
export const flagshipPlatforms: Platform[] = [
  {
    name: 'NetSuite',
    slug: 'netsuite',
    url: 'https://www.netsuite.com/',
    fit: 'Our primary ERP for cloud-first finance, multi-entity, and multi-currency businesses.',
  },
  {
    name: 'Salesforce',
    slug: 'salesforce',
    url: 'https://www.salesforce.com/',
    fit: 'Sales-led CRM with complex pipelines, custom objects, and deep automation.',
  },
  {
    name: 'Shopify',
    slug: 'shopify',
    url: 'https://www.shopify.com/',
    fit: 'Our default for B2C and mid-complexity B2B ecommerce; fast to operate.',
  },
  {
    name: 'Odoo',
    slug: 'odoo',
    url: 'https://www.odoo.com/',
    fit: 'All-in-one suite for teams that want ERP, CRM, inventory, and ecommerce connected.',
  },
  {
    name: 'HubSpot',
    slug: 'hubspot',
    url: 'https://www.hubspot.com/',
    fit: 'Marketing-driven growth teams with strong adoption and inbound workflows.',
  },
  {
    name: 'Epicor',
    slug: 'epicor',
    url: 'https://www.epicor.com/',
    fit: 'Manufacturing and distribution shops with complex production workflows.',
  },
  {
    name: 'Celigo',
    slug: 'celigo',
    url: 'https://www.celigo.com/',
    fit: 'Integration platform purpose-built for NetSuite and ecommerce connectors.',
  },
  {
    name: 'OpenAI',
    slug: 'openai',
    url: 'https://openai.com/',
    fit: 'GPT-based AI copilots, workflow agents, and document intelligence.',
  },
  {
    name: 'Anthropic',
    slug: 'anthropic',
    url: 'https://www.anthropic.com/',
    fit: 'Claude for long-context analysis, safer tool use, and production AI systems.',
  },
  {
    name: 'PostgreSQL',
    slug: 'postgresql',
    url: 'https://www.postgresql.org/',
    fit: 'Our default database; relational integrity and pgvector for AI applications.',
  },
]
