import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'tema'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* localStorage no disponible */
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Modo claro / oscuro. Aplica la clase `dark` en <html>, la persiste en
 * localStorage y devuelve [theme, toggle].
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return [theme, toggle]
}
