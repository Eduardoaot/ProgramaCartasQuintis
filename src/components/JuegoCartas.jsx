import Section from './Section.jsx'
import InfoBlock from './InfoBlock.jsx'
import Reveal from './Reveal.jsx'
import { juego } from '../data/juego.js'

export default function JuegoCartas() {
  return (
    <Section
      id="juego"
      eyebrow="El TCG"
      title="El juego de cartas"
      intro={juego.intro}
      alt
    >
      <div className="grid gap-6 md:grid-cols-2">
        {juego.bloques.map((b, i) => (
          <InfoBlock key={b.titulo} titulo={b.titulo} delay={i * 80}>
            {b.texto}
          </InfoBlock>
        ))}
      </div>

      {/* Partes de la arena */}
      <Reveal className="mt-12">
        <h3 className="mb-5 text-center text-xl font-bold uppercase tracking-wider text-rosa">
          {juego.arena.titulo}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {juego.arena.partes.map((p) => (
            <div
              key={p.nombre}
              className="rounded-xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-4 text-left transition duration-300 hover:border-rosa hover:shadow-lg"
            >
              <p className="font-bold text-vino dark:text-rosa">{p.nombre}</p>
              <p className="text-sm text-[var(--page-text)]/75">{p.texto}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Cómo se gana */}
      <Reveal className="mx-auto mt-12 max-w-3xl rounded-2xl bg-gradient-to-br from-vino to-rosa p-8 text-center text-white shadow-xl">
        <h3 className="mb-2 text-xl font-bold">Cómo se gana</h3>
        <p className="text-white/95">{juego.comoSeGana}</p>
      </Reveal>

      {/* Tipos de carta */}
      <Reveal className="mt-12">
        <h3 className="mb-5 text-center text-xl font-bold uppercase tracking-wider text-rosa">
          Tipos de carta
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {juego.tiposCarta.map((t) => (
            <div
              key={t.nombre}
              className="rounded-xl border-t-4 border-dorado bg-[var(--surface)] p-4 text-left shadow-md"
            >
              <p className="font-bold text-vino dark:text-rosa">{t.nombre}</p>
              <p className="text-sm text-[var(--page-text)]/75">{t.texto}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
