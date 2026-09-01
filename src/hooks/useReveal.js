import { useEffect, useRef, useState } from 'react'

/**
 * Devuelve un ref y un booleano. Cuando el elemento entra en el viewport,
 * `visible` pasa a true (una sola vez) para disparar la animacion de entrada.
 */
export function useReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = options
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, visible]
}
