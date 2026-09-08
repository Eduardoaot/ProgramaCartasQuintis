// Seccion "Historia": de donde viene Monterrey.
//
//  - origen      -> por que hubo tres intentos de fundacion
//  - fundaciones -> los tres asentamientos (1577, 1582, 1596)
//  - hitos       -> los cuatro hechos que la volvieron una ciudad industrial
import { foto } from './imagenes.js'

export const antecedentes = {
  intro:
    'Monterrey no se fundó una vez, sino tres. Lo que hoy es la mayor ciudad industrial del norte empezó como un puesto de avanzada que sus propios pobladores abandonaron dos veces.',

  origen: {
    titulo: 'Tres intentos, una ciudad',
    texto:
      'El valle de Extremadura, al pie del Cerro de la Silla, tenía la única ventaja que importaba en un territorio semiárido: los ojos de agua de Santa Lucía, un manantial permanente. Entre 1577 y 1596 se instalaron ahí tres asentamientos españoles. Los dos primeros se despoblaron por los ataques, las enfermedades y la falta de gente dispuesta a quedarse tan lejos de todo. El tercero aguantó.',
  },

  fundaciones: {
    titulo: 'Las tres fundaciones',
    texto:
      'Cada intento llevó un nombre distinto y lo encabezó un hombre distinto. Solo el de 1596 sobrevivió y es el que la ciudad celebra cada 20 de septiembre.',
    intentos: [
      {
        anio: '1577',
        nombre: 'Santa Lucía',
        fundador: 'Alberto del Canto',
        enlace: 'https://es.wikipedia.org/wiki/Alberto_del_Canto',
        imagen: foto.santaLucia,
      },
      {
        anio: '1582',
        nombre: 'San Luis Rey de Francia',
        fundador: 'Luis Carvajal y de la Cueva',
        enlace: 'https://es.wikipedia.org/wiki/Luis_Carvajal_y_de_la_Cueva',
        imagen: foto.museoHistoria,
      },
      {
        anio: '1596',
        nombre: 'Nuestra Señora de Monterrey',
        fundador: 'Diego de Montemayor',
        enlace: 'https://es.wikipedia.org/wiki/Diego_de_Montemayor',
        imagen: foto.montemayorMural,
        perduro: true,
      },
    ],
  },

  hitos: {
    titulo: 'Lo que la volvió industrial',
    texto:
      'Durante casi tres siglos Monterrey fue una ciudad pequeña y pobre. El cambio llegó en cuatro pasos, entre finales del siglo XIX y el final del XX:',
    eventos: [
      {
        anio: '1890',
        nombre: 'Cervecería Cuauhtémoc',
        texto: 'El primer gran capital regio.',
        imagen: foto.cerveceria1890,
        enlace: 'https://es.wikipedia.org/wiki/Cervecer%C3%ADa_Cuauht%C3%A9moc_Moctezuma',
      },
      {
        anio: '1900',
        nombre: 'Fundidora de Fierro y Acero',
        texto: 'La primera acería de América Latina.',
        imagen: foto.horno3,
        enlace:
          'https://es.wikipedia.org/wiki/Compa%C3%B1%C3%ADa_Fundidora_de_Fierro_y_Acero_de_Monterrey',
      },
      {
        anio: '1943',
        nombre: 'Tecnológico de Monterrey',
        texto: 'La industria funda su universidad.',
        imagen: foto.tecDeMonterrey,
        enlace:
          'https://es.wikipedia.org/wiki/Instituto_Tecnol%C3%B3gico_y_de_Estudios_Superiores_de_Monterrey',
      },
      {
        anio: '1991',
        nombre: 'Metrorrey',
        texto: 'La metrópoli se conecta consigo misma.',
        imagen: foto.metrorrey,
        enlace: 'https://es.wikipedia.org/wiki/Metrorrey',
      },
    ],
  },
}
