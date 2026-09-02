// Seccion "El juego de cartas: descripción" — responsable: Junior
// Cuándo nació, en qué consiste, partes de la arena, cómo se gana y tipos de carta.
export const juego = {
  bgImage: 'https://e0.pxfuel.com/wallpapers/878/366/desktop-wallpaper-las-quintillizas-anime.jpg',
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
        'Dos jugadores se enfrentan con un mazo temático de las hermanas Nakano. Por turnos juegas cartas de personaje y de episodio para avanzar tu relación con las quintillizas. Gana quien consigue tres novias antes que el rival.',
    },
  ],
  arena: {
    titulo: 'Partes de la arena',
    partes: [
      { nombre: 'Mazo', texto: 'De donde robas cartas al inicio de cada turno.' },
      { nombre: 'Mano', texto: 'Las cartas que puedes jugar en tu turno.' },
      { nombre: 'Zona de personajes', texto: 'Donde colocas a las hermanas en juego.' },
      { nombre: 'Zona de episodios', texto: 'Cartas de situación que apoyan tu jugada.' },
      { nombre: 'Zona de novias', texto: 'Donde se acumulan las hermanas conquistadas: llegar a 3 gana.' },
      { nombre: 'Descarte', texto: 'Cartas usadas o retiradas del juego.' },
    ],
  },
  comoSeGana:
    'Consigue que tres de las cinco hermanas lleguen a tu zona de novias. También puedes ganar si tu rival se queda sin cartas en el mazo (según la variante de reglas que se acuerde).',
  tiposCarta: [
    { nombre: 'Personaje', texto: 'Una de las hermanas Nakano. Tiene coste, nivel y afinidad.' },
    { nombre: 'Episodio', texto: 'Recrea un momento de la historia y da un efecto puntual.' },
    { nombre: 'Héroe', texto: 'Futaro. No compite por ser novia: habilita y potencia tus jugadas.' },
    { nombre: 'Evento / Itsutsugo', texto: 'Cartas especiales que cambian las reglas del turno.' },
  ],
}
