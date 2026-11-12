'use client'

import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
  type ThemeProviderProps as NextThemesProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: NextThemesProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      disableTransitionOnChange
      enableColorScheme
      enableSystem={false}
      storageKey="awesoon_theme"
      themes={['dark']}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

export const useTheme = useNextTheme
