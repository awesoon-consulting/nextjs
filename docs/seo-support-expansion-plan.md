# Awesoon Support + Solutions Expansion Brief

## Objective

Expand the website so Awesoon is not positioned only as a project-based operations consultancy, but also as a long-term support partner for companies that:

- need support after implementation or go-live
- want to replace an existing support provider
- need ongoing maintenance, admin help, and change requests
- need custom API development and system-specific support
- need end-to-end ecommerce development plus maintenance

The expansion should stay consistent with the current Awesoon positioning:

- operator-led
- independent
- implementation-first
- practical, no-bloat, no generic agency language

## Core Positioning Shift

Current positioning:

"Your ops outgrew your tools. We fix that."

Expanded positioning:

Awesoon helps companies design, implement, support, and continuously improve the systems that run their operations.

That means the website should communicate four layers clearly:

1. Audit and strategy
2. Implementation and integration
3. Post-launch support and provider replacement
4. Ongoing maintenance, optimization, and custom development

## New Content Areas To Add

### 1. Support Hub

Create a new top-level `Support` section and supporting SEO pages that explain:

- post-launch support after delivery
- support for businesses switching from a slow or poor-fit provider
- ongoing admin, maintenance, optimization, and change-request support
- practical operator support, not ticket-queue bureaucracy

### 2. CRM Support

Target support-intent keywords and platform mentions naturally, including:

- Salesforce support
- HubSpot support
- Zoho support
- CRM administrator support
- CRM maintenance
- CRM cleanup and optimization

The page should focus on:

- broken adoption
- stale pipeline workflows
- reporting drift
- poor handoff between sales and operations
- teams that need a senior support partner, not just software help docs

### 3. ERP / Systems Support

Position support for live or partially-live operational systems. Include recognizable platform mentions where relevant without sounding stuffed:

- ERP support
- NetSuite support
- Odoo support
- Microsoft Dynamics support
- Acumatica support

The angle should be:

- after go-live support
- stabilization
- process cleanup
- issue triage
- workflow improvements
- provider replacement support

### 4. Ecommerce Development

Add a new solution for end-to-end ecommerce development that fits the existing Awesoon lens:

- ecommerce architecture
- store build and replatforming
- ERP / CRM / WMS / fulfillment integration
- operationally sound ecommerce, not just pretty storefront work

This should target terms like:

- ecommerce development
- ecommerce systems integration
- Shopify development support
- ecommerce operations consulting

### 5. Ecommerce Maintenance & Support

Support page for companies that already have a store and need:

- ecommerce maintenance
- support retainer
- integration fixes
- catalog and workflow changes
- provider switch support

### 6. Custom API Development

Add a new solution focused on:

- custom API development
- system-to-system middleware
- internal tools and workflow endpoints
- operational automations backed by stable integrations

This should complement, not duplicate, the existing API integrations page.

Difference:

- `API Integrations` = connecting existing systems and data flows
- `Custom API Development` = building new integration layers, endpoints, middleware, and custom operational logic

## Information Architecture Recommendation

### Keep `Solutions`

Use `Solutions` for transformation and build work:

- AI Operations & RAG Enablement
- Ops Outgrown Your Tools
- Spreadsheet Operations
- System Integration
- ERP Implementation
- CRM Implementation
- API Integrations
- Custom API Development
- Ecommerce Development
- Vendor Management & Selection
- Systems Audit

### Add `Support`

Use `Support` for post-launch and ongoing operating help:

- Systems & Operations Support
- CRM Support
- ERP Support
- Ecommerce Support & Maintenance

This makes the site clearer:

- `Solutions` = build, fix, implement, redesign
- `Support` = maintain, stabilize, improve, replace provider

## Brand Guardrails

Every new page should sound like Awesoon:

- no inflated enterprise jargon
- no agency fluff
- no vague “digital transformation” language
- no generic managed services language
- no keyword stuffing

Preferred tone:

- direct
- specific
- practical
- credible
- operator-to-operator

## Internal Prompt For Execution

If I were prompting myself to execute this work cleanly, I would use:

> Expand the Awesoon website to reflect both project delivery and ongoing support services. Add a new top-level Support section with SEO-focused pages for Systems & Operations Support, CRM Support, ERP Support, and Ecommerce Support & Maintenance. Add new solution pages for Ecommerce Development and Custom API Development. Keep all new copy aligned with the current Awesoon brand voice: operator-led, direct, implementation-first, and anti-bloat. Use natural high-intent keyword coverage with platform mentions where appropriate, including Salesforce support, HubSpot support, Zoho support, NetSuite support, Odoo support, Microsoft Dynamics support, Acumatica support, Shopify development, and ecommerce maintenance. Update navigation, footer, sitemap, translations, and any supporting content/data files so the new pages are first-class citizens in the site. Avoid keyword stuffing and avoid duplicating existing solution pages; make each page have a distinct buyer intent and clear relationship to the existing architecture.

## Implementation Notes

- Add a reusable support data source similar to `src/data/solutions.ts`
- Add localized support index and support detail routes
- Update navigation and footer so Support is visible
- Update sitemap to include support pages
- Expand English marketing copy and add French/Spanish translations so the multilingual structure stays intact
- Ensure support pages link back into relevant solutions and vice versa
- Re-check metadata descriptions so support-intent search pages have distinct titles and summaries
