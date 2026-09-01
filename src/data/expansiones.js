// Seccion "Las expansiones que existen" (antes "Sets disponibles").
//
// Se muestran las fotos de los CARTONES / cajas, no de las cartas.
// `caja` = URL de la foto del carton. Mientras sea null se dibuja un marcador
// con el codigo del set: sustituir por la foto real.
//
// Info normalizada por set:
//   codigo      -> identificador del set (BP1 ... BP7)
//   titulo      -> nombre comercial del volumen
//   totalCartas -> tamaño aproximado del set (revisar/ajustar)
//   descripcion -> que aporta el set
//   destacado   -> carta o rareza estrella del set

export const expansiones = {
  intro:
    'Los sets se numeran como BP1 a BP7 y se reparten en dos temporadas. Cada carton trae varios sobres y cada sobre entrega 5 cartas por orden de rareza.',
  fichaComun: {
    sobresPorCaja: '16 sobres por cartón',
    cartasPorSobre: '5 cartas por sobre',
  },
  temporadas: [
    {
      nombre: 'Temporada 1',
      sets: [
        {
          codigo: 'BP1',
          titulo: 'Volumen 1',
          totalCartas: '~80 cartas (ajustar)',
          descripcion:
            'Set base de la primera temporada. Presenta a las cinco hermanas Nakano, las cartas de heroe de Futaro y el sistema de afinidades por color.',
          destacado: 'Primera SSSP secreta numerada del juego',
          caja: null,
        },
        {
          codigo: 'BP2',
          titulo: 'Volumen 2',
          totalCartas: '~80 cartas (ajustar)',
          descripcion:
            'Segunda entrega de la T1. Amplia las lineas de cada hermana y suma nuevas cartas de episodio de la primera mitad de la historia.',
          destacado: 'Nuevas SSSP de las hermanas Nakano',
          caja: null,
        },
        {
          codigo: 'BP3',
          titulo: 'Volumen 3',
          totalCartas: '~80 cartas (ajustar)',
          descripcion:
            'Profundiza en el pool de la temporada 1 con mas cartas R y RR y refuerza las combinaciones por afinidad.',
          destacado: 'Paralelas R+ mas accesibles',
          caja: null,
        },
        {
          codigo: 'BP4',
          titulo: 'Volumen 4',
          totalCartas: '~80 cartas (ajustar)',
          descripcion:
            'Cierre de la primera temporada. Completa los arcos de la T1 con dos ilustraciones destacadas por hermana.',
          destacado: 'Dobles ilustraciones de cierre de arco',
          caja: null,
        },
      ],
    },
    {
      nombre: 'Temporada 2',
      sets: [
        {
          codigo: 'BP5',
          titulo: 'Volumen 5',
          totalCartas: '~80 cartas (ajustar)',
          descripcion:
            'Arranque de la segunda temporada. Reinicia el pool con nuevas C, U y R y estrena los marcos de la T2.',
          destacado: 'Primeras ER "Echara" del bloque T2',
          caja: null,
        },
        {
          codigo: 'BP6',
          titulo: 'Volumen 6',
          totalCartas: '~80 cartas (ajustar)',
          descripcion:
            'Punto medio de la T2. Introduce las GSP "Go-toubun Special" y amplia las paralelas de gama alta (HSP / ISP).',
          destacado: 'Debut de las cartas GSP',
          caja: null,
        },
        {
          codigo: 'BP7',
          titulo: 'Volumen 7',
          totalCartas: '~80 cartas (ajustar)',
          descripcion:
            'Entrega mas reciente. Consolida todas las rarezas paralelas (SP, SSP, HSP/ISP) y anade las cartas "+" de la segunda temporada.',
          destacado: 'Set con la lista de rarezas mas completa',
          caja: null,
        },
      ],
    },
  ],
}
