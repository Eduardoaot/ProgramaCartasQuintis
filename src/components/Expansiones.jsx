import Section from './Section.jsx'
import Card from './Card.jsx'
import Reveal from './Reveal.jsx'
import { expansiones } from '../data/expansiones.js'

export default function Expansiones() {
  return (
    <Section
      id="expansiones"
      eyebrow="Sets"
      title="Las expansiones que existen"
      intro={expansiones.intro}
      alt
    >
      {expansiones.temporadas.map((temp) => (
        <div key={temp.nombre} className="mb-12 last:mb-0">
          <Reveal
            as="h3"
            className="mb-6 text-xl font-bold uppercase tracking-wider text-rosa"
          >
            {temp.nombre}
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {temp.sets.map((s, i) => (
              <Card
                key={s.titulo}
                title={s.titulo}
                wide={s.wide}
                images={s.images}
                delay={i * 70}
              >
                {s.texto}
              </Card>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
