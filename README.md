# Las Quintillizas — TCG (landing page)

Landing page en **React + Vite + Tailwind CSS v4** sobre el juego de cartas de
*Go-Toubun no Hanayome*.

## Puesta en marcha

```bash
npm install
npm run dev      # servidor de desarrollo -> http://localhost:5173
npm run build    # genera /dist para producción
npm run preview  # sirve /dist localmente
```

## Cómo editar el contenido

**Todo el texto vive en `src/data/`.** Para cambiar la información NO hace falta
tocar los componentes, solo estos archivos:

| Archivo | Sección | Responsable |
|---|---|---|
| `src/data/nav.js` | Enlaces del navbar y título | — |
| `src/data/hero.js` | Header (imagen de fondo, título, botón) | — |
| `src/data/queEs.js` | Qué son Las Quintillizas (sinopsis, editorial, autor, éxito) | Gael |
| `src/data/personajes.js` | Personajes | Issac |
| `src/data/antecedentes.js` | Antecedentes: origen, expansiones con cartas firmadas, valor de coleccion | Yo |
| `src/data/juego.js` | El juego: descripción, arena, cómo se gana, tipos de carta | Junior |
| `src/data/tutorial.js` | Tutorial: objetivo, mazos, anatomía, tipos, mesa, turno, aproximación, cómo ganar, palabras clave (adaptado del reglamento oficial ver. 1.09) | Yo (reglas) |
| `src/data/expansiones.js` | Las expansiones (BP1–BP7) con datos oficiales y fotos de cartones | — |
| `src/data/rarezas.js` | Las rarezas que hay | — |

Cada archivo tiene comentarios explicando la forma de los datos. Añadir un
elemento a un array = aparece automáticamente una tarjeta nueva.

### Datos a revisar

- **`antecedentes.js` → `valor.cartas[].valor`**: precios de mercado tomados de
  TCGplayer al montar la página; conviene actualizarlos cada cierto tiempo.
- **`tutorial.js` → `anatomia.partes[].x / .y`**: posición (%) de cada número
  sobre la carta de ejemplo; ajústalos a la carta que uses.
- **`tutorial.js` → `aproximacion.formula`**: son valores de ejemplo para la
  animación (poder de novia + episodios ≥ poder requerido).
- Los datos de `expansiones.js` (nombres, fechas, tirada, rarezas) salen de
  las fichas oficiales `5hanayome-cardgame.com/products/bpN`.

### `npm run dev`

Abre el navegador automáticamente (`server.open` en `vite.config.js`). Para
evitarlo: `npm run dev -- --open false`.

## Estructura

```
src/
  main.jsx            punto de entrada
  App.jsx             orden de las secciones
  index.css           tema de Tailwind (colores, tipografías, animaciones)
  hooks/useReveal.js  IntersectionObserver para animar al hacer scroll
  components/
    Navbar.jsx        navbar sticky con menú móvil
    Hero.jsx          header con imagen de fondo + overlay + blobs animados
    Section.jsx       envoltorio estándar (id, título, intro, fondo alterno)
    Reveal.jsx        aplica la animación de entrada a cualquier bloque
    Card.jsx          tarjeta reutilizable con imágenes y efecto "shine"
    InfoBlock.jsx     bloque de texto sin imagen
    QueEs / Personajes / Antecedentes / JuegoCartas /
    Tutorial / Expansiones / Rarezas / Footer
  data/              <-- el contenido editable
```

## Notas de diseño

- Se conservó **el cambio del header**: la imagen de las Nakano a pantalla
  completa como fondo, con degradado vino oscuro encima (venía del trabajo en
  curso de `main`).
- El resto del estilo (paleta degradada, tipografías Poppins/Quicksand,
  animaciones, botones con destello, revelado al hacer scroll) viene de la
  rama `IA`, ahora reescrito con Tailwind.
- `legacy/` guarda el HTML/CSS estático original como referencia.
- Respeta `prefers-reduced-motion`.
