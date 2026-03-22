'use client'

/**
 * ThemeProvider, shared theme controller for the app.
 * Uses next-themes so the correct class is applied before first paint,
 * defaults to the system preference, and persists explicit user overrides.
 */

import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
  type ThemeProviderProps as NextThemesProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: NextThemesProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableColorScheme
      enableSystem
      storageKey="awesoon_theme"
      themes={['light', 'dark']}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

export const useTheme = useNextTheme
