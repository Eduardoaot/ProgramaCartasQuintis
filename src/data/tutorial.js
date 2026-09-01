// Seccion "Tutorial: como jugar" — responsable: YO (reglas)
//
// Estructura:
//  - anatomia   -> carta de ejemplo con sus partes marcadas (x/y en %)
//  - tiposCarta -> ejemplo visual de cada tipo con como se usa
//  - turno      -> el turno paso a paso
//  - reglasClave-> reglas que se olvidan a menudo
//  - comoGanar  -> objetivo: 3 de 5 hermanas
const IMG = 'https://5hanayome-cardgame.com/wordpress/wp-content/images/cardlist'

export const tutorial = {
  intro:
    'Guia visual para tu primera partida: primero las partes de una carta, luego que hace cada tipo, el flujo del turno y como se gana.',

  anatomia: {
    titulo: 'Anatomía de una carta',
    nota: 'Pasa el cursor por los números para ver cada parte.',
    img: `${IMG}/BP7/GYC-BP7-024P1_img.png`,
    alt: 'Carta de ejemplo con sus partes señaladas',
    partes: [
      { n: 1, x: 22, y: 9, label: 'Nombre y color', texto: 'Quién es la carta y a qué hermana (color) pertenece.' },
      { n: 2, x: 80, y: 12, label: 'Coste / Nivel', texto: 'Recursos necesarios para jugarla y su nivel de juego.' },
      { n: 3, x: 50, y: 40, label: 'Ilustración', texto: 'Anime, manga o arte original. Define en parte la rareza.' },
      { n: 4, x: 20, y: 70, label: 'Tipo de carta', texto: 'Personaje, Episodio, Héroe o Especial.' },
      { n: 5, x: 78, y: 74, label: 'Texto de efecto', texto: 'Qué ocurre cuando la carta entra en juego o se activa.' },
      { n: 6, x: 50, y: 92, label: 'Rareza y numeración', texto: 'Sigla (C, R, SSP…) y, en secretas, el número 000/099.' },
    ],
  },

  tiposCarta: [
    {
      codigo: 'EP',
      nombre: 'Carta de Episodio',
      img: `${IMG}/BP5/GYC-BP5-036_4C.png`,
      texto: 'Recrea una escena de la historia y da un efecto puntual.',
      comoSeUsa: 'La juegas, aplicas su efecto (robar, mover, frenar al rival) y normalmente va al descarte.',
    },
    {
      codigo: 'CH',
      nombre: 'Carta de Personaje',
      img: `${IMG}/BP5/GYC-BP5-044P_4C.png`,
      texto: 'Una hermana Nakano con coste, nivel y afinidad de color.',
      comoSeUsa: 'Pagas su coste y la colocas en la zona de personajes. Combínala con episodios de su mismo color.',
    },
    {
      codigo: 'HERO',
      nombre: 'Carta de Héroe (Futaro)',
      img: `${IMG}/BP7/GYC-BP7-008P_IMG.png`,
      texto: 'Futaro. No compite por ser novia: habilita y potencia tus jugadas.',
      comoSeUsa: 'Solo puedes tener una activa a la vez. Da acciones extra o reduce costes mientras está en juego.',
    },
    {
      codigo: 'ISP',
      nombre: 'Cartas Itsutsugo / Especiales',
      img: `${IMG}/BP7/GYC-BP7-012P1_IMG.png`,
      texto: 'Cartas raras que cambian una regla del turno.',
      comoSeUsa: 'Se activan en un momento concreto y suelen durar uno o varios turnos.',
    },
  ],

  turno: {
    titulo: 'El turno paso a paso',
    pasos: [
      { titulo: 'Roba', texto: 'Roba 1 carta al inicio de tu turno.' },
      { titulo: 'Genera recursos', texto: 'Suma los recursos disponibles para este turno.' },
      { titulo: 'Juega personajes', texto: 'Coloca hermanas Nakano pagando su coste.' },
      { titulo: 'Juega episodios', texto: 'Combínalos con la hermana de su misma afinidad.' },
      { titulo: 'Sube la relación', texto: 'Al llegar al umbral, la hermana pasa a tu zona de novias.' },
      { titulo: 'Pasa el turno', texto: 'El rival juega con las mismas reglas.' },
    ],
  },

  reglasClave: [
    'Solo una carta de héroe activa a la vez.',
    'Cada hermana solo puede ser tu novia una vez.',
    'Los episodios se descartan tras usarse salvo que digan lo contrario.',
    'No puedes tener dos copias de la misma hermana en juego.',
    'Si te quedas sin mazo, pierdes (según la variante acordada).',
  ],

  comoGanar: {
    texto: 'Ganas en cuanto tu tercera hermana entra a la zona de novias. Si ambos llegáis en el mismo turno, desempata quien tenga mayor relación acumulada.',
    objetivo: 3,
    hermanas: [
      { nombre: 'Ichika', img: `${IMG}/BP7/GYC-BP7-031P_img.png` },
      { nombre: 'Nino', img: `${IMG}/BP7/GYC-BP7-058P1_img.png` },
      { nombre: 'Miku', img: `${IMG}/BP6/GYC-BP6-080P1_IMG.png` },
      { nombre: 'Yotsuba', img: `${IMG}/BP7/GYC-BP7-012P1_IMG.png` },
      { nombre: 'Itsuki', img: `${IMG}/BP7/GYC-BP7-024P1_img.png` },
    ],
  },
}
