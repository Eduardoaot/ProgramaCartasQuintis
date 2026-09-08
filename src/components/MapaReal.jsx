import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useDarkClass } from '../hooks/useDarkClass.js'

/**
 * Mapa real con teselas de OpenStreetMap servidas por CARTO (sin API key).
 * Hay juego claro y oscuro, y se cambian con el tema de la pagina.
 *
 * Va sincronizado con la lista que lo acompaña: al pulsar un elemento de la
 * lista el mapa vuela hasta el punto y le abre el globo, y al pulsar un punto
 * del mapa se avisa hacia arriba para que la lista lo resalte.
 *
 * Props:
 *  - centro / zoom      -> posicion inicial
 *  - marcadores         -> [{ id, lat, lng, etiqueta, titulo, texto, tono, grande }]
 *  - rutas              -> [{ nombre, color, discontinua, puntos: [[lat,lng], ...] }]
 *  - seleccionado       -> id del marcador enfocado
 *  - onSeleccionar      -> se llama con el id al pulsar un marcador
 *  - zoomEnfoque        -> zoom minimo al volar a un punto
 *  - alto               -> clases de altura del contenedor
 */

const TESELAS = {
  claro: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  oscuro: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
}

const ATRIBUCION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &middot; teselas de <a href="https://carto.com/attributions">CARTO</a>'

/** Pin propio en HTML: evita el icono por defecto de Leaflet, que se rompe al empaquetar. */
function crearPin({ etiqueta = '', tono = 'naranja', grande = false, activo = false }) {
  const ancho = String(etiqueta).length > 2
  const clases = [
    'mty-pin',
    `mty-pin--${tono}`,
    ancho && 'mty-pin--ancho',
    grande && 'mty-pin--grande',
    activo && 'mty-pin--activo',
  ]
    .filter(Boolean)
    .join(' ')

  return L.divIcon({
    className: 'mty-pin-wrap',
    html: `<span class="${clases}">${etiqueta}</span>`,
    iconSize: ancho ? [34, 26] : [26, 26],
    iconAnchor: ancho ? [17, 13] : [13, 13],
    popupAnchor: [0, -14],
  })
}

/**
 * Leaflet mide el contenedor al montarse. Si el mapa nace dentro de un bloque
 * que todavia se esta animando o que aun no tiene su alto final, las teselas
 * salen recortadas; con esto lo remedimos en cuanto el navegador respira.
 */
function AjustarTamano() {
  const map = useMap()
  useEffect(() => {
    const id = setTimeout(() => map.invalidateSize(), 250)
    return () => clearTimeout(id)
  }, [map])
  return null
}

/** Vuela al punto seleccionado y le abre el globo. */
function Enfocar({ seleccionado, marcadores, refs, zoomEnfoque }) {
  const map = useMap()

  useEffect(() => {
    if (!seleccionado) return
    const m = marcadores.find((x) => x.id === seleccionado)
    if (!m) return

    map.flyTo([m.lat, m.lng], Math.max(map.getZoom(), zoomEnfoque), { duration: 0.7 })

    // El globo se abre al terminar el vuelo. El temporizador es el respaldo
    // por si `moveend` no llega (el mapa ya estaba justo ahi, por ejemplo).
    const abrir = () => refs.current[seleccionado]?.openPopup()
    map.once('moveend', abrir)
    const respaldo = setTimeout(abrir, 900)
    return () => {
      map.off('moveend', abrir)
      clearTimeout(respaldo)
    }
  }, [seleccionado, marcadores, refs, map, zoomEnfoque])

  return null
}

export default function MapaReal({
  centro,
  zoom,
  marcadores = [],
  rutas = [],
  seleccionado = null,
  onSeleccionar,
  zoomEnfoque = 15,
  alto = 'h-[420px] sm:h-[520px]',
  ariaLabel = 'Mapa',
}) {
  const oscuro = useDarkClass()
  const refs = useRef({})

  return (
    <div
      className={`mty-mapa relative w-full overflow-hidden rounded-2xl border border-(--hairline) shadow-[0_12px_34px_rgba(27,73,101,0.20)] ${alto}`}
      style={{ background: oscuro ? '#0a1218' : '#eef3f6' }}
      role="application"
      aria-label={ariaLabel}
    >
      <MapContainer center={centro} zoom={zoom} scrollWheelZoom={false} className="h-full w-full">
        <AjustarTamano />
        <Enfocar
          seleccionado={seleccionado}
          marcadores={marcadores}
          refs={refs}
          zoomEnfoque={zoomEnfoque}
        />

        {/* La key fuerza el recambio de capa al cambiar de tema */}
        <TileLayer
          key={oscuro ? 'oscuro' : 'claro'}
          url={oscuro ? TESELAS.oscuro : TESELAS.claro}
          attribution={ATRIBUCION}
          maxZoom={19}
        />

        {rutas.map((ruta) => (
          <Polyline
            key={ruta.nombre}
            positions={ruta.puntos}
            pathOptions={{
              color: ruta.color,
              weight: 5,
              opacity: 0.85,
              dashArray: ruta.discontinua ? '10 8' : undefined,
              lineCap: 'round',
            }}
          />
        ))}

        {marcadores.map((m) => (
          <Marker
            key={m.id}
            position={[m.lat, m.lng]}
            ref={(el) => {
              if (el) refs.current[m.id] = el
              else delete refs.current[m.id]
            }}
            icon={crearPin({
              etiqueta: m.etiqueta,
              tono: m.tono,
              grande: m.grande,
              activo: m.id === seleccionado,
            })}
            eventHandlers={{ click: () => onSeleccionar?.(m.id) }}
          >
            <Popup>
              <strong className="mty-popup-titulo">{m.titulo}</strong>
              {m.texto && <span className="mty-popup-texto">{m.texto}</span>}
              {m.extra}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <p className="pointer-events-none absolute bottom-2 left-1/2 z-[800] -translate-x-1/2 rounded-full bg-(--surface)/85 px-3 py-1 text-[11px] text-(--page-text)/60 shadow-sm">
        Arrastra para moverte · pulsa un punto para ver qué es
      </p>
    </div>
  )
}
