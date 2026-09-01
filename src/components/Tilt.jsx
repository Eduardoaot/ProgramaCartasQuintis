import { useRef } from 'react'

/**
 * Efecto "hover 3D": la carta se inclina siguiendo el cursor y vuelve a su
 * sitio al salir. Respeta prefers-reduced-motion.
 *
 * Props:
 *  - max: grados máximos de inclinación (por defecto 16)
 *  - glare: si muestra el brillo que sigue al cursor (por defecto true)
 */
export default function Tilt({ max = 16, glare = true, className = '', style, children }) {
  const innerRef = useRef(null)
  const glareRef = useRef(null)

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const handleMove = (e) => {
    const el = innerRef.current
    if (!el || reduced) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotX = (0.5 - py) * max * 2
    const rotY = (px - 0.5) * max * 2
    el.style.transition = 'transform 60ms linear'
    el.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(1.04)`
    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '1'
      glareRef.current.style.background = `radial-gradient(circle at ${(px * 100).toFixed(1)}% ${(py * 100).toFixed(1)}%, rgba(255,255,255,0.45), rgba(255,255,255,0) 55%)`
    }
  }

  const handleLeave = () => {
    const el = innerRef.current
    if (!el) return
    el.style.transition = 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)'
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
    if (glareRef.current) glareRef.current.style.opacity = '0'
  }

  return (
    <div className={className} style={{ perspective: '900px', ...style }}>
      <div
        ref={innerRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className="relative h-full [transform-style:preserve-3d] will-change-transform"
      >
        {children}
        {glare && (
          <span
            ref={glareRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          />
        )}
      </div>
    </div>
  )
}
