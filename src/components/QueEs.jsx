import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { queEs } from '../data/queEs.js'
import {useState} from 'react'

export default function QueEs() {
  const [figuraSeleccionada, setFiguraSeleccionada] = useState(null)

  const imagenesFiguras = [
    "https://imgs.search.brave.com/kFohUVs1DSAr0AhTXX2c_x9qxcboQFQXgWpnlwUZmjQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2th/bWVucmlkZXIvaW1h/Z2VzL2MvY2IvTWlr/dV9JdG8uanBnL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzI2/OD9jYj0yMDI2MDEw/NDA1MzgyMg",
    "LINK_IMAGEN_inori",
    "LINK_IMAGEN_ayane",
    "LINK_IMAGEN_ayana",
    "LINK_IMAGEN_kana",
    "LINK_IMAGEN_tenshin",
  ]
  const coloresHover = [
    "hover:bg-blue-100 hover:border-blue-300",
    "hover:bg-red-100 hover:border-red-300",
    "hover:bg-green-100 hover:border-green-300",
    "hover:bg-purple-100 hover:border-purple-300",
    "hover:bg-yellow-100 hover:border-yellow-300",
    "hover:bg-red-100 hover:border-red-300",
  ]
  return (
    <Section
      id="que-es"
      eyebrow="La obra"
      title="Qué son Las Quintillizas"
      intro={queEs.intro}
    >
      {/* SINOPSIS + IMAGEN */}
      <div className="mb-14 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
        <Reveal
          delay={0}
          className="
            group relative flex h-full flex-col overflow-hidden
            rounded-[28px]
            border border-rosa/20
            bg-white
            p-7
            text-left
            shadow-[0_10px_30px_rgba(142,36,83,0.07)]
            transition-all duration-300
            hover:border-rosa/35
            hover:bg-rosa-claro/30
            hover:shadow-[0_18px_40px_rgba(142,36,83,0.13)]
            lg:p-8
          "
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-rosa to-dorado" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-rosa">
              La historia
            </p>
          </div>
          <h3 className="mb-3 text-2xl font-extrabold text-vino">{queEs.tituloSinopsis}</h3>
          <p className="text-base leading-7 text-tinta/80">{queEs.sinopsis}</p>

          <div className="mt-auto pt-7">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-rosa">
                {queEs.tituloReconocimientos}
              </p>
              <span className="h-1 w-12 rounded-full bg-gradient-to-r from-rosa to-dorado" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {queEs.reconocimientos.map((item, index) => (
                <div
                  key={item.etiqueta}
                  className="rounded-2xl border border-dorado/30 bg-[#fff8e9] p-3 transition-colors duration-300 group-hover:border-dorado/60 group-hover:bg-dorado/20"
                >
                  <p className="text-xl font-extrabold leading-none text-vino">{item.valor}</p>
                  <p className="mt-2 text-xs font-bold uppercase leading-4 tracking-[0.08em] text-tinta/65">
                    {item.etiqueta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="h-full">
          <div className="group relative h-full min-h-[500px] overflow-hidden rounded-[28px] border border-rosa/20 shadow-[0_10px_30px_rgba(142,36,83,0.09)] transition-all duration-900 hover:border-rosa/40 hover:shadow-[0_18px_40px_rgba(142,36,83,0.16)]">
            <img
              src={queEs.autor.imagen}
              alt={queEs.autor.nombre}
              className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-900 group-hover:scale-[1.02] group-hover:blur-[2px] group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vino/90 via-vino/25 to-transparent transition-all duration-900 group-hover:from-vino/95 group-hover:via-vino/50" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-left text-white">
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-dorado">Mangaka</p>
              <h3 className="text-2xl font-extrabold">{queEs.autor.nombre}</h3>
              <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100">
                <p className="max-w-md text-sm leading-6 text-white/85">{queEs.autor.descripcion}</p>
                <p className="mt-2 text-xs text-white/70">{queEs.autor.informacion}</p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>

      {/* FIGURAS Y CONTEXTO */}
      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
        <Reveal delay={160} className="rounded-[28px] border border-rosa/20 bg-white p-6 text-left shadow-[0_8px_25px_rgba(142,36,83,0.06)] sm:p-7">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-rosa">{queEs.tituloFiguras}</p>
              <h3 className="text-2xl font-extrabold text-vino">{queEs.complemento}</h3>
            </div>
            <span className="hidden h-1 w-12 rounded-full bg-dorado sm:block" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
  {queEs.figuras.map((figura, index) => (

    <div
      key={figura.nombre}
      className="relative"
      onClick={() =>
        setFiguraSeleccionada(
          figuraSeleccionada === index ? null : index
        )
      }
    >

      {/* TARJETA */}
      <Reveal
        delay={200 + index * 50}
        className={`
          cursor-pointer
          rounded-2xl
          border border-rosa/15
          bg-rosa-claro/45
          p-4
          transition-all duration-300

          hover:-translate-y-1
          hover:shadow-lg

          ${coloresHover[index]}
        `}
      >
        <div className="flex items-baseline justify-between gap-3">

          <h4 className="text-sm font-extrabold text-vino">
            {figura.nombre}
          </h4>

          <span className="shrink-0 text-xs text-tinta/55">
            {figura.japones}
          </span>

        </div>

        <p className="mt-2 text-xs leading-5 text-tinta/70">
          {figura.texto}
        </p>
      </Reveal>


      {/* NUBECITA */}
      {figuraSeleccionada === index && (

        <div
          className="
            absolute
            bottom-[110%]
            left-1/2
            z-50
            -translate-x-1/2
            rounded-3xl
            border border-rosa/20
            bg-white
            p-3
            shadow-xl
          "
        >

          <img
            src={imagenesFiguras[index]}
            alt={figura.nombre}
            className="
              h-44
              w-36
              rounded-2xl
              object-cover
            "
          />

          {/* TRIANGULITO */}
          <div
            className="
              absolute
              -bottom-2
              left-1/2
              h-4
              w-4
              -translate-x-1/2
              rotate-45
              border-b
              border-r
              border-rosa/20
              bg-white
            "
          />

        </div>

      )}

    </div>

  ))}
</div>
        </Reveal>

        <Reveal delay={220} className="rounded-[28px] border border-dorado/25 bg-[#fffaf0] p-6 text-left shadow-[0_8px_25px_rgba(142,36,83,0.06)] sm:p-7">
          <p className="mb-2 text-[15px] font-bold uppercase tracking-[0.22em] text-rosa">{queEs.tituloContexto}</p>
          <div className="space-y-5">
            {queEs.bloques.map((b) => (
              <div key={b.titulo}>
                <h3 className="text-[18px] font-extrabold text-vino">{b.titulo}</h3>
                <p className="mt-1 text-[15px] leading-5 text-tinta/70">{b.texto}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </Section>
  )
}