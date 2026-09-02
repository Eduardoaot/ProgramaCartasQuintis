import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'
import { antecedentes } from '../data/antecedentes.js'

const { origen, firmadas, valor } = antecedentes

export default function Antecedentes() {
  return (
    <Section
      id="antecedentes"
      eyebrow="De dónde viene"
      title="Antecedentes"
      intro={antecedentes.intro}
    >
      {/* Primer contacto */}
      <Reveal
        variant="left"
        className="mx-auto max-w-3xl rounded-2xl border-l-4 border-rosa bg-[var(--surface)] p-6 text-left shadow-[0_6px_16px_rgba(142,36,83,0.10)]"
      >
        <h3 className="mb-2 text-lg font-bold text-vino dark:text-rosa">{origen.titulo}</h3>
        <p className="text-sm leading-relaxed text-[var(--page-text)]/90">{origen.texto}</p>
      </Reveal>

      {/* Expansiones de Weiss Schwarz (con cartas firmadas) */}
      <div className="mt-14">
        <Reveal variant="up" className="mx-auto mb-6 max-w-3xl text-center">
          <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">{firmadas.titulo}</h3>
          <p className="mt-2 text-sm text-vino/80 dark:text-rosa-claro/70">{firmadas.texto}</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {firmadas.sets.map((set, i) => (
            <Reveal
              key={set.nombre}
              variant={i % 2 === 0 ? 'left' : 'right'}
              delay={(i % 3) * 80}
              className="flex flex-col gap-3 rounded-2xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-4 shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:-translate-y-1 hover:border-rosa"
            >
              <a
                href={set.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl bg-[var(--surface-sunken)] p-3 ring-1 ring-[var(--hairline)]"
              >
                <img
                  src={set.caja}
                  alt={`Caja de ${set.nombre}`}
                  loading="lazy"
                  className="mx-auto block h-48 w-auto max-w-full object-contain transition duration-500 hover:scale-105"
                />
              </a>
              <div>
                <p className="font-bold text-vino dark:text-rosa">{set.nombre}</p>
                <p className="mt-1 text-xs text-[var(--page-text)]/70">✒️ Cartas SP firmadas · {set.idiomas}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Valor de coleccion */}
      <div className="mt-14">
        <Reveal variant="up" className="mx-auto mb-6 max-w-3xl text-center">
          <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">{valor.titulo}</h3>
          <p className="mt-2 text-sm text-vino/80 dark:text-rosa-claro/70">{valor.texto}</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valor.cartas.map((c, i) => (
            <Reveal
              key={c.nombre}
              variant="scale"
              delay={i * 90}
              className="group flex flex-col gap-3 rounded-2xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-4 text-center shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:-translate-y-2 hover:border-rosa hover:shadow-[0_20px_35px_rgba(142,36,83,0.28)]"
            >
              <a href={c.enlace} target="_blank" rel="noopener noreferrer" className="block">
                <Tilt className="rounded-lg bg-[var(--surface-sunken)] p-2">
                  <img
                    src={c.img}
                    alt={c.nombre}
                    loading="lazy"
                    className="mx-auto block w-full max-w-[180px] rounded-md shadow-lg"
                  />
                </Tilt>
              </a>
              <p className="text-xs text-[var(--page-text)]/80">{c.nombre}</p>
              <a
                href={c.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto rounded-lg bg-gradient-to-br from-vino to-rosa px-2 py-1.5 text-sm font-extrabold text-white transition hover:brightness-110"
              >
                {c.valor}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
