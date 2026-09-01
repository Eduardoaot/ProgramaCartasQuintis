import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'
import { antecedentes } from '../data/antecedentes.js'

const { origen, firmadas, valor } = antecedentes

/** Foto del carton/caja de un set; si no hay URL, marcador con el codigo. */
function CajaFoto({ set }) {
  if (set.caja) {
    return (
      <div className="overflow-hidden rounded-xl ring-1 ring-[var(--hairline)]">
        <img
          src={set.caja}
          alt={`Caja de la expansion ${set.nombre}`}
          loading="lazy"
          className="block aspect-[4/3] w-full object-cover"
        />
      </div>
    )
  }
  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-[var(--hairline)] bg-[var(--surface-alt)] text-center">
      <span className="text-3xl">📦</span>
      <span className="text-sm font-extrabold text-vino dark:text-rosa">Caja {set.codigo}</span>
      <span className="px-3 text-[10px] leading-tight text-[var(--page-text)]/55">
        Añade la foto en src/data/antecedentes.js
      </span>
    </div>
  )
}

export default function Antecedentes() {
  return (
    <Section
      id="antecedentes"
      eyebrow="De dónde viene"
      title="Antecedentes"
      intro={antecedentes.intro}
    >
      {/* Origen de la mecanica */}
      <Reveal
        variant="left"
        className="mx-auto max-w-3xl rounded-2xl border-l-4 border-rosa bg-[var(--surface)] p-6 text-left shadow-[0_6px_16px_rgba(142,36,83,0.10)]"
      >
        <h3 className="mb-2 text-lg font-bold text-vino dark:text-rosa">{origen.titulo}</h3>
        <p className="text-sm leading-relaxed text-[var(--page-text)]/90">{origen.texto}</p>
      </Reveal>

      {/* Expansiones con cartas firmadas */}
      <div className="mt-14">
        <Reveal variant="up" className="mx-auto mb-6 max-w-3xl text-center">
          <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">{firmadas.titulo}</h3>
          <p className="mt-2 text-sm text-vino/80 dark:text-rosa-claro/70">{firmadas.texto}</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {firmadas.sets.map((set, i) => (
            <Reveal
              key={set.codigo}
              variant={i % 2 === 0 ? 'left' : 'right'}
              delay={(i % 3) * 80}
              className="flex flex-col gap-3 rounded-2xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-4 shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:-translate-y-1 hover:border-rosa"
            >
              <CajaFoto set={set} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-gradient-to-br from-vino to-rosa px-2 py-0.5 text-xs font-extrabold text-white">
                    {set.codigo}
                  </span>
                  <span className="font-bold text-vino dark:text-rosa">{set.nombre}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--page-text)]/85">✒️ {set.firmaEn}</p>
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
              <Tilt className="rounded-lg bg-[var(--surface-sunken)] p-2">
                <img
                  src={c.img}
                  alt={c.nombre}
                  loading="lazy"
                  className="mx-auto block w-full max-w-[180px] rounded-md shadow-lg"
                />
              </Tilt>
              <p className="text-xs text-[var(--page-text)]/80">{c.nombre}</p>
              <p className="mt-auto rounded-lg bg-gradient-to-br from-vino to-rosa px-2 py-1.5 text-sm font-extrabold text-white">
                {c.valor}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
