import { createContext, useCallback, useContext, useMemo } from 'react'
import { useAlmacen } from '../hooks/useAlmacen.js'

/**
 * La agenda del visitante: los planes y las paradas que va marcando por la
 * pagina. Vive en localStorage, asi que sigue ahi al volver.
 *
 * Cada elemento: { id, tipo: 'plan' | 'parada', nombre, detalle, dias, imagen }
 */
const AgendaContext = createContext(null)

const CLAVE = 'agenda-monterrey'

export function AgendaProvider({ children }) {
  const [items, setItems] = useAlmacen(CLAVE, [])

  const tiene = useCallback((id) => items.some((i) => i.id === id), [items])

  const alternar = useCallback(
    (item) => {
      setItems((actuales) =>
        actuales.some((i) => i.id === item.id)
          ? actuales.filter((i) => i.id !== item.id)
          : [...actuales, item],
      )
    },
    [setItems],
  )

  const quitar = useCallback((id) => setItems((a) => a.filter((i) => i.id !== id)), [setItems])

  const vaciar = useCallback(() => setItems([]), [setItems])

  /**
   * Sube o baja un elemento una posición DENTRO DE SU GRUPO.
   *
   * La lista guardada mezcla planes y paradas, pero en pantalla van separadas.
   * Si intercambiásemos con el vecino de la lista completa, subir una parada
   * la cambiaría de sitio con un plan y en pantalla no se movería nada.
   */
  const mover = useCallback(
    (id, delta) => {
      setItems((actuales) => {
        const actual = actuales.find((x) => x.id === id)
        if (!actual) return actuales

        // Posiciones que ocupa este grupo dentro de la lista completa
        const delGrupo = actuales
          .map((x, i) => (x.tipo === actual.tipo ? i : -1))
          .filter((i) => i >= 0)

        const puesto = delGrupo.indexOf(actuales.indexOf(actual))
        const destino = puesto + delta
        if (destino < 0 || destino >= delGrupo.length) return actuales

        const copia = [...actuales]
        const a = delGrupo[puesto]
        const b = delGrupo[destino]
        ;[copia[a], copia[b]] = [copia[b], copia[a]]
        return copia
      })
    },
    [setItems],
  )

  const valor = useMemo(() => {
    const planes = items.filter((i) => i.tipo === 'plan')
    const paradas = items.filter((i) => i.tipo === 'parada')
    const dias = planes.reduce((t, i) => t + (i.dias ?? 0), 0)
    return { items, planes, paradas, dias, tiene, alternar, quitar, vaciar, mover }
  }, [items, tiene, alternar, quitar, vaciar, mover])

  return <AgendaContext.Provider value={valor}>{children}</AgendaContext.Provider>
}

export function useAgenda() {
  const contexto = useContext(AgendaContext)
  if (!contexto) throw new Error('useAgenda debe usarse dentro de <AgendaProvider>')
  return contexto
}
