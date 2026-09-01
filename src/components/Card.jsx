import Reveal from './Reveal.jsx'

/**
 * Tarjeta reutilizable con efecto "shine" al pasar el cursor.
 * - title / subtitle / children: contenido de texto
 * - images: array de { src, alt } que se renderiza como galeria inferior
 * - wide: ocupa dos columnas en escritorio
 */
export default function Card({ title, subtitle, images = [], wide = false, delay = 0, children }) {
  return (
    <Reveal
      delay={delay}
      className={`group relative flex flex-col gap-2 overflow-hidden rounded-2xl border-2 border-rosa/25 bg-white p-6 shadow-[0_6px_16px_rgba(142,36,83,0.08)] transition duration-300 hover:-translate-y-2 hover:border-rosa hover:shadow-[0_20px_35px_rgba(142,36,83,0.25)] ${
        wide ? 'sm:col-span-2' : ''
      }`}
    >
      {/* destello */}
      <span className="pointer-events-none absolute top-0 left-[-150%] z-10 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-rosa/15 to-transparent transition-none group-hover:animate-shine" />

      {title && <h3 className="text-lg font-bold text-rosa">{title}</h3>}
      {subtitle && (
        <p className="text-xs font-semibold uppercase tracking-wider text-dorado">{subtitle}</p>
      )}
      {children && <div className="text-sm leading-relaxed text-tinta/90">{children}</div>}

      {images.length > 0 && (
        <div
          className={`mt-auto flex gap-3 pt-2 ${
            images.length > 1 ? 'flex-col sm:flex-row' : ''
          }`}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg bg-rosa-claro p-2"
              style={{ flex: images.length > 1 ? '1 1 0' : undefined }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="block w-full rounded-md transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}
    </Reveal>
  )
}
