import Icono from './Icono.jsx'
import { useAgenda } from '../context/AgendaContext.jsx'

/**
 * Boton de "añadir / quitar de mi agenda". Se pinta distinto segun si el
 * elemento ya esta dentro, y anuncia el cambio a los lectores de pantalla.
 */
export default function BotonAgenda({ item, className = '' }) {
  const { tiene, alternar } = useAgenda()
  const dentro = tiene(item.id)

  return (
    <button
      type="button"
      onClick={() => alternar(item)}
      aria-pressed={dentro}
      className={`group/agenda inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition duration-300 ${
        dentro
          ? 'bg-cactus text-white hover:bg-cactus/85'
          : 'bg-(--surface-alt) text-sierra ring-1 ring-(--hairline) hover:bg-naranja hover:text-white hover:ring-naranja dark:text-naranja dark:hover:text-white'
      } ${className}`}
    >
      <span className="transition-transform duration-300 group-hover/agenda:scale-125">
        <Icono
          nombre={dentro ? 'lucide/check' : 'lucide/plus'}
          tam={14}
          color={dentro ? 'ffffff' : undefined}
        />
      </span>
      {dentro ? 'En tu agenda' : 'Añadir a mi agenda'}
    </button>
  )
}
