// Seccion "El area metropolitana": como se formo, de que partes se compone,
// por que es el motor industrial del norte y que tipos de zona la integran.
import { foto } from './imagenes.js'

export const juego = {
  bgImage: foto.mitras,
  intro:
    'Una vista general del área metropolitana: cómo se formó, cómo está repartida, qué la mueve y qué tipo de zonas la componen.',
  bloques: [
    {
      titulo: 'Cómo se formó',
      texto:
        'El Área Metropolitana de Monterrey comenzó a consolidarse desde mediados del siglo XX, impulsada por la industrialización y el crecimiento de la población. Monterrey se expandió hacia municipios vecinos como San Nicolás, Guadalupe, San Pedro y Santa Catarina, y posteriormente hacia Apodaca, Escobedo, García y Juárez. Con el tiempo, estos municipios quedaron integrados en una misma mancha urbana..',
    },
    {
      titulo: 'Qué es hoy',
      texto:
        'El Área Metropolitana de Monterrey es una de las principales zonas urbanas de México. Está formada por varios municipios conurbados que, aunque mantienen sus propios gobiernos, funcionan como una misma ciudad. Millones de personas viven, trabajan, estudian y se desplazan diariamente entre ellos, creando una ciudad integrada por una misma dinámica económica y urbana..',
    },
  ],
  arena: {
    titulo: 'Cómo está armada la ciudad',
    partes: [
      { nombre: 'Centro histórico', texto: 'El núcleo original de Monterrey, alrededor de la Catedral, el Barrio Antiguo y el Palacio de Gobierno.' },
      { nombre: 'Macroplaza', texto: 'El gran eje cívico y cultural del centro, con el Faro del Comercio como uno de sus principales símbolos.' },
      { nombre: 'Barrio Antiguo', texto: 'Zona histórica de calles y casonas antiguas, actualmente conocida también por sus restaurantes, bares y vida nocturna.' },
      { nombre: 'Distrito Fundidora', texto: 'La antigua zona industrial de la Fundidora, transformada en parque, museos y espacios para eventos.' },
      { nombre: 'Valle Oriente y San Pedro', texto: 'Uno de los principales distritos corporativos y financieros de la metrópoli, con torres de oficinas y edificios de gran altura.' },
      { nombre: 'Río Santa Catarina', texto: 'El cauce que atraviesa Monterrey de poniente a oriente y separa geográficamente distintos sectores de la ciudad.' },
      { nombre: 'Anillo Periférico', texto: 'Importante sistema vial que conecta Monterrey con los municipios metropolitanos y facilita los desplazamientos alrededor de la zona urbana.' },
      { nombre: 'Corredor industrial norte', texto: 'Zona de fuerte actividad industrial y logística, especialmente en Apodaca, Escobedo y Salinas Victoria.' },
      { nombre: 'La sierra', texto: 'La Sierra Madre Oriental y el Parque Nacional Cumbres, que forman el gran paisaje montañoso al sur y suroeste de Monterrey.' },
    ],
  },
  motorDelNorte:
    'Monterrey concentra la mayor densidad de corporativos de México y es la puerta industrial hacia Estados Unidos: acero, cemento, vidrio y cerveza primero; electrónica, autopartes y armadoras después. Su cercanía con la frontera —poco más de 200 km hasta Nuevo Laredo— la convirtió en el nodo logístico del norte del país.',
  tiposZona: [
    { nombre: 'Industrial', texto: 'Parques y naves en Apodaca, Escobedo, Santa Catarina y Pesquería. Es donde trabaja buena parte del área metropolitana.' },
    { nombre: 'Corporativa', texto: 'Valle Oriente y San Pedro Garza García: torres de oficinas, banca y los rascacielos más altos de México.' },
    { nombre: 'Residencial', texto: 'La mayor parte del suelo urbano. San Nicolás, Guadalupe, Escobedo y Juárez concentran la vivienda.' },
    { nombre: 'Natural', texto: 'El Parque Nacional Cumbres, Chipinque, La Huasteca y los cerros protegidos que rodean el valle.' },
    { nombre: 'Histórica', texto: 'El centro de Monterrey y los cascos antiguos de Santiago, Cadereyta y Guadalupe.' },
  ],
}
