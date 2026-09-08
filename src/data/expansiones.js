// Seccion "Los municipios del area metropolitana".
//
// Son los dieciseis de la delimitacion oficial. Se separan los cuatro
// centrales, que forman la mancha urbana historica, de los doce conurbados.
//
// Poblaciones: Censo de Poblacion y Vivienda 2020 (INEGI). La suma de los
// dieciseis da los 5 322 117 habitantes que declara el mismo censo.
// Los anios de fundacion vienen de las fichas municipales; de Pesqueria,
// General Zuazua, Cienega de Flores y El Carmen no hay una fecha unica
// documentada, asi que sus fichas no la llevan.
import { foto } from './imagenes.js'

export const expansiones = {
  intro:
    'El área metropolitana de Monterrey la forman dieciséis municipios que crecieron hasta pegarse unos con otros. Aquí están los cuatro centrales —donde vive y trabaja la mayor parte de la gente— y los doce conurbados que recibieron el crecimiento de las últimas décadas.',

  resumen: [
    { dato: '5 322 117', label: 'Habitantes en el área metropolitana', fuente: 'Censo 2020, INEGI' },
    { dato: '16', label: 'Municipios en la delimitación oficial', fuente: 'SEDATU · CONAPO · INEGI' },
  ],

  grupos: [
    {
      nombre: 'Municipios centrales',
      nota: 'La mancha urbana histórica: cuatro municipios pegados entre sí.',
      municipios: [
        {
          clave: 'MTY',
          titulo: 'Monterrey',
          fundacion: 'Fundado en 1596',
          poblacion: '1 142 994 habitantes',
          descripcion:
            'La capital del estado y el municipio con el centro histórico, la Macroplaza, el Barrio Antiguo y el Parque Fundidora. Concentra los poderes estatales y la mayor parte de la oferta cultural.',
          destacado: 'Capital de Nuevo León y corazón del área metropolitana',
          imagen: foto.centro,
        },
        {
          clave: 'GPE',
          titulo: 'Guadalupe',
          fundacion: 'Fundado en 1716',
          poblacion: '643 143 habitantes',
          descripcion:
            'El municipio del oriente, pegado a Monterrey. A sus pies arranca el Cerro de la Silla y en su territorio están el Parque La Pastora y el Estadio BBVA de Rayados.',
          destacado: 'Aquí empieza el ascenso al Cerro de la Silla',
          imagen: foto.cerroSillaVertical,
        },
        {
          clave: 'SNG',
          titulo: 'San Nicolás de los Garza',
          fundacion: 'Fundado en 1597',
          poblacion: '412 199 habitantes',
          descripcion:
            'Municipio residencial e industrial al norte de Monterrey. Ahí está Ciudad Universitaria, el campus principal de la Universidad Autónoma de Nuevo León.',
          destacado: 'Sede de Ciudad Universitaria de la UANL',
          imagen: foto.sanNicolas,
        },
        {
          clave: 'SPGG',
          titulo: 'San Pedro Garza García',
          fundacion: 'Municipio desde 1882',
          poblacion: '132 169 habitantes',
          descripcion:
            'El municipio más pequeño de los centrales y el de mayor ingreso per cápita del país. Reúne Valle Oriente, las torres corporativas más altas de México y la entrada al parque ecológico Chipinque.',
          destacado: 'El mayor ingreso per cápita de México',
          imagen: foto.sanPedro,
        },
      ],
    },
    {
      nombre: 'Municipios conurbados',
      nota: 'Los que absorbieron el crecimiento, de mayor a menor población.',
      municipios: [
        {
          clave: 'APO',
          titulo: 'Apodaca',
          fundacion: 'Fundado en 1585',
          poblacion: '656 464 habitantes',
          descripcion:
            'El municipio más poblado después de Monterrey. Concentra el aeropuerto internacional Mariano Escobedo y buena parte de los parques industriales del área metropolitana.',
          destacado: 'La puerta de entrada aérea de la ciudad',
          imagen: foto.apodaca,
        },
        {
          clave: 'ESC',
          titulo: 'General Escobedo',
          fundacion: 'Fundado en 1604',
          poblacion: '481 213 habitantes',
          descripcion:
            'Municipio del norte, con fuerte vocación industrial y automotriz. Creció aceleradamente a partir de los años noventa con la vivienda de interés social.',
          destacado: 'Corredor industrial y automotriz del norte',
          imagen: foto.escobedo,
        },
        {
          clave: 'JRZ',
          titulo: 'Juárez',
          fundacion: 'Fundado en 1604',
          poblacion: '471 523 habitantes',
          descripcion:
            'De pueblo a ciudad dormitorio en menos de veinte años: multiplicó su población varias veces en lo que va del siglo. Comparte el Cerro de la Silla con Guadalupe.',
          destacado: 'De los crecimientos más acelerados del área metropolitana',
          imagen: foto.cerroSillaJuarez,
        },
        {
          clave: 'GAR',
          titulo: 'García',
          fundacion: 'Fundado en 1583',
          poblacion: '397 205 habitantes',
          descripcion:
            'Municipio del noroeste que multiplicó su población en dos décadas. Guarda las Grutas de García, un sistema de cavernas a 30 km del centro al que se sube en teleférico.',
          destacado: 'Las Grutas de García y su teleférico',
          imagen: foto.garcia,
        },
        {
          clave: 'SCT',
          titulo: 'Santa Catarina',
          fundacion: 'Fundado en 1596',
          poblacion: '306 322 habitantes',
          descripcion:
            'Al poniente, encajonado entre la Sierra Madre y el río Santa Catarina. En su territorio está el Cañón de la Huasteca, la puerta de entrada a la sierra.',
          destacado: 'Entrada al Cañón de la Huasteca',
          imagen: foto.santaCatarina,
        },
        {
          clave: 'PSQ',
          titulo: 'Pesquería',
          poblacion: '147 624 habitantes',
          descripcion:
            'El oriente industrial reciente. Era un municipio rural hasta que la planta armadora de Kia y su cadena de proveedores dispararon su población en una sola década.',
          destacado: 'La armadora de Kia y su corredor de proveedores',
          imagen: foto.pesqueria,
        },
        {
          clave: 'CAD',
          titulo: 'Cadereyta Jiménez',
          fundacion: 'Fundado en 1637',
          poblacion: '122 337 habitantes',
          descripcion:
            'Al oriente del área metropolitana, con un casco antiguo bien conservado y la refinería de Pemex que le da su perfil industrial.',
          destacado: 'Refinería de Pemex y casco histórico',
          imagen: foto.cadereyta,
        },
        {
          clave: 'CAR',
          titulo: 'El Carmen',
          poblacion: '104 478 habitantes',
          descripcion:
            'Municipio del noroeste, uno de los que más rápido crecieron con los grandes desarrollos de vivienda de los últimos veinte años.',
          destacado: 'Frente de vivienda del noroeste',
          imagen: foto.elCarmen,
        },
        {
          clave: 'ZUA',
          titulo: 'General Zuazua',
          poblacion: '102 149 habitantes',
          descripcion:
            'Al norte, conocido por su rodeo y por sus cruces de ferrocarril. Se incorporó a la zona metropolitana en 2014, cuando los fraccionamientos alcanzaron su territorio.',
          destacado: 'Se sumó al área metropolitana en 2014',
        },
        {
          clave: 'SAV',
          titulo: 'Salinas Victoria',
          fundacion: 'Origen del siglo XVII',
          poblacion: '86 766 habitantes',
          descripcion:
            'El extremo norte del área metropolitana. Su suelo barato y su posición sobre la carretera a Nuevo Laredo lo volvieron el nuevo frente de expansión logística e industrial.',
          destacado: 'Puerta logística hacia la frontera',
          imagen: foto.salinasVictoria,
        },
        {
          clave: 'CIF',
          titulo: 'Ciénega de Flores',
          poblacion: '68 747 habitantes',
          descripcion:
            'Municipio del norte sobre el eje carretero a Nuevo Laredo. Comparte con Salinas Victoria y Zuazua el crecimiento logístico e industrial del último tramo.',
          destacado: 'Sobre el corredor carretero a la frontera',
        },
        {
          clave: 'STG',
          titulo: 'Santiago',
          fundacion: 'Fundado en 1646',
          poblacion: '46 784 habitantes',
          descripcion:
            'Pueblo Mágico al sur, a unos 40 km del centro. Ahí están la cascada Cola de Caballo y la Presa de la Boca, la escapada de fin de semana de toda la ciudad.',
          destacado: 'Pueblo Mágico: Cola de Caballo y Presa de la Boca',
          imagen: foto.santiago,
        },
      ],
    },
  ],
}
