// Seccion "Guia para visitar Monterrey".
//
// Aqui esta el minimo indispensable, como moverse, como esta armado el centro,
// que planes hay, como repartir los dias y el vocabulario que se oye en la calle.
//
// El esquema del centro (`recorrido.img`) y el mapa del area metropolitana
// (`mapa.esquema`) son SVG propios generados en public/img/.
import { foto } from './imagenes.js'

export const tutorial = {
  intro:
    'Una guía práctica para recorrer la ciudad: qué no puedes perderte, cómo moverte, cómo está armado el centro y cómo repartir los días.',

  objetivo: {
    titulo: 'La meta',
    texto:
      'Con tres lugares te llevas Monterrey: el Cerro de la Silla, la Macroplaza y el Parque Fundidora. Todo lo demás es propina, y hay mucha.',
    imprescindibles: 3,
  },

  transporte: {
    titulo: 'Las tres formas de moverte',
    items: [
      {
        nombre: 'Metrorrey',
        cantidad: '3 líneas',
        detalle: 'Lo más rápido para cruzar el centro y llegar a Fundidora o a San Nicolás. Barato y con horario amplio.',
      },
      {
        nombre: 'Auto o app de viajes',
        cantidad: 'Casi indispensable',
        detalle: 'El área metropolitana es enorme y a Chipinque, La Huasteca o Santiago no llega transporte directo.',
      },
      {
        nombre: 'A pie y en bici',
        cantidad: 'Solo en el centro',
        detalle: 'El corredor Macroplaza – Santa Lucía – Fundidora se recorre entero caminando: unos 4 km en total.',
      },
    ],
  },

  recorrido: {
    titulo: 'Anatomía del centro',
    nota: 'El corredor Macroplaza – Santa Lucía – Fundidora, de norte a sur. Pasa el cursor por los números.',
    img: '/img/macroplaza-diagrama.svg',
    alt: 'Esquema del corredor Macroplaza, Paseo Santa Lucía y Parque Fundidora con sus puntos numerados',
    partes: [
      { n: 1, x: 50.0, y: 12.0, label: 'Palacio de Gobierno', texto: 'Sede del poder estatal, terminada en 1908. Cierra la Macroplaza por el norte.' },
      { n: 2, x: 50.0, y: 21.5, label: 'Explanada de los Héroes', texto: 'La gran explanada frente al Palacio, con las estatuas de los héroes de la Independencia.' },
      { n: 3, x: 28.6, y: 30.0, label: 'Museo de Historia Mexicana', texto: 'Abierto en 1994. Desde su costado arranca el Paseo Santa Lucía.' },
      { n: 4, x: 71.4, y: 38.0, label: 'Catedral Metropolitana', texto: 'Levantada entre los siglos XVII y XIX; su torre se terminó hasta 1899.' },
      { n: 5, x: 50.0, y: 44.5, label: 'Faro del Comercio', texto: 'Torre naranja de 70 m diseñada por Luis Barragán en 1984. Su láser verde barre el centro cada noche.' },
      { n: 6, x: 71.4, y: 52.0, label: 'MARCO', texto: 'Museo de Arte Contemporáneo, obra de Ricardo Legorreta abierta en 1991. La paloma de Juan Soriano custodia la entrada.' },
      { n: 7, x: 28.6, y: 60.0, label: 'Barrio Antiguo', texto: 'Las calles de casonas de los siglos XVIII y XIX, justo al oriente de la Macroplaza.' },
      { n: 8, x: 50.0, y: 70.0, label: 'Palacio Municipal', texto: 'Cierra la Macroplaza por el sur, elevado sobre pilotes por encima de la explanada.' },
      { n: 9, x: 85.7, y: 85.0, label: 'Parque Fundidora', texto: 'El final del Paseo Santa Lucía: 114 hectáreas de parque sobre la antigua acería, con el Horno3.' },
    ],
    variantes:
      'De la Macroplaza al Parque Fundidora hay unos 4 km caminando, o 2.5 km si tomas el Paseo Santa Lucía en lancha.',
  },

  planes: [
    {
      codigo: 'CENTRO',
      nombre: 'Macroplaza y Barrio Antiguo',
      valor: 'Dura: medio día',
      img: foto.macroplaza,
      texto: 'El eje cívico completo, de Palacio de Gobierno a Palacio Municipal, más las calles viejas de al lado.',
      comoSeUsa: 'Llega en Metro y camina. Deja el Barrio Antiguo para el final de la tarde.',
    },
    {
      codigo: 'FUNDIDORA',
      nombre: 'Parque Fundidora y Horno3',
      valor: 'Dura: medio día',
      img: foto.horno3,
      texto: 'El parque sobre la acería y el museo del acero dentro del alto horno original.',
      comoSeUsa: 'Revisa el horario del recorrido del Horno3 antes de ir; es lo que hay que apartar.',
    },
    {
      codigo: 'SANTA LUCIA',
      nombre: 'Paseo Santa Lucía',
      valor: 'Dura: 1 a 2 horas',
      img: foto.santaLucia,
      texto: 'El canal navegable que une el centro con Fundidora. Se puede caminar o recorrer en lancha.',
      comoSeUsa: 'Súbete a la lancha en el Museo de Historia Mexicana y bájate ya dentro del parque.',
    },
    {
      codigo: 'SIERRA',
      nombre: 'Chipinque y La Huasteca',
      valor: 'Dura: un día',
      img: foto.huasteca,
      texto: 'Bosque de pinos a 1 800 m en San Pedro y un cañón de paredes verticales en Santa Catarina.',
      comoSeUsa: 'Necesitas auto. Ve temprano: de mayo a septiembre el calor del mediodía es serio.',
    },
    {
      codigo: 'LA SILLA',
      nombre: 'Cerro de la Silla',
      valor: 'Dura: medio día largo',
      img: foto.cerroSilla,
      texto: 'El ascenso por la ruta de La Antena, desde Guadalupe, hasta la vista completa del valle.',
      comoSeUsa: 'Arranca de madrugada, lleva agua de sobra y calcula unas cuatro horas de subida.',
    },
  ],

  mapa: {
    titulo: 'El mapa del área metropolitana',
    nota: 'Monterrey en el centro y, alrededor, los municipios que hoy forman una sola ciudad.',
    esquema: '/img/mapa-amm.svg',
    relacion:
      'Regla práctica: casi todo lo turístico está en el centro de Monterrey o a menos de treinta minutos en auto.',
    zonas: [
      { nombre: 'Centro de Monterrey', texto: 'Macroplaza, Barrio Antiguo, Catedral y museos. El punto de partida.' },
      { nombre: 'Oriente', texto: 'Parque Fundidora, Horno3, la Arena Monterrey y el estadio de Rayados, ya en Guadalupe.' },
      { nombre: 'San Pedro Garza García', texto: 'Valle Oriente, Chipinque y la zona de restaurantes y torres corporativas.' },
      { nombre: 'Santa Catarina', texto: 'La entrada al Cañón de la Huasteca y a la Sierra Madre.' },
      { nombre: 'Norte', texto: 'Apodaca, Escobedo y San Nicolás: aeropuerto, parques industriales y vivienda.' },
      { nombre: 'Santiago', texto: 'Pueblo Mágico a 40 km: la cascada Cola de Caballo y la Presa de la Boca.' },
      { nombre: 'García', texto: 'Las Grutas de García, a unos 40 km al poniente, con teleférico de acceso.' },
    ],
  },

  dia: {
    titulo: 'Un día en Monterrey, hora por hora',
    fases: [
      { nombre: 'Mañana', clave: '8:00 – 12:00', texto: 'Desayuna machacado con huevo y sube al Cerro de la Silla o a la meseta de Chipinque antes de que pegue el sol.' },
      { nombre: 'Mediodía', clave: '12:00 – 16:00', texto: 'Baja al centro: Macroplaza, Catedral, Museo de Historia Mexicana y cabrito en el Mercado Juárez.' },
      { nombre: 'Tarde', clave: '16:00 – 20:00', texto: 'Toma el Paseo Santa Lucía en lancha hasta el Parque Fundidora y entra al Horno3 antes de que cierre.' },
      { nombre: 'Noche', clave: '20:00 – 00:00', texto: 'Vuelve al centro para ver el láser del Faro del Comercio y cierra la noche en el Barrio Antiguo.' },
    ],
  },

  armaTuViaje: {
    titulo: 'Cómo armar tu visita, paso a paso',
    pasos: [
      {
        titulo: 'Elige la base',
        texto:
          'Hospédate en el centro de Monterrey o en San Pedro. Desde cualquiera de los dos llegas caminando o en veinte minutos a casi todo lo que vale la pena.',
      },
      {
        titulo: 'Reparte los días',
        texto:
          'Un día para el centro y Fundidora, otro para la sierra —Chipinque o La Huasteca— y uno más si quieres Santiago o las Grutas de García.',
      },
      {
        titulo: 'Deja margen para el clima',
        texto:
          'De mayo a septiembre se pasa de los 35 °C y las caminatas se hacen de madrugada. El invierno es seco y templado: es la mejor temporada para venir.',
      },
    ],
    formula: {
      ciudad: 3,
      excursiones: 2,
      recomendado: 4,
    },
  },

  imperdibles: {
    texto:
      'Los cinco lugares que definen Monterrey. Con los tres primeros ya te llevas la ciudad; los otros dos son la excusa para volver.',
    objetivo: 3,
    lugares: [
      { nombre: 'Cerro de la Silla', img: foto.cerroSilla },
      { nombre: 'Macroplaza', img: foto.macroplaza },
      { nombre: 'Fundidora', img: foto.fundidora },
      { nombre: 'Santa Lucía', img: foto.santaLucia },
      { nombre: 'La Huasteca', img: foto.huasteca },
    ],
  },

  regionalismos: [
    { k: 'Troca', d: 'Camioneta o pick-up. Del inglés truck.' },
    { k: 'Raite', d: 'Aventón. Del inglés ride: «¿me das un raite?».' },
    { k: 'Lonche', d: 'Torta o comida para llevar. Del inglés lunch.' },
    { k: 'Yonke', d: 'Deshuesadero de autos usados. Del inglés junk.' },
    { k: 'Morro / morra', d: 'Chavo o chava; también un hijo pequeño.' },
    { k: 'Me cuadra', d: 'Me gusta, me parece bien. El «me late» del norte.' },
    { k: 'Bien acá', d: 'Presumido, que se las da de fresa.' },
    { k: 'Pisto', d: 'Bebida alcohólica: «irse de pisto» es salir a tomar.' },
    { k: '¿Qué onda, pariente?', d: 'Saludo cordial entre desconocidos, muy usado en el norte.' },
  ],
}
