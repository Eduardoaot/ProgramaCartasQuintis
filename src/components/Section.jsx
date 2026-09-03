import Reveal from './Reveal.jsx'

/**
 * Contenedor estandar de seccion: id para el ancla del navbar, titulo con
 * subrayado degradado, intro opcional y fondo alterno (alt).
 * Acepta className / style / props extra para que una seccion pueda poner su
 * propio fondo o redefinir tokens de color (lo usan JuegoCartas y Personajes).
 */
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  alt = false,
  children,
  className = '',
  style,
  ...props
}) {
  return (
    <section
      id={id}
      style={style}
      {...props}
      className={`scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24 ${
        alt ? 'bg-(--surface-alt)' : 'bg-(--page-bg)'
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-rosa">
              {eyebrow}
            </p>
          )}
          <h2 className="relative inline-block pb-3 text-3xl font-extrabold text-vino sm:text-4xl dark:text-rosa">
            {title}
            <span className="absolute bottom-0 left-1/2 h-1 w-16 -translate-x-1/2 rounded bg-linear-to-r from-rosa to-dorado" />
          </h2>
          {intro && (
            <p className="mx-auto mt-5 max-w-2xl text-base text-vino/80 dark:text-rosa-claro/70">
              {intro}
            </p>
          )}
        </Reveal>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
