// Seccion "Las expansiones que existen" (antes "Sets disponibles").
//
// Datos oficiales de https://5hanayome-cardgame.com/products/bpN
// Se muestran las fotos de los CARTONES / cajas, no de las cartas.

export const expansiones = {
  intro:
    'La linea "Booster Pack" (vol.1 a vol.7) es el nucleo del juego. Cada sobre trae 5 cartas por 440 yenes y cada carton trae 12 sobres por 5.280 yenes, mas un sobre PR de regalo con ilustraciones del manga.',
  fichaComun: {
    sobresPorCaja: '12 sobres por cartón (¥5.280)',
    cartasPorSobre: '5 cartas por sobre (¥440)',
  },
  temporadas: [
    {
      nombre: 'Temporada 1',
      sets: [
        {
          codigo: 'BP1',
          titulo: 'Booster Pack vol.1',
          lanzamiento: '18 oct 2024',
          totalCartas: '168 tipos (81 normales + 87 paralelas)',
          descripcion:
            'Set base del juego. Rarezas GR·RR·R·U·C mas las paralelas, y estrena la SSSP y las SP con la firma de las cinco actrices de voz. Cada cartón incluye un sobre PR con arte del manga.',
          destacado: 'Primera SSSP: ilustración firmada de Negi Haruba, numerada 001-099',
          caja: 'https://5hanayome-cardgame.com/wordpress/wp-content/uploads/2024/09/11160145/BP.png',
        },
        {
          codigo: 'BP2',
          titulo: 'Booster Pack vol.2 — «Una existencia irreemplazable»',
          lanzamiento: '24 ene 2025',
          totalCartas: '167 tipos (81 normales + 86 paralelas)',
          descripcion:
            'Amplia el juego con las primeras cartas SP paralelas y las series C+/U+/R+/RR+. El tema gira en torno al vinculo irreemplazable entre las cinco hermanas.',
          destacado: 'SSSP firmada y numerada + cartas con autógrafo de las seiyū',
          caja: 'https://5hanayome-cardgame.com/wordpress/wp-content/uploads/2024/10/02154553/GYCwebSP2.png',
        },
        {
          codigo: 'BP3',
          titulo: 'Booster Pack vol.3 — «Siempre, en cualquier lugar»',
          lanzamiento: '18 abr 2025',
          totalCartas: '168 tipos (81 normales + 87 paralelas)',
          descripcion:
            'Profundiza en las ilustraciones originales del manga y reparte una SSSP protagonizada por Miku Nakano.',
          destacado: 'SSSP de Miku Nakano, firmada y numerada 001-099',
          caja: 'https://5hanayome-cardgame.com/wordpress/wp-content/uploads/2024/12/30130916/vol.3.png',
        },
        {
          codigo: 'BP4',
          titulo: 'Booster Pack vol.4 — «Unas vacaciones de verano sin casualidades»',
          lanzamiento: '31 jul 2025',
          totalCartas: '169 tipos (81 normales + 88 paralelas)',
          descripcion:
            'Cierre del primer bloque. Sube a 2 las SSSP del set, cada una con ilustración a mano de Negi Haruba y numeración única.',
          destacado: 'Dos SSSP distintas con firma serigrafiada',
          caja: 'https://5hanayome-cardgame.com/wordpress/wp-content/uploads/2025/04/18212429/vol.4PKG-1.png',
        },
      ],
    },
    {
      nombre: 'Temporada 2',
      sets: [
        {
          codigo: 'BP5',
          titulo: 'Booster Pack vol.5 — «Un día a día que sigue avanzando»',
          lanzamiento: '16 ene 2026',
          totalCartas: '180 tipos (81 normales + 99 paralelas)',
          descripcion:
            'Arranque de la segunda tanda. Estrena la rareza GSP ("Go-toubun Special") con arte original de personajes y amplia mucho las SP y SP paralelas.',
          destacado: 'Debut de la rareza GSP',
          caja: 'https://5hanayome-cardgame.com/wordpress/wp-content/uploads/2025/10/15114429/z.png',
        },
        {
          codigo: 'BP6',
          titulo: 'Booster Pack vol.6 — «El día a día vuelto una fiesta»',
          lanzamiento: '30 abr 2026',
          totalCartas: '180 tipos (81 normales + 99 paralelas)',
          descripcion:
            'Introduce las Cartas E (mazo E / engage): 10 personajes E y 5 protagonistas E que se juegan desde un mazo aparte. Añade las rarezas ER, HSP y HR, y garantiza 2 cartas "hit" por cartón.',
          destacado: 'Estreno de las Cartas E y de las rarezas ER / HSP / HR',
          caja: 'https://5hanayome-cardgame.com/wordpress/wp-content/uploads/2026/02/27105856/a.png',
        },
        {
          codigo: 'BP7',
          titulo: 'Booster Pack vol.7 — «"Ternura" al máximo, ¡Chomolungma!»',
          lanzamiento: '31 jul 2026',
          totalCartas: '180 tipos (81 normales + 99 paralelas)',
          descripcion:
            'Entrega más reciente. Estrena la rareza ISP ("Itsutsugo Special"), que sustituye a las HSP, con ilustraciones originales del autor. Las primeras ediciones incluyen un mini-shikishi de una serie de 10.',
          destacado: 'Nueva rareza ISP + mini-shikishi en primeras ediciones',
          caja: 'https://5hanayome-cardgame.com/wordpress/wp-content/uploads/2026/06/06110909/a.png',
        },
      ],
    },
  ],
}
