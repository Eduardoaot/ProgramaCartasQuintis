import { useEffect, useRef, useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'
import { personajes } from '../data/personajes.js'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

/** Video del carrusel e imagen de fondo con el color de cada hermana. */
const fondos = {
  'ichika-nakano': { video: '/videos/ichika.mp4', fondo: '/videos/amarillo.jpg' },
  'nino-nakano': { video: '/videos/nino.mp4', fondo: '/videos/rosa.jpg' },
  'miku-nakano': { video: '/videos/miku.mp4', fondo: '/videos/azul.jpg' },
  'yotsuba-nakano': { video: '/videos/yotsuba.mp4', fondo: '/videos/verde.jpg' },
  'itsuki-nakano': { video: '/videos/itsuki.mp4', fondo: '/videos/rojo.jpg' },
}

const ordenCarrusel = Object.keys(fondos)
const porId = Object.fromEntries(personajes.fichas.map((f) => [f.id, f]))

/**
 * Capa de fondo: apila las cinco imagenes y hace crossfade a la del personaje
 * activo. `fija` deja la imagen anclada al viewport (parallax al bajar).
 */
function FondoPersonaje({ activo, fija = false, velo }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      {ordenCarrusel.map((id) => (
        <div
          key={id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-out ${
            fija ? 'sm:bg-fixed' : ''
          }`}
          style={{ backgroundImage: `url('${fondos[id].fondo}')`, opacity: activo === id ? 1 : 0 }}
        />
      ))}
      <div className={`absolute inset-0 ${velo}`} />
    </div>
  )
}

/** Ficha de un personaje: retrato, identidad, datos del wiki y descripcion. */
function FichaPersonaje({ ficha, indice, fichaRef }) {
  return (
    <Reveal
      id={ficha.id}
      ref={fichaRef}
      variant={indice % 2 === 0 ? 'left' : 'right'}
      className="group scroll-mt-24 overflow-hidden rounded-3xl border border-(--hairline) bg-(--surface)/88 shadow-[0_10px_35px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-1"
    >
      {/* franja con el color del personaje */}
      <div className="h-1.5 w-full" style={{ backgroundColor: ficha.colorHex }} />

      <div className="grid gap-6 p-6 sm:grid-cols-[minmax(0,190px)_1fr] sm:gap-8 sm:p-7">
        {/* Retrato + su carta del TCG */}
        <div className="mx-auto w-full max-w-[190px]">
          <div
            className="overflow-hidden rounded-2xl ring-2"
            style={{ backgroundColor: `${ficha.colorHex}22`, '--tw-ring-color': ficha.colorHex }}
          >
            <img
              src={ficha.retrato}
              alt={ficha.nombre}
              loading="lazy"
              className="block h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
            />
          </div>
          <Tilt className="mt-3 rounded-xl bg-(--surface-sunken) p-2">
            <img
              src={ficha.carta}
              alt={`Carta de ${ficha.nombre}`}
              loading="lazy"
              className="block w-full rounded-lg shadow-md"
            />
          </Tilt>
          <p className="mt-1 text-center text-[10px] uppercase tracking-wider text-(--page-text)/50">
            Su carta en el TCG
          </p>
        </div>

        {/* Identidad, datos y descripcion */}
        <div className="min-w-0 text-left">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-2xl font-extrabold text-vino dark:text-white">{ficha.nombre}</h3>
            <span className="text-lg font-bold text-(--page-text)/55">{ficha.japones}</span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span
              className="rounded-full px-3 py-1 text-xs font-bold text-white"
              style={{ backgroundColor: ficha.colorHex }}
            >
              {ficha.orden} · {ficha.color}
            </span>
            <span className="rounded-full bg-(--surface-alt) px-3 py-1 text-xs font-semibold text-(--page-text)/70 ring-1 ring-(--hairline)">
              {ficha.romaji}
            </span>
            {ficha.alias && (
              <span className="rounded-full bg-(--surface-alt) px-3 py-1 text-xs text-(--page-text)/70 ring-1 ring-(--hairline)">
                «{ficha.alias}»
              </span>
            )}
          </div>

          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
            {ficha.datos.map(([etiqueta, valor]) => (
              <div key={etiqueta}>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-(--page-text)/45">
                  {etiqueta}
                </dt>
                <dd className="text-sm font-semibold text-(--page-text)/90">{valor}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 space-y-3 text-sm leading-relaxed text-(--page-text)/85">
            <p>{ficha.personalidad}</p>
            <p>
              <strong style={{ color: ficha.colorHex }}>Su pasión: </strong>
              {ficha.pasion}
            </p>
            <p>
              <strong style={{ color: ficha.colorHex }}>Rasgo distintivo: </strong>
              {ficha.rasgo}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Personajes() {
  // Hermana del slide visible en el carrusel (arriba)
  const [personajeCarrusel, setPersonajeCarrusel] = useState(ordenCarrusel[0])
  // Hermana de la ficha visible al hacer scroll -> fondo de TODA la seccion
  const [personajeFicha, setPersonajeFicha] = useState(ordenCarrusel[0])
  const fichasRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id && fondos[visible.target.id]) setPersonajeFicha(visible.target.id)
      },
      { threshold: [0.3, 0.6], rootMargin: '-10% 0px -25% 0px' },
    )

    fichasRef.current.forEach((ficha) => ficha && observer.observe(ficha))
    return () => observer.disconnect()
  }, [])

  return (
    <Section
      id="personajes"
      eyebrow="Quiénes son"
      title="Personajes"
      intro={personajes.intro}
      alt
      backdrop={
        <FondoPersonaje
          activo={personajeFicha}
          fija
          velo="bg-(--page-bg)/72 backdrop-blur-[2px] dark:bg-(--page-bg)/78"
        />
      }
    >
      {/* Carrusel: su fondo cambia con la hermana del slide actual */}
      <div className="relative mb-12 overflow-hidden rounded-3xl ring-1 ring-(--hairline)">
        <FondoPersonaje activo={personajeCarrusel} velo="bg-black/45" />

        <div className="relative z-10 p-4 sm:p-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            simulateTouch
            touchStartPreventDefault={false}
            threshold={5}
            grabCursor
            pagination={{ clickable: true }}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            loop
            onSlideChange={(swiper) => setPersonajeCarrusel(ordenCarrusel[swiper.realIndex])}
            className="pb-10"
          >
            {ordenCarrusel.map((id) => (
              <SwiperSlide key={id}>
                <a
                  href={`#${id}`}
                  aria-label={`Ver ficha de ${porId[id].nombre}`}
                  className="block rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-rosa/40"
                >
                  <video
                    src={fondos[id].video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    draggable={false}
                    onDragStart={(event) => event.preventDefault()}
                    className="h-96 w-full cursor-pointer rounded-xl object-cover shadow-lg"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          <p
            className="text-center text-sm font-extrabold uppercase tracking-[0.3em] text-white"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
          >
            {porId[personajeCarrusel].nombre}
          </p>
        </div>
      </div>

      {/* Fichas */}
      <div className="flex w-full flex-col gap-8">
        {personajes.fichas.map((ficha, i) => (
          <FichaPersonaje
            key={ficha.id}
            ficha={ficha}
            indice={i}
            fichaRef={(el) => {
              fichasRef.current[i] = el
            }}
          />
        ))}
      </div>
    </Section>
  )
}
