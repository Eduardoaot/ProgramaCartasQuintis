// Seccion "Las expansiones que existen" (antes "Sets disponibles").
// Agrupadas por temporada. Añadir aquí los sets nuevos cuando salgan.
const IMG = 'https://5hanayome-cardgame.com/wordpress/wp-content/images/cardlist'

export const expansiones = {
  intro: 'Todos los sets publicados hasta ahora, agrupados por temporada.',
  temporadas: [
    {
      nombre: 'Temporada 1',
      sets: [
        {
          titulo: 'Volumen 1',
          texto: 'Set BP1, la línea original de la primera temporada.',
          images: [{ src: `${IMG}/BP1/GYC-BP1-001P2_4c.png`, alt: 'Carta del Volumen 1' }],
        },
        {
          titulo: 'Volumen 2',
          texto: 'Set BP2, con nuevas cartas SSSP de las hermanas Nakano.',
          images: [{ src: `${IMG}/BP2/GYC-BP02_008SSSP.png`, alt: 'Carta del Volumen 2' }],
        },
        {
          titulo: 'Volumen 3',
          texto: 'Set BP3, ampliando el pool de cartas de la temporada 1.',
          images: [{ src: `${IMG}/BP3/GYC-BP3-017P2_img.png`, alt: 'Carta del Volumen 3' }],
        },
        {
          titulo: 'Volumen 4',
          texto: 'Set BP4, cierre de la primera temporada con dos cartas destacadas.',
          wide: true,
          images: [
            { src: `${IMG}/BP4/GYC-BP4-022P2_img.png`, alt: 'Primera carta del Volumen 4' },
            { src: `${IMG}/BP4/GYC-BP4-029P2_img.png`, alt: 'Segunda carta del Volumen 4' },
          ],
        },
      ],
    },
    {
      nombre: 'Temporada 2',
      sets: [
        {
          titulo: 'Volumen 5',
          texto: 'Set BP5, inicio de la segunda temporada.',
          images: [{ src: `${IMG}/BP5/GYC-BP5-037P3_IMG.png`, alt: 'Carta del Volumen 5' }],
        },
        {
          titulo: 'Volumen 6',
          texto: 'Set BP6, con más cartas de la segunda temporada.',
          images: [{ src: `${IMG}/BP6/GYC-BP6-065P3_IMG.png`, alt: 'Carta del Volumen 6' }],
        },
        {
          titulo: 'Volumen 7',
          texto: 'Set BP7, la entrega más reciente de la segunda temporada.',
          images: [{ src: `${IMG}/BP7/GYC-BP7-017P3_img.png`, alt: 'Carta del Volumen 7' }],
        },
      ],
    },
  ],
}
