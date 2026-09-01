import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { tutorial } from '../data/tutorial.js'

const { anatomia, tiposCarta, turno, reglasClave, comoGanar } = tutorial

/* ---------- 1. Anatomia de una carta ---------- */
function Anatomia() {
  const [ref, visible] = useReveal({ threshold: 0.3 })

  return (
    <div className="mt-4">
      <Reveal variant="up" className="mb-2 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">{anatomia.titulo}</h3>
        <p className="mt-2 text-sm text-vino/80 dark:text-rosa-claro/70">{anatomia.nota}</p>
      </Reveal>

      <div ref={ref} className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[minmax(0,320px)_1fr]">
        {/* Carta con pins */}
        <figure className="relative mx-auto w-full max-w-[320px]">
          <img
            src={anatomia.img}
            alt={anatomia.alt}
            loading="lazy"
            className={`w-full rounded-xl shadow-2xl transition-all duration-700 ${
              visible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
            }`}
          />
          {anatomia.partes.map((p, i) => (
            <span
              key={p.n}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span
                className={`flex h-7 w-7 cursor-help items-center justify-center rounded-full border-2 border-white bg-rosa text-sm font-bold text-white ${
                  visible ? 'anatomy-pin' : 'opacity-0'
                }`}
                style={visible ? { animationDelay: `${i * 140}ms` } : undefined}
              >
                {p.n}
              </span>
              <span className="pointer-events-none absolute left-1/2 top-9 z-20 w-44 -translate-x-1/2 rounded-lg bg-vino px-3 py-2 text-xs text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 dark:bg-rosa">
                <strong className="block">{p.label}</strong>
                {p.texto}
              </span>
            </span>
          ))}
        </figure>

        {/* Leyenda */}
        <ol className="space-y-3">
          {anatomia.partes.map((p, i) => (
            <Reveal
              key={p.n}
              variant="right"
              delay={i * 70}
              as="li"
              className="flex gap-3 rounded-xl border border-[var(--hairline)] bg-[var(--surface)] p-3 text-left"
            >
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-vino text-xs font-bold text-white dark:bg-rosa">
                {p.n}
              </span>
              <span className="text-sm text-[var(--page-text)]/90">
                <strong className="text-vino dark:text-rosa">{p.label}.</strong> {p.texto}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  )
}

/* ---------- 2. Tipos de carta con ejemplo ---------- */
function TiposCarta() {
  return (
    <div className="mt-16 space-y-8">
      <Reveal variant="up" className="text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">Tipos de carta</h3>
      </Reveal>

      {tiposCarta.map((t, i) => (
        <Reveal
          key={t.codigo}
          variant={i % 2 === 0 ? 'left' : 'right'}
          className={`mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-2xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-5 shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:border-rosa sm:gap-7 ${
            i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
          }`}
        >
          <Tilt className="w-40 flex-none rounded-lg bg-[var(--surface-sunken)] p-2">
            <img src={t.img} alt={t.nombre} loading="lazy" className="block w-full rounded-md shadow-lg" />
          </Tilt>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-gradient-to-br from-vino to-rosa px-2 py-0.5 text-xs font-extrabold text-white">
                {t.codigo}
              </span>
              <h4 className="text-lg font-bold text-vino dark:text-rosa">{t.nombre}</h4>
            </div>
            <p className="mt-2 text-sm text-[var(--page-text)]/90">{t.texto}</p>
            <p className="mt-2 text-sm text-[var(--page-text)]/75">
              <strong className="text-rosa">Cómo se usa:</strong> {t.comoSeUsa}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/* ---------- 3. El turno paso a paso ---------- */
function Turno() {
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">{turno.titulo}</h3>
      </Reveal>

      <ol className="relative mx-auto max-w-2xl border-l-2 border-rosa/40 pl-8">
        {turno.pasos.map((p, i) => (
          <Reveal
            key={p.titulo}
            as="li"
            variant="left"
            delay={i * 90}
            className="relative mb-6 last:mb-0"
          >
            <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-vino to-rosa text-sm font-bold text-white ring-4 ring-[var(--page-bg)]">
              {i + 1}
            </span>
            <p className="font-bold text-vino dark:text-rosa">{p.titulo}</p>
            <p className="text-sm text-[var(--page-text)]/85">{p.texto}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

/* ---------- 4. Reglas clave ---------- */
function ReglasClave() {
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">Reglas que se olvidan</h3>
      </Reveal>
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {reglasClave.map((r, i) => (
          <Reveal
            key={r}
            variant="scale"
            delay={i * 70}
            className="flex items-start gap-3 rounded-xl bg-[var(--surface-alt)] p-4 text-left ring-1 ring-[var(--hairline)]"
          >
            <span className="text-lg">📌</span>
            <span className="text-sm text-[var(--page-text)]/90">{r}</span>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* ---------- 5. Como ganar ---------- */
function ComoGanar() {
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">Cómo ganar</h3>
      </Reveal>

      <Reveal
        variant="zoom"
        className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-vino to-rosa p-8 text-center text-white shadow-xl"
      >
        <p className="text-white/95">{comoGanar.texto}</p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {comoGanar.hermanas.map((h, i) => {
            const conquistada = i < comoGanar.objetivo
            return (
              <Reveal
                key={h.nombre}
                variant="zoom"
                delay={i * 110}
                className="relative"
              >
                <img
                  src={h.img}
                  alt={h.nombre}
                  loading="lazy"
                  className={`h-28 w-20 rounded-lg object-cover object-top shadow-lg transition ${
                    conquistada ? 'ring-4 ring-dorado' : 'opacity-45 grayscale'
                  }`}
                />
                {conquistada && (
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-dorado text-xs font-bold text-vino">
                    ✓
                  </span>
                )}
                <span className="mt-1 block text-xs">{h.nombre}</span>
              </Reveal>
            )
          })}
        </div>

        <p className="mt-6 inline-block rounded-full bg-white/15 px-5 py-1.5 text-lg font-extrabold">
          {comoGanar.objetivo} / {comoGanar.objetivo} novias = victoria
        </p>
      </Reveal>
    </div>
  )
}

export default function Tutorial() {
  return (
    <Section
      id="tutorial"
      eyebrow="Aprende a jugar"
      title="Tutorial: cómo jugarlo"
      intro={tutorial.intro}
    >
      <Anatomia />
      <TiposCarta />
      <Turno />
      <ReglasClave />
      <ComoGanar />
    </Section>
  )
}
