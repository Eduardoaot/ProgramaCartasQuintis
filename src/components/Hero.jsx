import { hero } from '../data/hero.js'

export default function Hero() {
  return (
    <header
      id="inicio"
      className="relative isolate flex min-h-[92vh] flex-col items-center justify-center gap-6 overflow-hidden px-6 pb-24 pt-36 text-center text-white sm:pt-40"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 26, 38, 0.50), rgba(8, 26, 38, 0.86)), url("${hero.bgImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blobs animados heredados de la rama IA */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 -z-10 h-64 w-64 animate-blob rounded-full bg-oro opacity-30 blur-[50px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-72 w-72 animate-blob rounded-full bg-naranja opacity-30 blur-[50px] [animation-delay:-5s]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[40%] -z-10 h-44 w-44 animate-blob rounded-full bg-oro opacity-25 blur-[50px] [animation-delay:-9s]"
      />

      <span className="inline-block animate-fade-up rounded-full border border-white/60 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] [animation-delay:0.1s]">
        {hero.eyebrow}
      </span>

      <h1 className="max-w-3xl animate-fade-up text-4xl font-extrabold leading-tight [animation-delay:0.25s] [text-shadow:0_4px_18px_rgba(0,0,0,0.4)] sm:text-5xl">
        {hero.title}
      </h1>

      <p className="max-w-xl animate-fade-up text-lg text-white/95 [animation-delay:0.4s] [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
        {hero.text}
      </p>

      <a
        href={hero.cta.href}
        className="group relative mt-2 inline-flex animate-fade-up items-center gap-2 overflow-hidden rounded-full bg-sierra px-9 py-3.5 font-bold text-white shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition duration-300 [animation-delay:0.6s] hover:-translate-y-1 hover:bg-naranja hover:shadow-[0_14px_30px_rgba(0,0,0,0.35)]"
      >
        <span
          aria-hidden="true"
          className="absolute top-0 left-[-150%] h-full w-3/5 -skew-x-12 bg-linear-to-r from-transparent via-white/50 to-transparent group-hover:animate-shine"
        />
        {hero.cta.label}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>

      <a
        href="#que-es"
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float-y text-2xl text-white/70"
      >
        ⌄
      </a>
    </header>
  )
}
