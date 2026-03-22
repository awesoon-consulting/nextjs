/**
 * Blog/insights data. Replace with a CMS or MDX files as the content grows.
 * Currently uses static placeholder data to demonstrate structure.
 */

export interface InsightPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  authorTitle: string
  publishedAt: string
  readingTime: number // minutes
  tags: string[]
  relatedSlugs: string[]
  relatedSolutionSlugs: string[]
  sourceLinks?: { label: string; url: string }[]
}

export const insights: InsightPost[] = [
  {
    slug: 'why-erp-projects-fail',
    title: 'Why Most ERP Projects Fail (And How to Avoid It)',
    excerpt:
      `ERP implementations have a notorious failure rate. After working through dozens of these projects, we've identified the patterns that predict failure,  and how to avoid them.`,
    content: `
# Why Most ERP Projects Fail (And How to Avoid It)

ERP implementations have a notorious failure rate. Studies put it anywhere from 50% to 75% depending on how you define "failure." After working through dozens of these projects with mid-market manufacturers and distributors, we've identified the patterns that predict failure,  and what the successful projects do differently.

## The Most Common Failure Mode: Letting the Vendor Lead

The single biggest predictor of ERP project failure is letting the software vendor lead the requirements process.

Here's how it plays out: you hire a vendor, they send in a team of consultants who have been trained to sell their platform's capabilities. They run you through a demo. Your team gets excited about features. You build a requirements document based on the demo you just saw.

The problem: you've designed your implementation around the vendor's strengths, not your operational reality.

The vendor knows their software better than you do. They know how to configure it to look impressive in a demo. They don't know your warehouse layout, your customer exceptions, your union rules, or the 47 workarounds your team has built over 10 years.

The fix: Define your requirements before you talk to a single vendor. Start with your people,  what does each person on the floor actually need to do their job? What data do they need to see? What decisions does the system need to support? Build that list, then evaluate vendors against it.

## Underestimating Data Migration

Every ERP project we've seen underestimates data migration. Every single one.

Your historical data is messy. It was entered by different people over different years with different standards. Item numbers are inconsistent. Customer records are duplicated. Costs are wrong. Some of it doesn't even exist digitally,  it's in filing cabinets or people's heads.

The fix: Allocate 30% of your total project timeline to data cleanup and migration. Start the data audit on day one. Have a clear owner. Don't let go-live be blocked by last-minute data chaos.

## Change Management as an Afterthought

Most ERP projects think of training as something you do in the last two weeks before go-live. Show people how to click through the screens, hand them a manual, and call it done.

This doesn't work. People who were forced to adopt a new system without understanding why it's better than the old one will find workarounds immediately. Six months after go-live, you'll find spreadsheets being used to compensate for a system no one actually uses.

The fix: Involve your heaviest users early. Get their input on how the system should be configured. Make them feel like they built it, not like something was done to them.

## Conclusion

ERP projects fail when the implementation is led by vendor consultants instead of your own team (with outside help). They fail when data migration is underestimated. They fail when change management is an afterthought.

The projects that succeed are the ones where the client owns the outcome,  where someone internal is accountable, where requirements came from the business, and where the team was brought along, not dragged along.
    `.trim(),
    category: 'erp',
    author: 'Awesoon Team',
    authorTitle: 'Operations Consulting',
    publishedAt: '2026-02-15',
    readingTime: 7,
    tags: ['ERP', 'Implementation', 'Operations', 'Change Management'],
    relatedSlugs: ['spreadsheet-to-erp-migration', 'vendor-selection-process'],
    relatedSolutionSlugs: ['erp-implementation', 'systems-audit', 'vendor-management'],
  },
  {
    slug: 'spreadsheet-to-erp-migration',
    title: 'The Practical Guide to Moving Off Spreadsheets',
    excerpt:
      `Most mid-market companies know they need to get off Excel but don't know where to start. Here's the framework we use to make that transition without disrupting operations.`,
    content: `
# The Practical Guide to Moving Off Spreadsheets

You know you need to get off Excel. Your operations director knows it. Your IT team knows it. And yet, years go by and the spreadsheets keep multiplying.

Here's the thing: moving off spreadsheets isn't primarily a technology problem. It's a change management and prioritization problem. This guide covers the framework we use to help companies make the transition without blowing up their operations.

## Step 1: Audit Everything First

Before you can decide what to replace spreadsheets with, you need to know exactly what's running on spreadsheets. We call this the spreadsheet audit.

Go department by department. Ask each team lead to inventory every spreadsheet that touches something business-critical:
- What decision does this spreadsheet inform?
- Who updates it and how often?
- Who reads it and what do they do with the information?
- What breaks if this spreadsheet is wrong?

You'll typically find three categories:
1. Spreadsheets that should be in a real system,  order tracking, inventory counts, production schedules
2. Spreadsheets compensating for a broken process,  these reveal process problems, not just tool problems
3. Spreadsheets that are actually fine,  ad hoc analysis, one-time projects, executive reporting that's too custom for a generic tool

Only the first category needs to be migrated. The second category needs a process fix before any tech change. The third category can stay.

## Step 2: Prioritize by Business Risk

Not all spreadsheets are equal risk. Prioritize by:
- Frequency of use: Daily-use spreadsheets are higher priority than monthly ones
- Number of users: More users = more potential for version conflicts
- Downstream dependencies: Does other reporting depend on this data being accurate?
- Audit/compliance exposure: Are regulators or auditors going to ask about this data?

Build a 2x2 of risk vs. migration complexity and start with high-risk, low-complexity migrations.

## Step 3: Choose the Right Replacement

This is where most companies make mistakes. They assume "get off spreadsheets" means "implement an ERP." Sometimes it does. Often it doesn't.

The right replacement depends on the category:
- Inventory management: WMS or ERP inventory module
- Order tracking: OMS or CRM with order capability
- Production scheduling: MES or ERP production module, or sometimes a specialized tool
- Project/job tracking: PSA or project management tool
- Customer data: CRM

The mistake is trying to replace everything with one tool. Except in specific cases, that's not how mid-market operations work. You're going to have multiple systems. The goal is having the right tool for each job, not having one tool for every job.

## Conclusion

Moving off spreadsheets successfully requires an honest audit, risk-based prioritization, the right tool selection, and real change management. Companies that do it right save hours every week and dramatically reduce their operational risk.
    `.trim(),
    category: 'operations',
    author: 'Awesoon Team',
    authorTitle: 'Operations Consulting',
    publishedAt: '2026-01-28',
    readingTime: 8,
    tags: ['Spreadsheets', 'Operations', 'ERP', 'Process Improvement'],
    relatedSlugs: ['why-erp-projects-fail', 'vendor-selection-process'],
    relatedSolutionSlugs: ['spreadsheet-operations', 'erp-implementation', 'ops-outgrown-tools'],
  },
  {
    slug: 'vendor-selection-process',
    title: 'How to Run a Vendor Selection Process That Actually Works',
    excerpt:
      `Most software vendor selections are theater. The outcome is decided by who gave the best demo, not by which tool is best for the job. Here's how to run an objective process.`,
    content: `
# How to Run a Vendor Selection Process That Actually Works

Most software vendor selections are theater. By the time you've sat through four vendor demos, your team has formed opinions based on which demo they liked best,  and you end up buying software based on a polished pitch instead of an objective evaluation.

The consequences are real. We've seen companies spend $150,000 on an ERP that was wrong for their operations from the start, simply because the vendor's demo team was better than the competition's.

Here's how to run a process that actually selects the right tool.

## Start with Requirements, Not RFPs

The traditional RFP process doesn't work for software selection. Vendors have entire teams dedicated to responding to RFPs, and they're very good at writing answers that technically respond to your questions while meaning very little.

Instead, start by building your own requirements document before you talk to a single vendor.

A good requirements document answers:
- What core processes does this system need to support?
- What does each type of user need to be able to do?
- What data needs to go in and what needs to come out?
- What other systems does this need to integrate with?
- What are your non-negotiables?

This document becomes your north star. Every vendor is evaluated against it.

## Script the Demos

Don't let vendors run free-form demos. They'll show you what they're good at, not whether they can handle what you actually need.

Instead, give vendors a script. Provide them with realistic sample data from your operation. Ask them to demonstrate 5–7 specific scenarios that represent your most complex processes.

The scenarios where vendors fumble are more informative than the features they highlight.

## Score Objectively

Build a scoring matrix based on your requirements document. Assign weights to each requirement based on how critical it is. Score each vendor on each requirement.

This doesn't have to be complicated,  a simple spreadsheet with 15–20 requirements and a 1–5 scale will do. The value is forcing your team to be explicit about their assessments rather than voting on gut feel.

## Don't Skip Reference Checks

Call references. Not the references the vendor provides,  those are curated. Find customers on LinkedIn or through industry groups and call them cold.

Ask: What would you do differently if you were starting this implementation again? That question gets you the honest answer that the curated reference check won't.

## Conclusion

Software vendor selection should be a structured, objective process driven by your requirements. When it is, you dramatically reduce the risk of expensive buyer's remorse and increase the likelihood of a successful implementation.
    `.trim(),
    category: 'strategy',
    author: 'Awesoon Team',
    authorTitle: 'Operations Consulting',
    publishedAt: '2026-01-10',
    readingTime: 6,
    tags: ['Vendor Selection', 'Software', 'Strategy', 'ERP'],
    relatedSlugs: ['why-erp-projects-fail', 'system-integration-guide'],
    relatedSolutionSlugs: ['vendor-management', 'erp-implementation', 'crm-implementation'],
  },
  {
    slug: 'system-integration-guide',
    title: 'Connecting Your Tech Stack: A Practical Integration Guide',
    excerpt:
      `Most mid-market companies have 5–10 software systems with minimal integration between them. Here's the framework for deciding what to connect, how to connect it, and what tools to use.`,
    content: `
# Connecting Your Tech Stack: A Practical Integration Guide

The average mid-market manufacturer or distributor has somewhere between 5 and 15 software systems. Most of them don't talk to each other.

The result: manual data re-entry, inconsistent data, reporting that takes hours to pull together, and a constant background hum of "which system has the right number?"

This guide covers the framework we use to design and build integrations that actually work.

## Map Before You Build

Before you touch a single API, map your current data flows,  or lack thereof.

Create a simple diagram with each system as a node. Draw arrows showing where data moves today (even if it's manual). Label each arrow with: what data moves, how often, who moves it, and what happens if it doesn't get moved.

This map will reveal your highest-value integration opportunities,  the manual transfers that happen most frequently, touch the most people, or have the highest error risk.

## Choose the Right Integration Approach

Not all integrations need to be built the same way. The right approach depends on your systems, your budget, and your maintenance capacity.

Native integrations: Some systems have pre-built connectors to other common platforms. Always start here. They're maintained by the vendor and require no custom code.

iPaaS platforms (Zapier, Make, Boomi, Celigo, etc.): For connecting SaaS tools, an integration platform is often faster and cheaper than custom development. These tools have visual, no-code/low-code interfaces and are maintainable by non-developers.

Custom API integrations: For complex transformations, high data volumes, or systems with limited native integration support, custom code is sometimes the right answer. More expensive to build and maintain, but more flexible.

Middleware/ESB: For large enterprises with dozens of systems, an enterprise service bus or middleware platform makes sense. For most mid-market companies, this is overkill.

## Build for Failure, Not for the Happy Path

The most common mistake in integration projects is building for the happy path,  what happens when everything works as expected.

Real integrations fail. APIs go down. Records don't match. Data arrives out of order. Duplicate records get created.

Good integrations include:
- Error logging that tells you what failed and why
- Retry logic for transient failures
- Alerting so the right person knows when something breaks
- Manual override mechanisms for when automation fails

## Conclusion

System integration is infrastructure work. Done well, it's invisible,  data flows, systems stay in sync, and your team can trust what they see. Done poorly, it creates a new category of problems that's harder to diagnose than the manual processes it replaced.

Start with a map. Prioritize by impact. Choose the simplest approach that meets your requirements. And build for failure from day one.
    `.trim(),
    category: 'integration',
    author: 'Awesoon Team',
    authorTitle: 'Operations Consulting',
    publishedAt: '2025-12-18',
    readingTime: 9,
    tags: ['Integration', 'API', 'Tech Stack', 'Operations'],
    relatedSlugs: ['why-erp-projects-fail', 'vendor-selection-process'],
    relatedSolutionSlugs: ['system-integration', 'api-integrations', 'ops-outgrown-tools'],
  },
  {
    slug: 'ai-operations-readiness',
    title: 'AI Readiness for Operations Teams: What to Fix Before You Buy the Hype',
    excerpt:
      "Most operations teams don't have an AI problem. They have a data quality, workflow clarity, and systems trust problem. Here's how to get AI-ready the right way.",
    content: `
# AI Readiness for Operations Teams: What to Fix Before You Buy the Hype

Every mid-market operations leader is hearing the same pitch: add AI and your team will move faster, make better decisions, and operate with less overhead.

Sometimes that's true. But in most cases, AI amplifies the condition of your underlying operation. If your systems are fragmented, your data is unreliable, and your SOPs only exist in people's heads, AI won't fix that. It will surface the mess faster.

## Start with Operational Reality

Before you evaluate copilots, RAG tools, or agentic workflow platforms, answer four questions:
- Is the underlying process stable enough to automate?
- Is the source data accurate enough to trust?
- Do permissions and ownership exist for the information involved?
- Is the team clear on where human review is required?

If the answer to any of those is no, the first investment should not be an AI layer. It should be operational cleanup.

## RAG Is Only as Good as the Retrieval Layer

Retrieval-augmented generation can be powerful for operations teams. It can help employees find SOPs, answer policy questions, surface customer context, and reduce time spent hunting through files.

But RAG fails when:
- Documents are outdated
- File ownership is unclear
- Different systems disagree with each other
- No one has defined which source is authoritative

The hard part is not the model. The hard part is governance.

## Agentic Workflows Need Guardrails

Agentic automation sounds attractive because it promises to move beyond answering questions and into taking action.

That only works when the workflow has:
- Clear success and failure states
- Approval checkpoints
- Reliable system access
- Logging, monitoring, and rollback plans

An agent that can trigger a purchase order, update a customer record, or route a warehouse exception is only useful if the surrounding controls are mature.

## The Best Early AI Use Cases

The highest-value AI use cases in mid-market operations are usually:
- Internal knowledge assistants backed by approved SOPs and policy documents
- Exception triage for tickets, orders, or workflow queues
- Summaries across long operational records, notes, or customer histories
- Search and reporting copilots that sit on top of trusted operational data

These use cases create value quickly without pretending AI should replace core systems or human judgment.

## Conclusion

The right AI strategy starts with operational clarity. Fix data flow issues. Clean up ownership. Document workflows. Then add AI where it reduces friction, not where it creates a new layer of ambiguity.
    `.trim(),
    category: 'technology',
    author: 'Awesoon Team',
    authorTitle: 'Operations Consulting',
    publishedAt: '2026-03-22',
    readingTime: 8,
    tags: ['AI', 'RAG', 'Operations', 'Governance'],
    relatedSlugs: ['building-rag-agents-for-operations', 'system-integration-guide'],
    relatedSolutionSlugs: ['systems-audit', 'ops-outgrown-tools', 'vendor-management'],
    sourceLinks: [
      {
        label: 'NIST AI Risk Management Framework 1.0',
        url: 'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10',
      },
      {
        label: 'AWS Prescriptive Guidance on grounding and RAG',
        url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-serverless/grounding-and-rag.html',
      },
      {
        label: 'Microsoft guidance on retrieval augmented generation',
        url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/retrieval-augmented-generation',
      },
    ],
  },
  {
    slug: 'building-rag-agents-for-operations',
    title: 'Where RAG and Agentic Workflows Actually Fit in Mid-Market Operations',
    excerpt:
      'RAG and agentic systems can create real operational leverage, but only when they are connected to the right workflows, data sources, and controls.',
    content: `
# Where RAG and Agentic Workflows Actually Fit in Mid-Market Operations

RAG and agentic AI get lumped together in software pitches, but they solve different problems.

RAG helps people get grounded answers from approved sources. Agentic systems go a step further and take action inside workflows. Operations teams need both concepts, but they should not buy or implement them the same way.

## Where RAG Delivers Fast Value

RAG works best when the job is to find, summarize, or explain information that already exists somewhere in the business.

Strong examples include:
- SOP assistants for warehouse, production, and service teams
- Customer context assistants that combine CRM history, account notes, and support documentation
- ERP and policy copilots for internal training and adoption
- Commercial knowledge tools that answer pricing, lead time, and process questions from approved sources

This is often the cleanest first AI win because it improves speed without directly changing records in your core systems.

## Where Agentic Automation Makes Sense

Agentic workflows become interesting when there is a clear operational trigger, a defined action, and measurable business impact.

Examples:
- Triage and route order exceptions
- Draft responses for customer service teams with human review
- Monitor integration failures and escalate by severity
- Trigger follow-up tasks after specific ERP or CRM events

The key is not autonomy for its own sake. The key is controlled execution in repetitive, rules-based workflows.

## What Needs to Exist First

Before either approach works reliably, you need:
- Stable source systems
- Defined system ownership
- Permission-aware access to data
- Clear handoffs between teams
- Monitoring for failure cases

Without those foundations, your AI layer becomes another disconnected system for the team to work around.

## How to Sequence the Rollout

For most mid-market companies, the right sequence is:
1. Fix spreadsheet dependencies and core data flow issues
2. Connect source systems and define the system of record
3. Deploy a RAG assistant for high-frequency internal questions
4. Add narrowly scoped agents around one or two repetitive workflows
5. Expand only after usage, trust, and controls are proven

## Conclusion

RAG is usually the first practical layer. Agentic workflows come next when the process is stable enough to automate action. Companies that sequence this well get compounding value instead of compounding confusion.
    `.trim(),
    category: 'technology',
    author: 'Awesoon Team',
    authorTitle: 'Operations Consulting',
    publishedAt: '2026-03-22',
    readingTime: 9,
    tags: ['AI', 'RAG', 'Agents', 'Integration'],
    relatedSlugs: ['ai-operations-readiness', 'system-integration-guide'],
    relatedSolutionSlugs: ['api-integrations', 'system-integration', 'crm-implementation'],
    sourceLinks: [
      {
        label: 'AWS Prescriptive Guidance on grounding and RAG',
        url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-serverless/grounding-and-rag.html',
      },
      {
        label: 'Microsoft guidance on retrieval augmented generation',
        url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/retrieval-augmented-generation',
      },
      {
        label: 'NIST AI Risk Management Framework 1.0',
        url: 'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10',
      },
    ],
  },
  {
    slug: 'retire-spreadsheets-without-breaking-operations',
    title: 'How to Retire Spreadsheets Without Breaking Operations',
    excerpt:
      'Spreadsheet replacement works when teams map what each file does, classify risk, and migrate the process before they migrate the tool.',
    content: `
# How to Retire Spreadsheets Without Breaking Operations

Most spreadsheet replacement projects fail for a simple reason. The team starts by asking what software to buy instead of asking what the spreadsheet is actually doing for the business.

In real operations, spreadsheets are rarely just files. They are unofficial systems for planning, pricing, scheduling, exception handling, and reporting. If you remove them without understanding that role, you just move chaos from Excel into a more expensive platform.

## Start with a Function Audit

Before you migrate anything, build an inventory of the spreadsheets that matter. For each file, answer:
- What decision does this spreadsheet support?
- Who updates it?
- How often is it used?
- What happens if the data is wrong?
- What downstream process depends on it?

This forces the team to distinguish between business-critical spreadsheets and the files that are only convenient.

## Separate Process from File Format

Many spreadsheet problems are not really spreadsheet problems. They are signs of missing process ownership, weak system design, or disconnected applications.

That means the first goal is not to eliminate every spreadsheet. The goal is to identify which spreadsheets are acting as unofficial systems of record and replace those with governed workflows.

Useful ad hoc analysis can stay in spreadsheets. Core operational execution should not.

## Prioritize by Risk, Not by Noise

The loudest spreadsheet complaints are not always the most important ones.

Start with spreadsheets that:
- Drive daily operational decisions
- Feed other systems or reports
- Are edited by multiple people
- Create customer, audit, or financial risk when they are wrong

This gives you a rational migration sequence instead of a politically driven one.

## Match the Replacement to the Job

Not every spreadsheet should become an ERP module.

Some should move into:
- ERP workflows
- CRM processes
- WMS or inventory platforms
- Integration layers
- Lightweight operational tooling

The right answer depends on the process, the owner, and the downstream dependencies. Good replacement work is architectural, not ideological.

## Build the Exit Plan Before the Cutover

Spreadsheet retirement only sticks when the team knows exactly when the old file becomes read-only, who owns the new process, and how training will happen.

That means every migration needs:
- Clean source data
- A documented workflow
- Named ownership
- Team training
- A defined decommission date

Without that, the spreadsheet comes back the first time the new process feels slower.

## Conclusion

Retiring spreadsheets safely is less about software and more about operational design. Audit the function, prioritize by risk, match the tool to the workflow, and shut down the old path with intention. That is how you reduce risk without disrupting the business.
    `.trim(),
    category: 'operations',
    author: 'Awesoon Team',
    authorTitle: 'Operations Consulting',
    publishedAt: '2026-03-22',
    readingTime: 9,
    tags: ['Spreadsheets', 'Migration', 'Operations', 'Systems'],
    relatedSlugs: ['spreadsheet-to-erp-migration', 'system-integration-guide', 'ai-operations-readiness'],
    relatedSolutionSlugs: ['spreadsheet-operations', 'system-integration', 'erp-implementation', 'ops-outgrown-tools'],
    sourceLinks: [
      {
        label: 'UK National Archives guidance on exporting and transferring electronic data',
        url: 'https://www.nationalarchives.gov.uk/information-management/manage-information/managing-risk/exporting-transferring-electronic-data/',
      },
      {
        label: 'Microsoft Learn Migration Manager overview',
        url: 'https://learn.microsoft.com/en-us/sharepointmigration/mm-get-started',
      },
      {
        label: 'Microsoft support guidance for migration mapping',
        url: 'https://support.microsoft.com/en-us/office/mapping-google-source-ids-in-the-migration-spreadsheet-to-resolve-broken-links-post-migration-773f8208-ad95-4678-a6c0-bfe1a4405262',
      },
    ],
  },
  {
    slug: 'vendor-selection-in-ai-and-integration-sprawl',
    title: 'Vendor Selection in a World of AI Claims and Integration Sprawl',
    excerpt:
      'The best software selection process asks what the platform must do, what it must connect to, and what risks the supplier must prove they can manage.',
    content: `
# Vendor Selection in a World of AI Claims and Integration Sprawl

Modern software selection is harder than it used to be. Every vendor now claims strong AI capabilities, fast implementation, easy integrations, and immediate ROI.

The problem is that most of those claims are presented in a vacuum. They are not tested against your workflows, your data model, your permissions, or your implementation capacity.

That is how mid-market companies end up buying a polished demo instead of buying a system that fits reality.

## Start with Workflow Requirements

Before you compare vendors, define what the system actually needs to support.

That should include:
- Core workflows
- User roles
- Required reporting
- Integration dependencies
- Approval and audit requirements
- Data ownership and access expectations

If those requirements are vague, the vendor with the best presentation usually wins for the wrong reasons.

## Treat Integration Fit as a Primary Criterion

In most operations environments, the software is only part of the decision. The other part is what that software has to connect to.

That means your scorecard should include:
- API availability
- Native connectors
- Data export and import quality
- Permission controls
- Reliability of sync options
- Ease of monitoring and troubleshooting

If the integration layer is weak, the total cost of ownership goes up fast after the contract is signed.

## Evaluate AI Claims Like Any Other Feature

Vendors often market AI as a reason to accelerate the buying decision. That is exactly when teams should slow down.

Ask:
- What source data does the AI use?
- What permissions control access?
- What actions can it take?
- What audit trail exists?
- How is output validated?

If the answers are vague, the AI story should not improve the vendor's score.

## Procurement Should Surface Operational Risk

Software selection is not only a functional exercise. It is also a risk exercise.

Good procurement work should test:
- Security expectations
- Implementation accountability
- Support model
- Data portability
- Exit terms
- Responsibility for failures and remediation

This is especially important when vendors are asking buyers to trust automation or AI-enabled workflows.

## Conclusion

Strong vendor selection gets harder when software categories overlap and every platform claims AI leadership. The answer is not speed. The answer is better criteria. Start with workflows, score integration fit seriously, interrogate AI claims, and make risk part of the decision model from the beginning.
    `.trim(),
    category: 'strategy',
    author: 'Awesoon Team',
    authorTitle: 'Operations Consulting',
    publishedAt: '2026-03-22',
    readingTime: 8,
    tags: ['Vendor Selection', 'AI', 'Integration', 'Procurement'],
    relatedSlugs: ['vendor-selection-process', 'ai-operations-readiness', 'why-erp-projects-fail'],
    relatedSolutionSlugs: ['vendor-management', 'erp-implementation', 'system-integration', 'ai-operations'],
    sourceLinks: [
      {
        label: 'CISA Software Acquisition Guide Fact Sheet',
        url: 'https://www.cisa.gov/resources-tools/resources/software-acquisition-guide-fact-sheet',
      },
      {
        label: 'CISA Secure by Demand Guide',
        url: 'https://www.cisa.gov/resources-tools/resources/secure-demand-guide',
      },
      {
        label: 'GSA purchasing guidance',
        url: 'https://www.gsa.gov/buy-through-us/purchasing-programs/commercial-platforms/purchasing-guidance',
      },
      {
        label: 'NIST AI Risk Management Framework 1.0',
        url: 'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10',
      },
    ],
  },
]

export function getInsightBySlug(slug: string): InsightPost | undefined {
  return insights.find((p) => p.slug === slug)
}

export function getAllInsightSlugs(): string[] {
  return insights.map((p) => p.slug)
}

export function getInsightsByCategory(category: string): InsightPost[] {
  return insights.filter((p) => p.category === category)
}
