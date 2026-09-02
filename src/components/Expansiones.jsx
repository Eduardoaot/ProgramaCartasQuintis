import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { expansiones } from '../data/expansiones.js'

/** Foto del carton. Sin efecto 3D (a diferencia de las cartas). */
function BoxPhoto({ set }) {
  if (set.caja) {
    return (
      <div className="flex items-center justify-center overflow-hidden rounded-xl bg-[var(--surface-sunken)] p-3 ring-1 ring-[var(--hairline)]">
        <img
          src={set.caja}
          alt={`Cartón de ${set.titulo}`}
          loading="lazy"
          className="block h-44 w-auto max-w-full object-contain transition duration-500 hover:scale-105"
        />
      </div>
    )
  }
  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-[var(--hairline)] bg-[var(--surface-alt)] text-center">
      <span className="text-4xl">📦</span>
      <span className="text-sm font-extrabold text-vino dark:text-rosa">Cartón {set.codigo}</span>
      <span className="px-4 text-[10px] leading-tight text-[var(--page-text)]/55">
        Añade la foto del cartón en src/data/expansiones.js
      </span>
    </div>
  )
}

function SetCard({ set, delay, side }) {
  return (
    <Reveal
      variant={side}
      delay={delay}
      className="group flex flex-col gap-3 overflow-hidden rounded-2xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-5 shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:-translate-y-2 hover:border-rosa hover:shadow-[0_20px_35px_rgba(142,36,83,0.28)]"
    >
      <BoxPhoto set={set} />

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-vino to-rosa px-2.5 py-1 text-sm font-extrabold text-white">
          {set.codigo}
        </span>
        <h4 className="text-lg font-bold text-vino dark:text-rosa">{set.titulo}</h4>
        {set.lanzamiento && (
          <span className="rounded-full bg-[var(--surface-alt)] px-2.5 py-0.5 text-xs font-semibold text-[var(--page-text)]/70 ring-1 ring-[var(--hairline)]">
            {set.lanzamiento}
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed text-[var(--page-text)]/90">{set.descripcion}</p>

      <dl className="mt-auto flex flex-col gap-1 pt-1 text-sm">
        {set.totalCartas && (
          <div>
            <dt className="inline text-[11px] font-semibold uppercase tracking-wider text-rosa/80">
              Tamaño:{' '}
            </dt>
            <dd className="inline text-[var(--page-text)]/80">{set.totalCartas}</dd>
          </div>
        )}
        {set.destacado && (
          <div>
            <dt className="inline text-[11px] font-semibold uppercase tracking-wider text-rosa/80">
              Destaca:{' '}
            </dt>
            <dd className="inline text-[var(--page-text)]/80">{set.destacado}</dd>
          </div>
        )}
      </dl>
    </Reveal>
  )
}

export default function Expansiones() {
  const { fichaComun } = expansiones

  return (
    <Section
      id="expansiones"
      eyebrow="Sets"
      title="Las expansiones que existen"
      intro={expansiones.intro}
      alt
    >
      {fichaComun && (
        <Reveal variant="up" className="mx-auto mb-10 flex max-w-lg flex-wrap justify-center gap-3 text-sm">
          <span className="rounded-full bg-[var(--surface)] px-4 py-1.5 font-semibold text-vino ring-1 ring-[var(--hairline)] dark:text-rosa">
            {fichaComun.sobresPorCaja}
          </span>
          <span className="rounded-full bg-[var(--surface)] px-4 py-1.5 font-semibold text-vino ring-1 ring-[var(--hairline)] dark:text-rosa">
            {fichaComun.cartasPorSobre}
          </span>
        </Reveal>
      )}

      {expansiones.temporadas.map((temp) => (
        <div key={temp.nombre} className="mb-12 last:mb-0">
          <Reveal as="h3" variant="up" className="mb-6 text-xl font-bold uppercase tracking-wider text-rosa">
            {temp.nombre}
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {temp.sets.map((set, i) => (
              <SetCard
                key={set.codigo}
                set={set}
                delay={(i % 3) * 80}
                side={i % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
