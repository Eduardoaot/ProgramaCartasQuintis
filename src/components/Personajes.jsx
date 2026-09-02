import Section from './Section.jsx'
import Card from './Card.jsx'
import { personajes } from '../data/personajes.js'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const videoList = [
  { id: 1, src: '/videos/ichika.mp4', alt: 'Ichika Nakano', target: 'ichika-nakano' },
  { id: 2, src: '/videos/nino.mp4', alt: 'Nino Nakano', target: 'nino-nakano' },
  { id: 3, src: '/videos/miku.mp4', alt: 'Miku Nakano', target: 'miku-nakano' },
  { id: 4, src: '/videos/yotsuba.mp4', alt: 'Yotsuba Nakano', target: 'yotsuba-nakano' },
  { id: 5, src: '/videos/itsuki.mp4', alt: 'Itsuki Nakano', target: 'itsuki-nakano' },
]

export default function Personajes() {
  return (
    <Section
      id="personajes"
      eyebrow="Quiénes son"
      title="Personajes"
      intro={personajes.intro}
      alt
    >
      {/* Carrusel de los personajes */}
      <div className="w-full mx-auto mb-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          simulateTouch={true}
          touchStartPreventDefault={false}
          threshold={5}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          loop={true}
          className="pb-10"
        >
          {videoList.map((video) => (
            <SwiperSlide key={video.id}>
              <a
                href={`#${video.target}`}
                aria-label={`Ver ficha de ${video.alt}`}
                className="block rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-rosa/40"
              >
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  draggable={false}
                  onDragStart={(event) => event.preventDefault()}
                  className="w-full h-96 cursor-pointer rounded-xl object-cover"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Fichas de personajes en formato vertical con saltos de párrafo/puntos */}
      <div className="flex w-full flex-col gap-8">
        {personajes.fichas.map((f, i) => (
          <Card
            key={f.nombre}
            id={`${f.nombre.toLowerCase().replaceAll(' ', '-')}`}
            title={f.nombre}
            subtitle={f.rol}
            horizontal
            delay={i * 70}
            images={f.img ? [{ src: f.img, alt: f.nombre }] : []}
          >
            <div className="space-y-3 text-sm text-left">
              {Array.isArray(f.descripcion) ? (
                f.descripcion.map((puntos, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {puntos}
                  </p>
                ))
              ) : (
                <p>{f.descripcion}</p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}