import Tilt from './Tilt.jsx'

/**
 * Galeria de imagenes de una carta.
 *  - images: array de { src, alt }
 *  - tilt:  activa el efecto hover 3D (por defecto true). Ponlo en false para
 *           fotos que no deben "doblarse" (p. ej. cartones de expansiones).
 *
 * Con varias imagenes se reparten en 2 columnas para que ocupen todo el ancho
 * de la tarjeta (comparativa base / paralela).
 */
export default function CardMedia({ images = [], tilt = true }) {
  if (images.length === 0) return null
  const multi = images.length > 1
  const wrapClass = 'rounded-lg bg-(--surface-sunken) p-2'

  return (
    <div className={`mt-auto pt-2 ${multi ? 'grid grid-cols-2 gap-3' : ''}`}>
      {images.map((img, i) => {
        const inner = (
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="block w-full rounded-md shadow-lg"
          />
        )
        return tilt ? (
          <Tilt key={i} className={wrapClass}>
            {inner}
          </Tilt>
        ) : (
          <div key={i} className={wrapClass}>
            {inner}
          </div>
        )
      })}
    </div>
  )
}
