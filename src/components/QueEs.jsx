import Section from './Section.jsx'
import InfoBlock from './InfoBlock.jsx'
import Reveal from './Reveal.jsx'
import { queEs } from '../data/queEs.js'

export default function QueEs() {
  return (
    <Section
      id="que-es"
      eyebrow="La obra"
      title="Qué son Las Quintillizas"
      intro={queEs.intro}
    >
      {/* Bloque Principal: Sinopsis + Autor */}
      <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Sinopsis */}
        <Reveal
          delay={0}
          className="rounded-2xl border-l-4 border-rosa bg-gradient-to-br from-rosa-claro to-white p-8 text-left shadow-[0_6px_16px_rgba(142,36,83,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(142,36,83,0.18)]"
        >
          <h3 className="mb-4 text-xl font-bold text-vino">Sinopsis</h3>
          <p className="leading-relaxed text-tinta/90">{queEs.sinopsis}</p>
        </Reveal>

        {/* Autor con Imagen */}
        <Reveal
          delay={100}
          className="flex flex-col gap-6"
        >
          {/* Imagen del Autor */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-rosa/25 shadow-[0_6px_16px_rgba(142,36,83,0.08)] transition duration-300 hover:-translate-y-1 hover:border-rosa hover:shadow-[0_16px_30px_rgba(142,36,83,0.18)]">
            <img
              src={queEs.autor.imagen}
              alt={queEs.autor.nombre}
              className="h-80 w-full object-cover transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vino/80 to-transparent" />
          </div>

          {/* Datos del Autor */}
          <div className="rounded-2xl border-l-4 border-dorado bg-white p-6 text-left shadow-[0_6px_16px_rgba(142,36,83,0.08)]">
            <h3 className="mb-2 text-lg font-bold text-vino">{queEs.autor.nombre}</h3>
            <p className="text-sm leading-relaxed text-tinta/90">{queEs.autor.descripcion}</p>
          </div>
        </Reveal>
      </div>

      {/* Información Secundaria: Fecha, Edición y Éxito */}
      <div className="grid gap-6 sm:grid-cols-3">
        {/* Fecha */}
        <Reveal
          delay={200}
          className="rounded-2xl border-l-4 border-dorado bg-white p-6 text-center shadow-[0_6px_16px_rgba(142,36,83,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(142,36,83,0.18)]"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-rosa">Período de publicación</p>
          <h3 className="text-2xl font-bold text-vino">{queEs.fechaCreacion}</h3>
        </Reveal>

        {/* Edición */}
        <Reveal
          delay={300}
          className="rounded-2xl border-l-4 border-rosa bg-white p-6 text-center shadow-[0_6px_16px_rgba(142,36,83,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(142,36,83,0.18)]"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-rosa">Editora</p>
          <p className="text-sm font-semibold text-tinta">Kodansha</p>
        </Reveal>

        {/* Éxito */}
        <Reveal
          delay={400}
          className="rounded-2xl border-l-4 border-dorado bg-white p-6 text-center shadow-[0_6px_16px_rgba(142,36,83,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(142,36,83,0.18)]"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-rosa">Reconocimientos</p>
          <p className="text-sm leading-relaxed text-tinta/90">{queEs.exito}</p>
        </Reveal>
      </div>

      {/* Bloques adicionales: Manga/Anime y Productora */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {queEs.bloques.map((b, i) => (
          <InfoBlock key={b.titulo} titulo={b.titulo} delay={500 + i * 80}>
            {b.texto}
          </InfoBlock>
        ))}
      </div>
    </Section>
  )
}
