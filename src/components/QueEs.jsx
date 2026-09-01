import Section from './Section.jsx'
import InfoBlock from './InfoBlock.jsx'
import { queEs } from '../data/queEs.js'

export default function QueEs() {
  return (
    <Section
      id="que-es"
      eyebrow="La obra"
      title="Qué son Las Quintillizas"
      intro={queEs.intro}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {queEs.bloques.map((b, i) => (
          <InfoBlock key={b.titulo} titulo={b.titulo} delay={i * 80}>
            {b.texto}
          </InfoBlock>
        ))}
      </div>
    </Section>
  )
}
