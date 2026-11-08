# Task: Improve Secondary CTA Clickability In Dark Mode

## Problem

Secondary CTA buttons in dark mode are currently too dark and low-contrast. They visually blend into nearby dark surfaces, which makes them feel disabled or non-interactive.

## Goal

Make secondary CTAs feel clearly clickable in dark mode while preserving the premium visual direction of the site.

## Desired Outcome

- Secondary CTA buttons should be immediately recognizable as interactive in dark mode.
- Contrast should improve without making the buttons feel loud or off-brand.
- Hover, focus, and pressed states should remain distinct and polished.
- The solution should stay consistent across shared button styles and any page-specific CTA variants.

## Likely Areas To Review

- `src/components/ui/Button.tsx`
- `app/globals.css`
- `src/config/theme.ts`
- Any page or section component overriding secondary CTA styles

## Implementation Notes

- Avoid ultra-dark fills that collapse into the surrounding background.
- Prefer a lighter dark-surface treatment, clearer border definition, and stronger text contrast.
- Add a visible hover transition so the interaction feels intentional.
- Ensure keyboard focus remains obvious in both themes.
- Check that secondary CTAs still read correctly in light mode after the dark-mode update.

## Acceptance Criteria

- In dark mode, secondary CTA buttons are visibly distinct from surrounding panels and page background.
- Button labels meet comfortable readability standards at a glance.
- Hover and focus states make the buttons feel interactive, not static.
- Shared button tokens and page-level overrides do not conflict.
- Primary CTA styling remains unchanged unless required for consistency.

## QA Checklist

- Review homepage hero secondary CTA in dark mode.
- Review navbar or header secondary-style actions in dark mode.
- Review footer and floating CTA variants if they reuse shared button styles.
- Review form-adjacent CTAs and any outline/ghost button variants.
- Verify the result on desktop and mobile widths.

## Priority

High. This affects perceived polish and conversion confidence in dark mode.
