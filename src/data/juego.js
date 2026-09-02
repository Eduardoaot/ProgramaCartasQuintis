// Seccion "El juego de cartas: descripción" — responsable: Junior
// Fuente: https://5hanayome-cardgame.com/for_beginner/
// Cuándo nació, en qué consiste, partes de la arena, cómo se gana y tipos de carta.
export const juego = {
  intro:
    'Una vista general del TCG: cuándo salió, de qué va una partida, cómo está dividida la mesa y qué cartas vas a manejar.',
  bloques: [
    {
      titulo: 'Cuándo nació',
      texto:
        'El juego de cartas se lanzó en Japón junto al set BP1, coincidiendo con la popularidad del anime. Desde entonces se han publicado sets numerados (BP1–BP7) repartidos en dos temporadas.',
    },
    {
      titulo: 'En qué consiste',
      texto:
        'Duelo 1 contra 1. Cada jugador usa un mazo principal de 50 cartas más un mazo de protagonista de 10 cartas de Futaro (una de cada tipo), 60 en total para torneo. Por turnos juegas personajes y episodios para acercarte a las hermanas Nakano; gana quien consigue tres novias antes que el rival.',
    },
  ],
  arena: {
    titulo: 'Partes de la arena',
    partes: [
      { nombre: 'Mazo principal', texto: '50 cartas. De aquí robas al inicio de cada turno.' },
      { nombre: 'Mazo de protagonista', texto: '10 cartas de Futaro, una de cada tipo.' },
      { nombre: 'Mazo E', texto: 'Cartas E con funda distinta, se maneja aparte.' },
      { nombre: 'Mano', texto: 'Las cartas que puedes jugar en tu turno.' },
      { nombre: 'Zona de personajes', texto: 'Donde colocas a las hermanas en juego.' },
      { nombre: 'Zona de novias', texto: 'Hermanas conquistadas: llegar a 3 gana la partida.' },
      { nombre: 'Descarte', texto: 'Cartas usadas o retiradas del juego.' },
    ],
  },
  comoSeGana:
    'Consigue que tres de las cinco hermanas lleguen a tu zona de novias antes que el rival. También pierdes si te quedas sin cartas en el mazo principal.',
  tiposCarta: [
    { nombre: 'Personaje', texto: 'Una de las hermanas Nakano. Tiene coste, nivel y color.' },
    { nombre: 'Episodio', texto: 'Recrea un momento de la historia y acompaña a una hermana.' },
    { nombre: 'Evento', texto: 'Efecto puntual que altera el turno; luego va al descarte.' },
    { nombre: 'Héroe', texto: 'Futaro, desde el mazo de protagonista. Habilita y potencia tus jugadas.' },
    { nombre: 'Carta E (Echara)', texto: 'Del mazo E; aporta efectos especiales fuera del mazo principal.' },
  ],
}
