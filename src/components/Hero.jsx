import { useState } from 'react'
import { hero } from '../data/hero.js'
import { video } from '../data/videos.js'

const clip = video.macroplaza

/**
 * Cabecera de la pagina: un vuelo de dron sobre la Macroplaza a pantalla
 * completa, con el texto anclado abajo a la izquierda.
 *
 * La foto panoramica sigue ahi de `poster`: se ve mientras el video carga y
 * se queda para siempre si el navegador no reproduce webm o si el visitante
 * pidio menos movimiento.
 */
export default function Hero() {
  const [listo, setListo] = useState(false)

  return (
    <header
      id="inicio"
      className="relative isolate flex min-h-screen items-end overflow-hidden pb-20 pt-32 text-white"
    >
      {/* Poster: la panoramica de siempre, debajo del video */}
      <img
        src={hero.bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full scale-105 object-cover"
      />

      <video
        className={`video-portada absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-1000 ${
          listo ? 'opacity-100' : 'opacity-0'
        }`}
        src={clip.src}
        poster={clip.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={() => setListo(true)}
      />

      {/* Velo inferior para que se lea el texto y velo superior para la navbar */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-[#07131c] via-[#07131c]/72 to-[#07131c]/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-[#07131c]/85 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <p className="flex animate-fade-up items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-oro [animation-delay:0.1s]">
          <span aria-hidden="true" className="h-px w-10 bg-oro/70" />
          {hero.eyebrow}
        </p>

        <h1 className="mt-6 max-w-4xl animate-fade-up font-display text-4xl font-extrabold leading-[1.05] tracking-tight [animation-delay:0.22s] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-xl animate-fade-up border-l-2 border-naranja pl-5 text-lg leading-relaxed text-white/85 [animation-delay:0.36s]">
          {hero.text}
        </p>

        <a
          href={hero.cta.href}
          className="group mt-10 inline-flex animate-fade-up items-center gap-3 rounded-full bg-naranja px-8 py-3.5 font-semibold text-white shadow-[0_12px_30px_rgba(207,90,34,0.35)] transition duration-300 [animation-delay:0.5s] hover:-translate-y-0.5 hover:bg-white hover:text-sierra"
        >
          {hero.cta.label}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>

      {/* Credito del video: la licencia CC BY-SA obliga a atribuir */}
      <a
        href={clip.enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-6 text-[11px] text-white/45 transition hover:text-white/80"
      >
        Video: {clip.autor} · {clip.licencia} · Wikimedia Commons
      </a>

      <a
        href="#que-es"
        aria-label="Bajar a la siguiente sección"
        className="absolute bottom-7 right-7 hidden h-11 w-11 animate-float-y items-center justify-center rounded-full border border-white/30 text-lg text-white/70 transition hover:border-white hover:text-white sm:flex"
      >
        ↓
      </a>
    </header>
  )
}
