import Reveal from './Reveal.jsx'
import CardMedia from './CardMedia.jsx'

/**
 * Tarjeta reutilizable con efecto "shine" al pasar el cursor.
 * - title / subtitle / children: contenido de texto
 * - images: array de { src, alt } que se renderiza como galeria con hover 3D
 * - wide: ocupa dos columnas en escritorio
 * - horizontal: imagen a un lado y texto al otro (fichas de personajes)
 * - id / cardRef: se reenvian al elemento raiz (anclas del carrusel y observer)
 */
export default function Card({
  title,
  subtitle,
  images = [],
  wide = false,
  horizontal = false,
  id,
  cardRef,
  delay = 0,
  children,
}) {
  return (
    <Reveal
      id={id}
      ref={cardRef}
      delay={delay}
      className={`group relative flex flex-col gap-2 overflow-hidden rounded-2xl border-2 border-(--hairline) bg-(--surface) p-6 shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:-translate-y-2 hover:border-rosa hover:shadow-[0_20px_35px_rgba(142,36,83,0.28)] ${
        horizontal ? 'sm:flex-row sm:items-center sm:gap-8' : ''
      } ${wide ? 'sm:col-span-2' : ''}`}
    >
      {/* destello */}
      <span className="pointer-events-none absolute top-0 left-[-150%] z-10 h-full w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-rosa/15 to-transparent group-hover:animate-shine" />

      <div className={horizontal ? 'order-last flex-1' : 'contents'}>
        {title && <h3 className="text-lg font-bold text-rosa">{title}</h3>}
        {subtitle && (
          <p className="text-xs font-semibold uppercase tracking-wider text-dorado">{subtitle}</p>
        )}
        {children && (
          <div
            className={`text-sm leading-relaxed text-(--page-text)/90 ${
              horizontal ? 'text-justify' : ''
            }`}
          >
            {children}
          </div>
        )}
      </div>

      <div className={horizontal ? 'order-first sm:w-2/5 sm:shrink-0' : 'contents'}>
        <CardMedia images={images} />
      </div>
    </Reveal>
  )
}
