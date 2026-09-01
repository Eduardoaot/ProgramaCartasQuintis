import Section from './Section.jsx'
import Card from './Card.jsx'
import Reveal from './Reveal.jsx'
import { rarezas } from '../data/rarezas.js'

export default function Rarezas() {
  return (
    <Section
      id="rarezas"
      eyebrow="Coleccionismo"
      title="Las rarezas que hay"
      intro={rarezas.intro}
    >
      {rarezas.grupos.map((grupo) => (
        <div key={grupo.nombre} className="mb-14 last:mb-0">
          <Reveal className="mb-6">
            <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">
              {grupo.nombre}
            </h3>
            {grupo.nota && (
              <p className="mx-auto mt-2 max-w-3xl text-sm text-vino/80">{grupo.nota}</p>
            )}
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {grupo.cartas.map((c, i) => (
              <Card
                key={c.titulo}
                title={c.titulo}
                wide={c.wide}
                images={c.images}
                delay={i * 60}
              >
                {c.parrafos.map((p, j) => (
                  <p key={j} className={j > 0 ? 'mt-2' : ''}>
                    {p}
                  </p>
                ))}
              </Card>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
