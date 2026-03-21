import type { Config } from 'tailwindcss'
import { theme } from './src/config/theme'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        accent: theme.colors.accent,
        neutral: theme.colors.neutral,
        surface: theme.colors.surface,
        'text-primary': theme.colors.text.primary,
        'text-secondary': theme.colors.text.secondary,
        'text-muted': theme.colors.text.muted,
        'text-inverse': theme.colors.text.inverse,
        error: theme.colors.error,
        success: theme.colors.success,
      },
      fontFamily: {
        heading: theme.typography.fontFamily.heading,
        body: theme.typography.fontFamily.body,
      },
      fontSize: theme.typography.fontScale,
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,
      boxShadow: theme.shadows,
    },
  },
  plugins: [],
}

export default config
