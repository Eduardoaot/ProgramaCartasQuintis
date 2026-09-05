import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'
import { antecedentes } from '../data/antecedentes.js'

const { origen, fundaciones, hitos } = antecedentes

export default function Antecedentes() {
  return (
    <Section
      id="antecedentes"
      eyebrow="De dónde viene"
      title="Historia"
      intro={antecedentes.intro}
    >
      {/* Tres intentos */}
      <Reveal
        variant="left"
        className="mx-auto max-w-3xl rounded-2xl border-l-4 border-naranja bg-(--surface) p-6 text-left shadow-[0_6px_16px_rgba(27,73,101,0.10)]"
      >
        <h3 className="mb-2 text-lg font-bold text-sierra dark:text-naranja">{origen.titulo}</h3>
        <p className="text-sm leading-relaxed text-(--page-text)/90">{origen.texto}</p>
      </Reveal>

      {/* Las tres fundaciones */}
      <div className="mt-14">
        <Reveal variant="up" className="mx-auto mb-6 max-w-3xl text-center">
          <h3 className="text-xl font-bold uppercase tracking-wider text-naranja">{fundaciones.titulo}</h3>
          <p className="mt-2 text-sm text-sierra/80 dark:text-arena/70">{fundaciones.texto}</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fundaciones.sets.map((set, i) => (
            <Reveal
              key={set.nombre}
              variant={i % 2 === 0 ? 'left' : 'right'}
              delay={(i % 3) * 80}
              className="flex flex-col gap-3 rounded-2xl border-2 border-(--hairline) bg-(--surface) p-4 shadow-[0_6px_16px_rgba(27,73,101,0.10)] transition duration-300 hover:-translate-y-1 hover:border-naranja"
            >
              <a
                href={set.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl bg-(--surface-sunken) p-3 ring-1 ring-(--hairline)"
              >
                <img
                  src={set.caja}
                  alt={set.nombre}
                  loading="lazy"
                  className="mx-auto block h-48 w-auto max-w-full object-contain transition duration-500 hover:scale-105"
                />
              </a>
              <div>
                <p className="font-bold text-sierra dark:text-naranja">{set.nombre}</p>
                <p className="mt-1 text-xs text-(--page-text)/70">📜 {set.periodo}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Hitos industriales */}
      <div className="mt-14">
        <Reveal variant="up" className="mx-auto mb-6 max-w-3xl text-center">
          <h3 className="text-xl font-bold uppercase tracking-wider text-naranja">{hitos.titulo}</h3>
          <p className="mt-2 text-sm text-sierra/80 dark:text-arena/70">{hitos.texto}</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hitos.cartas.map((c, i) => (
            <Reveal
              key={c.nombre}
              variant="scale"
              delay={i * 90}
              className="group flex flex-col gap-3 rounded-2xl border-2 border-(--hairline) bg-(--surface) p-4 text-center shadow-[0_6px_16px_rgba(27,73,101,0.10)] transition duration-300 hover:-translate-y-2 hover:border-naranja hover:shadow-[0_20px_35px_rgba(27,73,101,0.28)]"
            >
              <a href={c.enlace} target="_blank" rel="noopener noreferrer" className="block">
                <Tilt className="rounded-lg bg-(--surface-sunken) p-2">
                  <img
                    src={c.img}
                    alt={c.nombre}
                    loading="lazy"
                    className="mx-auto block w-full max-w-45 rounded-md shadow-lg"
                  />
                </Tilt>
              </a>
              <p className="text-xs text-(--page-text)/80">{c.nombre}</p>
              <a
                href={c.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto rounded-lg bg-linear-to-br from-sierra to-naranja px-2 py-1.5 text-sm font-extrabold text-white transition hover:brightness-110"
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
