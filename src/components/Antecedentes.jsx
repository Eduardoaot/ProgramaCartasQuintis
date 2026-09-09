import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { antecedentes } from '../data/antecedentes.js'

const { origen, fundaciones, hitos } = antecedentes

/* ---------- Las tres fundaciones ---------- */
function Intento({ intento, i }) {
  return (
    <Reveal
      variant="up"
      delay={i * 110}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-(--hairline) bg-(--surface) shadow-[0_6px_16px_rgba(27,73,101,0.10)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_38px_rgba(27,73,101,0.22)]"
    >
      <a
        href={intento.enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-4/3 overflow-hidden"
      >
        <img
          src={intento.imagen}
          alt={intento.nombre}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-sierra/85 via-sierra/15 to-transparent"
        />
        <span className="absolute bottom-3 left-4 font-display text-3xl font-extrabold text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
          {intento.anio}
        </span>
        {intento.perduro && (
          <span className="absolute right-3 top-3 rounded-full bg-oro px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sierra">
            La que perduró
          </span>
        )}
      </a>

      <div className="flex flex-1 flex-col gap-1 p-5">
        <h4 className="font-display text-lg font-bold leading-snug text-sierra dark:text-naranja">
          {intento.nombre}
        </h4>
        <p className="text-sm text-(--page-text)/70">
          Encabezada por{' '}
          <a
            href={intento.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-naranja underline-offset-2 hover:underline"
          >
            {intento.fundador}
          </a>
        </p>
      </div>
    </Reveal>
  )
}

/* ---------- Linea del tiempo industrial ---------- */
function Hito({ evento, i }) {
  const derecha = i % 2 === 1
  return (
    <Reveal
      as="li"
      variant={derecha ? 'right' : 'left'}
      delay={60}
      className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8"
    >
      {/* Columna izquierda en escritorio (vacia cuando la ficha va a la derecha) */}
      <div className={`hidden md:block ${derecha ? '' : 'md:col-start-1'}`}>
        {!derecha && <FichaHito evento={evento} alineada="right" />}
      </div>

      {/* Nodo de la linea */}
      <div className="absolute left-0 top-6 flex h-full flex-col items-center md:static md:h-auto">
        <span className="hexagono relative flex h-14 w-14 flex-none items-center justify-center bg-oro shadow-lg">
          <span
            aria-hidden="true"
            className="hexagono absolute inset-[3px] bg-linear-to-br from-sierra to-naranja"
          />
          <span className="relative font-display text-sm font-extrabold text-white">
            {evento.anio}
          </span>
        </span>
      </div>

      <div className={`hidden md:block ${derecha ? 'md:col-start-3' : ''}`}>
        {derecha && <FichaHito evento={evento} alineada="left" />}
      </div>

      {/* Version movil: la ficha siempre a la derecha de la linea */}
      <div className="ml-20 md:hidden">
        <FichaHito evento={evento} alineada="left" />
      </div>
    </Reveal>
  )
}

function FichaHito({ evento, alineada }) {
  return (
    <a
      href={evento.enlace}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex gap-4 rounded-2xl border border-(--hairline) bg-(--surface) p-4 shadow-[0_6px_16px_rgba(27,73,101,0.10)] transition duration-300 hover:-translate-y-1 hover:border-naranja hover:shadow-[0_18px_32px_rgba(27,73,101,0.22)] ${
        alineada === 'right' ? 'md:flex-row-reverse md:text-right' : ''
      }`}
    >
      <img
        src={evento.imagen}
        alt={evento.nombre}
        loading="lazy"
        className="h-24 w-24 flex-none rounded-xl object-cover shadow-md transition duration-500 group-hover:scale-105"
      />
      <div className="min-w-0">
        <p className="font-display text-base font-bold leading-snug text-sierra dark:text-naranja">
          {evento.nombre}
        </p>
        <p className="mt-1 text-sm leading-snug text-(--page-text)/75">{evento.texto}</p>
      </div>
    </a>
  )
}

export default function Antecedentes() {
  return (
    <Section
      id="antecedentes"
      eyebrow="De dónde viene"
      title="Historia"
      intro={antecedentes.intro}
    >
      {/* Por que hubo tres intentos */}
      <Reveal variant="up" className="mx-auto max-w-3xl text-center">
        <h3 className="font-display text-2xl font-bold text-sierra dark:text-naranja">
          {origen.titulo}
        </h3>
        <p className="mx-auto mt-4 text-base leading-relaxed text-(--page-text)/85">
          {origen.texto}
        </p>
      </Reveal>

      {/* Las tres fundaciones */}
      <div className="mt-16">
        <Reveal variant="up" className="mx-auto mb-8 max-w-3xl text-center">
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-naranja">
            {fundaciones.titulo}
          </h3>
          <p className="mt-3 text-sm text-sierra/80 dark:text-arena/70">{fundaciones.texto}</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fundaciones.intentos.map((intento, i) => (
            <Intento key={intento.anio} intento={intento} i={i} />
          ))}
        </div>
      </div>

      {/* Linea del tiempo industrial */}
      <div className="mt-20">
        <Reveal variant="up" className="mx-auto mb-10 max-w-3xl text-center">
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-naranja">
            {hitos.titulo}
          </h3>
          <p className="mt-3 text-sm text-sierra/80 dark:text-arena/70">{hitos.texto}</p>
        </Reveal>

        <ol className="relative mx-auto flex max-w-4xl flex-col gap-10">
          {/* Riel de la linea del tiempo, con punta de flecha arriba y abajo */}
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-7 top-2 flex flex-col items-center md:left-1/2 md:-translate-x-1/2"
          >
            <span className="h-2.5 w-3.5 flex-none bg-sierra [clip-path:polygon(50%_0%,100%_100%,0%_100%)] dark:bg-arena" />
            <span className="w-0.5 flex-1 bg-linear-to-b from-sierra via-naranja to-oro" />
            <span className="h-2.5 w-3.5 flex-none bg-oro [clip-path:polygon(50%_100%,0%_0%,100%_0%)]" />
          </span>
          {hitos.eventos.map((evento, i) => (
            <Hito key={evento.anio} evento={evento} i={i} />
          ))}
        </ol>
      </div>
    </Section>
  )
}
