// Seccion "Historia": de donde viene Monterrey.
//
//  - origen     -> por que hubo tres intentos de fundacion
//  - fundaciones-> los tres asentamientos (1577, 1582, 1596)
//  - hitos      -> los cuatro hechos que la volvieron una ciudad industrial
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
    sets: [
      {
        nombre: 'Santa Lucía · 1577',
        periodo: 'Alberto del Canto',
        enlace: 'https://es.wikipedia.org/wiki/Alberto_del_Canto',
        caja: foto.santaLucia,
      },
      {
        nombre: 'San Luis Rey de Francia · 1582',
        periodo: 'Luis Carvajal y de la Cueva',
        enlace: 'https://es.wikipedia.org/wiki/Luis_Carvajal_y_de_la_Cueva',
        caja: foto.museoHistoria,
      },
      {
        nombre: 'Nuestra Señora de Monterrey · 1596',
        periodo: 'Diego de Montemayor',
        enlace: 'https://es.wikipedia.org/wiki/Diego_de_Montemayor',
        caja: foto.montemayorMural,
      },
    ],
  },

  hitos: {
    titulo: 'Lo que la volvió industrial',
    texto:
      'Durante casi tres siglos Monterrey fue una ciudad pequeña y pobre. El cambio llegó en cuatro pasos, entre finales del siglo XIX y el final del XX:',
    cartas: [
      {
        nombre: 'Cervecería Cuauhtémoc — el primer gran capital regio',
        valor: '1890',
        img: foto.cerveceria1890,
        enlace: 'https://es.wikipedia.org/wiki/Cervecer%C3%ADa_Cuauht%C3%A9moc_Moctezuma',
      },
      {
        nombre: 'Fundidora de Fierro y Acero — la primera acería de América Latina',
        valor: '1900',
        img: foto.horno3,
        enlace: 'https://es.wikipedia.org/wiki/Compa%C3%B1%C3%ADa_Fundidora_de_Fierro_y_Acero_de_Monterrey',
      },
      {
        nombre: 'Tecnológico de Monterrey — la industria funda su universidad',
        valor: '1943',
        img: foto.tecDeMonterrey,
        enlace: 'https://es.wikipedia.org/wiki/Instituto_Tecnol%C3%B3gico_y_de_Estudios_Superiores_de_Monterrey',
      },
      {
        nombre: 'Metrorrey — la metrópoli se conecta consigo misma',
        valor: '1991',
        img: foto.metrorrey,
        enlace: 'https://es.wikipedia.org/wiki/Metrorrey',
      },
    ],
  },
}
