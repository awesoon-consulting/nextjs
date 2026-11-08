# Fix secondary CTA contrast and interactivity in dark mode

**Type:** Engineering
**Priority:** High
**Effort:** S
**Created-by:** bootstrap
**Created-at:** 2026-03-22T00:00:00Z
**Status:** pending

## Objective
Secondary CTA buttons in dark mode collapse visually into surrounding dark surfaces, making them appear disabled or non-interactive. This damages conversion confidence on all pages in dark mode. Fix contrast, hover states, and focus rings so secondary CTAs are immediately recognizable as interactive while preserving the premium visual direction of the site.

Full brief at: `dark-mode-secondary-cta-task.md` in the project root.

## Files to Edit
- `src/components/ui/Button.tsx`
- `app/globals.css`
- `src/config/theme.ts`
- Any page or section component that overrides secondary CTA styles

## Acceptance Criteria
- [ ] D000: Button styling feels like a premium operations consulting site — not generic SaaS
- [ ] D001: No headline changes needed for this task
- [ ] Secondary CTAs visibly distinct from surrounding dark panels and page background in dark mode
- [ ] Button labels meet comfortable readability standards at a glance
- [ ] Hover and focus states feel interactive, not static
- [ ] Shared button tokens and page-level overrides do not conflict
- [ ] Primary CTA styling unchanged
- [ ] Verified on desktop and mobile widths

## QA Checklist
- [ ] Homepage hero secondary CTA in dark mode
- [ ] Navbar/header secondary-style actions in dark mode
- [ ] Footer and floating CTA variants
- [ ] Form-adjacent CTAs and outline/ghost button variants
- [ ] Light mode secondary CTAs still read correctly after changes

## Context
Seeded from bootstrap. Based on existing docs at: `dark-mode-secondary-cta-task.md`
