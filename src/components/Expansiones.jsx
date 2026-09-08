import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Icono from './Icono.jsx'
import { expansiones } from '../data/expansiones.js'

/** Ficha de un municipio: foto de portada arriba y datos abajo. */
function MunicipioCard({ municipio, delay }) {
  return (
    <Reveal
      variant="up"
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-2xl border border-(--hairline) bg-(--surface) shadow-[0_6px_16px_rgba(27,73,101,0.10)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_38px_rgba(27,73,101,0.22)]"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-(--surface-sunken)">
        {municipio.imagen ? (
          <img
            src={municipio.imagen}
            alt={municipio.titulo}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          // Sin foto libre en Commons: se rellena con la clave del municipio
          <span className="flex h-full w-full flex-col items-center justify-center gap-1 bg-linear-to-br from-sierra to-sierra-oscuro">
            <Icono nombre="lucide/building-2" tam={28} color="ffffff" className="opacity-25" />
            <span className="font-display text-2xl font-extrabold text-white/25">
              {municipio.clave}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/35">
              Sin fotografía libre
            </span>
          </span>
        )}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-sierra/85 via-sierra/10 to-transparent"
        />
        <span className="absolute bottom-3 left-4 right-4">
          <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-oro">
            {municipio.clave}
          </span>
          <h4 className="font-display text-lg font-bold leading-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
            {municipio.titulo}
          </h4>
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <dl className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
          {municipio.fundacion && (
            <div className="flex items-center gap-1.5">
              <dt className="sr-only">Fundación</dt>
              <dd className="flex items-center gap-1.5 text-(--page-text)/65">
                <Icono nombre="lucide/calendar" tam={13} /> {municipio.fundacion}
              </dd>
            </div>
          )}
          {municipio.poblacion && (
            <div className="flex items-center gap-1.5">
              <dt className="sr-only">Población</dt>
              <dd className="flex items-center gap-1.5 text-(--page-text)/65">
                <Icono nombre="lucide/users" tam={13} /> {municipio.poblacion}
              </dd>
            </div>
          )}
        </dl>

        <p className="text-sm leading-relaxed text-(--page-text)/85">{municipio.descripcion}</p>

        {municipio.destacado && (
          <p className="mt-auto border-l-2 border-naranja pl-3 text-sm font-semibold leading-snug text-sierra dark:text-naranja">
            {municipio.destacado}
          </p>
        )}
      </div>
    </Reveal>
  )
}

export default function Expansiones() {
  return (
    <Section
      id="expansiones"
      eyebrow="El territorio"
      title="Los municipios"
      intro={expansiones.intro}
      alt
    >
      {/* Cifras del area metropolitana */}
      {expansiones.resumen && (
        <Reveal variant="up" className="mx-auto mb-14 grid max-w-2xl gap-4 sm:grid-cols-2">
          {expansiones.resumen.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border border-(--hairline) bg-(--surface) p-5 text-center shadow-[0_6px_16px_rgba(27,73,101,0.10)]"
            >
              <p className="font-display text-3xl font-extrabold leading-none text-naranja sm:text-4xl">
                {r.dato}
              </p>
              <p className="mt-2 text-sm text-(--page-text)/75">{r.label}</p>
              {r.fuente && (
                <p className="mt-1 text-[11px] uppercase tracking-widest text-(--page-text)/45">
                  {r.fuente}
                </p>
              )}
            </div>
          ))}
        </Reveal>
      )}

      {expansiones.grupos.map((grupo) => (
        <div key={grupo.nombre} className="mb-16 last:mb-0">
          <Reveal variant="up" className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-(--hairline) pb-3">
            <h3 className="font-display text-xl font-bold text-sierra dark:text-naranja">
              {grupo.nombre}
            </h3>
            <span className="rounded-full bg-(--surface) px-2.5 py-0.5 text-xs font-bold text-naranja ring-1 ring-(--hairline)">
              {grupo.municipios.length}
            </span>
            {grupo.nota && (
              <p className="text-sm text-(--page-text)/60">{grupo.nota}</p>
            )}
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {grupo.municipios.map((municipio, i) => (
              <MunicipioCard key={municipio.clave} municipio={municipio} delay={(i % 4) * 80} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
