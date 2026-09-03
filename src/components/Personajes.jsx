import { useEffect, useRef, useState } from 'react'
import Section from './Section.jsx'
import Card from './Card.jsx'
import { personajes } from '../data/personajes.js'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

/**
 * Cada hermana tiene su video para el carrusel y una imagen de fondo con su
 * color caracteristico. Futaro no tiene fondo propio: se queda el de la seccion.
 */
const personajesMeta = {
  'ichika-nakano': { nombre: 'Ichika Nakano', video: '/videos/ichika.mp4', fondo: '/videos/amarillo.jpg' },
  'nino-nakano': { nombre: 'Nino Nakano', video: '/videos/nino.mp4', fondo: '/videos/rosa.jpg' },
  'miku-nakano': { nombre: 'Miku Nakano', video: '/videos/miku.mp4', fondo: '/videos/azul.jpg' },
  'yotsuba-nakano': { nombre: 'Yotsuba Nakano', video: '/videos/yotsuba.mp4', fondo: '/videos/verde.jpg' },
  'itsuki-nakano': { nombre: 'Itsuki Nakano', video: '/videos/itsuki.mp4', fondo: '/videos/rojo.jpg' },
  'futaro-uesugi': { nombre: 'Futaro Uesugi', video: null, fondo: null },
}

const ordenCarrusel = [
  'ichika-nakano',
  'nino-nakano',
  'miku-nakano',
  'yotsuba-nakano',
  'itsuki-nakano',
]

const idDe = (nombre) => nombre.toLowerCase().replaceAll(' ', '-')

/**
 * Capa de fondo: apila todas las imagenes y hace crossfade a la del personaje
 * activo. `fija` activa el efecto parallax mientras se baja por las fichas.
 */
function FondoPersonaje({ activo, fija = false, velo = 'bg-(--page-bg)/78 dark:bg-(--page-bg)/82' }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      {Object.entries(personajesMeta).map(([id, meta]) =>
        meta.fondo ? (
          <div
            key={id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-out ${
              fija ? 'sm:bg-fixed' : ''
            }`}
            style={{ backgroundImage: `url('${meta.fondo}')`, opacity: activo === id ? 1 : 0 }}
          />
        ) : null,
      )}
      <div className={`absolute inset-0 ${velo}`} />
    </div>
  )
}

export default function Personajes() {
  // Personaje del slide visible en el carrusel (parte de arriba)
  const [personajeCarrusel, setPersonajeCarrusel] = useState(ordenCarrusel[0])
  // Personaje de la ficha visible al hacer scroll (parte de abajo)
  const [personajeFicha, setPersonajeFicha] = useState(ordenCarrusel[0])
  const fichasRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) setPersonajeFicha(visible.target.id)
      },
      { threshold: [0.35, 0.55], rootMargin: '-10% 0px -30% 0px' },
    )

    fichasRef.current.forEach((ficha) => ficha && observer.observe(ficha))
    return () => observer.disconnect()
  }, [])

  return (
    <Section id="personajes" eyebrow="Quiénes son" title="Personajes" intro={personajes.intro} alt>
      {/* Carrusel: el fondo cambia con la hermana del slide actual */}
      <div className="relative mb-12 overflow-hidden rounded-3xl ring-1 ring-(--hairline)">
        <FondoPersonaje activo={personajeCarrusel} velo="bg-(--page-bg)/55 dark:bg-black/55" />

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
                  aria-label={`Ver ficha de ${personajesMeta[id].nombre}`}
                  className="block rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-rosa/40"
                >
                  <video
                    src={personajesMeta[id].video}
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

          <p className="relative z-10 text-center text-sm font-bold uppercase tracking-[0.25em] text-vino dark:text-white">
            {personajesMeta[personajeCarrusel].nombre}
          </p>
        </div>
      </div>

      {/* Fichas: el fondo cambia a la imagen de la hermana que estas leyendo */}
      <div className="relative -mx-4 overflow-hidden rounded-3xl px-4 py-8 sm:-mx-6 sm:px-6">
        <FondoPersonaje activo={personajeFicha} fija />

        <div className="relative z-10 flex w-full flex-col gap-8">
          {personajes.fichas.map((f, i) => (
            <Card
              key={f.nombre}
              id={idDe(f.nombre)}
              cardRef={(ficha) => {
                fichasRef.current[i] = ficha
              }}
              title={f.nombre}
              subtitle={f.rol}
              horizontal
              bgClass="bg-(--surface)/85 backdrop-blur-md"
              delay={i * 70}
              images={f.img ? [{ src: f.img, alt: f.nombre }] : []}
            >
              <div className="space-y-3 text-left text-sm">
                {(Array.isArray(f.descripcion) ? f.descripcion : [f.descripcion]).map((punto, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {punto}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
