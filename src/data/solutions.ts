/**
 * Solution pages data. Each solution maps to a URL slug and contains
 * structured content for the dynamic solution detail page.
 */

export interface SolutionData {
  slug: string
  titleKey: string
  descriptionKey: string
  problemHeadline: string
  category: string
  seoSummary: string
  painPoints: string[]
  whatWeDo: string[]
  aiOpportunities: string[]
  outcomes: string[]
  ctaText: string
  relatedSlugs: string[]
  relatedInsightSlugs: string[]
}

export const solutions: SolutionData[] = [
  {
    slug: 'ai-operations',
    titleKey: 'solutions.cards.aiOperations.title',
    descriptionKey: 'solutions.cards.aiOperations.description',
    problemHeadline: 'You want AI to create leverage, not more operational chaos',
    category: 'AI & Automation',
    seoSummary:
      'AI operations consulting for mid-market teams adopting RAG assistants, workflow agents, and AI copilots on top of real operational foundations.',
    painPoints: [
      `You're getting pitched AI tools but no one can explain how they fit your actual workflows`,
      `Your data is spread across systems, files, and tribal knowledge, so AI outputs would be unreliable today`,
      `You want to use RAG, copilots, or agents, but you don't know what should be automated and what needs human review`,
      `Your leadership team wants an AI roadmap, but your operations team is already overloaded`,
      `You're worried about governance, permissions, hallucinations, and vendor hype`,
    ],
    whatWeDo: [
      'Assess your operational and data readiness for AI adoption across systems, documentation, and workflows',
      'Identify the highest-ROI use cases for RAG assistants, AI copilots, and agentic workflow automation',
      'Define the source systems, retrieval layers, permissions, and human-in-the-loop controls each use case requires',
      'Design and implement practical pilots that connect AI to your real operating environment',
      'Document governance, monitoring, and rollout plans so the solution is usable and trusted after launch',
    ],
    aiOpportunities: [
      'RAG assistants that answer SOP, policy, training, account, and process questions using approved internal sources',
      'Agentic workflows that classify, summarize, and route repetitive operational work with human oversight',
      'AI copilots for reporting, customer context, ERP support, sales handoffs, and exception management',
    ],
    outcomes: [
      'A clear AI roadmap tied to operational value, not generic experimentation',
      'Safer AI deployment built on trustworthy data, permissions, and source-of-truth decisions',
      'Faster internal search, better decision support, and less time lost to knowledge gaps',
      'Focused automation in repetitive workflows without creating governance blind spots',
      'Executive confidence that AI investments are grounded in operational reality',
    ],
    ctaText: 'Plan Your AI Roadmap',
    relatedSlugs: ['systems-audit', 'system-integration', 'api-integrations'],
    relatedInsightSlugs: ['ai-operations-readiness', 'building-rag-agents-for-operations'],
  },
  {
    slug: 'ops-outgrown-tools',
    titleKey: 'solutions.cards.opsOutgrown.title',
    descriptionKey: 'solutions.cards.opsOutgrown.description',
    problemHeadline: "Your systems can't keep up with your growth",
    category: 'Operations Strategy',
    seoSummary:
      'Operations consulting for mid-market companies that have outgrown disconnected tools, manual workflows, and fragile reporting.',
    painPoints: [
      `You're managing more SKUs, customers, and transactions than your current systems were designed for`,
      'Your team is filling gaps with spreadsheets, emails, and manual workarounds',
      'Data lives in too many places and no one fully trusts it',
      `Onboarding new employees takes forever because there's no documented process`,
      `You're turning down growth because you know your ops can't handle it`,
    ],
    whatWeDo: [
      'Map your current operational state: tools, workflows, data flows, team structure',
      'Identify the biggest points of friction and highest-cost inefficiencies',
      'Design a connected system architecture for your next growth stage',
      'Build a phased implementation roadmap with clear ROI milestones',
      'Manage the full implementation and ensure a clean handoff to your team',
    ],
    aiOpportunities: [
      'Deploy AI copilots that answer operational questions using approved SOPs, ERP data, and team documentation through a secure RAG layer',
      'Use agentic workflows to triage exceptions, summarize bottlenecks, and route follow-up tasks to the right teams',
      'Turn fragmented tribal knowledge into searchable operational playbooks for faster onboarding and fewer repeat mistakes',
    ],
    outcomes: [
      'A connected operational infrastructure that scales with your business',
      'Dramatically reduced manual work and human error',
      'Real-time visibility into your operations without building custom reports',
      `A team that's confident in the systems they're using`,
      `The operational capacity to take on growth you've been avoiding`,
    ],
    ctaText: 'Get a Free Systems Audit',
    relatedSlugs: ['systems-audit', 'system-integration', 'erp-implementation', 'ai-operations'],
    relatedInsightSlugs: ['ai-operations-readiness', 'system-integration-guide'],
  },
  {
    slug: 'spreadsheet-operations',
    titleKey: 'solutions.cards.spreadsheetOps.title',
    descriptionKey: 'solutions.cards.spreadsheetOps.description',
    problemHeadline: "You're running a mid-market company on spreadsheets",
    category: 'Operations Infrastructure',
    seoSummary:
      'Spreadsheet replacement consulting for operations teams that need scalable systems, cleaner data, and less manual risk.',
    painPoints: [
      'Critical business processes,  inventory, orders, production planning,  live in Excel',
      'No one person has a complete picture because the data is spread across dozens of files',
      'Spreadsheets break, get corrupted, get emailed to the wrong person',
      'Onboarding a new team member means teaching them which spreadsheet does what',
      "You've outgrown the tool but you don't know what to replace it with",
    ],
    whatWeDo: [
      'Audit every spreadsheet-dependent process in your operation',
      'Identify the right system to replace each workflow category',
      'Migrate your data and business logic into the appropriate tools',
      'Build automation to eliminate manual re-entry between systems',
      'Train your team and document every process we implement',
    ],
    aiOpportunities: [
      'Convert spreadsheet logic into governed workflows that AI agents can monitor, summarize, and flag for exceptions',
      'Use retrieval-backed assistants to help teams find the right version of process rules, pricing assumptions, and operating procedures',
      'Layer AI forecasting and anomaly detection on top of cleaned operational data once it is no longer trapped in Excel files',
    ],
    outcomes: [
      'Core processes running on purpose-built tools, not Excel',
      'Single source of truth for inventory, orders, and operational data',
      'Eliminated risk of spreadsheet corruption or version conflicts',
      'Faster onboarding because systems are intuitive and documented',
      'Hours per week saved on data management tasks',
    ],
    ctaText: 'Replace Your Spreadsheets',
    relatedSlugs: ['ops-outgrown-tools', 'erp-implementation', 'system-integration', 'ai-operations'],
    relatedInsightSlugs: ['spreadsheet-to-erp-migration', 'ai-operations-readiness'],
  },
  {
    slug: 'system-integration',
    titleKey: 'solutions.cards.systemIntegration.title',
    descriptionKey: 'solutions.cards.systemIntegration.description',
    problemHeadline: "Your systems don't talk to each other",
    category: 'Integration',
    seoSummary:
      'System integration consulting to connect ERP, CRM, WMS, ecommerce, and finance platforms across mid-market operations.',
    painPoints: [
      `You have good software but it's all siloed,  ERP, CRM, WMS, and ecommerce don't share data`,
      'Your team re-keys the same data into 2–4 systems every day',
      'Orders, inventory, and financial data are always slightly out of sync',
      'Reporting requires pulling data from multiple systems and manually combining it',
      'Every new system you add makes the problem worse',
    ],
    whatWeDo: [
      'Map all existing systems and their current data flows (or lack thereof)',
      'Design an integration architecture that connects your core platforms',
      'Build native integrations where available, middleware solutions where needed',
      'Set up automated data sync, error handling, and monitoring',
      'Provide documentation and runbooks for your IT team',
    ],
    aiOpportunities: [
      'Prepare your stack for AI by creating clean, governed data pipelines that retrieval systems and agents can trust',
      'Use AI monitoring to classify sync failures, summarize root causes, and recommend the next operational action',
      'Create unified data access layers that support chat-based reporting and cross-system operational assistants',
    ],
    outcomes: [
      'Data flows automatically between your systems without manual intervention',
      'Single source of truth for orders, inventory, customers, and financials',
      'Hours saved per week on manual data entry and reconciliation',
      'Reduced errors from manual re-keying',
      'Ability to add new systems without creating new silos',
    ],
    ctaText: 'Connect Your Systems',
    relatedSlugs: ['api-integrations', 'erp-implementation', 'ops-outgrown-tools', 'ai-operations'],
    relatedInsightSlugs: ['system-integration-guide', 'building-rag-agents-for-operations'],
  },
  {
    slug: 'erp-implementation',
    titleKey: 'solutions.cards.erpImplementation.title',
    descriptionKey: 'solutions.cards.erpImplementation.description',
    problemHeadline: 'You need an ERP that actually fits your operations',
    category: 'ERP',
    seoSummary:
      'ERP implementation support for mid-market operations teams that need objective selection, clean rollout, and strong adoption.',
    painPoints: [
      `You bought an ERP and it was never fully implemented, or it's barely used`,
      `You're evaluating ERP options but don't know how to compare them objectively`,
      `You've heard horror stories about ERP projects going over budget and timeline`,
      `Your vendor is pushing you toward features you don't need and underselling the complexity`,
      'Your team is resistant because the last software change was a disaster',
    ],
    whatWeDo: [
      'Define your requirements from your operational reality, not from vendor demos',
      'Run a structured vendor selection process across 3–5 shortlisted platforms',
      'Negotiate contracts on your behalf (we know where vendors flex)',
      'Lead the full implementation: configuration, data migration, testing, training',
      'Manage change management and ensure adoption across your team',
    ],
    aiOpportunities: [
      'Use the ERP rollout to establish the data discipline needed for AI forecasting, reporting copilots, and document retrieval',
      'Create role-based AI assistants that help users navigate ERP processes, training content, and exception handling without guesswork',
      'Pair ERP workflows with agentic support for follow-ups, approvals, and operational alerts after go-live',
    ],
    outcomes: [
      `An ERP that's configured for your actual processes, not the default setup`,
      'Full team adoption and confidence in the new system',
      'Clean, migrated historical data with validation',
      'Documented processes and a trained team',
      'An implementation that came in on time and on budget',
    ],
    ctaText: 'Get ERP Implementation Help',
    relatedSlugs: ['systems-audit', 'vendor-management', 'system-integration', 'ai-operations'],
    relatedInsightSlugs: ['why-erp-projects-fail', 'ai-operations-readiness'],
  },
  {
    slug: 'crm-implementation',
    titleKey: 'solutions.cards.crmImplementation.title',
    descriptionKey: 'solutions.cards.crmImplementation.description',
    problemHeadline: 'Your sales team is flying blind',
    category: 'CRM',
    seoSummary:
      'CRM implementation for teams that need pipeline visibility, better forecasting, and stronger sales-to-operations handoffs.',
    painPoints: [
      'Deal tracking lives in individual spreadsheets or email inboxes',
      `You can't accurately forecast revenue because you don't know what's in the pipeline`,
      'Customer history is scattered,  no one person has the full picture',
      'Your CRM was set up years ago and no one actually uses it as intended',
      `Sales and operations are constantly surprised by each other's reality`,
    ],
    whatWeDo: [
      'Define your actual sales process and what your CRM needs to support it',
      'Select and configure a CRM that matches how your team actually sells',
      'Migrate existing contact and deal data',
      'Build the reports and dashboards your leadership team actually needs',
      'Train your sales team and create adoption incentives',
    ],
    aiOpportunities: [
      'Enable AI sales copilots that summarize accounts, surface next-best actions, and retrieve customer context from approved data sources',
      'Use agents to draft follow-ups, identify stalled deals, and escalate handoff risks before they hit operations',
      'Connect CRM knowledge with operational systems so teams can answer customer questions with current inventory, lead time, and project status data',
    ],
    outcomes: [
      'Accurate pipeline visibility for leadership',
      'Sales team using the CRM because it actually helps them, not just for management reporting',
      'Connected customer data between sales and operations',
      'Reliable revenue forecasting',
      'Shorter sales cycles because reps have the context they need',
    ],
    ctaText: 'Fix Your CRM',
    relatedSlugs: ['system-integration', 'ops-outgrown-tools', 'api-integrations', 'ai-operations'],
    relatedInsightSlugs: ['vendor-selection-process', 'building-rag-agents-for-operations'],
  },
  {
    slug: 'api-integrations',
    titleKey: 'solutions.cards.apiIntegrations.title',
    descriptionKey: 'solutions.cards.apiIntegrations.description',
    problemHeadline: 'Manual data transfer is killing your productivity',
    category: 'Integration',
    seoSummary:
      'API integration services that automate repetitive data movement and support reliable, scalable operational workflows.',
    painPoints: [
      'Someone on your team spends hours every day copying data between systems',
      `Orders placed on one platform don't automatically appear in your fulfillment system`,
      `Inventory counts are always slightly off because updates don't sync in real time`,
      `You've looked at integration tools but don't know how to evaluate them`,
      `Your IT team doesn't have bandwidth to build and maintain custom integrations`,
    ],
    whatWeDo: [
      'Identify every manual data transfer happening across your operation',
      'Design an integration architecture using the right tools for your stack',
      'Build integrations using native connectors, iPaaS platforms, or custom APIs',
      'Implement error handling, logging, and monitoring so nothing silently fails',
      'Document everything and train whoever will own it going forward',
    ],
    aiOpportunities: [
      'Use API-first architecture to feed RAG systems and agents with current operational data instead of stale exports',
      'Add AI-based classification for inbound requests, tickets, order exceptions, and integration error queues',
      'Create lightweight agents that trigger workflows across systems while preserving approvals and human oversight',
    ],
    outcomes: [
      'Zero manual data re-entry for high-volume, repetitive workflows',
      'Real-time or near-real-time data sync across your core systems',
      'Reduced errors from human data entry',
      'Hours per week saved per team member',
      'Confidence that your data is accurate without manual reconciliation',
    ],
    ctaText: 'Automate Your Data Flows',
    relatedSlugs: ['system-integration', 'erp-implementation', 'ops-outgrown-tools', 'ai-operations'],
    relatedInsightSlugs: ['system-integration-guide', 'building-rag-agents-for-operations'],
  },
  {
    slug: 'vendor-management',
    titleKey: 'solutions.cards.vendorManagement.title',
    descriptionKey: 'solutions.cards.vendorManagement.description',
    problemHeadline: 'Vendor selection is a black box',
    category: 'Strategy',
    seoSummary:
      'Software vendor selection and negotiation support for operations leaders making ERP, CRM, and systems decisions.',
    painPoints: [
      `You're evaluating software and every vendor says they can do everything`,
      `You don't have internal expertise to evaluate technical claims objectively`,
      `You're worried about choosing the wrong platform and being locked in`,
      `You've been burned before by a vendor who oversold and underdelivered`,
      `You don't know how to structure contracts or what to negotiate`,
    ],
    whatWeDo: [
      'Define your actual requirements from your workflows, not from RFP templates',
      'Build a shortlist of 3–5 platforms that genuinely match your requirements',
      'Run structured demos focused on your specific use cases, not the standard pitch',
      'Score vendors against your requirements with documented rationale',
      'Support contract negotiations with market knowledge',
    ],
    aiOpportunities: [
      'Evaluate vendor AI claims with the same rigor as core workflow claims so you do not buy vague “AI-ready” promises',
      'Define where RAG, copilots, or agentic automation would create real value before software vendors lock you into their roadmap',
      'Choose platforms with the APIs, permissions, and data models needed for future AI initiatives and governance',
    ],
    outcomes: [
      'A confident, well-documented vendor selection decision',
      'A contract with protections and terms that actually reflect your requirements',
      'A clear implementation plan before any money changes hands',
      'An internal team that understands why they chose what they chose',
      'Avoided cost of choosing the wrong platform',
    ],
    ctaText: 'Get Vendor Selection Help',
    relatedSlugs: ['erp-implementation', 'crm-implementation', 'systems-audit', 'ai-operations'],
    relatedInsightSlugs: ['vendor-selection-process', 'ai-operations-readiness'],
  },
  {
    slug: 'systems-audit',
    titleKey: 'solutions.cards.systemsAudit.title',
    descriptionKey: 'solutions.cards.systemsAudit.description',
    problemHeadline: "You don't know where to start",
    category: 'Strategy',
    seoSummary:
      'Operational systems audit for companies that need a clear roadmap across ERP, integrations, spreadsheets, and AI readiness.',
    painPoints: [
      `You know your operations have problems but you're not sure which ones to fix first`,
      'You have a list of system improvement ideas but no way to prioritize them',
      `Leadership has different opinions on what's broken and what to do about it`,
      `You've gotten advice from vendors but you know they're biased`,
      'You want an objective outside view before committing to a large investment',
    ],
    whatWeDo: [
      'Interview key stakeholders across operations, finance, and sales',
      'Map your current systems, workflows, and data flows',
      'Identify gaps, redundancies, and high-cost inefficiencies',
      'Benchmark against what best-in-class operations look like at your size',
      'Deliver a prioritized roadmap with effort estimates and ROI projections',
    ],
    aiOpportunities: [
      'Assess AI readiness across data quality, permissions, documentation maturity, and process stability before any rollout begins',
      'Identify the highest-ROI use cases for RAG assistants, workflow agents, and AI-enabled reporting inside your current stack',
      'Build an implementation roadmap that sequences foundations first so AI investments land on stable operational ground',
    ],
    outcomes: [
      'A complete map of your operational tech stack and where it breaks down',
      'A prioritized list of improvements ranked by impact and implementation complexity',
      'Alignment across leadership on what to fix and in what order',
      `Clear business cases for the investments you're considering`,
      'A confident starting point,  no more analysis paralysis',
    ],
    ctaText: 'Book a Systems Audit',
    relatedSlugs: ['ops-outgrown-tools', 'erp-implementation', 'vendor-management', 'ai-operations'],
    relatedInsightSlugs: ['ai-operations-readiness', 'vendor-selection-process'],
  },
]

export function getSolutionBySlug(slug: string): SolutionData | undefined {
  return solutions.find((s) => s.slug === slug)
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((s) => s.slug)
}
