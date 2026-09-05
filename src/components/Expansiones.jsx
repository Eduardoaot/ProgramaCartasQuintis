import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { expansiones } from '../data/expansiones.js'

/** Foto del municipio. Sin efecto 3D (a diferencia de las tarjetas de sabores). */
function FotoMunicipio({ set }) {
  if (set.caja) {
    return (
      <div className="flex items-center justify-center overflow-hidden rounded-xl bg-(--surface-sunken) p-3 ring-1 ring-(--hairline)">
        <img
          src={set.caja}
          alt={set.titulo}
          loading="lazy"
          className="block h-44 w-auto max-w-full object-contain transition duration-500 hover:scale-105"
        />
      </div>
    )
  }
  return (
    <div className="flex aspect-4/3 w-full flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-(--hairline) bg-(--surface-alt) text-center">
      <span className="text-4xl">🏙️</span>
      <span className="text-sm font-extrabold text-sierra dark:text-naranja">{set.codigo}</span>
      <span className="px-4 text-[10px] leading-tight text-(--page-text)/55">
        Añade la foto del municipio en src/data/expansiones.js
      </span>
    </div>
  )
}

function MunicipioCard({ set, delay, side }) {
  return (
    <Reveal
      variant={side}
      delay={delay}
      className="group flex flex-col gap-3 overflow-hidden rounded-2xl border-2 border-(--hairline) bg-(--surface) p-5 shadow-[0_6px_16px_rgba(27,73,101,0.10)] transition duration-300 hover:-translate-y-2 hover:border-naranja hover:shadow-[0_20px_35px_rgba(27,73,101,0.28)]"
    >
      <FotoMunicipio set={set} />

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="inline-flex items-center justify-center rounded-lg bg-linear-to-br from-sierra to-naranja px-2.5 py-1 text-sm font-extrabold text-white">
          {set.codigo}
        </span>
        <h4 className="text-lg font-bold text-sierra dark:text-naranja">{set.titulo}</h4>
        {set.lanzamiento && (
          <span className="rounded-full bg-(--surface-alt) px-2.5 py-0.5 text-xs font-semibold text-(--page-text)/70 ring-1 ring-(--hairline)">
            {set.lanzamiento}
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed text-(--page-text)/90">{set.descripcion}</p>

      <dl className="mt-auto flex flex-col gap-1 pt-1 text-sm">
        {set.poblacion && (
          <div>
            <dt className="inline text-[11px] font-semibold uppercase tracking-wider text-naranja/80">
              Población:{' '}
            </dt>
            <dd className="inline text-(--page-text)/80">{set.poblacion}</dd>
          </div>
        )}
        {set.destacado && (
          <div>
            <dt className="inline text-[11px] font-semibold uppercase tracking-wider text-naranja/80">
              Destaca:{' '}
            </dt>
            <dd className="inline text-(--page-text)/80">{set.destacado}</dd>
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
      eyebrow="El territorio"
      title="Los municipios"
      intro={expansiones.intro}
      alt
    >
      {fichaComun && (
        <Reveal variant="up" className="mx-auto mb-10 flex max-w-lg flex-wrap justify-center gap-3 text-sm">
          <span className="rounded-full bg-(--surface) px-4 py-1.5 font-semibold text-sierra ring-1 ring-(--hairline) dark:text-naranja">
            {fichaComun.poblacion}
          </span>
          <span className="rounded-full bg-(--surface) px-4 py-1.5 font-semibold text-sierra ring-1 ring-(--hairline) dark:text-naranja">
            {fichaComun.municipios}
          </span>
        </Reveal>
      )}

      {expansiones.grupos.map((grupo) => (
        <div key={grupo.nombre} className="mb-12 last:mb-0">
          <Reveal as="h3" variant="up" className="mb-6 text-xl font-bold uppercase tracking-wider text-naranja">
            {grupo.nombre}
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {grupo.municipios.map((set, i) => (
              <MunicipioCard
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
