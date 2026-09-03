import { useEffect, useRef, useState } from 'react'
import { navLinks, SITE_TITLE, SITE_LOGO } from '../data/nav.js'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const idleTimer = useRef(null)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const top = y < 24
      setAtTop(top)

      // Arriba del todo: la navbar SIEMPRE se ve.
      if (top) {
        clearTimeout(idleTimer.current)
        setHidden(false)
        lastY = y
        return
      }

      // Mientras se hace scroll (hacia arriba o hacia abajo) la navbar se
      // desvanece poco a poco; reaparece cuando el scroll se detiene.
      if (Math.abs(y - lastY) > 3) {
        setHidden(true)
        clearTimeout(idleTimer.current)
        idleTimer.current = setTimeout(() => setHidden(false), 280)
      }
      lastY = y
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(idleTimer.current)
    }
  }, [])

  // El menú móvil abierto mantiene la navbar visible.
  const isHidden = hidden && !open

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-[opacity,transform] duration-700 ease-out ${
        isHidden ? 'pointer-events-none -translate-y-3 opacity-0' : 'translate-y-0 opacity-100'
      } ${!atTop ? 'shadow-[0_4px_18px_rgba(142,36,83,0.18)]' : ''}`}
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-(--nav-text)">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label={SITE_TITLE}>
          <img
            src={SITE_LOGO}
            alt={SITE_TITLE}
            width="200"
            height="60"
            className="h-9 w-auto drop-shadow-[0_1px_3px_rgba(0,,0,0.45)] sm:h-10"
          />
        </a>

        {/* Escritorio */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="group relative pb-1 text-sm font-semibold transition-colors hover:text-rosa dark:hover:text-dorado"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-rosa transition-all duration-300 group-hover:w-full dark:bg-dorado" />
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Móvil */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-current/40"
          >
            <span className={`h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Móvil: panel */}
      <ul
        className={`flex flex-col gap-1 overflow-hidden px-6 text-(--nav-text) transition-all duration-300 md:hidden ${
          open ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
        style={{ background: 'var(--nav-panel-bg)' }}
      >
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2 text-sm font-semibold hover:bg-current/10 hover:text-rosa dark:hover:text-dorado"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
