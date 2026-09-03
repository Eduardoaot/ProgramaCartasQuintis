import { navLinks, SITE_TITLE, SITE_LOGO } from '../data/nav.js'

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-vino to-rosa px-6 py-12 text-center text-white">
      <div className="mx-auto max-w-6xl">
        <img
          src={SITE_LOGO}
          alt={SITE_TITLE}
          width="260"
          height="78"
          className="mx-auto h-14 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
        />

        <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-white/80 transition hover:text-dorado">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-white/80">
          Hecho por Eduardo Alberto — Original de Negi Haruba · Kodansha · Bushiroad
        </p>
        <p className="mt-1 text-xs text-white/60">
          Proyecto sin fines de lucro. Todas las imágenes pertenecen a sus autores.
        </p>
      </div>
    </footer>
  )
}
