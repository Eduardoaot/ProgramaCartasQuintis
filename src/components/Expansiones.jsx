import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import CardMedia from './CardMedia.jsx'
import { expansiones } from '../data/expansiones.js'

function SetCard({ set, delay }) {
  return (
    <Reveal
      delay={delay}
      className={`group relative flex flex-col gap-3 overflow-hidden rounded-2xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-6 shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:-translate-y-2 hover:border-rosa hover:shadow-[0_20px_35px_rgba(142,36,83,0.28)] ${
        set.wide ? 'sm:col-span-2' : ''
      }`}
    >
      <span className="pointer-events-none absolute top-0 left-[-150%] z-10 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-rosa/15 to-transparent group-hover:animate-shine" />

      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-vino to-rosa px-2.5 py-1 text-sm font-extrabold text-white">
          {set.codigo}
        </span>
        <h4 className="text-lg font-bold text-vino dark:text-rosa">{set.titulo}</h4>
      </div>

      <p className="text-sm leading-relaxed text-[var(--page-text)]/90">{set.descripcion}</p>

      <dl className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-sm">
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

      <CardMedia images={set.images} />
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
        <Reveal className="mx-auto mb-10 flex max-w-lg flex-wrap justify-center gap-3 text-sm">
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
          <Reveal as="h3" className="mb-6 text-xl font-bold uppercase tracking-wider text-rosa">
            {temp.nombre}
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {temp.sets.map((set, i) => (
              <SetCard key={set.codigo} set={set} delay={i * 70} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
