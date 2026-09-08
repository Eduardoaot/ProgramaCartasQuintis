import { useCallback, useEffect, useState } from 'react'

/**
 * Estado que sobrevive al recargar la pagina: se guarda en localStorage.
 *
 * Todo va envuelto en try/catch porque en navegacion privada, o con las
 * cookies bloqueadas, `localStorage` no lanza al leerlo sino al usarlo. Si
 * falla, la pagina sigue funcionando: simplemente no recuerda nada.
 */
export function useAlmacen(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const guardado = window.localStorage.getItem(clave)
      if (guardado != null) return JSON.parse(guardado)
    } catch {
      /* sin almacenamiento disponible */
    }
    return valorInicial
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(clave, JSON.stringify(valor))
    } catch {
      /* sin almacenamiento disponible */
    }
  }, [clave, valor])

  // Se sincroniza si la persona tiene el sitio abierto en dos pestañas
  useEffect(() => {
    const alCambiar = (e) => {
      if (e.key !== clave || e.newValue == null) return
      try {
        setValor(JSON.parse(e.newValue))
      } catch {
        /* valor corrupto: lo ignoramos */
      }
    }
    window.addEventListener('storage', alCambiar)
    return () => window.removeEventListener('storage', alCambiar)
  }, [clave])

  const limpiar = useCallback(() => setValor(valorInicial), [valorInicial])

  return [valor, setValor, limpiar]
}
