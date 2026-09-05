import Section from './Section.jsx'
import InfoBlock from './InfoBlock.jsx'
import Reveal from './Reveal.jsx'
import { juego } from '../data/juego.js'

const bordePorZona = {
  Industrial: 'border-sierra',
  Corporativa: 'border-oro',
  Residencial: 'border-naranja',
  Natural: 'border-cactus',
  'Histórica': 'border-cielo',
}

export default function JuegoCartas() {
  // Fondo de imagen con un velo que cambia segun el tema (ver --velo-seccion)
  const backgroundStyle = juego.bgImage
    ? {
      backgroundImage: `linear-gradient(var(--velo-seccion), var(--velo-seccion)), url('${juego.bgImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }
    : {}

  return (
    <Section
      id="juego"
      eyebrow="La metrópoli"
      title="El área metropolitana"
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

      {/* Cómo está armada la ciudad */}
      <Reveal className="mt-12">
        <h3 className="mb-5 text-center text-xl font-bold uppercase tracking-wider text-naranja">
          {juego.arena.titulo}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {juego.arena.partes.map((p, i) => {
            const posicion = i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'center'

            return (
            <Reveal
              key={p.nombre}
              delay={i * 100}
              className={`arena-card arena-card--${posicion} rounded-xl border-2 border-naranja/25 bg-(--surface) p-4 text-left transition duration-300 hover:border-naranja hover:shadow-lg`}
            >
              <p className="font-bold text-sierra dark:text-naranja">{p.nombre}</p>
              <p className="text-sm text-(--page-text)/80">{p.texto}</p>
            </Reveal>
            )
          })}
        </div>
      </Reveal>

      {/* Por qué es el motor del norte */}
      <Reveal className="mx-auto mt-12 max-w-3xl rounded-2xl bg-linear-to-br from-sierra to-naranja p-8 text-center text-white shadow-xl">
        <h3 className="mb-2 text-xl font-bold">Por qué es el motor del norte</h3>
        <p className="text-white/95">{juego.motorDelNorte}</p>
      </Reveal>

      {/* Tipos de zona */}
      <Reveal className="mt-12">
        <h3 className="mb-5 text-center text-2xl font-bold uppercase tracking-wider text-naranja sm:text-2xl">
          Tipos de zona
        </h3>
        {/* flex en vez de grid: asi la ultima fila queda centrada */}
        <div className="flex flex-wrap justify-center gap-4">
          {juego.tiposZona.map((t, i) => {
            const posicion = i === 0 ? 'left' : i === juego.tiposZona.length - 1 ? 'right' : 'center'

            return (
              <Reveal
                key={t.nombre}
                delay={i * 100}
                className={`arena-card arena-card--${posicion} basis-full rounded-xl border-t-4 ${bordePorZona[t.nombre]} bg-(--surface) p-4 text-left shadow-md sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.667rem)]`}
              >
                <p className="font-bold text-sierra dark:text-naranja">{t.nombre}</p>
                <p className="text-sm text-(--page-text)/80">{t.texto}</p>
              </Reveal>
            )
          })}
        </div>
      </Reveal>
    </Section>
  )
}
