// Seccion "Tutorial: como jugar" — responsable: YO (reglas)
//
// Adaptado del reglamento oficial:
//  - Total (comprehensive) rules "五等分の花嫁カードゲーム 総合ルール" ver. 1.09 (2026-07-30)
//  - Guia para principiantes https://5hanayome-cardgame.com/for_beginner/
//  - Floor rules de Bushiroad
const IMG = 'https://5hanayome-cardgame.com/wordpress/wp-content/images/cardlist'

export const tutorial = {
  intro:
    'Duelo 1 contra 1 basado en el reglamento oficial. Aqui tienes el objetivo, las cartas, la mesa, el turno y como se conquista a una hermana.',

  objetivo: {
    titulo: 'El objetivo',
    texto:
      'Consigue 3 novias (花嫁) en tu zona de novias antes que tu rival. Tambien ganas si el rival se queda sin cartas en su mazo principal. Si los dos lo lograis a la vez, es empate.',
    novias: 3,
  },

  mazos: {
    titulo: 'Los tres mazos',
    items: [
      {
        nombre: 'Mazo principal',
        cantidad: '50 cartas exactas',
        detalle: 'Personajes, episodios y eventos. Maximo 4 copias por nombre.',
      },
      {
        nombre: 'Mazo de protagonista',
        cantidad: '10 cartas exactas',
        detalle: 'Solo cartas de protagonista (Futaro), una de cada tipo. Maximo 1 copia por nombre.',
      },
      {
        nombre: 'Mazo E',
        cantidad: '0 a 5 cartas',
        detalle: 'Opcional. Solo cartas "engage" (EHero / EChara). Maximo 1 por nombre. Funda distinta.',
      },
    ],
  },

  anatomia: {
    titulo: 'Anatomía de una carta',
    nota: 'Pasa el cursor por los números.',
    img: `${IMG}/BP6/GYC-BP6-002P1_IMG.png`,
    alt: 'Carta de personaje con sus partes señaladas',
    partes: [
      { n: 1, x: 30, y: 8, label: 'Nombre de la carta', texto: 'En personajes y protagonista: nombre de persona (grande) + nombre auxiliar (pequeño).' },
      { n: 2, x: 82, y: 20, label: 'Tipo de carta', texto: 'Protagonista, Personaje, Episodio o Evento (más el tipo especial Engage).' },
      { n: 3, x: 16, y: 33, label: 'Poder de novia (花嫁力)', texto: 'Valor de la hermana al hacer la aproximación.' },
      { n: 4, x: 84, y: 44, label: 'Corrección de poder (補正値)', texto: 'Cuánto suma un episodio al poder de la hermana a la que se une.' },
      { n: 5, x: 15, y: 58, label: 'Poder requerido (必要花嫁力)', texto: 'En el protagonista: el mínimo que necesita una hermana para conquistarlo.' },
      { n: 6, x: 50, y: 74, label: 'Texto de habilidad', texto: 'Habilidad de activación [coste], automática o permanente.' },
      { n: 7, x: 78, y: 84, label: 'Frase / diálogo', texto: 'Texto ambiental, sin efecto en la partida.' },
      { n: 8, x: 50, y: 40, label: 'Ilustración', texto: 'Anime, manga o arte original. Influye en la rareza.' },
      { n: 9, x: 50, y: 95, label: 'Información incidental', texto: 'Número de coleccionista, ilustrador y copyright.' },
    ],
  },

  tiposCarta: [
    {
      codigo: 'Hero',
      nombre: 'Protagonista (Futaro)',
      valor: 'Tiene: poder de novia requerido',
      img: `${IMG}/BP6/GYC-BP6-078P1_IMG.png`,
      texto: 'Va en el mazo de protagonista, no se juega desde la mano. Las hermanas le hacen la aproximación.',
      comoSeUsa: 'Al preparar la partida se coloca uno en cada una de las 5 lanes de protagonista, boca arriba.',
    },
    {
      codigo: 'Character',
      nombre: 'Personaje (hermana Nakano)',
      valor: 'Tiene: poder de novia',
      img: `${IMG}/BP6/GYC-BP6-002P1_IMG.png`,
      texto: 'Una de las cinco hermanas. Es quien hace la aproximación al protagonista.',
      comoSeUsa: 'La juegas en una de tus lanes de personaje libres. Solo 1 personaje por turno.',
    },
    {
      codigo: 'Episode',
      nombre: 'Episodio',
      valor: 'Tiene: corrección de poder de novia',
      img: `${IMG}/BP6/GYC-BP6-050_4C.png`,
      texto: 'Se coloca sobre una hermana para subir su poder de novia y darle un efecto.',
      comoSeUsa: 'Hasta 2 episodios por turno. Se colocan debajo de la carta de la hermana.',
    },
    {
      codigo: 'Event',
      nombre: 'Evento',
      valor: 'Lleva el icono 【メイン】 o 【アプローチ】',
      img: `${IMG}/BP6/GYC-BP6-071_4C.png`,
      texto: 'Carta de un solo uso: aplicas su efecto y va a la sala de espera.',
      comoSeUsa: 'Los 【メイン】 en tu fase principal; los 【アプローチ】 durante el paso de evento de la aproximación.',
    },
    {
      codigo: 'Engage',
      nombre: 'Carta E (Engage)',
      valor: 'Vive en el mazo E',
      img: `${IMG}/BP6/GYC-BP6-016P_IMG.png`,
      texto: 'Versión especial de protagonista o personaje que se maneja aparte del mazo principal.',
      comoSeUsa: 'Introducidas en el vol.6. Usan funda distinta al resto de mazos.',
    },
  ],

  arena: {
    titulo: 'La mesa',
    nota: 'Las 5 lanes de protagonista se comparten en el centro; cada jugador tiene 5 lanes de personaje enfrente.',
    relacion:
      'Una hermana solo puede aproximarse al protagonista que tiene "de frente" (misma lane) o "en diagonal" (lane contigua).',
    zonas: [
      { nombre: 'Lanes de protagonista', texto: '5, compartidas y numeradas 1-5. Un protagonista en cada una.' },
      { nombre: 'Lanes de personaje', texto: '5 por jugador. Aquí colocas a las hermanas y sus episodios.' },
      { nombre: 'Mazo principal', texto: '50 cartas. Robas de aquí; si llega a 0, pierdes.' },
      { nombre: 'Mano', texto: 'Tus cartas ocultas.' },
      { nombre: 'Sala de espera', texto: 'El descarte: eventos usados y cartas gastadas.' },
      { nombre: 'Zona de novias', texto: 'Hermanas conquistadas. 3 aquí = victoria.' },
      { nombre: 'Zona de exclusión', texto: 'Cartas retiradas del todo de la partida.' },
    ],
  },

  turno: {
    titulo: 'El turno, fase por fase',
    fases: [
      { nombre: 'Fase de inicio', clave: 'スタート', texto: 'Robas 2 cartas. Se salta en el primer turno del jugador inicial.' },
      { nombre: 'Fase principal', clave: 'メイン', texto: 'Juegas 1 personaje (1/turno), hasta 2 episodios, eventos 【メイン】 y habilidades, en el orden que quieras.' },
      { nombre: 'Fase de aproximación', clave: 'アプローチ', texto: 'Declaras la aproximación, ambos jugáis eventos 【アプローチ】 y se resuelve quién conquista.' },
      { nombre: 'Fase final', clave: 'エンド', texto: 'Terminan los efectos "hasta el final del turno" y ajustas tu mano al límite. Pasa el turno.' },
    ],
  },

  aproximacion: {
    titulo: 'La aproximación (アプローチ), paso a paso',
    pasos: [
      {
        titulo: 'Declaración',
        texto:
          'Eliges uno o más protagonistas y, para cada uno, una o más hermanas que lo tengan de frente o en diagonal. Cada hermana solo puede ir a un protagonista.',
      },
      {
        titulo: 'Paso de evento',
        texto:
          'Primero el rival y luego tú podéis jugar eventos 【アプローチ】, alternando, hasta que ninguno juegue nada.',
      },
      {
        titulo: 'Determinación de novia',
        texto:
          'Cada hermana cuyo poder de novia llega al requerido tiene éxito: giras ese protagonista boca abajo y mueves una hermana a tu zona de novias.',
      },
    ],
    formula: {
      base: 12,
      episodios: 3,
      requerido: 14,
    },
  },

  comoGanar: {
    texto:
      'Ganas en el momento en que tu tercera hermana entra a tu zona de novias. También ganas si el mazo principal del rival llega a 0 cartas.',
    objetivo: 3,
    hermanas: [
      { nombre: 'Ichika', img: `${IMG}/BP6/GYC-BP6-078P1_IMG.png` },
      { nombre: 'Nino', img: `${IMG}/SD/GYC-SD0-002_4c.png` },
      { nombre: 'Miku', img: `${IMG}/SD/GYC-SD0-008_4c.png` },
      { nombre: 'Yotsuba', img: `${IMG}/SD/GYC-SD0-006_4c.png` },
      { nombre: 'Itsuki', img: `${IMG}/PR/GYC-PR_19.png` },
    ],
  },

  keywords: [
    { k: '【メイン】', d: 'La carta o habilidad solo se juega en tu fase principal.' },
    { k: '【アプローチ】', d: 'El evento solo se juega en el paso de evento de la aproximación.' },
    { k: '【ターン1回】', d: 'Esa habilidad solo se usa una vez por turno.' },
    { k: '【同名ターン1回】', d: 'Una vez por turno entre todas las cartas del mismo nombre.' },
    { k: '【成長】 Crecimiento', d: 'Se juega encima de una hermana concreta ya en mesa, apilándose sobre ella.' },
    { k: '【使用条件】 Requisito', d: 'El evento necesita que tengas en juego a una hermana concreta.' },
    { k: '【専用】 Exclusivo', d: 'El episodio solo puede colocarse sobre la hermana indicada.' },
    { k: '【変装】 Disfraz', d: 'La carta cuenta además como otra persona.' },
    { k: '【only】', d: 'Solo funciona si en tus lanes y zona de novias hay únicamente hermanas de esa persona.' },
  ],
}
