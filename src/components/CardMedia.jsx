import Tilt from './Tilt.jsx'

/**
 * Galeria de fotos de una tarjeta.
 *  - images: array de { src, alt, destacada } — `destacada: true` pinta encima
 *            el barrido brillante que resalta la foto
 *  - tilt:  activa el efecto hover 3D (por defecto true). Ponlo en false para
 *           fotos que no deben "doblarse" (p. ej. fotos de municipios).
 *
 * Con varias imagenes se reparten en 2 columnas para que ocupen todo el ancho
 * de la tarjeta (dos vistas del mismo tema).
 */
export default function CardMedia({ images = [], tilt = true }) {
  if (images.length === 0) return null
  const multi = images.length > 1
  const wrapClass = 'rounded-lg bg-(--surface-sunken) p-2'

  return (
    <div className={`mt-auto pt-2 ${multi ? 'grid grid-cols-2 gap-3' : ''}`}>
      {images.map((img, i) => {
        const inner = (
          <div className={`relative overflow-hidden rounded-md ${img.destacada ? 'foil' : ''}`}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="block w-full rounded-md shadow-lg"
            />
            {img.destacada && (
              <span className="pointer-events-none absolute bottom-1 right-1 z-10 rounded bg-black/55 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                Top
              </span>
            )}
          </div>
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
