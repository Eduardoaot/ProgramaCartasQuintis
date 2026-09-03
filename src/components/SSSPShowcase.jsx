import Tilt from './Tilt.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { rarezas } from '../data/rarezas.js'

const s = rarezas.secreta

/** Presentacion a pantalla completa de la carta secreta (SSSP). */
export default function SSSPShowcase() {
  const [ref, visible] = useReveal({ threshold: 0.25 })

  return (
    <section
      ref={ref}
      aria-label="Carta secreta SSSP"
      className="relative overflow-hidden bg-[#0a0609] px-6 py-24 text-white sm:py-28"
    >
      {/* Halo de luz */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 h-140 w-140 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-opacity duration-1000 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(circle, rgba(243,185,79,0.38), rgba(233,84,140,0.16) 45%, transparent 70%)',
        }}
      />
      {/* Rejilla sutil de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Carta */}
        <div
          className={`flex-none transition-all duration-1000 ease-out ${
            visible ? 'translate-y-0 scale-100 opacity-100 blur-0' : 'translate-y-10 scale-75 opacity-0 blur-md'
          }`}
        >
          <Tilt max={22} className="rounded-2xl">
            <div className="foil relative overflow-hidden rounded-2xl">
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className="w-[260px] rounded-2xl shadow-[0_30px_90px_rgba(243,185,79,0.4)] ring-2 ring-dorado/50 sm:w-[300px]"
              />
              {visible && (
                <span
                  aria-hidden="true"
                  className="sssp-sweep pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-transparent via-white/60 to-transparent"
                />
              )}
            </div>
          </Tilt>
        </div>

        {/* Texto */}
        <div
          className={`text-center transition-all duration-1000 ease-out lg:text-left ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: visible ? '200ms' : '0ms' }}
        >
          <span className="inline-block rounded-lg bg-linear-to-br from-dorado to-rosa px-3 py-1 text-sm font-extrabold tracking-[0.3em] text-vino">
            {s.codigo}
          </span>
          <h3 className="mt-4 text-3xl font-extrabold sm:text-4xl">{s.nombre}</h3>
          <p className="mt-1 font-semibold text-dorado">{s.titular}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">{s.descripcion}</p>

          <dl className="mx-auto mt-6 grid max-w-md gap-4 text-left sm:grid-cols-3 lg:mx-0">
            {[
              ['Por cartón', s.porCarton],
              ['En el sobre', s.aparicion],
              ['Numeración', s.numeracion],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] font-semibold uppercase tracking-widest text-dorado/80">
                  {label}
                </dt>
                <dd className="text-xs text-white/80">{value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
            {s.caracteristicas.map((c) => (
              <li
                key={c}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {c}
              </li>
            ))}
          </ul>

          <div
            className={`mt-8 inline-flex items-baseline gap-3 rounded-2xl bg-white/10 px-6 py-4 ring-1 ring-dorado/40 transition-all duration-700 ${
              visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
            style={{ transitionDelay: visible ? '500ms' : '0ms' }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/55">
              Valor
            </span>
            <span className="text-2xl font-extrabold text-dorado sm:text-3xl">{s.valor}</span>
          </div>
          <p className="mt-2 text-[11px] text-white/40">{s.valorNota}</p>
        </div>
      </div>
    </section>
  )
}
