import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { queEs } from '../data/queEs.js'
import {useEffect,useState} from 'react'

export default function QueEs() {
  const [figuraSeleccionada, setFiguraSeleccionada] = useState(null)

  useEffect(() => {
  const cerrarFigura = () => {
    setFiguraSeleccionada(null)
  }

  document.addEventListener('click', cerrarFigura)

  return () => {
    document.removeEventListener('click', cerrarFigura)
  }
}, [])

  const imagenesFiguras = [
    "https://imgs.search.brave.com/kFohUVs1DSAr0AhTXX2c_x9qxcboQFQXgWpnlwUZmjQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2th/bWVucmlkZXIvaW1h/Z2VzL2MvY2IvTWlr/dV9JdG8uanBnL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzI2/OD9jYj0yMDI2MDEw/NDA1MzgyMg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5onXVT3JRfSnTUuq1BQKLx0U7mQ9zSnE65qHwNjg6w&s=10",
    "https://cdn-images.dzcdn.net/images/artist/9b23b69eb3f4d900953ba4e4a23ce945/1900x1900-000000-81-0-0.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVG7N2KNXK7v-C7X5EUYlreHzYgs9-Tu9U03t4n2wT2g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBLGRvkdc_m_nWj36zOSuE7j6KFJmkdJoNkGxM5Gtrg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPboMZbYC4y67PKMqFDEN9N_OtkjP8Io2SVgA9a6j3w&s=10",
  ]
  const coloresHover = [
    'hover:bg-blue-100 hover:border-blue-300 dark:hover:bg-blue-400/20 dark:hover:border-blue-400/50',
    'hover:bg-red-100 hover:border-red-300 dark:hover:bg-red-400/20 dark:hover:border-red-400/50',
    'hover:bg-green-100 hover:border-green-300 dark:hover:bg-green-400/20 dark:hover:border-green-400/50',
    'hover:bg-purple-100 hover:border-purple-300 dark:hover:bg-purple-400/20 dark:hover:border-purple-400/50',
    'hover:bg-yellow-100 hover:border-yellow-300 dark:hover:bg-yellow-400/20 dark:hover:border-yellow-400/50',
    'hover:bg-red-100 hover:border-red-300 dark:hover:bg-red-400/20 dark:hover:border-red-400/50',
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

  {/* SINOPSIS */}
  <div className="group h-full">

    <Reveal
      delay={0}
      className="
        relative flex h-full flex-col overflow-hidden
        rounded-[28px]
        border border-rosa/20
        bg-(--surface)
        p-7
        text-left
        shadow-[0_10px_30px_rgba(142,36,83,0.07)]

        transition-all
        duration-500
        ease-out

        group-hover:-translate-y-1
        group-hover:border-rosa/35
        group-hover:bg-rosa/10
        group-hover:shadow-[0_18px_40px_rgba(142,36,83,0.13)]

        lg:p-8
      "
    >
      <div className="mb-6 flex items-center gap-3">
        <span
          className="
            h-[2px]
            w-10
            rounded-full
            bg-linear-to-r from-rosa to-dorado
            transition-all
            duration-500
            group-hover:w-16
          "
        />

        <p className="text-xs font-bold uppercase tracking-[0.22em] text-rosa">
          {queEs.pestana}
        </p>
      </div>

      <h3 className="mb-3 text-2xl font-extrabold text-vino dark:text-rosa">
        {queEs.tituloSinopsis}
      </h3>

      <p className="text-base leading-7 text-(--page-text)/80">
        {queEs.sinopsis}
      </p>

      <div className="mt-auto pt-7">
        <div className="mb-4 flex items-center justify-between">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-rosa">
            {queEs.tituloReconocimientos}
          </p>

          <span className="h-1 w-12 rounded-full bg-linear-to-r from-rosa to-dorado" />

        </div>

        <div className="grid grid-cols-2 gap-3">

          {queEs.reconocimientos.map((item) => (
            <div
              key={item.etiqueta}
              className="
                group
                flex
                min-h-[92px]
                flex-col
                justify-between
                overflow-hidden
                rounded-2xl
                border
                border-dorado/30
                bg-dorado/10
                p-4
                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:border-dorado/60
                hover:bg-dorado/20
                hover:shadow-md
              "
            >
              <p
                className="
                  text-xl
                  font-extrabold
                  leading-none
                  text-vino dark:text-rosa
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                {item.valor}
              </p>

              <p className="mt-2 max-w-full break-words whitespace-normal text-[11px] font-bold uppercase leading-4 tracking-[0.08em] text-(--page-text)/65 sm:text-xs">
                {item.etiqueta}
              </p>
            </div>
          ))}

        </div>
      </div>
    </Reveal>

  </div>


  {/* IMAGEN DEL AUTOR */}
  <Reveal delay={80} className="h-full">

    <div
      className="
        group
        relative
        h-full
        min-h-[500px]
        overflow-hidden
        rounded-[28px]
        border
        border-rosa/20
        shadow-[0_10px_30px_rgba(142,36,83,0.09)]
        transition-all
        duration-900
        hover:border-rosa/40
        hover:shadow-[0_18px_40px_rgba(142,36,83,0.16)]
      "
    >

      <img
        src={queEs.autor.imagen}
        alt={queEs.autor.nombre}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          transition-all
          duration-700
          ease-out
          group-hover:scale-[1.04]
          group-hover:brightness-[0.72]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-linear-to-t
          from-vino/90
          via-vino/25
          to-transparent
          transition-all
          duration-900
          group-hover:from-vino/95
          group-hover:via-vino/50
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          p-6
          text-left
          text-white
          transition-transform
          duration-500
          ease-out
          group-hover:-translate-y-2
        "
      >

        <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-dorado">
          {queEs.autor.profesion}
        </p>

        <h3 className="text-2xl font-extrabold">
          {queEs.autor.nombre}
        </h3>

        <div
          className="
            max-h-0
            overflow-hidden
            opacity-0
            transition-all
            duration-300
            group-hover:mt-3
            group-hover:max-h-24
            group-hover:opacity-100
          "
        >
          <p className="max-w-md text-sm leading-6 text-white/85">
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

      {/* FIGURAS Y CONTEXTO */}
      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
        <Reveal delay={160} className="rounded-[28px] border border-rosa/20 bg-(--surface) p-6 text-left shadow-[0_8px_25px_rgba(142,36,83,0.06)] sm:p-7">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-rosa">{queEs.tituloFiguras}</p>
              <h3 className="text-2xl font-extrabold text-vino dark:text-rosa">{queEs.complemento}</h3>
            </div>
            <span className="hidden h-1 w-12 rounded-full bg-dorado sm:block" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
  {queEs.figuras.map((figura, index) => (

    <div
      key={figura.nombre}
      className="relative"
      onClick={(e) => {
        e.stopPropagation()
        
        setFiguraSeleccionada(figuraSeleccionada === index ? null : index)
        }}
    >

      {/* TARJETA */}
      <Reveal
        delay={200 + index * 50}
        className={`
          cursor-pointer
          rounded-2xl
          border border-rosa/15
          bg-(--surface-alt)
          p-4
          transition-all duration-300

          hover:-translate-y-1
          hover:shadow-lg

          ${coloresHover[index]}
        `}
      >
        <div className="flex items-baseline justify-between gap-3">

          <h4 className="text-sm font-extrabold text-vino dark:text-rosa">
            {figura.nombre}
          </h4>

          <span className="shrink-0 text-xs text-(--page-text)/55">
            {figura.japones}
          </span>

        </div>

        <p className="mt-2 text-xs leading-5 text-(--page-text)/70">
          {figura.texto}
        </p>
      </Reveal>


      {/* NUBECITA */}

<div
  onClick={(e) => e.stopPropagation()}
  className={`
    absolute
    bottom-[110%]
    left-1/2
    z-50
    -translate-x-1/2
    rounded-3xl
    border border-rosa/20
    bg-(--surface)
    p-3
    shadow-xl

    transition-all
    duration-200
    ease-out

    ${
      figuraSeleccionada === index
        ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
        : 'pointer-events-none translate-y-2 scale-95 opacity-0'
    }
  `}
>
  <img
    src={imagenesFiguras[index]}
    alt={figura.nombre}
    className="h-44 w-36 rounded-2xl object-cover"
  />

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
      bg-(--surface)
    "
  />
</div>


    </div>

  ))}
</div>
        </Reveal>

        <Reveal delay={220} className="rounded-[28px] border border-dorado/25 bg-dorado/10 p-6 text-left shadow-[0_8px_25px_rgba(142,36,83,0.06)] sm:p-7">
          <p className="mb-2 text-[15px] font-bold uppercase tracking-[0.22em] text-rosa">{queEs.tituloContexto}</p>
          <div className="space-y-5">
            {queEs.bloques.map((b) => (
              <div key={b.titulo} className="group -mx-2 rounded-xl px-2 py-1 transition-300 ease-out hover:translate-x-1 hover:bg-(--surface)/60">
                <h3 className="text-[18px] font-extrabold text-vino dark:text-rosa transition-colors duration-300 group-hover:text-rosa">
                  {b.titulo}
                </h3>
                <p className="mt-1 text-[15px] leading-5 text-(--page-text)/70">{b.texto}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </Section>
  )
}