import { navLinks, SITE_TITLE, SITE_LOGO_BLANCO } from '../data/nav.js'

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-sierra to-naranja px-6 py-12 text-center text-white">
      <div className="mx-auto max-w-6xl">
        <img
          src={SITE_LOGO_BLANCO}
          alt={SITE_TITLE}
          width="260"
          height="78"
          className="mx-auto h-14 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
        />

        <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-white/80 transition hover:text-oro">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-white/80">
          Hecho por Eduardo Alberto — Monterrey y su área metropolitana, Nuevo León, México
        </p>
        <p className="mt-1 text-xs text-white/60">
          Proyecto sin fines de lucro. Fotografías de Wikimedia Commons; cada una pertenece a su autor.
        </p>
      </div>
    </footer>
  )
}
