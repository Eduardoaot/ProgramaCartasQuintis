// Seccion "Las rarezas que hay".
// Info normalizada por carta:
//   codigo         -> sigla oficial (C, U, R, RR, GR, ER, +, RR+, HR, SP, SSP, HSP, ISP, GSP, SSSP)
//   nombre         -> nombre correcto de la rareza
//   porCarton      -> cuantas copias de esa carta salen por carton
//   aparicion      -> en que parte del sobre aparece
//   caracteristicas-> rasgos visuales (ilustracion, textura, foil, firma, numeracion...)
//
// La SSSP NO va en `grupos`: tiene su propio showcase (objeto `secreta`).
const IMG = 'https://5hanayome-cardgame.com/wordpress/wp-content/images/cardlist'

export const rarezas = {
  intro:
    'Un carton contiene varios sobres y cada sobre reparte las cartas por orden de rareza. Aqui esta cada rareza con su nombre correcto, cuantas veces sale por carton, donde aparece en el sobre y como se reconoce.',
  grupos: [
    {
      nombre: 'Cartas base',
      columnas: 3,
      nota:
        'Ocupan las primeras 4 posiciones de cada sobre. Las GR y ER son la excepcion: aparecen al final del sobre.',
      cartas: [
        {
          codigo: 'C',
          nombre: 'Comun',
          porCarton: '8 a 9 copias por carta',
          aparicion: 'Primeras 4 cartas del sobre',
          caracteristicas: ['Captura del anime', 'Sin textura', 'Sin foil'],
          images: [{ src: `${IMG}/BP5/GYC-BP5-036_4C.png`, alt: 'Carta Comun (C)' }],
        },
        {
          codigo: 'U',
          nombre: 'Poco Comun',
          porCarton: '7 a 8 copias por carta',
          aparicion: 'Primeras 4 cartas del sobre',
          caracteristicas: ['Captura del manga', 'Sin textura', 'Sin foil'],
          images: [{ src: `${IMG}/BP5/GYC-BP5-019_4C.png`, alt: 'Carta Poco Comun (U)' }],
        },
        {
          codigo: 'R',
          nombre: 'Rara',
          porCarton: '6 copias por carta',
          aparicion: 'Primeras 4 cartas del sobre',
          caracteristicas: ['Ilustracion de anime', 'Sin textura', 'Sin foil'],
          images: [{ src: `${IMG}/BP5/GYC-BP5-044P_4C.png`, alt: 'Carta Rara (R)' }],
        },
        {
          codigo: 'RR',
          nombre: 'Doble Rara',
          porCarton: '5 copias por carta',
          aparicion: 'Primeras 4 cartas del sobre',
          caracteristicas: [
            'Ilustracion de anime especial o ilustracion original',
            'Sin textura',
            'Sin foil',
          ],
          images: [{ src: `${IMG}/BP5/GYC-BP5-016_4C.png`, alt: 'Carta Doble Rara (RR)' }],
        },
        {
          codigo: 'GR',
          nombre: 'Go-toubun Rara',
          porCarton: '4 copias por carta',
          aparicion: 'Al final del sobre',
          caracteristicas: ['Ilustracion del manga a color', 'Con textura', 'Con foil'],
          images: [{ src: `${IMG}/BP5/GYC-BP5-049_4C.png`, alt: 'Carta Go-toubun Rara (GR)' }],
        },
        {
          codigo: 'ER',
          nombre: 'Echara Rara',
          porCarton: '2 de las 5 posibles por carton',
          aparicion: 'Al final del sobre',
          caracteristicas: [
            'Ilustracion especial del anime',
            'Color en el borde',
            'Con textura',
            'Con foil',
          ],
          images: [{ src: `${IMG}/BP7/GYC-BP7-008_IMG.png`, alt: 'Carta Echara Rara (ER)' }],
        },
      ],
    },
    {
      nombre: 'Cartas paralelas',
      columnas: 2,
      nota:
        'Todas llevan foil y en ocasiones textura. Aparecen siempre en la ultima carta del sobre, una por sobre. Cada tarjeta muestra la version base y la paralela.',
      cartas: [
        {
          codigo: '+',
          nombre: 'Paralela + (C+, U+, R+)',
          porCarton: 'C+ y U+: 2 por carton · R+: unas 11 de cada 15',
          aparicion: 'Ultima carta del sobre',
          caracteristicas: [
            'Misma ilustracion que la version base',
            'Solo foil (sin textura extra)',
          ],
          images: [
            { src: `${IMG}/BP7/GYC-BP7-004_4C.png`, alt: 'Version base de la carta +' },
            { src: `${IMG}/BP7/GYC-BP7-004P_4C.png`, alt: 'Version paralela + (foil)' },
          ],
        },
        {
          codigo: 'RR+',
          nombre: 'Doble Rara Paralela',
          porCarton: 'Aprox. 1 cada varios cartones',
          aparicion: 'Ultima carta del sobre',
          caracteristicas: [
            'Con textura y foil',
            'Ilustracion completa o expandida respecto a la RR base',
          ],
          images: [
            { src: `${IMG}/BP7/GYC-BP7-025_4c.png`, alt: 'Version base de la RR+' },
            { src: `${IMG}/BP7/GYC-BP7-025P_4c.png`, alt: 'Version paralela RR+' },
          ],
        },
        {
          codigo: 'HR',
          nombre: 'Hanayome Rare',
          porCarton: 'Insercion baja (tirada corta)',
          aparicion: 'Ultima carta del sobre',
          caracteristicas: [
            'Basada en una carta R',
            'Foil en toda la carta',
            'Texturizado dorado en letras y fondo',
          ],
          images: [
            { src: `${IMG}/BP7/GYC-BP7-038_4c.png`, alt: 'Version base de la HR' },
            { src: `${IMG}/BP7/GYC-BP7-038P_IMG.png`, alt: 'Carta Hanayome Rare (HR)' },
          ],
        },
        {
          codigo: 'SP',
          nombre: 'Special',
          porCarton: 'Insercion baja',
          aparicion: 'Ultima carta del sobre',
          caracteristicas: [
            'Ilustracion del anime',
            'Texturizado dorado especial',
            'Nombre de la hermana en grande',
          ],
          images: [
            { src: `${IMG}/BP7/GYC-BP7-031P_img.png`, alt: 'Carta Special (SP)' },
            { src: `${IMG}/BP7/GYC-BP7-058P1_img.png`, alt: 'Otra carta Special (SP)' },
          ],
        },
        {
          codigo: 'SSP',
          nombre: 'Super Special',
          porCarton: 'Insercion muy baja',
          aparicion: 'Ultima carta del sobre',
          caracteristicas: [
            'Ilustracion original del juego o del autor a color',
            'Texturizado dorado especial',
            'Firma de las actrices de voz impresa',
          ],
          images: [
            { src: `${IMG}/BP7/GYC-BP7-024P1_img.png`, alt: 'Carta Super Special (SSP)' },
            { src: `${IMG}/BP7/GYC-BP7-008P_IMG.png`, alt: 'Otra carta Super Special (SSP)' },
          ],
        },
        {
          codigo: 'HSP / ISP',
          nombre: 'Hero Special / Itsutsugo Special',
          porCarton: 'Insercion muy baja',
          aparicion: 'Ultima carta del sobre',
          caracteristicas: [
            'Misma rareza, dos variantes',
            'HSP: incluye a Futaro y funciona como carta de heroe',
            'ISP: tipo "Manga" a color con ilustracion del autor',
          ],
          images: [
            { src: `${IMG}/BP6/GYC-BP6-080P1_IMG.png`, alt: 'Carta Hero Special (HSP)' },
            { src: `${IMG}/BP7/GYC-BP7-012P1_IMG.png`, alt: 'Carta Itsutsugo Special (ISP)' },
          ],
        },
        {
          codigo: 'GSP',
          nombre: 'Go-toubun Special',
          porCarton: 'La mas dificil de obtener del set',
          aparicion: 'Ultima carta del sobre',
          caracteristicas: [
            'Segunda categoria mas alta',
            'Solo foil, como las paralelas "+"',
            'Usa la ilustracion de la secreta super especial',
          ],
          images: [
            { src: `${IMG}/BP6/GYC-BP6-065P2_4C.png`, alt: 'Carta Go-toubun Special (GSP)' },
            { src: `${IMG}/BP6/GYC-BP6-008_4C.png`, alt: 'Otra carta Go-toubun Special (GSP)' },
          ],
        },
      ],
    },
  ],

  // La joya de la corona: se muestra en grande, sobre fondo oscuro, sin tarjeta.
  secreta: {
    codigo: 'SSSP',
    nombre: 'Special Super Super Parallel',
    titular: 'La carta más codiciada del juego',
    descripcion:
      'Una sola ilustración por set, dibujada por Negi Haruba especialmente para el TCG. Va firmada de imprenta y numerada a mano del 000 al 099. Existen copias sin numerar, pero las numeradas son las que mueven el mercado.',
    porCarton: 'Ninguna garantizada — inserción tipo "caja de la suerte"',
    aparicion: 'Última carta del sobre, en cajas selladas especiales',
    numeracion: '000 / 099',
    caracteristicas: [
      'Ilustración exclusiva del autor para el juego',
      'Firma de Negi Haruba impresa',
      'Texturizado y foil especiales',
      'Numeración serigrafiada a mano',
    ],
    // Precio de referencia del mercado secundario japonés (revisar y actualizar).
    valor: '¥150.000 – ¥400.000',
    valorNota: 'Copias numeradas y firmadas, mercado JP. Valor de referencia — actualizar.',
    img: `${IMG}/BP1/GYC-BP1-001P2_4c.png`,
    alt: 'Carta secreta SSSP firmada y numerada',
  },
}
