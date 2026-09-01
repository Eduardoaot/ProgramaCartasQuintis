import { useEffect, useState } from 'react'
import { navLinks, SITE_TITLE } from '../data/nav.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 animate-fade-up transition-shadow ${
        scrolled ? 'shadow-[0_4px_20px_rgba(142,36,83,0.25)]' : ''
      }`}
      style={{
        background: 'rgba(142, 36, 83, 0.9)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a
          href="#inicio"
          className="bg-gradient-to-r from-white to-dorado bg-clip-text text-lg font-bold tracking-wide text-transparent"
        >
          {SITE_TITLE}
        </a>

        {/* Escritorio */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="group relative pb-1 text-sm font-medium transition-colors hover:text-dorado"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-dorado transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Movil: boton */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/40 md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`h-0.5 w-5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-5 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Movil: panel */}
      <ul
        className={`flex flex-col gap-1 overflow-hidden bg-vino/95 px-6 text-white transition-all duration-300 md:hidden ${
          open ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2 text-sm font-medium hover:bg-white/10 hover:text-dorado"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
