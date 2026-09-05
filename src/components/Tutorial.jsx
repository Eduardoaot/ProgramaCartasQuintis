import { useEffect, useRef, useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { tutorial } from '../data/tutorial.js'

const { objetivo, transporte, recorrido, planes, mapa, dia, armaTuViaje, imperdibles, regionalismos } =
  tutorial

/* Cuenta ascendente al entrar en pantalla */
function useCountUp(target, run, ms = 900) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / ms)
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, run, ms])
  return value
}

/* ---------- 1. Objetivo ---------- */
function Objetivo() {
  const [ref, visible] = useReveal({ threshold: 0.35 })
  return (
    <Reveal
      variant="zoom"
      className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-linear-to-br from-sierra via-naranja to-sierra p-8 text-center text-white shadow-xl"
    >
      <h3 className="text-xs font-bold uppercase tracking-[0.35em] text-white/80">{objetivo.titulo}</h3>
      <div ref={ref} className="mt-5 flex justify-center gap-4">
        {Array.from({ length: objetivo.imprescindibles }).map((_, i) => (
          <span
            key={i}
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl ring-2 ring-white/40 ${
              visible ? 'heart-pop' : 'opacity-0'
            }`}
            style={visible ? { animationDelay: `${i * 180}ms` } : undefined}
          >
            📍
          </span>
        ))}
      </div>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/95">{objetivo.texto}</p>
    </Reveal>
  )
}

/* ---------- 2. Como moverte ---------- */
function Transporte() {
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-naranja">{transporte.titulo}</h3>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {transporte.items.map((m, i) => (
          <Reveal
            key={m.nombre}
            variant="up"
            delay={i * 90}
            className="group relative rounded-2xl border-2 border-(--hairline) bg-(--surface) p-6 text-left shadow-[0_6px_16px_rgba(27,73,101,0.10)] transition duration-300 hover:-translate-y-2 hover:border-naranja"
          >
            {/* barras que sugieren distancia recorrida */}
            <div className="mb-4 flex h-16 items-end gap-1.5">
              {[0, 1, 2, 3].map((k) => (
                <span
                  key={k}
                  className="w-6 rounded-md bg-linear-to-b from-naranja to-sierra transition-all duration-300 group-hover:translate-y-[-3px]"
                  style={{ height: `${40 + k * 8}%`, transitionDelay: `${k * 40}ms` }}
                />
              ))}
            </div>
            <p className="text-lg font-bold text-sierra dark:text-naranja">{m.nombre}</p>
            <p className="text-sm font-semibold text-oro">{m.cantidad}</p>
            <p className="mt-2 text-sm text-(--page-text)/80">{m.detalle}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* ---------- 3. Anatomia del centro ---------- */
function Recorrido() {
  const [ref, visible] = useReveal({ threshold: 0.3 })
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-2 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-naranja">{recorrido.titulo}</h3>
        <p className="mt-2 text-sm text-sierra/80 dark:text-arena/70">{recorrido.nota}</p>
      </Reveal>
      <div
        ref={ref}
        className="mx-auto grid max-w-4xl items-start gap-10 md:grid-cols-[minmax(0,340px)_1fr]"
      >
        <figure className="relative mx-auto w-full max-w-85">
          <img
            src={recorrido.img}
            alt={recorrido.alt}
            loading="lazy"
            className={`w-full rounded-xl shadow-2xl ring-1 ring-black/10 transition-all duration-700 ${
              visible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
            }`}
          />
          {recorrido.partes.map((p, i) => {
            const above = p.y > 68
            return (
              <span
                key={p.n}
                className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span
                  className={`flex h-7 w-7 cursor-help items-center justify-center rounded-full border-2 border-white bg-naranja text-xs font-bold text-white shadow-[0_2px_8px_rgba(0,0,0,0.4)] ${
                    visible ? 'anatomy-pin' : 'opacity-0'
                  }`}
                  style={visible ? { animationDelay: `${i * 110}ms` } : undefined}
                >
                  {p.n}
                </span>
                <span
                  className={`pointer-events-none absolute left-1/2 z-20 w-48 -translate-x-1/2 rounded-lg bg-sierra px-3 py-2 text-xs text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 dark:bg-naranja ${
                    above ? 'bottom-9' : 'top-9'
                  }`}
                >
                  <strong className="block">{p.label}</strong>
                  {p.texto}
                </span>
              </span>
            )
          })}
        </figure>

        <div>
          <ol className="grid gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {recorrido.partes.map((p, i) => (
              <Reveal
                key={p.n}
                variant={i % 2 ? 'right' : 'left'}
                delay={i * 40}
                as="li"
                className="flex gap-2 rounded-lg border border-(--hairline) bg-(--surface) p-2.5 text-left"
              >
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-sierra text-[11px] font-bold text-white dark:bg-naranja">
                  {p.n}
                </span>
                <span className="text-xs leading-snug text-(--page-text)/90">
                  <strong className="text-sierra dark:text-naranja">{p.label}.</strong> {p.texto}
                </span>
              </Reveal>
            ))}
          </ol>
          {recorrido.variantes && (
            <Reveal
              variant="up"
              delay={120}
              className="mt-4 rounded-xl bg-(--surface-alt) p-3 text-left text-xs leading-snug text-(--page-text)/85 ring-1 ring-(--hairline)"
            >
              <strong className="text-naranja">Distancias:</strong> {recorrido.variantes}
            </Reveal>
          )}
        </div>
      </div>
    </div>
  )
}

/* ---------- 4. Los planes ---------- */
function Planes() {
  return (
    <div className="mt-16 space-y-6">
      <Reveal variant="up" className="text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-naranja">Los planes</h3>
      </Reveal>
      {planes.map((t, i) => (
        <Reveal
          key={t.codigo}
          variant={i % 2 === 0 ? 'left' : 'right'}
          className={`mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-2xl border-2 border-(--hairline) bg-(--surface) p-5 shadow-[0_6px_16px_rgba(27,73,101,0.10)] transition duration-300 hover:border-naranja sm:gap-7 ${
            i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
          }`}
        >
          <Tilt className="w-36 flex-none rounded-lg bg-(--surface-sunken) p-2">
            <img src={t.img} alt={t.nombre} loading="lazy" className="block w-full rounded-md shadow-lg" />
          </Tilt>
          <div className="text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-linear-to-br from-sierra to-naranja px-2 py-0.5 text-xs font-extrabold text-white">
                {t.codigo}
              </span>
              <h4 className="text-lg font-bold text-sierra dark:text-naranja">{t.nombre}</h4>
            </div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-oro">{t.valor}</p>
            <p className="mt-2 text-sm text-(--page-text)/90">{t.texto}</p>
            <p className="mt-2 text-sm text-(--page-text)/75">
              <strong className="text-naranja">Cómo hacerlo:</strong> {t.comoSeUsa}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/* ---------- 5. El mapa del area metropolitana ---------- */
function Mapa() {
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-4 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-naranja">{mapa.titulo}</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-sierra/80 dark:text-arena/70">{mapa.nota}</p>
      </Reveal>

      <Reveal variant="scale" className="mx-auto max-w-3xl">
        <figure className="overflow-hidden rounded-2xl border-2 border-(--hairline) bg-(--surface-sunken) p-2 shadow-[0_12px_34px_rgba(27,73,101,0.20)]">
          <img
            src={mapa.esquema}
            alt="Mapa esquemático del área metropolitana de Monterrey"
            loading="lazy"
            className="block w-full rounded-xl transition duration-500 hover:scale-[1.02]"
          />
          <figcaption className="px-2 pb-1 pt-2 text-center text-xs text-(--page-text)/60">
            Esquema orientativo: Monterrey al centro y los municipios conurbados alrededor.
          </figcaption>
        </figure>
      </Reveal>

      <Reveal variant="up" className="mx-auto mt-4 max-w-2xl rounded-xl bg-(--surface) p-4 text-center text-sm text-(--page-text)/85 ring-1 ring-(--hairline)">
        {mapa.relacion}
      </Reveal>

      <div className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {mapa.zonas.map((z, i) => (
          <Reveal
            key={z.nombre}
            variant="scale"
            delay={i * 50}
            className="rounded-xl border border-(--hairline) bg-(--surface) p-3 text-left"
          >
            <p className="text-sm font-bold text-sierra dark:text-naranja">{z.nombre}</p>
            <p className="text-xs text-(--page-text)/80">{z.texto}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* ---------- 6. Un dia en la ciudad ---------- */
function Dia() {
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-naranja">{dia.titulo}</h3>
      </Reveal>
      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-4">
        {dia.fases.map((f, i) => (
          <Reveal
            key={f.nombre}
            variant="up"
            delay={i * 110}
            className="relative rounded-2xl border-2 border-(--hairline) bg-(--surface) p-5 text-left shadow-[0_6px_16px_rgba(27,73,101,0.10)] transition duration-300 hover:-translate-y-2 hover:border-naranja"
          >
            <span className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-sierra to-naranja text-sm font-bold text-white ring-4 ring-(--page-bg)">
              {i + 1}
            </span>
            <p className="mt-2 font-bold text-sierra dark:text-naranja">{f.nombre}</p>
            <p className="text-xs font-semibold tracking-wide text-oro">{f.clave}</p>
            <p className="mt-2 text-xs leading-snug text-(--page-text)/85">{f.texto}</p>
            {i < dia.fases.length - 1 && (
              <span className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-xl text-naranja md:block">
                →
              </span>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* ---------- 7. Como armar la visita ---------- */
function ArmaTuViaje() {
  const [ref, visible] = useReveal({ threshold: 0.4 })
  const { ciudad, excursiones, recomendado } = armaTuViaje.formula
  const b = useCountUp(ciudad, visible)
  const e = useCountUp(excursiones, visible, 700)
  const r = useCountUp(recomendado, visible)
  const total = b + e
  const ok = total >= recomendado

  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-naranja">{armaTuViaje.titulo}</h3>
      </Reveal>

      <ol className="relative mx-auto max-w-2xl border-l-2 border-naranja/40 pl-8">
        {armaTuViaje.pasos.map((p, i) => (
          <Reveal key={p.titulo} as="li" variant="left" delay={i * 100} className="relative mb-6 last:mb-0">
            <span className="absolute -left-10.5 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-sierra to-naranja text-sm font-bold text-white ring-4 ring-(--page-bg)">
              {i + 1}
            </span>
            <p className="font-bold text-sierra dark:text-naranja">{p.titulo}</p>
            <p className="text-sm text-(--page-text)/85">{p.texto}</p>
          </Reveal>
        ))}
      </ol>

      {/* Cuenta de dias, con animacion de conteo */}
      <Reveal variant="zoom" className="mx-auto mt-8 max-w-3xl">
        <div
          ref={ref}
          className="flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-(--surface) p-6 text-center ring-1 ring-(--hairline) sm:gap-4"
        >
          <Chip label="Días en la ciudad" value={b} />
          <span className="text-2xl font-bold text-naranja">+</span>
          <Chip label="Días de excursión" value={e} />
          <span className={`text-2xl font-extrabold ${ok ? 'text-emerald-500' : 'text-naranja'}`}>≥</span>
          <Chip label="Mínimo recomendado" value={r} tone="sierra" />
          <span
            className={`ml-1 rounded-full px-4 py-1.5 text-sm font-extrabold text-white transition-colors ${
              ok ? 'bg-emerald-500' : 'bg-naranja'
            }`}
          >
            {ok ? '¡Viaje completo!' : '…'}
          </span>
        </div>
      </Reveal>
    </div>
  )
}

function Chip({ label, value, tone }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-extrabold text-white ${
          tone === 'sierra' ? 'bg-sierra' : 'bg-linear-to-br from-naranja to-sierra'
        }`}
      >
        {value}
      </span>
      <span className="mt-1 max-w-24 text-[10px] font-semibold uppercase tracking-wide text-(--page-text)/60">
        {label}
      </span>
    </div>
  )
}

/* ---------- 8. Los imperdibles ---------- */
function Imperdibles() {
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-naranja">Los imperdibles</h3>
      </Reveal>
      <Reveal
        variant="zoom"
        className="mx-auto max-w-3xl rounded-2xl bg-linear-to-br from-sierra to-naranja p-8 text-center text-white shadow-xl"
      >
        <p className="text-white/95">{imperdibles.texto}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {imperdibles.lugares.map((h, i) => {
            const esencial = i < imperdibles.objetivo
            return (
              <Reveal key={h.nombre} variant="zoom" delay={i * 110} className="relative">
                <img
                  src={h.img}
                  alt={h.nombre}
                  loading="lazy"
                  className={`h-28 w-20 rounded-lg object-cover object-top shadow-lg transition ${
                    esencial ? 'ring-4 ring-oro' : 'opacity-45 grayscale'
                  }`}
                />
                {esencial && (
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-oro text-xs font-bold text-sierra">
                    ✓
                  </span>
                )}
                <span className="mt-1 block text-xs">{h.nombre}</span>
              </Reveal>
            )
          })}
        </div>
        <p className="mt-6 inline-block rounded-full bg-white/15 px-5 py-1.5 text-lg font-extrabold">
          {imperdibles.objetivo} de 5 = ya conociste Monterrey
        </p>
      </Reveal>
    </div>
  )
}

/* ---------- 9. Como se habla aqui ---------- */
function Regionalismos() {
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-naranja">Cómo se habla aquí</h3>
        <p className="mt-2 text-sm text-sierra/80 dark:text-arena/70">Pasa el cursor por cada palabra.</p>
      </Reveal>
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regionalismos.map((kw, i) => (
          <Reveal key={kw.k} variant="scale" delay={i * 55} className="flip h-28" tabIndex={0}>
            <div className="flip-inner">
              <div className="flip-face rounded-xl border-2 border-(--hairline) bg-(--surface) p-4 text-center">
                <p className="font-bold text-sierra dark:text-naranja">{kw.k}</p>
              </div>
              <div className="flip-face flip-back rounded-xl bg-linear-to-br from-sierra to-naranja p-4 text-center text-white">
                <p className="text-xs leading-snug">{kw.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Tutorial() {
  return (
    <Section
      id="tutorial"
      eyebrow="Cómo recorrerla"
      title="Guía para visitar Monterrey"
      intro={tutorial.intro}
    >
      <Objetivo />
      <Transporte />
      <Recorrido />
      <Planes />
      <Mapa />
      <Dia />
      <ArmaTuViaje />
      <Imperdibles />
      <Regionalismos />
    </Section>
  )
}
