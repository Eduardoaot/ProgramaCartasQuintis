import { useEffect, useMemo, useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import MapaReal from './MapaReal.jsx'
import BotonAgenda from './BotonAgenda.jsx'
import Icono from './Icono.jsx'
import Numero from './Numero.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { useAgenda } from '../context/AgendaContext.jsx'
import { tutorial } from '../data/tutorial.js'
import { mapaCentro, mapaMetropolitano } from '../data/mapas.js'
import { video } from '../data/videos.js'

const { objetivo, transporte, recorrido, planes, mapa, dia, armaTuViaje, imperdibles, regionalismos } =
  tutorial

/* Encabezado comun de cada bloque de la guia */
function Bloque({ titulo, nota, children, className = '' }) {
  return (
    <div className={`mt-20 ${className}`}>
      <Reveal variant="up" className="mx-auto mb-8 max-w-3xl text-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-naranja">{titulo}</h3>
        {nota && <p className="mt-3 text-sm text-sierra/80 dark:text-arena/70">{nota}</p>}
      </Reveal>
      {children}
    </div>
  )
}

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

/* ---------- 1. La meta ---------- */
function Objetivo() {
  const [ref, visible] = useReveal({ threshold: 0.35 })
  const clip = video.obispado

  return (
    <Reveal
      variant="up"
      className="mx-auto grid max-w-4xl gap-8 overflow-hidden rounded-3xl bg-linear-to-br from-sierra to-sierra-oscuro p-8 text-white shadow-[0_18px_40px_rgba(16,51,74,0.35)] sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-stretch"
    >
      {/* El texto se reparte para llegar al alto del video */}
      <div className="flex flex-col justify-between gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-oro">{objetivo.titulo}</p>
          <p className="mt-4 text-lg leading-relaxed text-white/90">{objetivo.texto}</p>
          <p className="mt-3.5 text-sm leading-relaxed text-white/65">{objetivo.texto2}</p>
        </div>

        <ul ref={ref} className="grid gap-2.5">
          {objetivo.lugares.map((lugar, i) => (
            <li
              key={lugar.nombre}
              className={`flex items-start gap-3.5 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/20 transition duration-300 hover:bg-white/15 ${
                visible ? 'pop-in' : 'opacity-0'
              }`}
              style={visible ? { animationDelay: `${i * 160}ms` } : undefined}
            >
              <Numero n={i + 1} tam="sm" tono="claro" className="mt-0.5" />
              <span className="min-w-0">
                <span className="block font-display text-sm font-bold leading-tight">
                  {lugar.nombre}
                </span>
                <span className="mt-0.5 block text-xs leading-snug text-white/60">
                  {lugar.texto}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <p className="border-l-2 border-oro pl-4 text-sm leading-snug text-white/70">
          {objetivo.cierre}
        </p>
      </div>

      {/* La ciudad desde el mirador del Obispado */}
      <figure className="mx-auto flex w-52 min-h-96 flex-none flex-col sm:w-60 lg:min-h-[27rem]">
        <video
          className="w-full flex-1 rounded-2xl bg-black/40 object-cover shadow-[0_18px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/20"
          src={clip.src}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-label={clip.descripcion}
        />
        <figcaption className="mt-2 text-center text-[11px] text-white/45">
          <a href={clip.enlace} target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
            Vista desde el Obispado · {clip.autor} · {clip.licencia}
          </a>
        </figcaption>
      </figure>
    </Reveal>
  )
}

/* ---------- 2. Como moverte ---------- */
function Transporte() {
  const { app } = transporte

  return (
    <Bloque titulo={transporte.titulo}>
      <div className="grid gap-6 md:grid-cols-3">
        {transporte.items.map((m, i) => (
          <Reveal
            key={m.nombre}
            variant="up"
            delay={i * 90}
            className="group rounded-2xl border border-(--hairline) bg-(--surface) p-6 text-left shadow-[0_6px_16px_rgba(27,73,101,0.10)] transition duration-300 hover:-translate-y-1.5 hover:border-naranja hover:shadow-[0_18px_32px_rgba(27,73,101,0.22)]"
          >
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-(--surface-alt) ring-1 ring-(--hairline) transition duration-300 group-hover:scale-110">
              <Icono nombre={m.icono} tam={26} />
            </span>
            <p className="font-display text-lg font-bold text-sierra dark:text-naranja">{m.nombre}</p>
            <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-oro">
              {m.cantidad}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-(--page-text)/80">{m.detalle}</p>
          </Reveal>
        ))}
      </div>

      {/* Urbani: como se paga el transporte */}
      <Reveal
        variant="up"
        delay={120}
        className="mt-8 overflow-hidden rounded-3xl border border-(--hairline) bg-(--surface-alt) p-7 shadow-[0_8px_22px_rgba(27,73,101,0.12)] sm:p-9"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-linear-to-br from-sierra to-naranja px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <Icono nombre="lucide/smartphone-nfc" tam={16} color="ffffff" /> {app.nombre}
            </span>
            <h4 className="mt-4 font-display text-xl font-bold text-sierra dark:text-naranja">
              {app.titular}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-(--page-text)/85">{app.texto}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {app.sirvePara.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-(--surface) px-3 py-1 text-xs font-semibold text-sierra ring-1 ring-(--hairline) dark:text-naranja"
                >
                  {s}
                </li>
              ))}
            </ul>

            <a
              href={app.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-naranja underline-offset-4 hover:underline"
            >
              urbani.com.mx <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ol className="grid gap-4 sm:grid-cols-3">
            {app.comoFunciona.map((paso, i) => (
              <li
                key={paso.titulo}
                className="rounded-2xl bg-(--surface) p-5 ring-1 ring-(--hairline) transition duration-300 hover:-translate-y-1 hover:ring-naranja"
              >
                <Numero n={i + 1} tam="md" />
                <p className="mt-3 font-display text-sm font-bold text-sierra dark:text-naranja">
                  {paso.titulo}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-(--page-text)/75">{paso.texto}</p>
              </li>
            ))}
            <li className="rounded-2xl border-l-4 border-oro bg-(--surface) p-4 text-xs leading-snug text-(--page-text)/75 sm:col-span-3">
              {app.nota}
            </li>
          </ol>
        </div>
      </Reveal>
    </Bloque>
  )
}

/* ---------- 3. Anatomia del centro ---------- */
const marcadoresCentro = mapaCentro.puntos.map((p) => ({
  id: p.n,
  lat: p.lat,
  lng: p.lng,
  etiqueta: p.n,
  titulo: p.nombre,
  texto: p.texto,
  tono: p.destacado ? 'sierra' : 'naranja',
}))

function Recorrido() {
  const [activo, setActivo] = useState(null)

  return (
    <Bloque titulo={recorrido.titulo} nota={recorrido.nota}>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)]">
        <div>
          <MapaReal
            centro={mapaCentro.centro}
            zoom={mapaCentro.zoom}
            marcadores={marcadoresCentro}
            rutas={mapaCentro.rutas}
            seleccionado={activo}
            onSeleccionar={setActivo}
            zoomEnfoque={16}
            alto="h-[440px] sm:h-[540px]"
            ariaLabel="Mapa del centro de Monterrey con los nueve puntos del recorrido"
          />

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-(--page-text)/70">
            {recorrido.leyenda.map((l) => (
              <span key={l.texto} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1 w-8 rounded-full"
                  style={{ background: l.color }}
                />
                {l.texto}
              </span>
            ))}
          </div>

          {recorrido.variantes && (
            <p className="mt-4 rounded-xl border-l-4 border-naranja bg-(--surface) p-4 text-sm leading-snug text-(--page-text)/85 shadow-[0_6px_16px_rgba(27,73,101,0.10)]">
              <strong className="text-naranja">Distancias:</strong> {recorrido.variantes}
            </p>
          )}
        </div>

        {/* Indice del recorrido: pulsar lleva el mapa al punto */}
        <div className="lg:sticky lg:top-24">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-(--page-text)/45">
            De norte a sur
          </p>
          <ol className="flex flex-col gap-1.5">
            {mapaCentro.puntos.map((p) => {
              const activoAqui = activo === p.n
              return (
                <li key={p.n}>
                  <button
                    type="button"
                    onClick={() => setActivo(p.n)}
                    aria-current={activoAqui}
                    className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition duration-300 ${
                      activoAqui
                        ? 'border-naranja bg-naranja/10 text-naranja'
                        : 'border-(--hairline) bg-(--surface) text-(--page-text)/85 hover:border-naranja hover:bg-(--surface-alt)'
                    }`}
                  >
                    <Numero n={p.n} tam="sm" />
                    <span className="text-sm font-semibold leading-tight">{p.nombre}</span>
                  </button>
                </li>
              )
            })}
          </ol>
          <p className="mt-3 text-xs text-(--page-text)/50">
            El detalle de cada punto sale en el globo del mapa.
          </p>
        </div>
      </div>
    </Bloque>
  )
}

/* ---------- 4. Los planes ---------- */
function Planes() {
  return (
    <Bloque titulo={planes.titulo} nota={planes.nota}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {planes.items.map((plan, i) => (
          <Reveal
            key={plan.id}
            variant="up"
            delay={(i % 3) * 90}
            className="group flex flex-col overflow-hidden rounded-2xl border border-(--hairline) bg-(--surface) shadow-[0_6px_16px_rgba(27,73,101,0.10)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_38px_rgba(27,73,101,0.22)]"
          >
            <div className="relative aspect-16/10 overflow-hidden">
              <img
                src={plan.imagen}
                alt={plan.nombre}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-sierra/80 via-transparent to-transparent"
              />
              <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                {plan.zona}
              </span>
              <span className="absolute right-3 top-3 rounded-full bg-(--surface)/95 px-3 py-1 text-[11px] font-bold text-sierra dark:text-naranja">
                <span className="inline-flex items-center gap-1.5">
                  <Icono nombre="lucide/clock" tam={12} /> {plan.duracion}
                </span>
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <h4 className="font-display text-lg font-bold leading-snug text-sierra dark:text-naranja">
                {plan.nombre}
              </h4>
              <p className="text-sm leading-relaxed text-(--page-text)/85">{plan.texto}</p>
              <p className="rounded-xl bg-(--surface-alt) p-3 text-xs leading-snug text-(--page-text)/80 ring-1 ring-(--hairline)">
                <strong className="text-naranja">Cómo hacerlo:</strong> {plan.consejo}
              </p>
              <BotonAgenda
                className="mt-auto self-start"
                item={{
                  id: `plan-${plan.id}`,
                  tipo: 'plan',
                  nombre: plan.nombre,
                  detalle: plan.zona,
                  dias: plan.dias,
                  imagen: plan.imagen,
                }}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </Bloque>
  )
}

/* ---------- 5. El mapa del area metropolitana ---------- */
function Mapa() {
  const [activo, setActivo] = useState(null)
  const [pestana, setPestana] = useState('lugares')

  const marcadores = useMemo(
    () => [
      ...mapaMetropolitano.municipios.map((m) => ({
        id: `mun-${m.nombre}`,
        lat: m.lat,
        lng: m.lng,
        etiqueta: '',
        tono: 'naranja',
        grande: m.grupo === 'central',
        titulo: m.nombre,
        texto: `${m.poblacion} habitantes (Censo 2020)`,
      })),
      ...mapaMetropolitano.lugares.map((l) => ({
        id: `lug-${l.nombre}`,
        lat: l.lat,
        lng: l.lng,
        etiqueta: '',
        tono: 'cielo',
        titulo: l.nombre,
        texto: l.texto,
      })),
    ],
    [],
  )

  const listas = {
    lugares: mapaMetropolitano.lugares.map((l) => ({
      id: `lug-${l.nombre}`,
      nombre: l.nombre,
      detalle: l.texto,
      tono: 'cielo',
      lugar: l,
    })),
    municipios: mapaMetropolitano.municipios.map((m) => ({
      id: `mun-${m.nombre}`,
      nombre: m.nombre,
      detalle: `${m.poblacion} hab. · ${m.grupo === 'central' ? 'Central' : 'Conurbado'}`,
      tono: 'naranja',
    })),
  }

  return (
    <Bloque titulo={mapa.titulo} nota={mapa.nota}>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
        <div>
          <MapaReal
            centro={mapaMetropolitano.centro}
            zoom={mapaMetropolitano.zoom}
            marcadores={marcadores}
            seleccionado={activo}
            onSeleccionar={setActivo}
            zoomEnfoque={12}
            alto="h-[460px] sm:h-[580px]"
            ariaLabel="Mapa del área metropolitana de Monterrey con sus municipios y lugares de interés"
          />

          <p className="mt-4 rounded-xl border-l-4 border-naranja bg-(--surface) p-4 text-sm text-(--page-text)/85 shadow-[0_6px_16px_rgba(27,73,101,0.10)]">
            {mapa.relacion}
          </p>
        </div>

        {/* Indice conmutable: pulsar mueve el mapa */}
        <div className="lg:sticky lg:top-24">
          <div
            aria-label="Qué mostrar en el mapa"
            className="mb-4 flex gap-1 rounded-full bg-(--surface-alt) p-1 ring-1 ring-(--hairline)"
          >
            {[
              ['lugares', `Lugares (${mapaMetropolitano.lugares.length})`],
              ['municipios', `Municipios (${mapaMetropolitano.municipios.length})`],
            ].map(([clave, etiqueta]) => (
              <button
                key={clave}
                type="button"
                aria-pressed={pestana === clave}
                onClick={() => setPestana(clave)}
                className={`flex-1 rounded-full px-3 py-2 text-xs font-bold transition duration-300 ${
                  pestana === clave
                    ? 'bg-sierra text-white shadow-sm dark:bg-naranja'
                    : 'text-(--page-text)/60 hover:text-naranja'
                }`}
              >
                {etiqueta}
              </button>
            ))}
          </div>

          <ul className="flex max-h-[430px] flex-col gap-1.5 overflow-y-auto pr-1">
            {listas[pestana].map((item) => {
              const activoAqui = activo === item.id
              return (
                <li key={item.id} className="flex items-stretch gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActivo(item.id)}
                    aria-current={activoAqui}
                    className={`flex min-w-0 flex-1 items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition duration-300 ${
                      activoAqui
                        ? 'border-naranja bg-naranja/10'
                        : 'border-(--hairline) bg-(--surface) hover:border-naranja hover:bg-(--surface-alt)'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-2.5 w-2.5 flex-none rounded-full ${
                        item.tono === 'cielo' ? 'bg-cielo' : 'bg-naranja'
                      }`}
                    />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-sierra dark:text-naranja">
                        {item.nombre}
                      </span>
                      <span className="block truncate text-xs text-(--page-text)/60">
                        {item.detalle}
                      </span>
                    </span>
                  </button>

                  {item.lugar && (
                    <BotonParada lugar={item.lugar} />
                  )}
                </li>
              )
            })}
          </ul>
          <p className="mt-3 text-xs text-(--page-text)/50">
            Pulsa un nombre para volar hasta él. El{' '}
            <span className="font-bold text-naranja">+</span> lo guarda como parada en tu agenda.
          </p>
        </div>
      </div>
    </Bloque>
  )
}

/** Botón compacto para guardar un lugar del mapa como parada de la agenda. */
function BotonParada({ lugar }) {
  const { tiene, alternar } = useAgenda()
  const id = `parada-${lugar.nombre}`
  const dentro = tiene(id)

  return (
    <button
      type="button"
      onClick={() =>
        alternar({
          id,
          tipo: 'parada',
          nombre: lugar.nombre,
          detalle: lugar.texto,
          imagen: lugar.imagen,
        })
      }
      aria-pressed={dentro}
      aria-label={
        dentro ? `Quitar ${lugar.nombre} de la agenda` : `Añadir ${lugar.nombre} a la agenda`
      }
      title={dentro ? 'En tu agenda' : 'Añadir a mi agenda'}
      className={`flex w-9 flex-none items-center justify-center rounded-xl border text-sm font-bold transition duration-300 ${
        dentro
          ? 'border-cactus bg-cactus text-white'
          : 'border-(--hairline) bg-(--surface) text-(--page-text)/45 hover:border-naranja hover:bg-naranja hover:text-white'
      }`}
    >
      <Icono
        nombre={dentro ? 'lucide/check' : 'lucide/plus'}
        tam={15}
        color={dentro ? 'ffffff' : undefined}
      />
    </button>
  )
}

/* ---------- 6. Un dia en la ciudad ---------- */
function Dia() {
  return (
    <Bloque titulo={dia.titulo}>
      <div className="relative mx-auto max-w-4xl">
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-6 hidden h-0.5 bg-linear-to-r from-sierra via-naranja to-oro md:block"
        />
        <div className="grid gap-6 md:grid-cols-4">
          {dia.fases.map((f, i) => (
            <Reveal
              key={f.nombre}
              variant="up"
              delay={i * 110}
              className="group relative flex flex-col items-start"
            >
              <span className="relative z-10 rounded-full bg-(--page-bg) p-1 shadow-lg transition duration-300 group-hover:scale-110">
                <Numero n={i + 1} tam="lg" />
              </span>
              <p className="mt-4 font-display text-base font-bold text-sierra dark:text-naranja">
                {f.nombre}
              </p>
              <p className="text-xs font-semibold tracking-wide text-oro">{f.clave}</p>
              <p className="mt-2 text-sm leading-snug text-(--page-text)/85">{f.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Bloque>
  )
}

/* ---------- 7. Como armar la visita ---------- */
function ArmaTuViaje() {
  const [ref, visible] = useReveal({ threshold: 0.4 })
  return (
    <Bloque titulo={armaTuViaje.titulo}>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
        <ol className="relative border-l-2 border-naranja/40 pl-8">
          {armaTuViaje.pasos.map((p, i) => (
            <Reveal
              key={p.titulo}
              as="li"
              variant="left"
              delay={i * 100}
              className="relative mb-8 last:mb-0"
            >
              <span className="absolute left-[-2.75rem] rounded-full bg-(--page-bg) p-1">
                <Numero n={i + 1} tam="md" />
              </span>
              <p className="font-display text-base font-bold text-sierra dark:text-naranja">
                {p.titulo}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-(--page-text)/85">{p.texto}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal variant="right">
          <div
            ref={ref}
            className="rounded-2xl border border-(--hairline) bg-(--surface) p-6 shadow-[0_6px_16px_rgba(27,73,101,0.10)]"
          >
            <p className="text-sm text-(--page-text)/75">{armaTuViaje.reparto.nota}</p>
            <ul className="mt-5 flex flex-col gap-3">
              {armaTuViaje.reparto.items.map((item) => (
                <TileDias key={item.label} item={item} visible={visible} />
              ))}
            </ul>
            <a
              href="#agenda"
              className="mt-5 flex items-center justify-center gap-2 rounded-full border border-(--hairline) px-4 py-2.5 text-xs font-bold text-sierra transition duration-300 hover:border-naranja hover:bg-naranja hover:text-white dark:text-naranja dark:hover:text-white"
            >
              <Icono nombre="lucide/calendar-days" tam={16} /> Ver mi agenda
            </a>
          </div>
        </Reveal>
      </div>
    </Bloque>
  )
}

function TileDias({ item, visible }) {
  const n = useCountUp(item.dias, visible)
  return (
    <li
      className={`flex items-center gap-4 rounded-xl p-3 ${
        item.destacado ? 'bg-sierra text-white' : 'bg-(--surface-alt) ring-1 ring-(--hairline)'
      }`}
    >
      <span
        className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl font-display text-2xl font-extrabold text-white ${
          item.destacado ? 'bg-white/15' : 'bg-linear-to-br from-naranja to-sierra'
        }`}
      >
        {n}
      </span>
      <span
        className={`text-sm font-semibold ${
          item.destacado ? 'text-white/90' : 'text-(--page-text)/80'
        }`}
      >
        {item.label}
      </span>
    </li>
  )
}

/* ---------- 8. Los imperdibles ---------- */
function Imperdibles() {
  return (
    <Bloque titulo={imperdibles.titulo} nota={imperdibles.texto}>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {imperdibles.lugares.map((lugar, i) => (
          <Reveal
            key={lugar.nombre}
            variant="scale"
            delay={i * 90}
            className="group relative overflow-hidden rounded-2xl shadow-[0_8px_20px_rgba(27,73,101,0.18)]"
          >
            <img
              src={lugar.imagen}
              alt={lugar.nombre}
              loading="lazy"
              className="aspect-3/4 w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sierra/90 via-sierra/20 to-transparent transition duration-500 group-hover:from-sierra"
            />
            {lugar.esencial && (
              <span className="absolute left-2 top-2 rounded-full bg-oro px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sierra">
                Esencial
              </span>
            )}
            <span className="absolute inset-x-0 bottom-0 p-3 font-display text-sm font-bold leading-tight text-white">
              {lugar.nombre}
            </span>
          </Reveal>
        ))}
      </div>
    </Bloque>
  )
}

/* ---------- 9. Como se habla aqui ---------- */
function Regionalismos() {
  return (
    <Bloque titulo={regionalismos.titulo} nota={regionalismos.nota}>
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regionalismos.palabras.map((kw, i) => (
          <Reveal key={kw.k} variant="scale" delay={i * 55} className="flip h-28" tabIndex={0}>
            <div className="flip-inner">
              <div className="flip-face flip-frente">
                <p className="font-display text-lg font-bold text-sierra dark:text-naranja">
                  {kw.k}
                </p>
                <span aria-hidden="true" className="flip-pista">
                  girar
                </span>
              </div>
              <div className="flip-face flip-back">
                <p className="text-xs leading-snug">{kw.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Puente a la seccion del hilo */}
      <Reveal variant="up" className="mx-auto mt-10 max-w-2xl text-center">
        <p className="text-sm text-(--page-text)/75">
          ¿Te falta una? El hilo de las palabras sigue abierto y puedes añadir la tuya con lo que
          significa para ti.
        </p>
        <a
          href="#hilo"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-linear-to-br from-sierra to-naranja px-7 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(207,90,34,0.3)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
        >
          Ir al hilo de las palabras <span aria-hidden="true">→</span>
        </a>
      </Reveal>
    </Bloque>
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
