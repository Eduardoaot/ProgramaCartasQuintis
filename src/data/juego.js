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
      { nombre: 'Centro histórico', texto: 'El casco original, entre la Catedral, el Barrio Antiguo y el Palacio de Gobierno.' },
      { nombre: 'Macroplaza', texto: 'El eje cívico que parte el centro de norte a sur, con el Faro del Comercio en medio.' },
      { nombre: 'Barrio Antiguo', texto: 'Diez manzanas de casonas de los siglos XVIII y XIX; de noche, la zona de bares.' },
      { nombre: 'Distrito Fundidora', texto: 'La antigua acería vuelta parque, museos y recintos de espectáculos, al oriente.' },
      { nombre: 'Valle Oriente y San Pedro', texto: 'El distrito corporativo: torres de oficinas, banca y los edificios más altos del país.' },
      { nombre: 'Río Santa Catarina', texto: 'El cauce, seco casi todo el año, que atraviesa la ciudad de poniente a oriente.' },
      { nombre: 'Anillo Periférico', texto: 'El arco vial que rodea la mancha urbana y enlaza a los municipios conurbados.' },
      { nombre: 'Corredor industrial norte', texto: 'Apodaca, Escobedo y Salinas Victoria: parques industriales, aeropuerto y armadoras.' },
      { nombre: 'La sierra', texto: 'La Sierra Madre Oriental y el Parque Nacional Cumbres, que cierran la ciudad por el poniente y el sur.' },
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
