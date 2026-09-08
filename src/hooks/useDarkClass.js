import { useEffect, useState } from 'react'

/**
 * Devuelve true cuando <html> lleva la clase `dark`.
 *
 * useTheme() guarda el estado dentro del componente que lo llama (ThemeToggle),
 * asi que no sirve para leer el tema desde otro lado. La clase en <html> si es
 * la fuente unica de verdad: la observamos y nos mantenemos al dia con ella.
 * Lo usan los mapas para cambiar de teselas claras a oscuras.
 */
export function useDarkClass() {
  const [dark, setDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  )

  useEffect(() => {
    const root = document.documentElement
    const sync = () => setDark(root.classList.contains('dark'))
    sync()

    const observer = new MutationObserver(sync)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return dark
}
