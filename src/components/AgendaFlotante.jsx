import Icono from './Icono.jsx'
import { useAgenda } from '../context/AgendaContext.jsx'

/**
 * Contador flotante de la agenda. Solo aparece cuando hay algo dentro, y
 * lleva a la seccion "Mi agenda" de un clic.
 */
export default function AgendaFlotante() {
  const { items } = useAgenda()
  if (items.length === 0) return null

  return (
    <a
      href="#agenda"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-sierra py-3 pl-4 pr-5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(16,51,74,0.45)] transition duration-300 hover:-translate-y-1 hover:bg-naranja dark:bg-naranja dark:hover:bg-sierra"
    >
      <Icono nombre="lucide/calendar-days" tam={18} color="ffffff" />
      Mi agenda
      <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white/20 px-1.5 text-xs">
        {items.length}
      </span>
    </a>
  )
}
