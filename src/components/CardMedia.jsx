import Tilt from './Tilt.jsx'

/**
 * Galeria de imagenes de una carta.
 *  - images: array de { src, alt }
 *  - tilt:  activa el efecto hover 3D (por defecto true). Ponlo en false para
 *           fotos que no deben "doblarse" (p. ej. cartones de expansiones).
 *  - cap:   ancho maximo de cada imagen cuando hay varias (para tarjetas anchas)
 */
export default function CardMedia({ images = [], tilt = true, cap }) {
  if (images.length === 0) return null
  const multi = images.length > 1

  return (
    <div className={`mt-auto flex gap-3 pt-2 ${multi ? 'flex-row flex-wrap justify-center' : ''}`}>
      {images.map((img, i) => {
        const inner = (
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="block w-full rounded-md shadow-lg"
          />
        )
        const wrapClass = 'rounded-lg bg-[var(--surface-sunken)] p-2'
        const wrapStyle = multi
          ? { flex: cap ? `0 1 ${cap}` : '1 1 0', maxWidth: cap || undefined }
          : undefined

        return tilt ? (
          <Tilt key={i} className={wrapClass} style={wrapStyle}>
            {inner}
          </Tilt>
        ) : (
          <div key={i} className={wrapClass} style={wrapStyle}>
            {inner}
          </div>
        )
      })}
    </div>
  )
}
