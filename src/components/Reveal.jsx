import { forwardRef } from 'react'
import { useReveal } from '../hooks/useReveal.js'

/**
 * Envoltorio que anima un bloque al entrar en pantalla.
 *  - as: etiqueta a renderizar (div por defecto)
 *  - variant: direccion / tipo de entrada -> up | down | left | right | scale | zoom | rotate
 *  - delay: retardo en ms para escalonar hijos
 *
 * Reenvia el ref al elemento renderizado (lo usa Personajes para observar
 * cada ficha con un IntersectionObserver propio).
 */
const Reveal = forwardRef(function Reveal(
  { as: Tag = 'div', variant = 'up', delay = 0, className = '', children, ...rest },
  forwardedRef,
) {
  const [revealRef, visible] = useReveal()

  return (
    <Tag
      ref={(element) => {
        revealRef.current = element
        if (typeof forwardedRef === 'function') forwardedRef(element)
        else if (forwardedRef) forwardedRef.current = element
      }}
      className={`reveal reveal--${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
})

export default Reveal
