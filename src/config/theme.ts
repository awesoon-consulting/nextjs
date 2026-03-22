/**
 * DESIGN TOKENS,  Single source of truth for all design decisions.
 * Edit this file to update colors, typography, spacing across the entire site.
 * All Tailwind config extends from here. No hardcoded values in components.
 * @see /src/config/README.md for usage instructions
 */
export const theme = {
  colors: {
    primary: { DEFAULT: '#0A0A0A', light: '#1C1C1C', dark: '#000000' },
    secondary: { DEFAULT: '#2B2B2B', light: '#404040', dark: '#111111' },
    accent: { DEFAULT: '#0F1D33', light: '#17304F', dark: '#050914' },
    neutral: {
      50: '#FFFFFF',
      100: '#FAFAFA',
      200: '#ECECEC',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    surface: { DEFAULT: '#FFFFFF', elevated: '#FFFFFF', dark: '#050914' },
    text: { primary: '#0A0A0A', secondary: '#303030', muted: '#6B6B6B', inverse: '#FFFFFF' },
    error: { DEFAULT: '#DC2626', light: '#FEE2E2' },
    success: { DEFAULT: '#16A34A', light: '#DCFCE7' },
  },
  typography: {
    fontFamily: {
      heading: ['Sora', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    fontScale: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(10 10 10 / 0.05)',
    DEFAULT: '0 10px 30px -18px rgb(10 10 10 / 0.18)',
    md: '0 16px 40px -22px rgb(10 10 10 / 0.18)',
    lg: '0 24px 60px -28px rgb(10 10 10 / 0.22)',
    xl: '0 36px 80px -36px rgb(10 10 10 / 0.25)',
  },
  site: {
    name: 'Awesoon',
    tagline: 'Your ops outgrew your tools. We fix that.',
    logoPlaceholder: '/images/logo-placeholder.svg',
    url: 'https://awesoon.com',
  },
} as const

export type Theme = typeof theme
