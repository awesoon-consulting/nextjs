# Add JSON-LD structured data to solution and insight pages

**Type:** Engineering
**Priority:** High
**Effort:** M
**Created-by:** bootstrap
**Created-at:** 2026-03-22T00:00:00Z
**Status:** pending

## Objective
Solution and insight pages currently have no JSON-LD structured data. Adding `Service` schema to solution pages and `Article` schema to insight pages will improve search result appearance, support rich snippets, and strengthen topical authority signals for Awesoon's operations consulting offers.

This is a follow-up item explicitly called out in `ai-integration-seo-task.md`.

## Files to Edit
- `app/[locale]/solutions/[slug]/page.tsx` (or equivalent solution detail page)
- `app/[locale]/insights/[slug]/page.tsx` (or equivalent insight detail page)
- `src/lib/` — create a `jsonld.ts` helper if one does not exist

## Acceptance Criteria
- [ ] D000: Schema content matches Awesoon's actual service descriptions — no generic boilerplate
- [ ] D001: N/A (no visible headlines in JSON-LD)
- [ ] `Service` JSON-LD present and valid on all solution detail pages
- [ ] `Article` JSON-LD present and valid on all insight detail pages
- [ ] Schema passes Google Rich Results Test for at least one solution and one insight page
- [ ] No duplicate schema injected (check for existing head meta setup)
- [ ] Works correctly across all three locales (EN, FR, ES)

## Context
Seeded from bootstrap. Based on existing docs at: `ai-integration-seo-task.md` — "Add JSON-LD for service pages and articles" listed as follow-up opportunity.
