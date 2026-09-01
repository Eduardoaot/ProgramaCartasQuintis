import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { tutorial } from '../data/tutorial.js'

export default function Tutorial() {
  return (
    <Section
      id="tutorial"
      eyebrow="Aprende a jugar"
      title="Tutorial: cómo jugarlo"
      intro={tutorial.intro}
    >
      {/* Tipos de carta */}
      <div className="grid gap-6 md:grid-cols-2">
        {tutorial.tiposCarta.map((t, i) => (
          <Reveal
            key={t.nombre}
            delay={i * 70}
            className="rounded-2xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-6 text-left shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:-translate-y-1 hover:border-rosa hover:shadow-xl"
          >
            <h3 className="mb-2 text-lg font-bold text-rosa">{t.nombre}</h3>
            <p className="text-sm leading-relaxed text-[var(--page-text)]/90">{t.texto}</p>
          </Reveal>
        ))}
      </div>

      {/* Reglas generales */}
      <Reveal className="mx-auto mt-12 max-w-3xl rounded-2xl bg-[var(--surface-alt)] p-8 text-left ring-1 ring-[var(--hairline)]">
        <h3 className="mb-4 text-center text-xl font-bold uppercase tracking-wider text-rosa">
          Reglas generales
        </h3>
        <ol className="space-y-3">
          {tutorial.reglas.map((r, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-vino text-sm font-bold text-white dark:bg-rosa">
                {i + 1}
              </span>
              <span className="pt-0.5 text-sm text-[var(--page-text)]/90">{r}</span>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Cómo ganar */}
      <Reveal className="mx-auto mt-8 max-w-3xl rounded-2xl bg-gradient-to-br from-vino to-rosa p-8 text-center text-white shadow-xl">
        <h3 className="mb-2 text-xl font-bold">Cómo ganar</h3>
        <p className="text-white/95">{tutorial.comoGanar}</p>
      </Reveal>
    </Section>
  )
}
