import { useReveal } from '../hooks/useReveal.js'

/**
 * Envoltorio que anima un bloque al entrar en pantalla.
 *  - as: etiqueta a renderizar (div por defecto)
 *  - variant: direccion / tipo de entrada -> up | down | left | right | scale | zoom | rotate
 *  - delay: retardo en ms para escalonar hijos
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
