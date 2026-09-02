// Sección "El juego de cartas: descripción" — responsable: Junior
// Contenido alineado con el reglamento oficial (総合ルール ver. 1.09) y la guía
// para principiantes de 5hanayome-cardgame.com.
export const juego = {
  bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIXzFt9UZoOcH58YCbN5BYwV3zFu0yoJFC_E6DByKmI_p4ym1q5ve8ocH&s=10',
  intro:
    'Una vista general del TCG: cuándo salió, de qué va una partida, cómo está dividida la mesa y qué cartas vas a manejar.',
  bloques: [
    {
      titulo: 'Cuándo nació',
      texto:
        'Lo publicó Bushiroad el 18 de octubre de 2024 junto al Booster Pack vol.1, aprovechando el tirón del anime. Desde entonces han salido siete sets (BP1–BP7) repartidos en dos temporadas.',
    },
    {
      titulo: 'En qué consiste',
      texto:
        'Duelo 1 contra 1. Cada jugador usa un mazo principal de 50 cartas y un mazo de protagonista de 10 cartas de Futaro (una de cada tipo). Por turnos despliegas hermanas Nakano y las acompañas de episodios para "aproximarte" a Futaro; gana quien consigue tres novias antes que el rival.',
    },
  ],
  arena: {
    titulo: 'Partes de la mesa',
    partes: [
      { nombre: 'Lanes de protagonista', texto: '5 casillas compartidas en el centro, con un Futaro en cada una. Las hermanas se aproximan a la de enfrente o en diagonal.' },
      { nombre: 'Lanes de personaje', texto: '5 por jugador. Aquí colocas a las hermanas Nakano y les enganchas sus episodios.' },
      { nombre: 'Mazo principal', texto: '50 cartas de personaje, episodio y evento. Robas de aquí; si se queda a 0, pierdes.' },
      { nombre: 'Mazo de protagonista', texto: '10 cartas de Futaro, una de cada tipo, separado del mazo principal.' },
      { nombre: 'Mazo E', texto: 'Opcional: hasta 5 cartas "engage", con funda distinta al resto.' },
      { nombre: 'Mano', texto: 'Tus cartas ocultas, listas para jugar en tu turno.' },
      { nombre: 'Zona de novias', texto: 'Donde van las hermanas conquistadas. Llegar a 3 gana la partida.' },
      { nombre: 'Sala de espera', texto: 'El descarte: eventos usados y cartas gastadas.' },
      { nombre: 'Zona de exclusión', texto: 'Cartas retiradas del todo de la partida.' },
    ],
  },
  comoSeGana:
    'Consigue que tres de las cinco hermanas lleguen a tu zona de novias antes que el rival. También ganas si el mazo principal del rival se queda sin cartas. Si los dos lo lográis en el mismo turno, es empate.',
  tiposCarta: [
    { nombre: 'Personaje', texto: 'Una de las hermanas Nakano. Tiene un poder de novia (花嫁力); es quien hace la aproximación a Futaro.' },
    { nombre: 'Episodio', texto: 'Recrea un momento de la historia. Se engancha a una hermana para subir su poder de novia y darle un efecto.' },
    { nombre: 'Evento', texto: 'Carta de un solo uso. Se juega en la fase principal o durante la aproximación según su icono (【メイン】 / 【アプローチ】) y va a la sala de espera.' },
    { nombre: 'Protagonista', texto: 'Futaro. Va en su propio mazo y no compite por ser novia: marca el objetivo con su poder de novia requerido.' },
    { nombre: 'Carta E', texto: 'Versión "engage" especial de un personaje o del protagonista. Se maneja aparte desde el mazo E (llegó con el vol.6).' },
  ],
}
