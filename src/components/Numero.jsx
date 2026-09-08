/**
 * Marcador numerado con forma de tuerca hexagonal: menos genérico que el
 * circulito de siempre y va con el tema industrial de la ciudad.
 *
 * Son dos hexágonos encajados — el de fuera hace de reborde y el de dentro
 * lleva el degradado — con el número encima.
 */
const TAMANOS = {
  sm: { caja: 'h-7 w-7', texto: 'text-[11px]', borde: 'inset-[1.5px]' },
  md: { caja: 'h-9 w-9', texto: 'text-sm', borde: 'inset-[2px]' },
  lg: { caja: 'h-12 w-12', texto: 'text-base', borde: 'inset-[2.5px]' },
}

export default function Numero({ n, tam = 'md', tono = 'calido', className = '' }) {
  const t = TAMANOS[tam] ?? TAMANOS.md

  const reborde = tono === 'claro' ? 'bg-white/45' : 'bg-oro'
  const relleno =
    tono === 'claro'
      ? 'bg-linear-to-br from-white/25 to-white/10'
      : 'bg-linear-to-br from-sierra to-naranja'

  return (
    <span
      className={`hexagono relative inline-flex flex-none items-center justify-center ${t.caja} ${reborde} ${className}`}
    >
      <span aria-hidden="true" className={`hexagono absolute ${t.borde} ${relleno}`} />
      <span className={`relative font-display font-extrabold leading-none text-white ${t.texto}`}>
        {n}
      </span>
    </span>
  )
}
