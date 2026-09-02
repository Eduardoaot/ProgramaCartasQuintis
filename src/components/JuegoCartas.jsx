import Section from './Section.jsx'
import InfoBlock from './InfoBlock.jsx'
import Reveal from './Reveal.jsx'
import { juego } from '../data/juego.js'

const bordePorTipo = {
  Personaje: 'border-rosa',
  Episodio: 'border-verde',
  Evento: 'border-azul',
  Protagonista: 'border-dorado',
  'Carta E': 'border-vino',
}

export default function JuegoCartas() {
  // Lógica del fondo de imagen con el difuminado
  const backgroundStyle = juego.bgImage
    ? {
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('${juego.bgImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }
    : {}

  return (
    <Section
      id="juego"
      eyebrow="El TCG"
      title="El juego de cartas"
      intro={juego.intro}
      style={backgroundStyle} /* Pasamos el estilo directamente al elemento de React */
      alt={false} /* Desactivamos el fondo alterno para que no tape la imagen */
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
          {juego.arena.partes.map((p, i) => {
            const posicion = i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'center'

            return (
            <Reveal
              key={p.nombre}
              delay={i * 100}
              className={`arena-card arena-card--${posicion} rounded-xl border-2 border-rosa/25 bg-white p-4 text-left transition duration-300 hover:border-rosa hover:shadow-lg`}
            >
              <p className="font-bold text-vino">{p.nombre}</p>
              <p className="text-sm text-tinta/80">{p.texto}</p>
            </Reveal>
            )
          })}
        </div>
      </Reveal>

      {/* Cómo se gana */}
      <Reveal className="mx-auto mt-12 max-w-3xl rounded-2xl bg-linear-to-br from-vino to-rosa p-8 text-center text-white shadow-xl">
        <h3 className="mb-2 text-xl font-bold">Cómo se gana</h3>
        <p className="text-white/95">{juego.comoSeGana}</p>
      </Reveal>

      {/* Tipos de carta */}
      <Reveal className="mt-12">
        <h3 className="mb-5 text-center text-2xl font-bold uppercase tracking-wider text-rosa sm:text-2xl">
          Tipos de carta
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {juego.tiposCarta.map((t, i) => {
            const posicion = i === 0 ? 'left' : i === juego.tiposCarta.length - 1 ? 'right' : 'center'

            return (
              <Reveal
                key={t.nombre}
                delay={i * 100}
                className={`arena-card arena-card--${posicion} rounded-xl border-t-4 ${bordePorTipo[t.nombre]} bg-white p-4 text-left shadow-md`}
              >
                <p className="font-bold text-vino">{t.nombre}</p>
                <p className="text-sm text-tinta/80">{t.texto}</p>
              </Reveal>
            )
          })}
        </div>
      </Reveal>
    </Section>
  )
}
