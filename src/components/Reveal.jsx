import { useReveal } from '../hooks/useReveal.js'

/**
 * Envoltorio que aplica la animacion "aparecer desde abajo" al entrar en pantalla.
 * `as` permite elegir la etiqueta (div por defecto), `delay` en ms escalona hijos.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
