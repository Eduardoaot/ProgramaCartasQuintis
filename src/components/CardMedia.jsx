import Tilt from './Tilt.jsx'

/**
 * Galeria de imagenes de una carta con efecto hover 3D (Tilt) en cada imagen.
 * `images` = array de { src, alt }.
 */
export default function CardMedia({ images = [] }) {
  if (images.length === 0) return null
  const multi = images.length > 1

  return (
    <div className={`mt-auto flex gap-3 pt-2 ${multi ? 'flex-col sm:flex-row' : ''}`}>
      {images.map((img, i) => (
        <Tilt
          key={i}
          className="rounded-lg bg-[var(--surface-sunken)] p-2"
          style={multi ? { flex: '1 1 0' } : undefined}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="block w-full rounded-md shadow-lg"
          />
        </Tilt>
      ))}
    </div>
  )
}
