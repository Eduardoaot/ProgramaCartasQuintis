import Reveal from './Reveal.jsx'

/**
 * Contenedor estandar de seccion: id para el ancla del navbar, titulo con
 * subrayado degradado, intro opcional y fondo alterno (alt).
 */
export default function Section({ id, eyebrow, title, intro, alt = false, bgImage, children }) {
  const backgroundStyle = bgImage
    ? {
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('${bgImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }
    : {}

  return (
    <section
      id={id}
      style={backgroundStyle}
      className={`scroll-mt-20 px-6 py-20 sm:py-24 ${alt && !bgImage ? 'bg-rosa-claro' : bgImage ? '' : 'bg-white'}`}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-rosa">
              {eyebrow}
            </p>
          )}
          <h2 className="relative inline-block pb-3 text-3xl font-extrabold text-vino sm:text-4xl">
            {title}
            <span className="absolute bottom-0 left-1/2 h-1 w-16 -translate-x-1/2 rounded bg-gradient-to-r from-rosa to-dorado" />
          </h2>
          {intro && (
            <p className="mx-auto mt-5 max-w-2xl text-base text-vino/80">{intro}</p>
          )}
        </Reveal>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
