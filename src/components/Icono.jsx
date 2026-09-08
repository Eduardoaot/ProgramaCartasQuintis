/**
 * Iconos de verdad en lugar de emojis.
 *
 * Se piden a la API de Iconify (https://api.iconify.design), que devuelve un
 * SVG ya coloreado y no necesita clave. Al llegar como <img> el color no puede
 * heredarse del CSS, asi que se piden dos versiones —una para el modo claro y
 * otra para el oscuro— y se enseña la que toca.
 *
 *   <Icono nombre="lucide/train-front" tam={28} />
 *   <Icono nombre="lucide/check" tam={16} color="ffffff" />
 *
 * `nombre` es "coleccion/icono" del catalogo de Iconify.
 */
const API = 'https://api.iconify.design'

// Naranja en claro, oro en oscuro: los dos se leen sobre su fondo.
const CLARO = 'cf5a22'
const OSCURO = 'dfa13a'

const url = (nombre, color, tam) =>
  `${API}/${nombre}.svg?color=%23${color}&width=${tam}&height=${tam}`

export default function Icono({ nombre, tam = 24, color, className = '', alt = '' }) {
  const comun = {
    width: tam,
    height: tam,
    alt,
    'aria-hidden': alt ? undefined : 'true',
    loading: 'lazy',
    draggable: false,
  }

  // Color fijo: una sola imagen, sin variante de tema
  if (color) {
    return <img src={url(nombre, color, tam)} className={className} {...comun} />
  }

  return (
    <>
      <img src={url(nombre, CLARO, tam)} className={`dark:hidden ${className}`} {...comun} />
      <img
        src={url(nombre, OSCURO, tam)}
        className={`hidden dark:block ${className}`}
        {...comun}
      />
    </>
  )
}
