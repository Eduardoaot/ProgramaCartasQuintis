import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Icono from './Icono.jsx'
import Numero from './Numero.jsx'
import { useAgenda } from '../context/AgendaContext.jsx'
import { tutorial } from '../data/tutorial.js'

const MINIMO = tutorial.armaTuViaje.reparto.items.find((i) => i.destacado)?.dias ?? 4

/** "0.5" -> "medio día"; "2.25" -> "2¼ días". Se lee mejor que el decimal. */
function enDias(n) {
  if (n === 0) return 'ningún día todavía'
  const entero = Math.floor(n)
  const resto = n - entero
  const fraccion = { 0.25: '¼', 0.5: '½', 0.75: '¾' }[Number(resto.toFixed(2))] ?? ''
  if (entero === 0) return `${fraccion === '½' ? 'medio' : fraccion} día`
  return `${entero}${fraccion} ${entero === 1 && !fraccion ? 'día' : 'días'}`
}

function Fila({ item, i, total }) {
  const { quitar, mover } = useAgenda()

  return (
    <Reveal
      as="li"
      variant="left"
      delay={i * 50}
      className="flex items-center gap-4 rounded-2xl border border-(--hairline) bg-(--surface) p-3 shadow-[0_4px_12px_rgba(27,73,101,0.08)] transition duration-300 hover:border-naranja"
    >
      <Numero n={i + 1} tam="md" />

      {item.imagen && (
        <img
          src={item.imagen}
          alt=""
          loading="lazy"
          className="hidden h-14 w-20 flex-none rounded-lg object-cover sm:block"
        />
      )}

      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-sm font-bold text-sierra dark:text-naranja">
          {item.nombre}
        </p>
        <p className="truncate text-xs text-(--page-text)/65">
          {item.detalle}
          {item.dias ? ` · ${enDias(item.dias)}` : ''}
        </p>
      </div>

      <div className="flex flex-none items-center gap-1">
        <button
          type="button"
          onClick={() => mover(item.id, -1)}
          disabled={i === 0}
          aria-label={`Subir ${item.nombre}`}
          className="flex h-7 w-7 items-center justify-center rounded-lg text-sm text-(--page-text)/60 transition hover:bg-(--surface-alt) hover:text-naranja disabled:pointer-events-none disabled:opacity-25"
        >
          <Icono nombre="lucide/arrow-up" tam={15} />
        </button>
        <button
          type="button"
          onClick={() => mover(item.id, 1)}
          disabled={i === total - 1}
          aria-label={`Bajar ${item.nombre}`}
          className="flex h-7 w-7 items-center justify-center rounded-lg text-sm text-(--page-text)/60 transition hover:bg-(--surface-alt) hover:text-naranja disabled:pointer-events-none disabled:opacity-25"
        >
          <Icono nombre="lucide/arrow-down" tam={15} />
        </button>
        <button
          type="button"
          onClick={() => quitar(item.id)}
          aria-label={`Quitar ${item.nombre} de la agenda`}
          className="flex h-7 w-7 items-center justify-center rounded-lg text-sm text-(--page-text)/60 transition hover:bg-naranja hover:text-white"
        >
          <Icono nombre="lucide/x" tam={15} />
        </button>
      </div>
    </Reveal>
  )
}

export default function Agenda() {
  const { items, planes, paradas, dias, vaciar } = useAgenda()
  const vacia = items.length === 0
  const completa = dias >= MINIMO

  return (
    <Section
      id="agenda"
      eyebrow="Tu viaje"
      title="Mi agenda"
      intro="Lo que vayas marcando por la página se queda aquí, y sigue guardado la próxima vez que abras el sitio en este navegador."
    >
      {vacia ? (
        <Reveal
          variant="up"
          className="mx-auto max-w-xl rounded-3xl border-2 border-dashed border-(--hairline) bg-(--surface) p-10 text-center"
        >
          <Icono nombre="lucide/calendar-days" tam={48} className="mx-auto" />
          <p className="mt-4 font-display text-lg font-bold text-sierra dark:text-naranja">
            Tu agenda está vacía
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-(--page-text)/70">
            Sube a <strong>Los planes</strong> y pulsa «Añadir a mi agenda» en los que te interesen.
            También puedes marcar paradas desde el mapa del área metropolitana.
          </p>
          <a
            href="#tutorial"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-naranja px-6 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-sierra"
          >
            Ir a los planes <Icono nombre="lucide/arrow-right" tam={16} color="ffffff" />
          </a>
        </Reveal>
      ) : (
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)]">
          <div className="flex flex-col gap-8">
            {planes.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-naranja">
                  Planes ({planes.length})
                </h3>
                <ol className="flex flex-col gap-3">
                  {planes.map((item, i) => (
                    <Fila key={item.id} item={item} i={i} total={planes.length} />
                  ))}
                </ol>
              </div>
            )}

            {paradas.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-naranja">
                  Paradas sueltas ({paradas.length})
                </h3>
                <ol className="flex flex-col gap-3">
                  {paradas.map((item, i) => (
                    <Fila key={item.id} item={item} i={i} total={paradas.length} />
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Cuenta de dias */}
          <Reveal
            variant="right"
            className="rounded-2xl border border-(--hairline) bg-(--surface) p-6 shadow-[0_6px_16px_rgba(27,73,101,0.10)] lg:sticky lg:top-24"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-naranja">Tu viaje</p>

            <p className="mt-4 font-display text-4xl font-extrabold leading-none text-sierra dark:text-naranja">
              {enDias(dias)}
            </p>
            <p className="mt-1 text-sm text-(--page-text)/65">
              suman los planes que llevas marcados
            </p>

            <div
              className={`mt-5 rounded-xl p-4 text-sm ${
                completa
                  ? 'bg-cactus/12 text-cactus ring-1 ring-cactus/30'
                  : 'bg-(--surface-alt) text-(--page-text)/75 ring-1 ring-(--hairline)'
              }`}
            >
              {completa ? (
                <>
                  <strong>Ya llegas al mínimo.</strong> Con {MINIMO} días se cubre la ciudad y una
                  salida a la sierra.
                </>
              ) : (
                <>
                  El mínimo que recomendamos son <strong>{MINIMO} días</strong>. Te faltan{' '}
                  <strong>{enDias(Math.round((MINIMO - dias) * 100) / 100)}</strong> por llenar.
                </>
              )}
            </div>

            {paradas.length > 0 && (
              <p className="mt-4 text-xs text-(--page-text)/60">
                Más {paradas.length} parada{paradas.length === 1 ? '' : 's'} suelta
                {paradas.length === 1 ? '' : 's'}, que caben entre plan y plan.
              </p>
            )}

            <button
              type="button"
              onClick={vaciar}
              className="mt-6 w-full rounded-full border border-(--hairline) px-4 py-2 text-xs font-semibold text-(--page-text)/60 transition hover:border-naranja hover:bg-naranja hover:text-white"
            >
              Vaciar la agenda
            </button>
          </Reveal>
        </div>
      )}
    </Section>
  )
}
