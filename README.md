# Las Quintillizas — TCG · Landing page

Landing page sobre **el juego de cartas de _Go-Toubun no Hanayome_ (Las
Quintillizas)**, hecha con **React 18 + Vite 6 + Tailwind CSS v4**.

Este documento explica **cómo funciona absolutamente toda la página**: qué hace
cada sección, de dónde salen los datos, cómo está montado el sistema de temas,
las animaciones, y qué toca cambiar para cada cosa.

---

## Índice

1. [Puesta en marcha](#1-puesta-en-marcha)
2. [Estructura del proyecto](#2-estructura-del-proyecto)
3. [Cómo está montada la página (arquitectura)](#3-cómo-está-montada-la-página-arquitectura)
4. [Sistema de temas: claro y oscuro](#4-sistema-de-temas-claro-y-oscuro)
5. [Sistema de animaciones](#5-sistema-de-animaciones)
6. [Componentes compartidos](#6-componentes-compartidos)
7. [Sección por sección](#7-sección-por-sección)
8. [Los archivos de datos](#8-los-archivos-de-datos)
9. [Recursos estáticos](#9-recursos-estáticos)
10. [Accesibilidad y rendimiento](#10-accesibilidad-y-rendimiento)
11. [Tareas frecuentes](#11-tareas-frecuentes)
12. [Datos a revisar](#12-datos-a-revisar)

---

## 1. Puesta en marcha

```bash
npm install      # instala dependencias (react, vite, tailwind, swiper)
npm run dev      # servidor de desarrollo -> abre el navegador solo
npm run build    # genera /dist para producción
npm run preview  # sirve /dist localmente para comprobarlo
```

`npm run dev` **abre el navegador automáticamente** porque `vite.config.js`
tiene `server.open: true`. Para evitarlo: `npm run dev -- --open false`.

**Dependencias:**

| Paquete | Para qué |
|---|---|
| `react` / `react-dom` | La librería base |
| `vite` + `@vitejs/plugin-react` | Servidor de desarrollo y empaquetado |
| `tailwindcss` + `@tailwindcss/vite` | Estilos (Tailwind v4, sin `tailwind.config.js`) |
| `swiper` | El carrusel de vídeos de la sección Personajes |

> **Tailwind v4:** no hay `tailwind.config.js`. Todo el tema (colores, fuentes,
> animaciones) se declara con `@theme` dentro de `src/index.css`.

---

## 2. Estructura del proyecto

```
index.html                 Punto de entrada HTML: fuentes de Google + script anti-parpadeo del tema
vite.config.js             Plugins de React y Tailwind, y server.open

public/                    Archivos servidos tal cual, sin procesar
  img/
    logo-5hanayome.webp      Logo oficial del juego (navbar y footer)
    YoshitsuguMatsuoka.jpg   Retrato del seiyū de Futaro
  videos/
    ichika.mp4 … futaru.mp4  Los 6 vídeos del carrusel de Personajes
    IchikaNakano.png …       Los 6 retratos de las fichas de Personajes
    amarillo/rosa/azul/       Las 6 imágenes de fondo por color de personaje
    verde/rojo.jpg, gris.jpeg

src/
  main.jsx                 Monta <App /> en #root e importa index.css
  App.jsx                  Orden de las secciones de la página
  index.css                Tema de Tailwind, variables de color, todas las animaciones

  hooks/
    useReveal.js           IntersectionObserver: dice si un elemento entró en pantalla
    useTheme.js            Modo claro/oscuro con persistencia en localStorage

  components/
    Navbar.jsx             Barra superior fija, con auto-ocultado y menú móvil
    ThemeToggle.jsx        Botón sol/luna
    Hero.jsx               Cabecera a pantalla completa
    Section.jsx            Envoltorio estándar de todas las secciones
    Reveal.jsx             Anima cualquier bloque al entrar en pantalla
    Tilt.jsx               Efecto hover 3D con brillo que sigue al cursor
    CardMedia.jsx          Galería de imágenes de carta (con efecto foil)
    Card.jsx               Tarjeta genérica reutilizable
    InfoBlock.jsx          Bloque de texto con título
    QueEs.jsx              Sección «Qué son Las Quintillizas»
    Personajes.jsx         Sección «Personajes» (carrusel + fichas)
    Antecedentes.jsx       Sección «Antecedentes» (Weiss Schwarz)
    JuegoCartas.jsx        Sección «El juego de cartas»
    Tutorial.jsx           Sección «Tutorial» (9 bloques)
    Expansiones.jsx        Sección «Las expansiones» (BP1–BP8)
    Rarezas.jsx            Sección «Las rarezas» + showcase de la SSSP
    SSSPShowcase.jsx       Banda oscura con la carta secreta
    Footer.jsx             Pie de página

  data/                    TODO EL CONTENIDO EDITABLE (ver sección 8)
  assets/
    autor.png              Retrato de Negi Haruba (importado por queEs.js)
```

---

## 3. Cómo está montada la página (arquitectura)

Es una **SPA de una sola pantalla**: no hay router. `App.jsx` renderiza la
navbar, el hero, siete secciones dentro de `<main>` y el footer, en este orden:

```
Navbar  (fija arriba, siempre encima)
Hero                     #inicio
├ QueEs                  #que-es
├ Personajes             #personajes
├ Antecedentes           #antecedentes
├ JuegoCartas            #juego
├ Tutorial               #tutorial
├ Expansiones            #expansiones
└ Rarezas                #rarezas  (+ SSSPShowcase pegado justo debajo)
Footer
```

**La navegación es por anclas.** Cada sección recibe un `id` y los enlaces del
navbar apuntan a `#id`. El desplazamiento es suave gracias a
`scroll-behavior: smooth` en `html`, y `scroll-padding-top: 5rem` evita que la
navbar fija tape el título al saltar.

**Separación contenido / presentación.** Ningún componente lleva texto
incrustado: todo sale de `src/data/*.js`. Así el equipo puede cambiar la
información sin tocar JSX.

---

## 4. Sistema de temas: claro y oscuro

### Cómo se activa

En `src/index.css`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Esto hace que el prefijo `dark:` de Tailwind dependa de la clase `.dark` en
`<html>`, no de `prefers-color-scheme`. Así el botón puede forzar un tema.

### Quién pone la clase

`src/hooks/useTheme.js`:

1. Al arrancar lee `localStorage.tema`. Si no hay nada, usa
   `prefers-color-scheme` del sistema.
2. Cada vez que cambia, hace `document.documentElement.classList.toggle('dark')`
   y guarda la preferencia.
3. Devuelve `[theme, toggle]`, que consume `ThemeToggle.jsx` (el botón ☀️/🌙 del
   navbar, presente tanto en escritorio como en móvil).

### El parpadeo inicial

`index.html` lleva un script **antes** de que React monte que aplica la clase
`dark` leyendo `localStorage`. Sin él, la página parpadearía en blanco un
instante al recargar en modo oscuro.

### Variables de color

En vez de escribir `dark:` en cada elemento, las superficies usan **variables
CSS** que se redefinen bajo `.dark`:

| Variable | Claro | Oscuro | Para qué |
|---|---|---|---|
| `--page-bg` | `#ffffff` | `#120a0f` | Fondo de la página y de secciones normales |
| `--page-text` | `#2b1622` | `#f2e3ec` | Color de texto base |
| `--surface` | `#ffffff` | `#211521` | Fondo de tarjetas |
| `--surface-alt` | `#fff5fa` | `#190f16` | Fondo de secciones alternas y chips |
| `--surface-sunken` | `#fff5fa` | `#0d070b` | Hueco donde se apoyan las imágenes de carta |
| `--hairline` | rosa 25 % | rosa 28 % | Bordes finos |
| `--nav-bg` / `--nav-panel-bg` | rosa muy claro 88 % | negro 82 % | Fondo de la navbar |
| `--nav-text` | `#8e2453` (vino) | `#f2e3ec` | Texto y adornos de la navbar |

En el JSX se usan con la sintaxis canónica de Tailwind v4:
`bg-(--surface)`, `text-(--page-text)/80`, `border-(--hairline)`.

Los colores de **marca** sí son tokens de Tailwind, definidos en `@theme`:
`vino`, `vino-oscuro`, `rosa`, `rosa-claro`, `dorado`, `verde`, `azul`, `tinta`.
Se usan como `text-vino`, `bg-rosa`, `border-dorado`, etc.

**Tipografías:** Poppins para títulos (`--font-display`) y Quicksand para el
cuerpo (`--font-body`), cargadas desde Google Fonts en `index.html`.

---

## 5. Sistema de animaciones

### 5.1 Revelado al hacer scroll

Es el mecanismo principal. Dos piezas:

**`hooks/useReveal.js`** — crea un `IntersectionObserver` y devuelve
`[ref, visible]`. Cuando el elemento entra en pantalla, `visible` pasa a `true`
**una sola vez** (`once: true`) y deja de observarlo. Si el navegador no
soporta `IntersectionObserver`, marca visible directamente para no ocultar nada.

**`components/Reveal.jsx`** — envoltorio que usa ese hook y aplica clases:

```jsx
<Reveal variant="left" delay={120} as="li">…</Reveal>
```

| Prop | Qué hace |
|---|---|
| `variant` | Dirección de entrada: `up` (defecto), `down`, `left`, `right`, `scale`, `zoom`, `rotate` |
| `delay` | Retardo en ms, para escalonar listas (`delay={i * 70}`) |
| `as` | Etiqueta a renderizar (`div` por defecto; se usa `li` en listas) |
| `ref` | Se reenvía al elemento real (lo necesita Personajes para su propio observer) |

Las clases `.reveal`, `.reveal--left`, `.is-visible`… están en `index.css`.
El estado inicial es `opacity: 0` + una transformación; `.is-visible` lo lleva
a `opacity: 1` + `transform: none`.

### 5.2 Hover 3D (`Tilt.jsx`)

Envuelve una imagen y la inclina siguiendo el cursor:

- `onPointerMove` calcula la posición relativa (0–1) dentro del elemento y
  aplica `perspective(900px) rotateX() rotateY() scale(1.04)`.
- Un `<span>` de brillo radial sigue al puntero (`glare`).
- `onPointerLeave` vuelve a la posición neutra con una transición de 500 ms.
- Respeta `prefers-reduced-motion`: si está activo, no se inclina.

Props: `max` (grados máximos, 16 por defecto), `glare`, `className`, `style`.

### 5.3 Efecto foil (cartas laminadas)

Antes había un “destello” genérico al pasar por cualquier tarjeta. **Se quitó**
y en su lugar el brillo holográfico se aplica **solo a las cartas que llevan
foil de verdad**.

Se activa poniendo la clase `foil` (definida en `index.css`) sobre el
contenedor de la imagen. Consta de dos capas:

- `::before` — degradado de colores (rosa → dorado → turquesa → violeta) con
  `mix-blend-mode: color-dodge`, animado en bucle (`foil-shift`, 7 s). Sube de
  opacidad al pasar el cursor.
- `::after` — microrrayado diagonal repetido con `mix-blend-mode: overlay`, que
  simula el laminado.

`isolation: isolate` mantiene el blend dentro de la carta.

**Quién lo lleva:** cada imagen en `data/rarezas.js` puede marcarse con
`foil: true`. `CardMedia` añade la clase y una etiqueta «FOIL» en la esquina.
El reparto es:

| Rareza | Imagen 1 | Imagen 2 |
|---|---|---|
| C, U, R, RR | sin foil | — |
| GR, ER | **foil** | — |
| `+`, `RR+`, `HR` | base, sin foil | paralela, **foil** |
| SP, SSP, HSP/ISP, GSP | **foil** | **foil** (las dos son paralelas) |
| SSSP | **foil** | — |

Así, en las tres primeras paralelas se ve la comparación base ↔ foil, y en las
demás se ve que ambas versiones son paralelas.

### 5.4 Animaciones sueltas

Todas viven en `index.css`:

| Nombre | Dónde se usa |
|---|---|
| `fade-up` | Entrada escalonada del hero y de la navbar |
| `float-y` | Flotación de la flecha del hero |
| `blob-move` | Manchas de color difuminadas del hero |
| `shine` | Barrido de luz del botón del hero |
| `pin-pop` + `pulse-ring` | Números de la anatomía de la carta (Tutorial) |
| `sssp-sweep` | Barrido de luz sobre la carta secreta |
| `heart-pop` | Anillos del objetivo (Tutorial) |
| `foil-shift` | Efecto holográfico |
| `.flip` | Tarjetas de palabras clave que giran (Tutorial) |
| `.arena-card` | Deslizamiento lateral en «El juego de cartas» |

Al final del archivo hay un bloque `@media (prefers-reduced-motion: reduce)`
que anula animaciones y transiciones para quien lo tenga activado.

---

## 6. Componentes compartidos

### `Section.jsx`

Envoltorio de todas las secciones. Se encarga de:

- Poner el `id` para el ancla del navbar y el `scroll-mt-20`.
- Pintar el **eyebrow** (texto pequeño en mayúsculas), el **título** con
  subrayado degradado rosa→dorado, y la **intro**.
- Elegir fondo: `alt` usa `--surface-alt`, si no `--page-bg`.
- Centrar el contenido en `max-w-6xl`.

Props especiales:

| Prop | Para qué |
|---|---|
| `alt` | Fondo alterno (se van alternando secciones) |
| `style` / `className` / `...props` | Se pasan al `<section>` (los usa JuegoCartas para su imagen de fondo) |
| `backdrop` | Un nodo que se pinta **detrás de todo el contenido** de la sección (lo usa Personajes para el fondo que cambia por personaje) |

### `CardMedia.jsx`

Renderiza las imágenes de una carta:

- Con **una** imagen: ocupa todo el ancho.
- Con **varias**: rejilla de 2 columnas, para comparar base y paralela.
- `tilt` (por defecto `true`): envuelve cada imagen en `Tilt`. Se pone en
  `false` para fotos que no deben inclinarse.
- Si la imagen lleva `foil: true`, añade la clase `foil` y el distintivo.

### `Card.jsx` e `InfoBlock.jsx`

`InfoBlock` es un bloque de texto con título y borde izquierdo rosa; lo usan
«Qué es», «Antecedentes» y «El juego de cartas».

`Card` es una tarjeta genérica (título, subtítulo, texto e imágenes) con
soporte para `horizontal`, `wide`, `bgClass`, `id` y `cardRef`. Hoy **ninguna
sección la usa** —todas tienen su propia tarjeta a medida— pero se conserva
como pieza reutilizable.

---

## 7. Sección por sección

### 7.1 Navbar (`Navbar.jsx`)

Barra **fija** (`position: fixed`) arriba del todo, con fondo semitransparente
y `backdrop-blur`. En modo claro es **rosa muy claro con texto vino**; en oscuro,
negra con texto claro. El color sale de `--nav-bg` y `--nav-text`, y los
adornos (bordes del botón del tema, barras de la hamburguesa) usan
`currentColor` para adaptarse solos a los dos temas.

**Comportamiento al hacer scroll:**

- Arriba del todo (`scrollY < 24`) **siempre se ve**.
- En cuanto empiezas a hacer scroll —hacia arriba o hacia abajo— se
  **desvanece poco a poco** (`opacity: 0` + `-translate-y-3`, transición de
  700 ms).
- Cuando el scroll se detiene, un temporizador de 280 ms la hace reaparecer.

Contiene el **logo oficial** del juego (`/img/logo-5hanayome.webp`, enlazado a
`#inicio`), los enlaces de `data/nav.js` con subrayado dorado animado al pasar
el cursor, y el `ThemeToggle`.

En móvil los enlaces se pliegan en un panel desplegable con botón hamburguesa
animado (las tres barras se convierten en una X). Mientras el panel está
abierto, la navbar **no** se auto-oculta.

### 7.2 Hero (`Hero.jsx`) — `#inicio`

Cabecera de `min-h-[92vh]`. El fondo es la imagen de las Nakano cubierta por un
degradado vino oscuro (55 % → 85 %) para que el texto se lea.

Encima flotan tres **blobs** difuminados (dorado y rosa) animados en bucle. El
contenido —etiqueta, título, descripción y botón— entra escalonado con
`fade-up`. El botón tiene un barrido de luz al pasar el cursor y una flecha que
se desplaza. Abajo, una flecha flotante invita a bajar.

El padding superior (`pt-36`) evita que la navbar fija tape el contenido.

### 7.3 Qué son Las Quintillizas (`QueEs.jsx`) — `#que-es`

Responsable del contenido: **Gael**. Tres bloques:

1. **Sinopsis + reconocimientos** (izquierda). Tarjeta con la etiqueta «La
   historia», el resumen del argumento y una rejilla de 4 métricas
   (copias en circulación, premio Kodansha, taquilla, espectadores). La tarjeta
   entera reacciona al hover: se eleva y la línea decorativa se alarga.

2. **Retrato del autor** (derecha). Foto de Negi Haruba a pantalla completa con
   degradado vino encima. Al pasar el cursor la imagen se acerca y se oscurece,
   y se despliega un panel con su descripción y fecha de nacimiento.

3. **Figuras destacadas + Contexto** (abajo). Rejilla con seis tarjetas del
   elenco: las cinco seiyū de las hermanas más **Yoshitsugu Matsuoka**, voz de
   Futaro. Al **hacer clic** en una aparece una «nubecita» con su foto; se
   cierra al hacer clic en cualquier otro sitio (hay un listener global en
   `document`). Cada tarjeta tiene su propio color de hover.

   A la derecha, el bloque **Contexto** con manga/anime, productora y la
   presentación oficial (Tenshin Iidairō).

### 7.4 Personajes (`Personajes.jsx`) — `#personajes`

Responsable del contenido: **Issac**. Datos verificados en el wiki de Fandom.
Seis fichas: las cinco hermanas Nakano y Futaro Uesugi.

**Un único fondo para toda la sección.** El componente `FondoSeccion` apila las
seis imágenes de color (amarillo, rosa, azul, verde, rojo y gris para Futaro) en `position:
absolute` y hace **crossfade** de 1 s cambiando su `opacity`. Va montado en la
prop `backdrop` de `Section`, así cubre la sección entera. Lleva `sm:bg-fixed`
(efecto parallax) y un velo del 72–78 % con desenfoque ligero para que el texto
se lea.

**Quién controla ese fondo** depende de dónde estés:

```js
personajeActivo = carruselALaVista ? personajeCarrusel : personajeFicha
```

- Un `IntersectionObserver` vigila el contenedor del carrusel. Mientras se ve,
  manda el **slide actual**.
- Otro `IntersectionObserver` vigila las fichas. Cuando el carrusel sale de
  pantalla, manda la **ficha que estás leyendo**.

Así el autoplay no te cambia el fondo mientras lees las fichas.

**El carrusel** (Swiper) muestra un vídeo por personaje (las cinco hermanas y Futaro), a ancho completo, sin
recuadro ni fondo propio. Configuración destacada:

| Ajuste | Por qué |
|---|---|
| `followFinger={false}` | Al arrastrar no se queda pegado al cursor: salta al slide al soltar |
| `mousewheel={{ forceToAxis: true }}` | Con trackpad, solo el gesto **horizontal** mueve el carrusel; el vertical sigue haciendo scroll en la página |
| `keyboard` | Se mueve con ← → cuando está en pantalla |
| `navigation` | Flechas laterales |
| `threshold: 3`, `touchRatio: 1.4`, `longSwipesRatio: 0.15` | Responde a gestos cortos |
| `autoplay` con `pauseOnMouseEnter` | Se detiene al pasar el ratón |

Flechas y bullets toman el **color de la hermana activa**. Debajo, una pastilla
con su nombre y su color.

**Rendimiento:** los cinco vídeos suman ~100 MB. Para no saturar el navegador,
todos llevan `preload="none"` y un efecto reproduce solo el del slide activo y
pausa el resto.

**Las fichas** (`FichaPersonaje`) entran alternando izquierda/derecha y son
translúcidas con desenfoque para dejar ver el fondo. Cada una tiene:

- Franja superior con el color del personaje.
- Retrato local con anillo de su color (si fallara, queda visible su nombre
  detrás).
- Nombre + kanji, y chips con orden/color, romaji y alias.
- Rejilla de datos del wiki: cumpleaños, edad, altura, tipo de sangre,
  ocupación y seiyū.
- Personalidad, «Su pasión» y «Rasgo distintivo».

Los enlaces del carrusel (`href="#ichika-nakano"`) saltan a la ficha
correspondiente.

### 7.5 Antecedentes (`Antecedentes.jsx`) — `#antecedentes`

De dónde viene el juego. Tres partes:

1. **Primer contacto** — la serie ya estuvo en Weiss Schwarz (Bushiroad, 2008).
2. **Expansiones con cartas firmadas** — las tres expansiones de Weiss Schwarz
   (_The Quintessential Quintuplets_, _…2_ y _…Movie_) con foto de la caja,
   enlace a Amazon y la nota de que salieron en japonés e inglés.
3. **Lo popular que se volvió** — cuatro cartas SP firmadas con su **precio de
   mercado real de TCGplayer**, con hover 3D e imagen y badge enlazados al
   producto.

### 7.6 El juego de cartas (`JuegoCartas.jsx`) — `#juego`

Responsable del contenido: **Junior**. Contenido alineado con el reglamento
oficial.

Es la única sección con **imagen de fondo propia** (`juego.bgImage`), aplicada
mediante la prop `style` de `Section` con un velo blanco al 70 % y
`background-attachment: fixed`.

Contiene: dos bloques (cuándo nació, en qué consiste), las **partes de la
mesa**, un panel degradado con **cómo se gana**, y los **cinco tipos de carta**
en una fila flexible que deja **la última fila centrada** (en vez de una rejilla
que los alinearía a la izquierda), con un color de borde cada uno (Personaje rosa, Episodio verde, Evento azul,
Protagonista dorado, Carta E vino).

Las tarjetas entran **deslizándose lateralmente** con las clases `.arena-card`
/ `--left` / `--right`.

### 7.7 Tutorial (`Tutorial.jsx`) — `#tutorial`

Adaptado del **reglamento oficial** (総合ルール ver. 1.09) y de la guía para
principiantes. Es la sección más larga: nueve bloques.

1. **El objetivo** — banda degradada con tres anillos que hacen *pop*
   escalonado: conseguir 3 novias, o que el rival se quede sin mazo.
2. **Los tres mazos** — principal (50 cartas), protagonista (10) y mazo E
   (0–5). Cada tarjeta dibuja una pila de cartas que reacciona al hover.
3. **Anatomía de una carta** — carta real de Ichika con **9 números** que
   aparecen escalonados (`pin-pop` + anillo pulsante). Cada uno muestra su
   explicación al pasar el cursor; los de la mitad inferior abren hacia arriba.
   Al lado, la leyenda numerada entra alternando, y debajo una nota explica que
   ese número cambia según el tipo de carta.
4. **Tipos de carta** — cinco filas alternas con la carta de ejemplo (hover 3D)
   y «cómo se usa».
5. **La mesa** — foto del **tapete oficial** con la explicación de «de frente»
   y «en diagonal», más las 7 zonas.
6. **El turno** — las 4 fases (inicio, principal, aproximación, final) como un
   flujo numerado con flechas.
7. **La aproximación** — los 3 pasos en línea de tiempo y una **fórmula visual
   con números que cuentan hacia arriba** (hook `useCountUp` con
   `requestAnimationFrame`): `poder de novia + episodios ≥ poder requerido`, que
   cambia a «¡Conquista!» en verde cuando se cumple.
8. **Cómo ganar** — las cinco hermanas, tres marcadas con ✓ dorado.
9. **Palabras clave** — nueve tarjetas que **giran en 3D** al pasar el cursor
   (`.flip` con `preserve-3d` y `backface-visibility`), también accesibles con
   teclado gracias a `:focus-within`.

### 7.8 Las expansiones (`Expansiones.jsx`) — `#expansiones`

Los ocho sets **BP1–BP8**, agrupados por temporada, con datos oficiales de
`5hanayome-cardgame.com/products/bpN`.

Se muestran en **dos columnas** para que la foto del cartón se vea grande.
Arriba, dos pastillas con la ficha común (12 sobres por cartón a ¥5.280, 5
cartas por sobre a ¥440). Cada tarjeta muestra la **foto del cartón** —sin
hover 3D, a diferencia de las cartas—, el código del set, el nombre, un chip
con la fecha de lanzamiento, la descripción, el tamaño del set y qué destaca.

Si un set no tuviera foto (`caja: null`), se dibuja un marcador `📦` con su
código.

### 7.9 Las rarezas (`Rarezas.jsx`) — `#rarezas`

Dos grupos:

- **Cartas base** (C, U, R, RR, GR, ER) en rejilla de 3 columnas.
- **Cartas paralelas** (+, RR+, HR, SP, SSP, HSP/ISP, GSP) a **una sola
  columna**, en tarjetas anchas: la ficha de texto a la izquierda y las dos
  cartas grandes a la derecha, mostrando **base y paralela** con el efecto foil
  en las que corresponde.

Cada tarjeta lleva la sigla en una pastilla degradada, el nombre correcto, y
una ficha normalizada: **cuántas copias por cartón**, **en qué parte del sobre
aparece** y sus **rasgos** como chips.

### 7.10 Showcase de la SSSP (`SSSPShowcase.jsx`)

Va **fuera** de `Section`, pegado bajo las rarezas, porque necesita ocupar todo
el ancho. Es una banda oscura (`#0a0609`, siempre oscura en ambos temas) con:

- Halo de luz radial dorado/rosa y una rejilla sutil de fondo.
- La carta en grande, con **hover 3D reforzado** (`max={22}`), anillo dorado,
  efecto **foil** y un barrido de luz que la cruza al entrar en pantalla.
- Entrada dramática: la carta llega con `scale 0.75 → 1` y desenfoque que se
  disipa; el texto a los 200 ms; el **precio** hace zoom a los 500 ms.
- Ficha completa: por cartón, en el sobre, numeración 000/099 y rasgos.

### 7.11 Footer (`Footer.jsx`)

Banda degradada vino → rosa con el **logo oficial**, los mismos enlaces del
navbar, la autoría y el aviso de que es un proyecto sin ánimo de lucro.

---

## 8. Los archivos de datos

**Todo el texto vive en `src/data/`.** Para cambiar contenido no hace falta
tocar ningún componente: basta con editar estos archivos. Añadir un elemento a
un array hace aparecer una tarjeta nueva automáticamente.

| Archivo | Sección | Responsable |
|---|---|---|
| `nav.js` | Enlaces del navbar, título y ruta del logo | — |
| `hero.js` | Header: imagen de fondo, título, texto y botón | — |
| `queEs.js` | Sinopsis, autor, reconocimientos, elenco y contexto | Gael |
| `personajes.js` | Las cinco fichas de las hermanas | Issac |
| `antecedentes.js` | Weiss Schwarz, cajas firmadas y precios | Yo |
| `juego.js` | Descripción, mesa, cómo se gana y tipos de carta | Junior |
| `tutorial.js` | Objetivo, mazos, anatomía, tipos, mesa, turno, aproximación, victoria y palabras clave | Yo (reglas) |
| `expansiones.js` | Los sets BP1–BP8 | — |
| `rarezas.js` | Rarezas por grupo + la secreta SSSP | — |

Cada archivo lleva comentarios explicando la forma de los datos y de dónde
salen. Puntos a tener en cuenta:

- **`personajes.js`** — seis fichas. Cada una necesita `id` (que es también el ancla),
  `colorHex` (tiñe franja, chips y anillo) y `retrato`. El `id` debe coincidir
  con las claves del objeto `fondos` de `Personajes.jsx` para que el fondo y el
  carrusel funcionen.
- **`rarezas.js`** — la SSSP **no** va en `grupos`, va en el objeto `secreta`
  porque tiene su propio showcase. El campo `columnas` de cada grupo decide la
  rejilla: `1` activa además la tarjeta ancha con el texto y las cartas en dos
  columnas internas. Cada imagen admite `foil: true`.
- **`expansiones.js`** — `caja` es la URL de la foto del cartón; si es `null`
  sale el marcador.
- **`queEs.js`** — cada figura del elenco lleva su `imagen` y una clave `hover`
  que se traduce a clases de Tailwind en el componente (deben escribirse
  completas, Tailwind no las detecta si se construyen al vuelo).

---

## 9. Recursos estáticos

Todo lo que está en `public/` se sirve tal cual desde la raíz: un archivo en
`public/img/logo.webp` se pide como `/img/logo.webp`.

**Se descargaron a local a propósito** los retratos de las hermanas, el logo
oficial y la foto del seiyū: al enlazarlos desde fuera algunos no cargaban de
forma fiable. Las imágenes de cartas y de cartones sí se enlazan directamente
al sitio oficial del juego, porque son estables.

`src/assets/autor.png` es la excepción: se **importa** desde `queEs.js`, así
que Vite lo procesa, le pone un hash y lo mete en `dist/assets/`.

---

## 10. Accesibilidad y rendimiento

- **Movimiento reducido:** todo el bloque de animaciones se desactiva con
  `@media (prefers-reduced-motion: reduce)`, y `Tilt` comprueba la preferencia
  antes de inclinar nada.
- **Teclado:** el carrusel se maneja con flechas; las tarjetas que giran
  responden a `:focus-within`; los enlaces tienen anillo de foco visible.
- **Lectores de pantalla:** las capas decorativas llevan `aria-hidden="true"`,
  las imágenes tienen `alt` descriptivo, el botón del tema y el del menú tienen
  `aria-label`, y el menú móvil informa con `aria-expanded`.
- **Carga de imágenes:** las de carta usan `loading="lazy"`; los retratos de las
  fichas no, porque son el contenido principal y llevan `width`/`height` para
  evitar saltos de maquetación. Todos tienen `onError` con texto de reserva.
- **Vídeo:** `preload="none"` y solo se reproduce el activo.

---

## 11. Tareas frecuentes

**Añadir una sección nueva**

1. Crea `src/data/miSeccion.js` con el contenido.
2. Crea `src/components/MiSeccion.jsx` usando `<Section id="mi-seccion" …>`.
3. Impórtala en `App.jsx` en la posición que quieras.
4. Añade `{ id: 'mi-seccion', label: 'Mi sección' }` a `data/nav.js`.

**Añadir una expansión** — añade un objeto al array `sets` de la temporada que
toque en `data/expansiones.js`, con `codigo`, `titulo`, `lanzamiento`,
`totalCartas`, `descripcion`, `destacado` y `caja`.

**Marcar una carta como foil** — añade `foil: true` al objeto de esa imagen en
`data/rarezas.js`.

**Cambiar la paleta** — edita los `--color-*` del bloque `@theme` en
`index.css`. Para los fondos claro/oscuro, los bloques `:root` y `.dark`.

**Cambiar el logo** — sustituye `public/img/logo-5hanayome.webp` o cambia
`SITE_LOGO` en `data/nav.js`.

**Cambiar la foto de fondo de una hermana** — sustituye el JPG correspondiente
en `public/videos/` o cambia la ruta en el objeto `fondos` de `Personajes.jsx`.

---

## 12. Datos a revisar

- **`antecedentes.js` → `valor.cartas[].valor`** — precios tomados de TCGplayer
  al montar la página; conviene actualizarlos cada cierto tiempo.
- **`tutorial.js` → `anatomia.partes[].x / .y`** — posición en % de cada número
  sobre la carta de ejemplo; hay que reajustarlos si se cambia la carta.
- **`tutorial.js` → `aproximacion.formula`** — son valores de ejemplo para la
  animación del contador.
- **`juego.js` → `bgImage`** — la imagen de fondo actual es una miniatura de
  baja resolución; conviene sustituirla.
- **Peso del repositorio** — `public/videos/` ocupa unos 100 MB en vídeos. Si el
  repositorio crece demasiado, valdría la pena comprimirlos o servirlos desde
  fuera.

---

**Créditos.** Hecho por Eduardo Alberto, Gael, Issac y Junior.
Obra original de Negi Haruba · Kodansha · Bushiroad. Proyecto sin ánimo de
lucro; todas las imágenes pertenecen a sus autores.
