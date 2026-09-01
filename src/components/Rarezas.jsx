import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import CardMedia from './CardMedia.jsx'
import { rarezas } from '../data/rarezas.js'

function Spec({ label, value }) {
  return (
    <div className="flex flex-col">
      <dt className="text-[11px] font-semibold uppercase tracking-wider text-rosa/80">{label}</dt>
      <dd className="text-sm text-[var(--page-text)]/90">{value}</dd>
    </div>
  )
}

function RarezaCard({ carta, delay }) {
  return (
    <Reveal
      delay={delay}
      className={`group relative flex flex-col gap-3 overflow-hidden rounded-2xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-6 shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:-translate-y-2 hover:border-rosa hover:shadow-[0_20px_35px_rgba(142,36,83,0.28)] ${
        carta.wide ? 'sm:col-span-2' : ''
      }`}
    >
      <span className="pointer-events-none absolute top-0 left-[-150%] z-10 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-rosa/15 to-transparent group-hover:animate-shine" />

      {/* Encabezado: sigla + nombre */}
      <div className="flex items-center gap-3">
        <span className="inline-flex min-w-10 items-center justify-center rounded-lg bg-gradient-to-br from-vino to-rosa px-2.5 py-1 text-sm font-extrabold text-white">
          {carta.codigo}
        </span>
        <h4 className="text-lg font-bold text-vino dark:text-rosa">{carta.nombre}</h4>
      </div>

      {/* Datos normalizados */}
      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Spec label="Por cartón" value={carta.porCarton} />
        <Spec label="En el sobre" value={carta.aparicion} />
      </dl>

      {/* Características */}
      <div className="flex flex-wrap gap-2">
        {carta.caracteristicas.map((c) => (
          <span
            key={c}
            className="rounded-full bg-[var(--surface-alt)] px-3 py-1 text-xs text-[var(--page-text)]/80 ring-1 ring-[var(--hairline)]"
          >
            {c}
          </span>
        ))}
      </div>

      <CardMedia images={carta.images} />
    </Reveal>
  )
}

export default function Rarezas() {
  return (
    <Section
      id="rarezas"
      eyebrow="Coleccionismo"
      title="Las rarezas que hay"
      intro={rarezas.intro}
    >
      {rarezas.grupos.map((grupo) => (
        <div key={grupo.nombre} className="mb-14 last:mb-0">
          <Reveal className="mb-6">
            <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">{grupo.nombre}</h3>
            {grupo.nota && (
              <p className="mx-auto mt-2 max-w-3xl text-sm text-vino/80 dark:text-rosa-claro/70">
                {grupo.nota}
              </p>
            )}
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {grupo.cartas.map((carta, i) => (
              <RarezaCard key={carta.codigo + carta.nombre} carta={carta} delay={i * 60} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
