// Sección "El juego de cartas: descripción" — responsable: Junior
// Cuándo nació, en qué consiste, partes de la arena, cómo se gana y tipos de carta.
export const juego = {
  bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIXzFt9UZoOcH58YCbN5BYwV3zFu0yoJFC_E6DByKmI_p4ym1q5ve8ocH&s=10',
  intro:
    'Una vista general del TCG: cuándo salió, de qué va una partida, cómo está dividida la mesa y qué cartas vas a manejar.',
  bloques: [
    {
      titulo: 'Cuándo nació',
      texto:
        'Nacido el 18 de octubre de 2024 gracias a Bushiroad, este juego de cartas coleccionables dio vida a una nueva experiencia interactiva basada totalmente en el popular anime de las quintillizas.',
    },
    {
      titulo: 'En qué consiste',
      texto:
        'Este TCG permite construir mazos temáticos enfocados en tu quintilliza favorita, combinando cartas de personajes y eventos del anime para competir por puntos de afecto en batallas estratégicas entre dos jugadores.',
    },
  ],
  arena: {
    titulo: 'Partes de la arena',
    partes: [
      { nombre: 'Mazo', texto: 'Zona donde se coloca tu mazo principal. De aquí robas cartas al inicio de cada turno.' },
      { nombre: 'Mano', texto: 'Cartas que tienes disponibles y listas para jugar durante tu turno.' },
      { nombre: 'Zona de personajes', texto: 'Espacio central donde despliegas a las hermanas Nakano para la batalla.' },
      { nombre: 'Zona de episodios', texto: 'Área destinada a las cartas de situación que apoyan tu estrategia.' },
      { nombre: 'Zona de novias', texto: 'Lugar donde acumulas a las hermanas conquistadas. ¡Consigue 3 para ganar!' },
      { nombre: 'Descarte', texto: 'Zona donde van las cartas utilizadas, consumidas o retiradas del juego.' },
    ],
  },
  comoSeGana:
    'Consigue que tres de las cinco hermanas lleguen a tu zona de novias. También puedes ganar si tu rival se queda sin cartas en el mazo (según la variante de reglas que se acuerde).',
  tiposCarta: [
    { nombre: 'Personaje', texto: 'Representan a las hermanas Nakano. Cuentan con coste, nivel y afinidad para liderar tu estrategia en el tablero.' },
    { nombre: 'Episodio', texto: 'Recrean momentos icónicos de la historia y otorgan efectos puntuales para potenciar tu jugada.' },
    { nombre: 'Héroe', texto: 'Futaro Uesugi. No compite por ser novia, pero apoya, habilita y potencia las habilidades de tus cartas.' },
    { nombre: 'Evento / Itsutsugo', texto: 'Cartas de acción especial capaces de cambiar las reglas del turno o alterar el ritmo de la partida.' },
  ],
}
