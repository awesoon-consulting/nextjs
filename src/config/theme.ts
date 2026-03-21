/**
 * DESIGN TOKENS,  Single source of truth for all design decisions.
 * Edit this file to update colors, typography, spacing across the entire site.
 * All Tailwind config extends from here. No hardcoded values in components.
 * @see /src/config/README.md for usage instructions
 */
export const theme = {
  colors: {
    primary: { DEFAULT: '#0F1B2D', light: '#1E3A5F', dark: '#070E18' },
    secondary: { DEFAULT: '#1E3A5F', light: '#2D5A8E', dark: '#0F1B2D' },
    accent: { DEFAULT: '#F59E0B', light: '#FCD34D', dark: '#D97706' },
    neutral: {
      50: '#FAFAF7',
      100: '#F4F4F0',
      200: '#E8E8E2',
      300: '#D1D1C8',
      400: '#9B9B90',
      500: '#6B6B60',
      600: '#4A4A42',
      700: '#333330',
      800: '#1F1F1C',
      900: '#0F0F0D',
    },
    surface: { DEFAULT: '#FAFAF7', elevated: '#FFFFFF', dark: '#0F1B2D' },
    text: { primary: '#0F1B2D', secondary: '#4A4A42', muted: '#9B9B90', inverse: '#FAFAF7' },
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
    sm: '0 1px 2px 0 rgb(15 27 45 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(15 27 45 / 0.1), 0 1px 2px -1px rgb(15 27 45 / 0.1)',
    md: '0 4px 6px -1px rgb(15 27 45 / 0.1), 0 2px 4px -2px rgb(15 27 45 / 0.1)',
    lg: '0 10px 15px -3px rgb(15 27 45 / 0.1), 0 4px 6px -4px rgb(15 27 45 / 0.1)',
    xl: '0 20px 25px -5px rgb(15 27 45 / 0.1), 0 8px 10px -6px rgb(15 27 45 / 0.1)',
  },
  site: {
    name: 'Awesoon',
    tagline: 'Your ops outgrew your tools. We fix that.',
    logoPlaceholder: '/images/logo-placeholder.svg',
    url: 'https://awesoon.com',
  },
} as const

export type Theme = typeof theme
