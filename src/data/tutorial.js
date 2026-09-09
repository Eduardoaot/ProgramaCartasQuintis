// Seccion "Guia para visitar Monterrey".
//
// Aqui esta el minimo indispensable, como moverse, como esta armado el centro,
// que planes hay, como repartir los dias y el vocabulario que se oye en la calle.
//
// Los dos mapas son mapas de verdad (Leaflet + OpenStreetMap). Sus puntos y
// coordenadas viven en data/mapas.js.
import { foto } from './imagenes.js'

export const tutorial = {
  intro:
    'Una guía práctica para recorrer la ciudad: qué no puedes perderte, cómo moverte, cómo está armado el centro y cómo repartir los días.',

  objetivo: {
    titulo: 'La meta',
    texto:
      'Con tres lugares te llevas Monterrey: el Cerro de la Silla, la Macroplaza y el Parque Fundidora. Todo lo demás es propina, y hay mucha.',
    texto2:
      'No es una ciudad que se recorra de museo en museo. Se entiende mirando: la sierra cerrando el valle por todos lados, el acero convertido en parque y una explanada de cuarenta hectáreas en mitad del centro. Esos tres puntos cuentan de dónde viene y en qué se convirtió, y los tres caben en un fin de semana.',
    lugares: [
      {
        nombre: 'Cerro de la Silla',
        texto: 'La montaña que sale en el escudo. Se ve desde casi cualquier calle.',
      },
      {
        nombre: 'Macroplaza',
        texto: 'El corazón cívico: cuarenta hectáreas de explanada entre los dos palacios.',
      },
      {
        nombre: 'Parque Fundidora',
        texto: 'La acería que cerró y volvió como parque, con el alto horno todavía en pie.',
      },
    ],
    cierre: 'Súmales el Paseo Santa Lucía y ya no te falta nada.',
  },

  transporte: {
    titulo: 'Las tres formas de moverte',
    items: [
      {
        icono: 'lucide/train-front',
        nombre: 'Metrorrey',
        cantidad: '3 líneas · 40 estaciones',
        detalle:
          'Las líneas 1, 2 y 3 suman unos 40 km. Es lo más rápido para cruzar el centro y llegar a Fundidora o a San Nicolás. Las líneas 4 y 6, en monorriel, siguen en obra.',
      },
      {
        icono: 'lucide/car-front',
        nombre: 'Auto o app de viajes',
        cantidad: 'Casi indispensable',
        detalle:
          'El área metropolitana es enorme y a Chipinque, La Huasteca o Santiago no llega transporte directo.',
      },
      {
        icono: 'lucide/footprints',
        nombre: 'A pie y en bici',
        cantidad: 'Solo en el centro',
        detalle:
          'El corredor Macroplaza – Santa Lucía – Fundidora se recorre entero caminando: unos 4 km en total.',
      },
    ],

    // La app con la que se paga el transporte publico del area metropolitana.
    app: {
      nombre: 'Urbani',
      titular: 'La app con la que se paga el transporte',
      // Logotipo servido por la propia Urbani. Se usa solo para identificarla.
      icono:
        'https://static.wixstatic.com/media/cedf2d_956805737ebb470995877d413f734110~mv2.png',
      texto:
        'Desde 2021 el transporte público del área metropolitana se paga con Urbani, la app de movilidad del estado. Sustituye a la tarjeta física: la instalas, le cargas saldo y entras con ella. Para un visitante es la diferencia entre pelearse con las máquinas de la estación o no.',
      sirvePara: ['Metro', 'Transmetro', 'Ruta Express', 'Rutas Integradas'],
      comoFunciona: [
        {
          titulo: 'Instálala y regístrate',
          texto: 'Está en Google Play y en la App Store, y es gratis.',
        },
        {
          titulo: 'Cárgale saldo',
          texto:
            'Con tarjeta desde la app, por transferencia SPEI, o en efectivo en OXXO, 7-Eleven, Tiendas SIX y Soriana.',
        },
        {
          titulo: 'Entra con el código',
          texto:
            'La app genera un código QR con quince minutos de vigencia: lo escaneas en el torniquete del Metro o en el validador al subir al camión.',
        },
      ],
      nota: 'Hay tarifa preferente para estudiantes, personas mayores y personas con discapacidad.',
      enlace: 'https://www.urbani.com.mx/',
    },
  },

  // Los nueve puntos y sus coordenadas viven en data/mapas.js, porque los pinta
  // Leaflet sobre el mapa real.
  recorrido: {
    titulo: 'Anatomía del centro',
    nota: 'Los nueve puntos del corredor Macroplaza – Santa Lucía – Fundidora, sobre el plano real. Toca un número para ver qué es.',
    leyenda: [
      { color: '#cf5a22', texto: 'Eje de la Macroplaza, de norte a sur' },
      { color: '#3e84c0', texto: 'Paseo Santa Lucía hasta Fundidora (trazo aproximado)' },
    ],
    variantes:
      'De la Macroplaza al Parque Fundidora hay unos 4 km caminando, o 2.5 km si tomas el Paseo Santa Lucía en lancha.',
  },

  // `dias` es lo que ocupa cada plan en la agenda; `id` lo identifica ahí.
  planes: {
    titulo: 'Los planes',
    nota: 'Seis recorridos que se combinan según los días que tengas. Añade a tu agenda los que te interesen y abajo verás cuántos días suman.',
    items: [
      {
        id: 'centro',
        zona: 'Centro',
        nombre: 'Macroplaza y Barrio Antiguo',
        duracion: 'Medio día',
        dias: 0.5,
        imagen: foto.macroplaza,
        texto:
          'El eje cívico completo, de Palacio de Gobierno a Palacio Municipal, más las calles viejas de al lado.',
        consejo: 'Llega en Metro y camina. Deja el Barrio Antiguo para el final de la tarde.',
      },
      {
        id: 'fundidora',
        zona: 'Fundidora',
        nombre: 'Parque Fundidora y Horno3',
        duracion: 'Medio día',
        dias: 0.5,
        imagen: foto.horno3,
        texto:
          'Las 144 hectáreas de parque sobre la antigua acería, 76 de ellas verdes, y el museo del acero dentro del alto horno original.',
        consejo:
          'Revisa el horario del recorrido del Horno3 antes de ir; es lo que hay que apartar.',
      },
      {
        id: 'santa-lucia',
        zona: 'Santa Lucía',
        nombre: 'Paseo Santa Lucía',
        duracion: '1 a 2 horas',
        dias: 0.25,
        imagen: foto.santaLucia,
        texto:
          'El canal navegable que une el centro con Fundidora. Se puede caminar o recorrer en lancha.',
        consejo:
          'Súbete a la lancha en el Museo de Historia Mexicana y bájate ya dentro del parque.',
      },
      {
        id: 'sierra',
        zona: 'Sierra',
        nombre: 'Chipinque y La Huasteca',
        duracion: 'Un día',
        dias: 1,
        imagen: foto.huasteca,
        texto:
          'Chipinque trepa de los 730 a los 2 200 m sobre la Sierra Madre, con más de 60 km de senderos; La Huasteca es el cañón de paredes verticales de Santa Catarina.',
        consejo:
          'Necesitas auto. Ve temprano: de mayo a septiembre el calor del mediodía es serio.',
      },
      {
        id: 'la-silla',
        zona: 'La Silla',
        nombre: 'Cerro de la Silla',
        duracion: 'Medio día largo',
        dias: 0.75,
        imagen: foto.cerroSilla,
        texto:
          'El ascenso por la ruta de La Antena, desde Guadalupe, hasta el Pico Norte (1 821 m) y la vista completa del valle.',
        consejo: 'Arranca de madrugada, lleva agua de sobra y calcula unas cuatro horas de subida.',
      },
      {
        id: 'bustamante',
        zona: 'Bustamante',
        nombre: 'Ruta de Bustamante',
        duracion: 'Un día',
        dias: 1,
        imagen: foto.grutasBustamante,
        texto:
          'Pueblo Mágico a 107 km al noroeste, apodado el Jardín de Nuevo León. Se va por sus Grutas del Palmito: casi 3 km de recorrido señalizado y trece de los dieciséis tipos de formación que se conocen en el mundo, y se vuelve con pan de la panadería artesanal del pueblo.',
        consejo:
          'Hora y tres cuartos en auto desde Monterrey. Sal temprano: la gruta se recorre en grupo y con guía, y el pueblo se disfruta a media tarde.',
      },
    ],
  },

  // Los dieciseis municipios y los diez lugares del mapa estan en data/mapas.js.
  mapa: {
    titulo: 'El mapa del área metropolitana',
    nota: 'Los dieciséis municipios de la delimitación oficial y los sitios que vienes a ver. Los puntos naranjas son municipios; los azules, lugares.',
    relacion:
      'Regla práctica: casi todo lo turístico está en el centro de Monterrey o a menos de treinta minutos en auto. Las excepciones son Santiago y las Grutas de García, que piden medio día cada una.',
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
          'Un día para el centro y Fundidora, otro para la sierra, Chipinque o La Huasteca, y uno más si quieres Santiago o las Grutas de García.',
      },
      {
        titulo: 'Deja margen para el clima',
        texto:
          'De mayo a septiembre se pasa de los 35 °C y las caminatas se hacen de madrugada. El invierno es seco y templado: es la mejor temporada para venir.',
      },
    ],
    reparto: {
      nota: 'En números, el viaje que la mayoría acaba haciendo:',
      items: [
        { dias: 3, label: 'Días en la ciudad' },
        { dias: 2, label: 'Días de excursión' },
        { dias: 4, label: 'Mínimo recomendado', destacado: true },
      ],
    },
  },

  imperdibles: {
    titulo: 'Los imperdibles',
    texto:
      'Los cinco lugares que definen Monterrey. Con los tres primeros ya te llevas la ciudad; los otros dos son la excusa para volver.',
    lugares: [
      { nombre: 'Cerro de la Silla', imagen: foto.cerroSilla, esencial: true },
      { nombre: 'Macroplaza', imagen: foto.macroplaza, esencial: true },
      { nombre: 'Fundidora', imagen: foto.fundidora, esencial: true },
      { nombre: 'Santa Lucía', imagen: foto.santaLucia },
      { nombre: 'La Huasteca', imagen: foto.huasteca },
    ],
  },

  regionalismos: {
    titulo: 'Cómo se habla aquí',
    nota: 'Pasa el cursor por cada palabra.',
    palabras: [
      { k: 'Troca', d: 'Camioneta o pick-up. Del inglés truck.' },
      { k: 'Raite', d: 'Aventón. Del inglés ride: «¿me das un raite?».' },
      { k: 'Lonche', d: 'Torta o comida para llevar. Del inglés lunch.' },
      { k: 'Yonke', d: 'Deshuesadero de autos usados. Del inglés junk.' },
      { k: 'Morro / morra', d: 'Chavo o chava; también un hijo pequeño.' },
      { k: 'Me cuadra', d: 'Me gusta, me parece bien. El «me late» del norte.' },
      { k: 'Bien acá', d: 'Presumido, que se las da de fresa.' },
      { k: 'Pisto', d: 'Bebida alcohólica: «irse de pisto» es salir a tomar.' },
      { k: '¿Qué onda, compadre?', d: 'Saludo cordial entre desconocidos, muy usado en el norte.' },
      { k: 'Huerco / huerca', d: 'Niño o niña. De las palabras más regias que hay.' },
      { k: 'Tirar a león', d: 'Ignorar a alguien, no hacerle caso.' },
      { k: 'Te la bañaste', d: 'Se te pasó la mano, exageraste.' },
    ],
  },
}
