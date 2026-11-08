# Expand AI operations content to FR and ES locales

**Type:** Marketing
**Priority:** High
**Effort:** M
**Created-by:** bootstrap
**Created-at:** 2026-03-22T00:00:00Z
**Status:** pending

## Objective
The AI operations positioning added to solution pages (RAG, agentic workflows, AI copilots) currently exists only in the EN locale. FR and ES visitors see outdated or missing AI-related copy, which leaves a gap in multilingual SEO coverage and brand consistency across markets.

Translate and adapt all AI-related additions from EN solution copy into the FR and ES message files, preserving Awesoon's operator-led voice. This is not a literal word-for-word translation — adapt tone to feel natural in each language while maintaining the mid-market practical positioning.

## Files to Edit
- `messages/fr.json`
- `messages/es.json`
- `src/data/solutions.ts` (if locale-specific fields need extending)

## Acceptance Criteria
- [ ] D000: AI content in FR and ES feels like Awesoon operations consulting, not a generic AI agency
- [ ] D001: All headlines in sentence case in all locales
- [ ] All solution pages render AI value-add sections correctly in FR and ES
- [ ] No missing translation keys — no fallback to EN strings on FR or ES pages
- [ ] Tone in FR: direct, professional, no marketing fluff
- [ ] Tone in ES: practical, concrete, operator-facing

## Context
Seeded from bootstrap. Based on existing docs at: `ai-integration-seo-task.md` and `src/data/solutions.ts`
