// Seccion "Las rarezas que hay". Dos grupos: comunes y paralelas.
const IMG = 'https://5hanayome-cardgame.com/wordpress/wp-content/images/cardlist'

export const rarezas = {
  intro:
    'Desde las comunes (C, U) hasta la codiciada SSSP: firmada por el autor y única en el mundo.',
  grupos: [
    {
      nombre: 'Cartas comunes',
      nota: 'Estas son las cartas que aparecen dentro de las primeras 4 de cada sobre, con excepción de GR y ER que aparecen hasta el final del sobre.',
      cartas: [
        {
          titulo: '"C" Común',
          parrafos: [
            'Carta común, de un cartón salen 8-9 cartas por carta.',
            'Se caracteriza por ser un screenshot del anime sin textura ni foil.',
          ],
          images: [{ src: `${IMG}/BP5/GYC-BP5-036_4C.png`, alt: 'Carta común del volumen 5' }],
        },
        {
          titulo: '"U" Poco Común',
          parrafos: [
            'Carta poco común, de un cartón salen 7-8 cartas por carta.',
            'Se caracteriza por ser un screenshot del manga sin textura ni foil.',
          ],
          images: [{ src: `${IMG}/BP5/GYC-BP5-019_4C.png`, alt: 'Carta poco común del volumen 5' }],
        },
        {
          titulo: '"R" Rara',
          parrafos: [
            'Carta rara, de un cartón salen 6 cartas por carta.',
            'Se caracteriza por ser una ilustración de anime sin textura ni foil.',
          ],
          images: [{ src: `${IMG}/BP5/GYC-BP5-044P_4C.png`, alt: 'Carta rara del volumen 5' }],
        },
        {
          titulo: '"RR" Doble Rara',
          parrafos: [
            'Carta doblemente rara, de un cartón salen 5 cartas por carta.',
            'Se caracteriza por ser una ilustración de anime especial o ilustración original sin textura ni foil.',
          ],
          images: [{ src: `${IMG}/BP5/GYC-BP5-016_4C.png`, alt: 'Carta doble rara del volumen 5' }],
        },
        {
          titulo: '"GR" "Go-toubun" Rara',
          parrafos: [
            'Carta "Go-toubun" Rara, de un cartón salen 4 cartas por carta.',
            'Se caracteriza por ser una ilustración del manga a color con textura y foil.',
          ],
          images: [{ src: `${IMG}/BP5/GYC-BP5-049_4C.png`, alt: 'Carta Go-toubun rara del volumen 5' }],
        },
        {
          titulo: '"ER" "Echara" Rara',
          parrafos: [
            'Carta "Echara" Rara, de un cartón salen 2 de las 5 posibles.',
            'Se caracteriza por ser una ilustración especial del anime con color en el borde, además de tener textura y foil.',
          ],
          images: [{ src: `${IMG}/BP7/GYC-BP7-008_IMG.png`, alt: 'Carta Echara rara del volumen 7' }],
        },
      ],
    },
    {
      nombre: 'Cartas paralelas',
      nota: 'Todas se caracterizan por tener foil y en ocasiones textura. Además de aparecer siempre en la última carta de cada sobre.',
      cartas: [
        {
          titulo: 'Cartas +',
          wide: true,
          parrafos: [
            'Son las C+, U+ y R+. Se caracterizan por tener únicamente foil. Las U+ y C+ aparecen 2 por carta en un cartón, mientras que las R+ aparecen unas 11 de cada 15.',
          ],
          images: [
            { src: `${IMG}/BP7/GYC-BP7-004_4C.png`, alt: 'Carta base de las cartas +' },
            { src: `${IMG}/BP7/GYC-BP7-004P_4C.png`, alt: 'Versión paralela de las cartas +' },
          ],
        },
        {
          titulo: 'Cartas RR+',
          wide: true,
          parrafos: [
            'Las doble rara +. Se caracterizan por tener textura y foil, además de mostrar la ilustración de forma completa o expandida.',
          ],
          images: [
            { src: `${IMG}/BP7/GYC-BP7-025_4c.png`, alt: 'Carta base de las cartas RR+' },
            { src: `${IMG}/BP7/GYC-BP7-025P_4c.png`, alt: 'Versión paralela de las cartas RR+' },
          ],
        },
        {
          titulo: 'Cartas HR',
          wide: true,
          parrafos: [
            'Hanayome Rare. Son cartas R con foil y texturizado dorado en las letras y en el fondo.',
          ],
          images: [
            { src: `${IMG}/BP7/GYC-BP7-038_4c.png`, alt: 'Carta base de las cartas HR' },
            { src: `${IMG}/BP7/GYC-BP7-038P_IMG.png`, alt: 'Versión paralela de las cartas HR' },
          ],
        },
        {
          titulo: 'Cartas SP',
          wide: true,
          parrafos: [
            'Especiales. Texturizado especial dorado y el nombre de las chicas en grande, con ilustraciones del anime.',
          ],
          images: [
            { src: `${IMG}/BP7/GYC-BP7-031P_img.png`, alt: 'Primera carta SP' },
            { src: `${IMG}/BP7/GYC-BP7-058P1_img.png`, alt: 'Segunda carta SP' },
          ],
        },
        {
          titulo: 'Cartas SSP',
          wide: true,
          parrafos: [
            'Doblemente especiales. Texturizado especial dorado y la firma de las actrices de voz, con ilustraciones originales del juego o del autor a color.',
          ],
          images: [
            { src: `${IMG}/BP7/GYC-BP7-024P1_img.png`, alt: 'Primera carta SSP' },
            { src: `${IMG}/BP7/GYC-BP7-008P_IMG.png`, alt: 'Segunda carta SSP' },
          ],
        },
        {
          titulo: 'Cartas HSP y ISP',
          wide: true,
          parrafos: [
            '"Itsutsugo" especiales y "Hero" especiales. Misma rareza; las "Hero" incluyen a Futaro y se usan como cartas de héroe, mientras que las Itsutsugo son tipo "Manga" a color con ilustración del autor.',
          ],
          images: [
            { src: `${IMG}/BP6/GYC-BP6-080P1_IMG.png`, alt: 'Carta HSP' },
            { src: `${IMG}/BP7/GYC-BP7-012P1_IMG.png`, alt: 'Carta ISP' },
          ],
        },
        {
          titulo: 'Cartas GSP',
          wide: true,
          parrafos: [
            '"Go-toubun" especiales. Es la 2ª categoría más alta y prácticamente la más difícil de obtener; solo tiene foil como las "+" normales, pero con la ilustración de la secreta súper especial.',
          ],
          images: [
            { src: `${IMG}/BP6/GYC-BP6-065P2_4C.png`, alt: 'Primera carta GSP' },
            { src: `${IMG}/BP6/GYC-BP6-008_4C.png`, alt: 'Segunda carta GSP' },
          ],
        },
        {
          titulo: 'Cartas SSSP',
          parrafos: [
            'Ilustración especial del propio autor para el juego de cartas, con su firma, texturizado especial y foil especial y, sobre todo, numerada del 0 al 99 (aunque existen versiones no numeradas).',
          ],
          images: [{ src: `${IMG}/BP1/GYC-BP1-001P2_4c.png`, alt: 'Carta SSSP' }],
        },
      ],
    },
  ],
}
