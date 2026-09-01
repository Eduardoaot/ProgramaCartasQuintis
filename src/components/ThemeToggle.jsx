import { useTheme } from '../hooks/useTheme.js'

/** Botón sol / luna para alternar el modo oscuro. */
export default function ThemeToggle({ className = '' }) {
  const [theme, toggle] = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10 text-base transition hover:bg-white/20 ${className}`}
    >
      <span className="transition-transform duration-500" style={{ transform: isDark ? 'rotate(0deg)' : 'rotate(180deg)' }}>
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}
