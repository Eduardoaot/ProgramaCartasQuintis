import Reveal from './Reveal.jsx'

/** Bloque de texto con titulo. Para secciones informativas (sin imagen). */
export default function InfoBlock({ titulo, children, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className="rounded-2xl border-l-4 border-rosa bg-[var(--surface)] p-6 text-left shadow-[0_6px_16px_rgba(142,36,83,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(142,36,83,0.20)]"
    >
      <h3 className="mb-2 text-lg font-bold text-vino dark:text-rosa">{titulo}</h3>
      <div className="text-sm leading-relaxed text-[var(--page-text)]/90">{children}</div>
    </Reveal>
  )
}
