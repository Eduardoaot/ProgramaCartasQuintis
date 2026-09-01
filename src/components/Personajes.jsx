import Section from './Section.jsx'
import Card from './Card.jsx'
import { personajes } from '../data/personajes.js'

export default function Personajes() {
  return (
    <Section
      id="personajes"
      eyebrow="Quiénes son"
      title="Personajes"
      intro={personajes.intro}
      alt
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {personajes.fichas.map((f, i) => (
          <Card
            key={f.nombre}
            title={f.nombre}
            subtitle={f.rol}
            delay={i * 70}
            images={f.img ? [{ src: f.img, alt: f.nombre }] : []}
          >
            {f.descripcion}
          </Card>
        ))}
      </div>
    </Section>
  )
}
