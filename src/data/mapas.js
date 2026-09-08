// Coordenadas reales para los dos mapas de Leaflet.
//
// Fuentes: OpenStreetMap (Nominatim) para los edificios y parques, y las
// coordenadas de Wikipedia/Wikidata para las cabeceras municipales.
// El trazo del Paseo Santa Lucia es aproximado: se dibuja con unos pocos
// vertices para sugerir el recorrido del canal, no su geometria exacta.

import { foto } from './imagenes.js'

/* ============================================================
   1. Anatomia del centro
   ============================================================ */
export const mapaCentro = {
  centro: [25.6705, -100.2985],
  zoom: 14,

  // De norte a sur por la Macroplaza y luego al oriente por Santa Lucia.
  puntos: [
    {
      n: 1,
      nombre: 'Palacio de Gobierno',
      lat: 25.67262,
      lng: -100.30898,
      texto:
        'Sede del poder ejecutivo estatal, inaugurada en 1908. Cierra la Macroplaza por el norte.',
    },
    {
      n: 2,
      nombre: 'Explanada de los Héroes',
      lat: 25.67177,
      lng: -100.30939,
      texto:
        'La gran explanada frente al Palacio, con las estatuas de los héroes de la Independencia.',
    },
    {
      n: 3,
      nombre: 'Museo de Historia Mexicana',
      lat: 25.67172,
      lng: -100.30643,
      texto: 'Abierto en 1994. Desde su costado arranca el Paseo Santa Lucía.',
    },
    {
      n: 4,
      nombre: 'Catedral Metropolitana',
      lat: 25.66552,
      lng: -100.30964,
      texto:
        'Levantada entre los siglos XVII y XIX; la torre no se terminó hasta 1899.',
    },
    {
      n: 5,
      nombre: 'Faro del Comercio',
      lat: 25.66619,
      lng: -100.31003,
      texto:
        'Torre de hormigón naranja de 70 m, construida entre 1983 y 1984 con proyecto de Luis Barragán. Su láser verde barre el centro cada noche.',
    },
    {
      n: 6,
      nombre: 'MARCO',
      lat: 25.66461,
      lng: -100.30982,
      texto:
        'Museo de Arte Contemporáneo, obra de Ricardo Legorreta abierta en 1991. La paloma de Juan Soriano custodia la entrada.',
    },
    {
      n: 7,
      nombre: 'Barrio Antiguo',
      lat: 25.66553,
      lng: -100.30679,
      texto:
        'Las calles de casonas de los siglos XVIII y XIX, justo al oriente de la Macroplaza.',
    },
    {
      n: 8,
      nombre: 'Palacio Municipal',
      lat: 25.66475,
      lng: -100.31102,
      texto: 'Cierra la Macroplaza por el sur, elevado sobre pilotes por encima de la explanada.',
    },
    {
      n: 9,
      nombre: 'Parque Fundidora',
      lat: 25.6771,
      lng: -100.28219,
      texto:
        'El final del Paseo Santa Lucía: 144 hectáreas de parque sobre la antigua acería, con el Horno3 dentro.',
      destacado: true,
    },
  ],

  rutas: [
    {
      nombre: 'Eje de la Macroplaza',
      color: '#cf5a22',
      puntos: [
        [25.67262, -100.30898],
        [25.67177, -100.30939],
        [25.66619, -100.31003],
        [25.66475, -100.31102],
      ],
    },
    {
      nombre: 'Paseo Santa Lucía (trazo aproximado)',
      color: '#3e84c0',
      discontinua: true,
      puntos: [
        [25.67172, -100.30643],
        [25.6716, -100.3025],
        [25.6746, -100.2975],
        [25.677, -100.2905],
        [25.6771, -100.28219],
      ],
    },
  ],
}

/* ============================================================
   2. El area metropolitana
   ============================================================ */
// Los dieciseis municipios de la delimitacion oficial (Censo 2020, INEGI).
// `grupo` separa los cuatro centrales del resto para colorear los marcadores.
export const mapaMetropolitano = {
  centro: [25.72, -100.28],
  zoom: 10,

  municipios: [
    { nombre: 'Monterrey', lat: 25.6844, lng: -100.3181, grupo: 'central', poblacion: '1 142 994' },
    { nombre: 'San Pedro Garza García', lat: 25.6643, lng: -100.4023, grupo: 'central', poblacion: '132 169' },
    { nombre: 'San Nicolás de los Garza', lat: 25.7555, lng: -100.2896, grupo: 'central', poblacion: '412 199' },
    { nombre: 'Guadalupe', lat: 25.6716, lng: -100.2145, grupo: 'central', poblacion: '643 143' },
    { nombre: 'Apodaca', lat: 25.7817, lng: -100.1886, grupo: 'conurbado', poblacion: '656 464' },
    { nombre: 'General Escobedo', lat: 25.8083, lng: -100.3267, grupo: 'conurbado', poblacion: '481 213' },
    { nombre: 'Juárez', lat: 25.65, lng: -100.0833, grupo: 'conurbado', poblacion: '471 523' },
    { nombre: 'García', lat: 25.8115, lng: -100.5941, grupo: 'conurbado', poblacion: '397 205' },
    { nombre: 'Santa Catarina', lat: 25.6733, lng: -100.4581, grupo: 'conurbado', poblacion: '306 322' },
    { nombre: 'Pesquería', lat: 25.7469, lng: -100.0045, grupo: 'conurbado', poblacion: '147 624' },
    { nombre: 'Cadereyta Jiménez', lat: 25.591, lng: -100.0016, grupo: 'conurbado', poblacion: '122 337' },
    { nombre: 'El Carmen', lat: 25.9347, lng: -100.3631, grupo: 'conurbado', poblacion: '104 478' },
    { nombre: 'General Zuazua', lat: 25.8954, lng: -100.1078, grupo: 'conurbado', poblacion: '102 149' },
    { nombre: 'Salinas Victoria', lat: 25.9628, lng: -100.2919, grupo: 'conurbado', poblacion: '86 766' },
    { nombre: 'Ciénega de Flores', lat: 25.9533, lng: -100.1874, grupo: 'conurbado', poblacion: '68 747' },
    { nombre: 'Santiago', lat: 25.4271, lng: -100.153, grupo: 'conurbado', poblacion: '46 784' },
  ],

  // Lo que un visitante viene a ver, con su municipio entre paréntesis.
  lugares: [
    { nombre: 'Macroplaza', lat: 25.6686, lng: -100.3097, texto: 'El eje cívico, en el centro de Monterrey.', imagen: foto.macroplaza },
    { nombre: 'Parque Fundidora', lat: 25.6771, lng: -100.2822, texto: '144 ha sobre la antigua acería, con el Horno3 (Monterrey).', imagen: foto.fundidora },
    { nombre: 'Cerro de la Silla', lat: 25.6694, lng: -100.1921, texto: '1 821 m en su Pico Norte. Se sube desde Guadalupe.', imagen: foto.cerroSilla },
    { nombre: 'Parque Chipinque', lat: 25.5972, lng: -100.3281, texto: 'Bosque de pino y encino en la Sierra Madre (San Pedro Garza García).', imagen: foto.chipinque },
    { nombre: 'Cañón de la Huasteca', lat: 25.6462, lng: -100.4598, texto: 'Paredes verticales de piedra caliza (Santa Catarina).', imagen: foto.huasteca },
    { nombre: 'Grutas de García', lat: 25.8494, lng: -100.5238, texto: 'Cavernas a 30 km al noroeste, con teleférico (García).', imagen: foto.grutasGarcia },
    { nombre: 'Cascada Cola de Caballo', lat: 25.3624, lng: -100.1635, texto: 'Salto de agua en la sierra (Santiago).', imagen: foto.colaDeCaballo },
    { nombre: 'Presa de la Boca', lat: 25.4286, lng: -100.1414, texto: 'Presa Rodrigo Gómez, la escapada de fin de semana (Santiago).', imagen: foto.presaLaBoca },
    { nombre: 'Aeropuerto Mariano Escobedo', lat: 25.7769, lng: -100.1066, texto: 'La puerta de entrada aérea (Apodaca).', imagen: foto.aeropuerto },
    { nombre: 'Estadio BBVA', lat: 25.6691, lng: -100.2445, texto: 'La casa de Rayados, al pie del Cerro de la Silla (Guadalupe).', imagen: foto.estadioBBVA },
  ],
}
