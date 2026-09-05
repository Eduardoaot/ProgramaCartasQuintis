import { useEffect, useRef, useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { personajes } from '../data/personajes.js'
import { foto } from '../data/imagenes.js'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation, Keyboard, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

/**
 * Una sola foto por icono: es la que se ve en el carrusel y, a la vez, la que
 * queda de fondo de toda la seccion cuando ese icono esta activo.
 */
const fondos = {
  'cerro-de-la-silla': foto.cerroSilla,
  macroplaza: foto.macroplaza,
  'parque-fundidora': foto.fundidora,
  'paseo-santa-lucia': foto.santaLucia,
  'cumbres-chipinque': foto.huasteca,
  'barrio-antiguo': foto.barrioAntiguoNoche,
}

const ordenCarrusel = Object.keys(fondos)
const porId = Object.fromEntries(personajes.fichas.map((f) => [f.id, f]))

/**
 * Fondo de toda la seccion: apila las seis fotos y hace crossfade a la del
 * icono activo, ya venga del carrusel o de la ficha que estas leyendo.
 */
function FondoSeccion({ activo }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {ordenCarrusel.map((id) => (
        <div
          key={id}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-out sm:bg-fixed"
          style={{ backgroundImage: `url('${fondos[id]}')`, opacity: activo === id ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-(--page-bg)/78 backdrop-blur-[4px] dark:bg-(--page-bg)/82" />
    </div>
  )
}

/** Ficha de un icono: foto, identidad, datos y descripcion. */
function FichaPersonaje({ ficha, indice, fichaRef }) {
  return (
    <Reveal
      id={ficha.id}
      ref={fichaRef}
      variant={indice % 2 === 0 ? 'left' : 'right'}
      className="group scroll-mt-24 overflow-hidden rounded-3xl border border-(--hairline) bg-(--surface)/88 shadow-[0_10px_35px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-1"
    >
      {/* franja con el color del icono */}
      <div className="h-1.5 w-full" style={{ backgroundColor: ficha.colorHex }} />

      <div className="grid gap-6 p-6 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-8 sm:p-7">
        {/* Retrato */}
        <div
          className="relative mx-auto flex h-72 w-full max-w-50 items-center justify-center overflow-hidden rounded-2xl ring-2"
          style={{ backgroundColor: `${ficha.colorHex}22`, '--tw-ring-color': ficha.colorHex }}
        >
          {/* Si la imagen falla, queda visible el nombre detras */}
          <span className="absolute px-3 text-center text-sm font-bold text-(--page-text)/60">
            {ficha.nombre}
          </span>
          <img
            src={ficha.retrato}
            alt={ficha.nombre}
            width="358"
            height="556"
            decoding="async"
            onError={(event) => {
              event.currentTarget.style.visibility = 'hidden'
            }}
            className="relative block h-72 w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Identidad, datos y descripcion */}
        <div className="min-w-0 text-left">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-2xl font-extrabold text-sierra dark:text-white">{ficha.nombre}</h3>
            <span className="text-lg font-bold text-(--page-text)/55">{ficha.ubicacion}</span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span
              className="rounded-full px-3 py-1 text-xs font-bold text-white"
              style={{ backgroundColor: ficha.colorHex }}
            >
              {ficha.distintivo} · {ficha.color}
            </span>
            <span className="rounded-full bg-(--surface-alt) px-3 py-1 text-xs font-semibold text-(--page-text)/70 ring-1 ring-(--hairline)">
              {ficha.categoria}
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
            <p>{ficha.descripcion}</p>
            <p>
              <strong style={{ color: ficha.colorHex }}>No te pierdas: </strong>
              {ficha.imperdible}
            </p>
            <p>
              <strong style={{ color: ficha.colorHex }}>Dato curioso: </strong>
              {ficha.dato}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Personajes() {
  // Icono del slide actual del carrusel
  const [personajeCarrusel, setPersonajeCarrusel] = useState(ordenCarrusel[0])
  // Icono de la ficha que estas leyendo
  const [personajeFicha, setPersonajeFicha] = useState(ordenCarrusel[0])
  // Mientras el carrusel se ve, es el que manda sobre el fondo
  const [carruselALaVista, setCarruselALaVista] = useState(true)

  const carruselRef = useRef(null)
  const fichasRef = useRef([])

  // Un unico fondo para toda la seccion
  const personajeActivo = carruselALaVista ? personajeCarrusel : personajeFicha

  useEffect(() => {
    const observadorFichas = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id && fondos[visible.target.id]) setPersonajeFicha(visible.target.id)
      },
      { threshold: [0.3, 0.6], rootMargin: '-10% 0px -25% 0px' },
    )
    fichasRef.current.forEach((ficha) => ficha && observadorFichas.observe(ficha))

    const observadorCarrusel = new IntersectionObserver(
      ([entrada]) => setCarruselALaVista(entrada.isIntersecting),
      { threshold: 0.35 },
    )
    if (carruselRef.current) observadorCarrusel.observe(carruselRef.current)

    return () => {
      observadorFichas.disconnect()
      observadorCarrusel.disconnect()
    }
  }, [])

  return (
    <Section
      id="personajes"
      eyebrow="Los seis lugares"
      title="Íconos de Monterrey"
      intro={personajes.intro}
      alt
      backdrop={<FondoSeccion activo={personajeActivo} />}
    >
      {/* Carrusel: manda sobre el fondo de la seccion mientras se ve */}
      <div ref={carruselRef} className="mb-14">
        <Swiper
          modules={[Pagination, Autoplay, Navigation, Keyboard, Mousewheel]}
          spaceBetween={20}
          slidesPerView={1}
          speed={600}
          loop
          grabCursor
          simulateTouch
          touchStartPreventDefault={false}
          /* No se pega al cursor: al soltar salta al slide, no sigue el dedo */
          followFinger={false}
          threshold={3}
          touchRatio={1.4}
          longSwipesRatio={0.15}
          resistanceRatio={0.6}
          /* Trackpad: solo el gesto horizontal mueve el carrusel */
          mousewheel={{ forceToAxis: true, sensitivity: 1, thresholdDelta: 6 }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          navigation
          pagination={{ clickable: true, dynamicBullets: false }}
          autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSlideChange={(swiper) => setPersonajeCarrusel(ordenCarrusel[swiper.realIndex])}
          style={{
            '--swiper-navigation-color': porId[personajeCarrusel].colorHex,
            '--swiper-pagination-color': porId[personajeCarrusel].colorHex,
            '--swiper-navigation-size': '30px',
          }}
          className="pb-10"
        >
          {ordenCarrusel.map((id) => (
            <SwiperSlide key={id}>
              <a
                href={`#${id}`}
                aria-label={`Ver ficha de ${porId[id].nombre}`}
                className="block rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-naranja/40"
              >
                <img
                  src={fondos[id]}
                  alt={porId[id].nombre}
                  loading="lazy"
                  draggable={false}
                  onDragStart={(event) => event.preventDefault()}
                  className="h-104 w-full cursor-pointer rounded-2xl object-cover shadow-2xl"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4 text-center">
          <span
            className="inline-block rounded-full px-5 py-1.5 text-sm font-extrabold uppercase tracking-[0.25em] text-white transition-colors duration-700"
            style={{ backgroundColor: porId[personajeCarrusel].colorHex }}
          >
            {porId[personajeCarrusel].nombre}
          </span>
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
