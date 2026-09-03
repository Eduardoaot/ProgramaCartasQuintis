import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import CardMedia from './CardMedia.jsx'
import SSSPShowcase from './SSSPShowcase.jsx'
import { rarezas } from '../data/rarezas.js'

/** Rejilla segun las columnas que pida el grupo. */
const rejilla = {
  1: 'grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
}

function Spec({ label, value, grande = false }) {
  return (
    <div className="flex flex-col">
      <dt className="text-[11px] font-semibold uppercase tracking-wider text-rosa/80">{label}</dt>
      <dd className={`text-(--page-text)/90 ${grande ? 'text-base' : 'text-sm'}`}>{value}</dd>
    </div>
  )
}

function Encabezado({ carta, grande = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`inline-flex items-center justify-center rounded-lg bg-linear-to-br from-vino to-rosa font-extrabold text-white ${
          grande ? 'min-w-14 px-3.5 py-1.5 text-lg' : 'min-w-10 px-2.5 py-1 text-sm'
        }`}
      >
        {carta.codigo}
      </span>
      <h4
        className={`font-bold text-vino dark:text-rosa ${
          grande ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
        }`}
      >
        {carta.nombre}
      </h4>
    </div>
  )
}

function Rasgos({ carta }) {
  return (
    <div className="flex flex-wrap gap-2">
      {carta.caracteristicas.map((c) => (
        <span
          key={c}
          className="rounded-full bg-(--surface-alt) px-3 py-1 text-xs text-(--page-text)/80 ring-1 ring-(--hairline)"
        >
          {c}
        </span>
      ))}
    </div>
  )
}

const cardBase =
  'group relative overflow-hidden rounded-2xl border-2 border-(--hairline) bg-(--surface) shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:-translate-y-2 hover:border-rosa hover:shadow-[0_20px_35px_rgba(142,36,83,0.28)]'

function RarezaCard({ carta, delay, side, ancha = false }) {
  const pie = carta.images.length > 1 && (
    <p className="mt-2 text-center text-[10px] uppercase tracking-wider text-(--page-text)/50">
      base · paralela
    </p>
  )

  // Tarjeta ancha: una sola por fila, con el texto a un lado y las cartas
  // grandes al otro.
  if (ancha) {
    return (
      <Reveal variant={side} delay={delay} className={`${cardBase} p-6 sm:p-8`}>
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-center">
          <div className="flex flex-col gap-5">
            <Encabezado carta={carta} grande />
            <dl className="grid gap-4 sm:grid-cols-2">
              <Spec label="Por cartón" value={carta.porCarton} grande />
              <Spec label="En el sobre" value={carta.aparicion} grande />
            </dl>
            <Rasgos carta={carta} />
          </div>
          <div>
            <CardMedia images={carta.images} />
            {pie}
          </div>
        </div>
      </Reveal>
    )
  }

  return (
    <Reveal variant={side} delay={delay} className={`${cardBase} flex flex-col gap-3 p-6`}>
      <Encabezado carta={carta} />
      <dl className="grid grid-cols-2 gap-3">
        <Spec label="Por cartón" value={carta.porCarton} />
        <Spec label="En el sobre" value={carta.aparicion} />
      </dl>
      <Rasgos carta={carta} />
      <CardMedia images={carta.images} />
      {pie}
    </Reveal>
  )
}

export default function Rarezas() {
  return (
    <>
      <Section
        id="rarezas"
        eyebrow="Coleccionismo"
        title="Las rarezas que hay"
        intro={rarezas.intro}
      >
        {rarezas.grupos.map((grupo) => (
          <div key={grupo.nombre} className="mb-14 last:mb-0">
            <Reveal variant="up" className="mb-6">
              <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">{grupo.nombre}</h3>
              {grupo.nota && (
                <p className="mx-auto mt-2 max-w-3xl text-sm text-vino/80 dark:text-rosa-claro/70">
                  {grupo.nota}
                </p>
              )}
            </Reveal>
            <div className={`grid gap-6 ${rejilla[grupo.columnas] ?? rejilla[3]}`}>
              {grupo.cartas.map((carta, i) => (
                <RarezaCard
                  key={carta.codigo + carta.nombre}
                  carta={carta}
                  delay={(i % 3) * 60}
                  side={i % 2 === 0 ? 'left' : 'right'}
                  ancha={grupo.columnas === 1}
                />
              ))}
            </div>
          </div>
        ))}
      </Section>

      <SSSPShowcase />
    </>
  )
}
