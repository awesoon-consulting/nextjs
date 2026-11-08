# Design Tokens,  `/src/config/theme.ts`

This file is the single source of truth for all design decisions. Every color, font, spacing value, shadow, and border radius is defined here and consumed by `tailwind.config.ts`.

## How It Works

1. `theme.ts` exports a `theme` object with all design tokens
2. `tailwind.config.ts` imports `theme` and extends Tailwind's config
3. Components use Tailwind utility classes that reference these tokens

## Usage in Components

**Colors:**
```tsx
// Use Tailwind classes, never hardcoded hex
<div className="bg-primary text-text-inverse">  // primary background
<div className="bg-accent text-primary">         // accent button
<span className="text-text-muted">               // muted text
```

**Typography:**
```tsx
<h1 className="font-heading font-bold text-5xl">  // Sora font
<p className="font-body text-base">               // Inter font (default)
```

**Shadows:**
```tsx
<div className="shadow-md">   // medium shadow
<div className="shadow-xl">  // large shadow
```

## Changing the Accent Color

```typescript
// theme.ts
colors: {
  accent: {
    DEFAULT: '#F59E0B',  // Change this
    light: '#FCD34D',   // Change this
    dark: '#D97706',    // Change this
  },
}
```

No component changes needed. Tailwind regenerates all utility classes.

## Token Reference

| Token | Tailwind Class | Value |
|---|---|---|
| Primary | `bg-primary` | `#0F1B2D` dark navy |
| Secondary | `bg-secondary` | `#1E3A5F` medium navy |
| Accent | `bg-accent` | `#F59E0B` amber |
| Surface | `bg-surface` | `#FAFAF7` off-white |
| Text Primary | `text-text-primary` | `#0F1B2D` |
| Text Secondary | `text-text-secondary` | `#4A4A42` |
| Text Muted | `text-text-muted` | `#9B9B90` |
| Error | `text-error` | `#DC2626` |
| Success | `text-success` | `#16A34A` |
