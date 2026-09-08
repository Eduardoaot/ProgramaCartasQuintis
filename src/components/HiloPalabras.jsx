import { useMemo, useRef, useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Icono from './Icono.jsx'
import { useAlmacen } from '../hooks/useAlmacen.js'
import { hilo } from '../data/hilo.js'

const CLAVE = 'hilo-palabras-monterrey'
const MAX_PALABRA = 40
const MAX_SIGNIFICADO = 240

/** Una cuenta del hilo, con su nudo y su línea. */
function Nudo({ entrada, i, esUltimo, onBorrar }) {
  const propia = entrada.origen === 'propia'

  return (
    <Reveal
      as="li"
      variant="left"
      delay={Math.min(i, 8) * 60}
      className="relative pl-14"
    >
      {/* Nudo sobre el hilo */}
      <span
        aria-hidden="true"
        className={`hexagono absolute left-3 top-4 z-10 flex h-7 w-7 items-center justify-center ${
          propia ? 'bg-cactus' : 'bg-oro'
        }`}
      >
        <span
          className={`hexagono absolute inset-[1.5px] ${
            propia ? 'bg-cactus' : 'bg-linear-to-br from-sierra to-naranja'
          }`}
        />
        {propia && <Icono nombre="lucide/pencil" tam={11} color="ffffff" className="relative" />}
      </span>

      {/* El hilo se corta en la última cuenta */}
      {!esUltimo && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-6.5 top-11 w-0.5 bg-linear-to-b from-naranja/50 to-naranja/15"
        />
      )}

      <article
        className={`mb-5 rounded-2xl border bg-(--surface) p-5 shadow-[0_4px_14px_rgba(27,73,101,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(27,73,101,0.18)] ${
          propia ? 'border-cactus/45' : 'border-(--hairline)'
        }`}
      >
        <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-lg font-bold text-sierra dark:text-naranja">
            {entrada.palabra}
          </h3>
          <span
            className={`text-[10px] font-semibold uppercase tracking-widest ${
              propia ? 'text-cactus' : 'text-(--page-text)/40'
            }`}
          >
            {entrada.autor}
          </span>
        </header>

        <p className="mt-2 text-sm leading-relaxed text-(--page-text)/85">{entrada.significado}</p>

        {propia && (
          <button
            type="button"
            onClick={() => onBorrar(entrada.id)}
            className="mt-3 text-xs font-semibold text-(--page-text)/45 underline-offset-2 transition hover:text-naranja hover:underline"
          >
            Borrar mi aportación
          </button>
        )}
      </article>
    </Reveal>
  )
}

export default function HiloPalabras() {
  const [propias, setPropias] = useAlmacen(CLAVE, [])
  const [palabra, setPalabra] = useState('')
  const [significado, setSignificado] = useState('')
  const [autor, setAutor] = useState('')
  const [error, setError] = useState('')
  const [anuncio, setAnuncio] = useState('')
  const campoPalabra = useRef(null)

  const entradas = useMemo(() => [...hilo.semilla, ...propias], [propias])

  const enviar = (e) => {
    e.preventDefault()
    const p = palabra.trim()
    const s = significado.trim()

    if (!p || !s) {
      setError('Faltan la palabra o su significado.')
      return
    }
    if (entradas.some((x) => x.palabra.toLowerCase() === p.toLowerCase())) {
      setError(`«${p}» ya está en el hilo. Prueba con otra.`)
      return
    }

    setPropias((actuales) => [
      ...actuales,
      {
        id: `propia-${Date.now()}`,
        palabra: p.slice(0, MAX_PALABRA),
        significado: s.slice(0, MAX_SIGNIFICADO),
        autor: autor.trim() ? autor.trim().slice(0, 30) : 'Tu aportación',
        origen: 'propia',
      },
    ])

    setPalabra('')
    setSignificado('')
    setError('')
    setAnuncio(`«${p}» se añadió al hilo.`)
    campoPalabra.current?.focus()
  }

  const borrar = (id) => {
    setPropias((actuales) => actuales.filter((x) => x.id !== id))
    setAnuncio('Aportación borrada.')
  }

  const claseCampo =
    'w-full rounded-xl border border-(--hairline) bg-(--surface) px-4 py-2.5 text-sm text-(--page-text) transition placeholder:text-(--page-text)/35 focus:border-naranja focus:outline-none focus:ring-2 focus:ring-naranja/25'

  return (
    <Section
      id="hilo"
      eyebrow="Vocabulario vivo"
      title="El hilo de las palabras"
      intro={hilo.intro}
      alt
    >
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
        {/* Formulario */}
        <Reveal
          variant="left"
          className="rounded-2xl border border-(--hairline) bg-(--surface-alt) p-6 shadow-[0_6px_16px_rgba(27,73,101,0.10)] lg:sticky lg:top-24"
        >
          <h3 className="font-display text-lg font-bold text-sierra dark:text-naranja">
            Añade la tuya
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-(--page-text)/60">{hilo.aviso}</p>

          <form onSubmit={enviar} className="mt-5 flex flex-col gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-naranja">
                La palabra
              </span>
              <input
                ref={campoPalabra}
                type="text"
                value={palabra}
                maxLength={MAX_PALABRA}
                onChange={(e) => {
                  setPalabra(e.target.value)
                  setError('')
                }}
                placeholder="Troca, raite, morra…"
                className={claseCampo}
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-naranja">
                Qué significa
              </span>
              <textarea
                value={significado}
                rows={4}
                maxLength={MAX_SIGNIFICADO}
                onChange={(e) => {
                  setSignificado(e.target.value)
                  setError('')
                }}
                placeholder="Cuéntalo con tus palabras: qué quiere decir, cuándo se usa, de dónde salió."
                className={`${claseCampo} resize-y`}
              />
              <span className="self-end text-[10px] text-(--page-text)/40">
                {significado.length} / {MAX_SIGNIFICADO}
              </span>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-naranja">
                Tu nombre <span className="normal-case tracking-normal opacity-60">(opcional)</span>
              </span>
              <input
                type="text"
                value={autor}
                maxLength={30}
                onChange={(e) => setAutor(e.target.value)}
                placeholder="Anónimo"
                className={claseCampo}
              />
            </label>

            {error && (
              <p role="alert" className="rounded-lg bg-naranja/12 px-3 py-2 text-xs text-naranja">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-1 rounded-full bg-naranja px-6 py-2.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sierra"
            >
              Añadir al hilo
            </button>
          </form>

          <p aria-live="polite" className="sr-only">
            {anuncio}
          </p>

          {propias.length > 0 && (
            <p className="mt-4 text-center text-xs text-(--page-text)/55">
              Llevas {propias.length} palabra{propias.length === 1 ? '' : 's'} en el hilo.
            </p>
          )}
        </Reveal>

        {/* El hilo */}
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-(--page-text)/65">
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-linear-to-br from-sierra to-naranja" />
              Del diccionario ({hilo.semilla.length})
            </span>
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-cactus" />
              Tuyas ({propias.length})
            </span>
          </div>

          <ol className="relative">
            {entradas.map((entrada, i) => (
              <Nudo
                key={entrada.id}
                entrada={entrada}
                i={i}
                esUltimo={i === entradas.length - 1}
                onBorrar={borrar}
              />
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
