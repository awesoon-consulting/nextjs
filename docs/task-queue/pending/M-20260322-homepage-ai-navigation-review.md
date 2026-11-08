# Review homepage and navigation for AI surface placement

**Type:** Marketing
**Priority:** Medium
**Effort:** S
**Created-by:** bootstrap
**Created-at:** 2026-03-22T00:00:00Z
**Status:** pending

## Objective
Now that AI value-add content exists across solution pages and dedicated insight articles have been added, review whether AI deserves explicit placement at the homepage or navigation level. The goal is not to make AI a top-level brand pillar, but to decide whether the current navigation hierarchy makes it easy enough for AI-adjacent buyers to find Awesoon's relevant services.

Audit the homepage hero, solutions nav section, and insight navigation to assess:
- Whether the current entry points surface AI-related content adequately
- Whether any copy changes at the homepage level would improve conversion for AI-readiness buyers
- Whether navigation labels or groupings should be updated to reflect the new AI content

## Files to Edit
- `app/[locale]/page.tsx` (homepage)
- `src/components/` — navbar or navigation components
- `messages/en.json` — if copy changes are needed
- `src/data/solutions.ts` or navigation config — if ordering changes

## Acceptance Criteria
- [ ] D000: Any homepage or nav copy additions feel like Awesoon — not AI-hype-first
- [ ] D001: All new or edited headlines in sentence case
- [ ] Clear audit finding: document what was checked and what (if anything) was changed
- [ ] If no changes are made, write a brief rationale in the task reasoning section

## Context
Seeded from bootstrap. Based on existing docs at: `ai-integration-seo-task.md` — "Review homepage and navigation to decide whether AI deserves explicit surface-level placement."
