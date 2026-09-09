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

  return (
    <Section
      id="que-es"
      eyebrow="La ciudad"
      title="Qué es Monterrey"
      intro={queEs.intro}
      backdrop={
        <Reveal
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden bg-linear-to-br from-arena via-white to-arena bg-size-[200%_200%] animate-gradient"
        >
          <div className="absolute -inset-1/4 rotate-[-8deg] opacity-40 [background-image:linear-gradient(rgba(27,73,101,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(27,73,101,0.08)_1px,transparent_1px)] [background-size:54px_54px]" />
          <div className="absolute -left-[18%] top-[18%] h-60 w-[75vw] rounded-[50%] border border-naranja/20 animate-float-y" />
          <div className="absolute -right-[22%] bottom-[14%] h-60 w-[75vw] rotate-[-16deg] rounded-[50%] border border-oro/25 animate-float-y [animation-delay:-2s]" />
        </Reveal>
      }
    >
{/* SINOPSIS + IMAGEN */}
<div className="mb-14 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">

  {/* SINOPSIS */}
  <div className="group h-full">

    <Reveal
      delay={0}
      className="
        relative flex h-full flex-col
        p-7
        text-left
        lg:p-8
      "
    >
      <div className="mb-6 flex items-center gap-3">
        <span
          className="
            h-[2px]
            w-10
            rounded-full
            bg-linear-to-r from-naranja to-oro
            transition-all
            duration-500
            group-hover:w-16
          "
        />

        <p className="text-xs font-bold uppercase tracking-[0.22em] text-naranja">
          {queEs.pestana}
        </p>
      </div>

      <h3 className="mb-3 text-2xl font-extrabold text-sierra dark:text-naranja">
        {queEs.tituloSinopsis}
      </h3>

      <p className="text-base leading-7 text-(--page-text)/80">
        {queEs.sinopsis}
      </p>

      <div className="mt-auto pt-7">
        <div className="mb-4 flex items-center justify-between">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-naranja">
            {queEs.tituloReconocimientos}
          </p>

          <span className="h-1 w-12 rounded-full bg-linear-to-r from-naranja to-oro" />

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
                border-oro/30
                bg-oro/10
                p-4
                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:border-oro/60
                hover:bg-oro/20
                hover:shadow-md
              "
            >
              <p
                className="
                  text-xl
                  font-extrabold
                  leading-none
                  text-sierra dark:text-naranja
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
        border-naranja/20
        shadow-[0_10px_30px_rgba(27,73,101,0.09)]
        transition-all
        duration-900
        hover:border-naranja/40
        hover:shadow-[0_18px_40px_rgba(27,73,101,0.16)]
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
          from-sierra/90
          via-sierra/25
          to-transparent
          transition-all
          duration-900
          group-hover:from-sierra/95
          group-hover:via-sierra/50
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

        <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-oro">
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
        <Reveal
          delay={160}
          variant="scale"
          className="relative isolate p-2 text-left sm:p-3"
        >
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-naranja">{queEs.tituloFiguras}</p>
              <h3 className="text-2xl font-extrabold text-sierra dark:text-naranja">{queEs.complemento}</h3>
            </div>
            <span className="hidden h-1 w-12 rounded-full bg-oro sm:block" />
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
        variant={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'scale' : 'right'}
        className={`
          group
          cursor-pointer
          rounded-2xl
          border border-naranja/15
          bg-(--surface-alt)
          p-4
          transition-all duration-300

          hover:-translate-y-1
          hover:shadow-lg
          hover:bg-sierra
          hover:border-sierra
          dark:hover:bg-sierra/40
          dark:hover:border-cielo
        `}
      >
        <div className="flex items-baseline justify-between gap-3">

          <h4 className="text-sm font-extrabold text-sierra transition-colors group-hover:text-white dark:text-naranja dark:group-hover:text-white">
            {figura.nombre}
          </h4>

          <span className="shrink-0 text-xs text-(--page-text)/55 transition-colors group-hover:text-white/75">
            {figura.oficio}
          </span>

        </div>

        <p className="mt-2 text-xs leading-5 text-(--page-text)/70 transition-colors group-hover:text-white/85">
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
    border border-naranja/20
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
    src={figura.imagen}
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
      border-naranja/20
      bg-(--surface)
    "
  />
</div>


    </div>

  ))}
</div>
        </Reveal>

        <Reveal delay={220} className="rounded-[28px] border border-oro/25 bg-oro/10 p-6 text-left shadow-[0_8px_25px_rgba(27,73,101,0.06)] sm:p-7">
          <p className="mb-2 text-[15px] font-bold uppercase tracking-[0.22em] text-naranja">{queEs.tituloContexto}</p>
          <div className="space-y-5">
            {queEs.bloques.map((b) => (
              <div key={b.titulo} className="group -mx-2 rounded-xl px-2 py-1 transition-300 ease-out hover:translate-x-1 hover:bg-(--surface)/60">
                <h3 className="text-[18px] font-extrabold text-sierra dark:text-naranja transition-colors duration-300 group-hover:text-naranja">
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