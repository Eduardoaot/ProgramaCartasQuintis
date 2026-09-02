import Section from './Section.jsx'
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
      {/* BLOQUE PRINCIPAL */}
      <div className="mb-14 grid items-start gap-8 lg:grid-cols-2 lg:gap-10">

        {/* SINOPSIS */}
        <Reveal
          delay={0}
          className="
            group relative overflow-hidden
            rounded-[28px]
            border border-rosa/20
            bg-white
            p-8
            text-left
            shadow-[0_10px_30px_rgba(142,36,83,0.07)]
            transition-all duration-300
            hover:-translate-y-1
            hover:border-rosa/35
            hover:bg-rosa-claro/30
            hover:shadow-[0_18px_40px_rgba(142,36,83,0.13)]
            lg:p-10
          "
        >
          {/* Etiqueta superior */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-rosa to-dorado" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-rosa">
              La historia
            </p>
          </div>

          <h3 className="mb-5 text-2xl font-extrabold text-vino">
            Sinopsis
          </h3>

          <p className="text-[15px] leading-8 text-tinta/80 sm:text-base">
            {queEs.sinopsis}
          </p>

          {/* Línea decorativa */}
          <div
            className="
              mt-8
              h-1 w-14
              rounded-full
              bg-gradient-to-r from-rosa to-dorado
              transition-all duration-300
              group-hover:w-24
            "
          />
        </Reveal>

        {/* AUTOR / IMAGEN */}
        <Reveal delay={100}>
          <div
            className="
              group relative overflow-hidden
              rounded-[28px]
              border border-rosa/20
              shadow-[0_10px_30px_rgba(142,36,83,0.09)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-rosa/40
              hover:shadow-[0_18px_40px_rgba(142,36,83,0.16)]
            "
          >
            {/* Imagen */}
            <img
              src={queEs.autor.imagen}
              alt={queEs.autor.nombre}
              className="
                h-[430px] w-full
                object-cover object-center
                transition-all duration-300
                group-hover:scale-[1.02]
                group-hover:blur-[2px]
                group-hover:brightness-75
              "
            />

            {/* Degradado sobre imagen */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-vino/90
                via-vino/25
                to-transparent
                transition-all duration-300
                group-hover:from-vino/95
                group-hover:via-vino/50
              "
            />

            {/* Información del autor */}
            <div className="absolute inset-x-0 bottom-0 p-6 text-left text-white">

              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em] text-dorado">
                Mangaka
              </p>

              <h3 className="text-2xl font-extrabold">
                {queEs.autor.nombre}
              </h3>

              {/* Información adicional en hover */}
              <div
                className="
                  max-h-0
                  overflow-hidden
                  opacity-0
                  transition-all duration-200
                  group-hover:mt-3
                  group-hover:max-h-28
                  group-hover:opacity-100
                "
              >
                <p className="text-sm leading-6 text-white/90">
                  {queEs.autor.descripcion}
                </p>

                <p className="mt-2 text-xs text-white/70">
                  {queEs.autor.informacion}
                </p>
              </div>

            </div>
          </div>
        </Reveal>

      </div>

      {/* DATOS RÁPIDOS */}
      <div className="grid gap-6 sm:grid-cols-3">

        {/* FECHA */}
        <Reveal
          delay={200}
          className="
            group
            rounded-3xl
            border border-dorado/25
            bg-white
            p-7
            text-center
            shadow-[0_8px_25px_rgba(142,36,83,0.06)]
            transition-all duration-300
            hover:-translate-y-1
            hover:border-dorado/45
            hover:bg-[#fff9ed]
            hover:shadow-[0_16px_35px_rgba(142,36,83,0.11)]
          "
        >
          <span
            className="
              mx-auto mb-5 block
              h-1 w-10
              rounded-full
              bg-dorado
              transition-all duration-300
              group-hover:w-16
            "
          />

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-rosa">
            Período de publicación
          </p>

          <h3 className="text-2xl font-extrabold text-vino">
            {queEs.fechaCreacion}
          </h3>
        </Reveal>

        {/* EDITORA */}
        <Reveal
          delay={300}
          className="
            group
            rounded-3xl
            border border-rosa/20
            bg-white
            p-7
            text-center
            shadow-[0_8px_25px_rgba(142,36,83,0.06)]
            transition-all duration-300
            hover:-translate-y-1
            hover:border-rosa/40
            hover:bg-rosa-claro/40
            hover:shadow-[0_16px_35px_rgba(142,36,83,0.11)]
          "
        >
          <span
            className="
              mx-auto mb-5 block
              h-1 w-10
              rounded-full
              bg-rosa
              transition-all duration-300
              group-hover:w-16
            "
          />

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-rosa">
            Editora
          </p>

          <h3 className="text-xl font-extrabold text-vino">
            Kodansha
          </h3>

          <p className="mt-2 text-sm text-tinta/60">
            Weekly Shōnen Magazine
          </p>
        </Reveal>

        {/* RECONOCIMIENTOS */}
        <Reveal
          delay={400}
          className="
            rounded-3xl
            border border-dorado/20
            bg-white
            p-7
            text-center
            shadow-[0_8px_25px_rgba(142,36,83,0.06)]
            transition-all duration-300
            hover:-translate-y-1
            hover:border-dorado/40
            hover:shadow-[0_16px_35px_rgba(142,36,83,0.11)]
          "
        >
          <span className="mx-auto mb-5 block h-1 w-10 rounded-full bg-dorado" />

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-rosa">
            Reconocimientos
          </p>

          <p className="text-sm leading-6 text-tinta/75">
            {queEs.exito}
          </p>
        </Reveal>

      </div>

      {/* MANGA / PRODUCTORA */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">

        {queEs.bloques.map((b, i) => (
          <Reveal
            key={b.titulo}
            delay={500 + i * 80}
            className="
              group relative overflow-hidden
              rounded-3xl
              border border-rosa/15
              bg-white
              p-8
              text-left
              shadow-[0_8px_25px_rgba(142,36,83,0.06)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-rosa/30
              hover:bg-rosa-claro/25
              hover:shadow-[0_16px_35px_rgba(142,36,83,0.11)]
            "
          >
            {/* Línea decorativa */}
            <span
              className="
                mb-5 block
                h-1 w-10
                rounded-full
                bg-gradient-to-r from-rosa to-dorado
                transition-all duration-300
                group-hover:w-20
              "
            />

            <h3 className="mb-3 text-xl font-extrabold text-vino">
              {b.titulo}
            </h3>

            <p className="text-[15px] leading-7 text-tinta/75">
              {b.texto}
            </p>

          </Reveal>
        ))}

      </div>
    </Section>
  )
}