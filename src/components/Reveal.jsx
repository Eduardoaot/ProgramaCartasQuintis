import { forwardRef } from 'react'
import { useReveal } from '../hooks/useReveal.js'

/**
 * Envoltorio que aplica la animacion "aparecer desde abajo" al entrar en pantalla.
 * `as` permite elegir la etiqueta (div por defecto), `delay` en ms escalona hijos.
 */
const Reveal = forwardRef(function Reveal(
  { as: Tag = 'div', delay = 0, className = '', children, ...rest },
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
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
})

export default Reveal
