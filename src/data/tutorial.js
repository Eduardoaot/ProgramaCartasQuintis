// Seccion "Tutorial: como jugar" — responsable: YO (reglas)
//
// Fuentes: https://5hanayome-cardgame.com/for_beginner/ y
//          https://5hanayome-cardgame.com/rule/ (+ PDF de reglas oficiales).
//
// Estructura:
//  - anatomia   -> carta de ejemplo con sus partes marcadas (x/y en %)
//  - tiposCarta -> ejemplo visual de cada tipo con como se usa
//  - turno      -> el turno paso a paso
//  - reglasClave-> reglas que se olvidan a menudo
//  - comoGanar  -> objetivo: 3 novias
const IMG = 'https://5hanayome-cardgame.com/wordpress/wp-content/images/cardlist'

export const tutorial = {
  intro:
    'Guia visual para tu primera partida: las partes de una carta, que hace cada tipo, el flujo del turno y como se gana. Basado en la guia oficial para principiantes.',

  anatomia: {
    titulo: 'Anatomía de una carta',
    nota: 'Pasa el cursor por los números para ver cada parte.',
    img: `${IMG}/BP6/GYC-BP6-002P1_IMG.png`,
    alt: 'Carta de ejemplo con sus partes señaladas',
    partes: [
      { n: 1, x: 22, y: 9, label: 'Nombre y color', texto: 'Quién es la carta y a qué hermana (color) pertenece.' },
      { n: 2, x: 80, y: 12, label: 'Coste / Nivel', texto: 'Recursos necesarios para jugarla y su nivel de juego.' },
      { n: 3, x: 50, y: 40, label: 'Ilustración', texto: 'Anime, manga o arte original. Define en parte la rareza.' },
      { n: 4, x: 20, y: 70, label: 'Tipo de carta', texto: 'Personaje, Episodio, Evento, Héroe o carta E.' },
      { n: 5, x: 78, y: 74, label: 'Texto de efecto', texto: 'Qué ocurre cuando la carta entra en juego o se activa.' },
      { n: 6, x: 50, y: 92, label: 'Rareza y numeración', texto: 'Sigla (C, R, SSP…) y, en secretas, el número 000/099.' },
    ],
  },

  tiposCarta: [
    {
      codigo: 'PJ',
      nombre: 'Carta de Personaje',
      img: `${IMG}/BP6/GYC-BP6-002P1_IMG.png`,
      texto: 'Una de las hermanas Nakano, con coste, nivel y color.',
      comoSeUsa: 'Pagas su coste y la colocas en tu zona de juego. Es la base para acercarte a conquistarla.',
    },
    {
      codigo: 'EP',
      nombre: 'Carta de Episodio',
      img: `${IMG}/BP6/GYC-BP6-050_4C.png`,
      texto: 'Recrea una escena de la historia y acompaña a una hermana.',
      comoSeUsa: 'Se combina con la hermana de su mismo color para subir su relación y dar un efecto.',
    },
    {
      codigo: 'EV',
      nombre: 'Carta de Evento',
      img: `${IMG}/BP6/GYC-BP6-071_4C.png`,
      texto: 'Efecto puntual que altera el turno.',
      comoSeUsa: 'La juegas, resuelves su efecto (robar, mover, frenar al rival) y va al descarte.',
    },
    {
      codigo: 'HÉROE',
      nombre: 'Carta de Héroe (Futaro)',
      img: `${IMG}/BP6/GYC-BP6-078P1_IMG.png`,
      texto: 'Futaro. Va en un mazo aparte: el mazo de protagonista (10 cartas, 1 de cada tipo).',
      comoSeUsa: 'Guía la partida: habilita jugadas y da acciones o descuentos mientras está activo.',
    },
    {
      codigo: 'E',
      nombre: 'Carta E (Echara)',
      img: `${IMG}/BP6/GYC-BP6-016P_IMG.png`,
      texto: 'Cartas del "mazo E", que se juega con fundas distintas al resto.',
      comoSeUsa: 'Aportan efectos especiales desde fuera del mazo principal, en momentos concretos.',
    },
  ],

  turno: {
    titulo: 'El turno paso a paso',
    pasos: [
      { titulo: 'Roba', texto: 'Roba 1 carta al inicio de tu turno.' },
      { titulo: 'Genera recursos', texto: 'Suma los recursos disponibles para este turno.' },
      { titulo: 'Juega personajes', texto: 'Coloca hermanas Nakano pagando su coste.' },
      { titulo: 'Juega episodios y eventos', texto: 'Combina episodios con la hermana de su mismo color; usa eventos para alterar el turno.' },
      { titulo: 'Sube la relación', texto: 'Al llegar al umbral, la hermana pasa a tu zona de novias.' },
      { titulo: 'Pasa el turno', texto: 'El rival juega con las mismas reglas.' },
    ],
  },

  reglasClave: [
    'Mazo principal de 50 cartas + mazo de protagonista de 10 (60 en torneo).',
    'El mazo E usa fundas distintas y se maneja aparte.',
    'Cada hermana solo puede ser tu novia una vez.',
    'Los eventos se descartan tras usarse salvo que digan lo contrario.',
    'Si te quedas sin cartas en el mazo principal, pierdes.',
  ],

  comoGanar: {
    texto: 'Ganas en cuanto tu tercera hermana entra a la zona de novias. Si ambos llegáis en el mismo turno, desempata quien tenga mayor relación acumulada.',
    objetivo: 3,
    hermanas: [
      { nombre: 'Ichika', img: `${IMG}/BP6/GYC-BP6-078P1_IMG.png` },
      { nombre: 'Nino', img: `${IMG}/SD/GYC-SD0-002_4c.png` },
      { nombre: 'Miku', img: `${IMG}/SD/GYC-SD0-008_4c.png` },
      { nombre: 'Yotsuba', img: `${IMG}/SD/GYC-SD0-006_4c.png` },
      { nombre: 'Itsuki', img: `${IMG}/PR/GYC-PR_19.png` },
    ],
  },
}
