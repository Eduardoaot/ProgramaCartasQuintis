import Section from './Section.jsx'
import InfoBlock from './InfoBlock.jsx'
import { antecedentes } from '../data/antecedentes.js'

export default function Antecedentes() {
  return (
    <Section
      id="antecedentes"
      eyebrow="De dónde viene"
      title="Antecedentes"
      intro={antecedentes.intro}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {antecedentes.bloques.map((b, i) => (
          <InfoBlock key={b.titulo} titulo={b.titulo} delay={i * 80}>
            {b.texto}
          </InfoBlock>
        ))}
      </div>
    </Section>
  )
}
