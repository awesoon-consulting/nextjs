'use client'

/**
 * ThemeProvider — custom dark/light mode implementation.
 * Directly manipulates the `dark` class on <html>.
 * Persists to localStorage, respects system preference on first visit.
 */

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

const STORAGE_KEY = 'awesoon_theme'

interface ThemeContextValue {
  theme: 'light' | 'dark'
  resolvedTheme: 'light' | 'dark'
  setTheme: (t: 'light' | 'dark' | 'system') => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  resolvedTheme: 'light',
  setTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(resolved: 'light' | 'dark') {
  const html = document.documentElement
  if (resolved === 'dark') {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<'light' | 'dark' | 'system'>('system')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')

  // On mount: read stored preference, apply it
  useEffect(() => {
    let stored: string | null = null
    try {
      stored = localStorage.getItem(STORAGE_KEY)
    } catch {}

    const initial = (stored === 'light' || stored === 'dark' || stored === 'system')
      ? stored as 'light' | 'dark' | 'system'
      : 'system'

    const resolved = initial === 'system' ? getSystemTheme() : initial
    setThemeState(initial)
    setResolvedTheme(resolved)
    applyTheme(resolved)
  }, [])

  // Watch system preference changes when theme is 'system'
  useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    function handler(e: MediaQueryListEvent) {
      const r = e.matches ? 'dark' : 'light'
      setResolvedTheme(r)
      applyTheme(r)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  const setTheme = useCallback((t: 'light' | 'dark' | 'system') => {
    const resolved = t === 'system' ? getSystemTheme() : t
    setThemeState(t)
    setResolvedTheme(resolved)
    applyTheme(resolved)
    try {
      localStorage.setItem(STORAGE_KEY, t)
    } catch {}
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
