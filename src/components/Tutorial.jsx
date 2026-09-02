import { useEffect, useRef, useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { tutorial } from '../data/tutorial.js'

const { objetivo, mazos, anatomia, tiposCarta, arena, turno, aproximacion, comoGanar, keywords } =
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
      className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-vino via-rosa to-vino p-8 text-center text-white shadow-xl"
    >
      <h3 className="text-xs font-bold uppercase tracking-[0.35em] text-white/80">{objetivo.titulo}</h3>
      <div ref={ref} className="mt-5 flex justify-center gap-4">
        {Array.from({ length: objetivo.novias }).map((_, i) => (
          <span
            key={i}
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl ring-2 ring-white/40 ${
              visible ? 'heart-pop' : 'opacity-0'
            }`}
            style={visible ? { animationDelay: `${i * 180}ms` } : undefined}
          >
            💍
          </span>
        ))}
      </div>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/95">{objetivo.texto}</p>
    </Reveal>
  )
}

/* ---------- 2. Los tres mazos ---------- */
function Mazos() {
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">{mazos.titulo}</h3>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {mazos.items.map((m, i) => (
          <Reveal
            key={m.nombre}
            variant="up"
            delay={i * 90}
            className="group relative rounded-2xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-6 text-left shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:-translate-y-2 hover:border-rosa"
          >
            {/* pila de cartas */}
            <div className="mb-4 flex h-16 items-end gap-1.5">
              {[0, 1, 2, 3].map((k) => (
                <span
                  key={k}
                  className="w-6 rounded-md bg-gradient-to-b from-rosa to-vino transition-all duration-300 group-hover:translate-y-[-3px]"
                  style={{ height: `${40 + k * 8}%`, transitionDelay: `${k * 40}ms` }}
                />
              ))}
            </div>
            <p className="text-lg font-bold text-vino dark:text-rosa">{m.nombre}</p>
            <p className="text-sm font-semibold text-dorado">{m.cantidad}</p>
            <p className="mt-2 text-sm text-[var(--page-text)]/80">{m.detalle}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* ---------- 3. Anatomía ---------- */
function Anatomia() {
  const [ref, visible] = useReveal({ threshold: 0.3 })
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-2 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">{anatomia.titulo}</h3>
        <p className="mt-2 text-sm text-vino/80 dark:text-rosa-claro/70">{anatomia.nota}</p>
      </Reveal>
      <div
        ref={ref}
        className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[minmax(0,300px)_1fr]"
      >
        <figure className="relative mx-auto w-full max-w-[300px]">
          <img
            src={anatomia.img}
            alt={anatomia.alt}
            loading="lazy"
            className={`w-full rounded-xl shadow-2xl transition-all duration-700 ${
              visible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
            }`}
          />
          {anatomia.partes.map((p, i) => (
            <span
              key={p.n}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span
                className={`flex h-6 w-6 cursor-help items-center justify-center rounded-full border-2 border-white bg-rosa text-xs font-bold text-white ${
                  visible ? 'anatomy-pin' : 'opacity-0'
                }`}
                style={visible ? { animationDelay: `${i * 110}ms` } : undefined}
              >
                {p.n}
              </span>
              <span className="pointer-events-none absolute left-1/2 top-8 z-20 w-44 -translate-x-1/2 rounded-lg bg-vino px-3 py-2 text-xs text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 dark:bg-rosa">
                <strong className="block">{p.label}</strong>
                {p.texto}
              </span>
            </span>
          ))}
        </figure>

        <ol className="grid gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {anatomia.partes.map((p, i) => (
            <Reveal
              key={p.n}
              variant={i % 2 ? 'right' : 'left'}
              delay={i * 45}
              as="li"
              className="flex gap-2 rounded-lg border border-[var(--hairline)] bg-[var(--surface)] p-2.5 text-left"
            >
              <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-vino text-[11px] font-bold text-white dark:bg-rosa">
                {p.n}
              </span>
              <span className="text-xs leading-snug text-[var(--page-text)]/90">
                <strong className="text-vino dark:text-rosa">{p.label}.</strong> {p.texto}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  )
}

/* ---------- 4. Tipos de carta ---------- */
function TiposCarta() {
  return (
    <div className="mt-16 space-y-6">
      <Reveal variant="up" className="text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">Tipos de carta</h3>
      </Reveal>
      {tiposCarta.map((t, i) => (
        <Reveal
          key={t.codigo}
          variant={i % 2 === 0 ? 'left' : 'right'}
          className={`mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-2xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-5 shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:border-rosa sm:gap-7 ${
            i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
          }`}
        >
          <Tilt className="w-36 flex-none rounded-lg bg-[var(--surface-sunken)] p-2">
            <img src={t.img} alt={t.nombre} loading="lazy" className="block w-full rounded-md shadow-lg" />
          </Tilt>
          <div className="text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-gradient-to-br from-vino to-rosa px-2 py-0.5 text-xs font-extrabold text-white">
                {t.codigo}
              </span>
              <h4 className="text-lg font-bold text-vino dark:text-rosa">{t.nombre}</h4>
            </div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-dorado">{t.valor}</p>
            <p className="mt-2 text-sm text-[var(--page-text)]/90">{t.texto}</p>
            <p className="mt-2 text-sm text-[var(--page-text)]/75">
              <strong className="text-rosa">Cómo se usa:</strong> {t.comoSeUsa}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/* ---------- 5. La mesa (diagrama animado) ---------- */
function Mesa() {
  const [ref, visible] = useReveal({ threshold: 0.3 })
  const cols = [78, 170, 262, 354, 446]
  const Row = ({ y, label, glowMid }) => (
    <>
      <text x="8" y={y + 34} className="fill-current text-[11px] font-bold" style={{ opacity: 0.6 }}>
        {label}
      </text>
      {cols.map((cx, i) => (
        <rect
          key={i}
          x={cx - 34}
          y={y}
          width="68"
          height="56"
          rx="8"
          className={glowMid && i === 2 ? 'cell-glow' : ''}
          fill={glowMid && i === 2 ? 'var(--color-rosa)' : 'var(--surface)'}
          stroke="var(--color-rosa)"
          strokeOpacity={glowMid && i === 2 ? 1 : 0.3}
          strokeWidth="2"
        />
      ))}
    </>
  )

  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-2 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">{arena.titulo}</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-vino/80 dark:text-rosa-claro/70">{arena.nota}</p>
      </Reveal>

      <Reveal variant="scale" className="mx-auto max-w-2xl">
        <div ref={ref} className="overflow-x-auto rounded-2xl border-2 border-[var(--hairline)] bg-[var(--surface-alt)] p-4">
          <svg viewBox="0 0 500 330" className="mx-auto block w-full min-w-[420px] text-[var(--page-text)]">
            <defs>
              <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" fill="var(--color-dorado)" />
              </marker>
            </defs>
            <Row y={16} label="Rival" />
            <Row y={130} label="Héroes" glowMid />
            <Row y={244} label="Tú" glowMid />

            {/* frente */}
            <path
              d="M262 244 L262 192"
              className={`draw-in ${visible ? 'go' : ''}`}
              style={{ '--dash': 60, animationDelay: '.1s' }}
              stroke="var(--color-dorado)"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#ah)"
            />
            {/* diagonales */}
            <path
              d="M248 246 L184 192"
              className={`draw-in ${visible ? 'go' : ''}`}
              style={{ '--dash': 120, animationDelay: '.35s' }}
              stroke="var(--color-dorado)"
              strokeWidth="3"
              strokeDasharray="6 5"
              fill="none"
              markerEnd="url(#ah)"
            />
            <path
              d="M276 246 L340 192"
              className={`draw-in ${visible ? 'go' : ''}`}
              style={{ '--dash': 120, animationDelay: '.5s' }}
              stroke="var(--color-dorado)"
              strokeWidth="3"
              strokeDasharray="6 5"
              fill="none"
              markerEnd="url(#ah)"
            />
            <text x="292" y="228" className="fill-current text-[10px] font-semibold">de frente</text>
            <text x="150" y="228" className="fill-current text-[10px] font-semibold">diagonal</text>
          </svg>
        </div>
      </Reveal>

      <Reveal variant="up" className="mx-auto mt-4 max-w-2xl rounded-xl bg-[var(--surface)] p-4 text-center text-sm text-[var(--page-text)]/85 ring-1 ring-[var(--hairline)]">
        {arena.relacion}
      </Reveal>

      <div className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {arena.zonas.map((z, i) => (
          <Reveal
            key={z.nombre}
            variant="scale"
            delay={i * 50}
            className="rounded-xl border border-[var(--hairline)] bg-[var(--surface)] p-3 text-left"
          >
            <p className="text-sm font-bold text-vino dark:text-rosa">{z.nombre}</p>
            <p className="text-xs text-[var(--page-text)]/80">{z.texto}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* ---------- 6. El turno ---------- */
function Turno() {
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">{turno.titulo}</h3>
      </Reveal>
      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-4">
        {turno.fases.map((f, i) => (
          <Reveal
            key={f.nombre}
            variant="up"
            delay={i * 110}
            className="relative rounded-2xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-5 text-left shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:-translate-y-2 hover:border-rosa"
          >
            <span className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-vino to-rosa text-sm font-bold text-white ring-4 ring-[var(--page-bg)]">
              {i + 1}
            </span>
            <p className="mt-2 font-bold text-vino dark:text-rosa">{f.nombre}</p>
            <p className="text-xs font-semibold tracking-wide text-dorado">{f.clave}</p>
            <p className="mt-2 text-xs leading-snug text-[var(--page-text)]/85">{f.texto}</p>
            {i < turno.fases.length - 1 && (
              <span className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-xl text-rosa md:block">
                →
              </span>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* ---------- 7. La aproximación ---------- */
function Aproximacion() {
  const [ref, visible] = useReveal({ threshold: 0.4 })
  const { base, episodios, requerido } = aproximacion.formula
  const b = useCountUp(base, visible)
  const e = useCountUp(episodios, visible, 700)
  const r = useCountUp(requerido, visible)
  const total = b + e
  const ok = total >= requerido

  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">{aproximacion.titulo}</h3>
      </Reveal>

      <ol className="relative mx-auto max-w-2xl border-l-2 border-rosa/40 pl-8">
        {aproximacion.pasos.map((p, i) => (
          <Reveal key={p.titulo} as="li" variant="left" delay={i * 100} className="relative mb-6 last:mb-0">
            <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-vino to-rosa text-sm font-bold text-white ring-4 ring-[var(--page-bg)]">
              {i + 1}
            </span>
            <p className="font-bold text-vino dark:text-rosa">{p.titulo}</p>
            <p className="text-sm text-[var(--page-text)]/85">{p.texto}</p>
          </Reveal>
        ))}
      </ol>

      {/* Formula visual con conteo */}
      <Reveal variant="zoom" className="mx-auto mt-8 max-w-3xl">
        <div
          ref={ref}
          className="flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-[var(--surface)] p-6 text-center ring-1 ring-[var(--hairline)] sm:gap-4"
        >
          <Chip label="Poder de novia" value={b} />
          <span className="text-2xl font-bold text-rosa">+</span>
          <Chip label="Episodios" value={e} />
          <span className={`text-2xl font-extrabold ${ok ? 'text-emerald-500' : 'text-rosa'}`}>≥</span>
          <Chip label="Poder requerido" value={r} tone="vino" />
          <span
            className={`ml-1 rounded-full px-4 py-1.5 text-sm font-extrabold text-white transition-colors ${
              ok ? 'bg-emerald-500' : 'bg-rosa'
            }`}
          >
            {ok ? '¡Conquista!' : '…'}
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
          tone === 'vino' ? 'bg-vino' : 'bg-gradient-to-br from-rosa to-vino'
        }`}
      >
        {value}
      </span>
      <span className="mt-1 max-w-[6rem] text-[10px] font-semibold uppercase tracking-wide text-[var(--page-text)]/60">
        {label}
      </span>
    </div>
  )
}

/* ---------- 8. Cómo ganar ---------- */
function ComoGanar() {
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">Cómo ganar</h3>
      </Reveal>
      <Reveal
        variant="zoom"
        className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-vino to-rosa p-8 text-center text-white shadow-xl"
      >
        <p className="text-white/95">{comoGanar.texto}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {comoGanar.hermanas.map((h, i) => {
            const conquistada = i < comoGanar.objetivo
            return (
              <Reveal key={h.nombre} variant="zoom" delay={i * 110} className="relative">
                <img
                  src={h.img}
                  alt={h.nombre}
                  loading="lazy"
                  className={`h-28 w-20 rounded-lg object-cover object-top shadow-lg transition ${
                    conquistada ? 'ring-4 ring-dorado' : 'opacity-45 grayscale'
                  }`}
                />
                {conquistada && (
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-dorado text-xs font-bold text-vino">
                    ✓
                  </span>
                )}
                <span className="mt-1 block text-xs">{h.nombre}</span>
              </Reveal>
            )
          })}
        </div>
        <p className="mt-6 inline-block rounded-full bg-white/15 px-5 py-1.5 text-lg font-extrabold">
          {comoGanar.objetivo} / {comoGanar.objetivo} novias = victoria
        </p>
      </Reveal>
    </div>
  )
}

/* ---------- 9. Palabras clave ---------- */
function Keywords() {
  return (
    <div className="mt-16">
      <Reveal variant="up" className="mb-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-rosa">Palabras clave</h3>
        <p className="mt-2 text-sm text-vino/80 dark:text-rosa-claro/70">Pasa el cursor por cada una.</p>
      </Reveal>
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {keywords.map((kw, i) => (
          <Reveal key={kw.k} variant="scale" delay={i * 55} className="flip h-28" tabIndex={0}>
            <div className="flip-inner">
              <div className="flip-face rounded-xl border-2 border-[var(--hairline)] bg-[var(--surface)] p-4 text-center">
                <p className="font-bold text-vino dark:text-rosa">{kw.k}</p>
              </div>
              <div className="flip-face flip-back rounded-xl bg-gradient-to-br from-vino to-rosa p-4 text-center text-white">
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
      eyebrow="Aprende a jugar"
      title="Tutorial: cómo jugarlo"
      intro={tutorial.intro}
    >
      <Objetivo />
      <Mazos />
      <Anatomia />
      <TiposCarta />
      <Mesa />
      <Turno />
      <Aproximacion />
      <ComoGanar />
      <Keywords />
    </Section>
  )
}
