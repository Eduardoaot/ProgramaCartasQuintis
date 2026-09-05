// Seccion "Los municipios del area metropolitana".
//
// Se muestran los cuatro municipios centrales y los conurbados que absorbieron
// el crecimiento de las ultimas decadas.
//
// PENDIENTE: las poblaciones son del Censo de Poblacion y Vivienda 2020 (INEGI)
// y los anios de fundacion vienen de las fichas municipales. Conviene
// verificarlos contra la fuente oficial antes de publicar.
import { foto } from './imagenes.js'

export const expansiones = {
  intro:
    'El área metropolitana de Monterrey la forman una docena de municipios que crecieron hasta pegarse unos con otros. Aquí están los cuatro centrales —donde vive y trabaja la mayor parte de la gente— y los conurbados que recibieron el crecimiento de las últimas décadas.',
  fichaComun: {
    poblacion: 'Unos 5.3 millones de habitantes',
    municipios: '12 municipios conurbados',
  },
  grupos: [
    {
      nombre: 'Municipios centrales',
      municipios: [
        {
          codigo: 'MTY',
          titulo: 'Monterrey',
          lanzamiento: 'Fundado en 1596',
          poblacion: '1 142 994 habitantes',
          descripcion:
            'La capital del estado y el municipio con el centro histórico, la Macroplaza, el Barrio Antiguo y el Parque Fundidora. Concentra los poderes estatales y la mayor parte de la oferta cultural.',
          destacado: 'Capital de Nuevo León y corazón del área metropolitana',
          caja: foto.centro,
        },
        {
          codigo: 'SPGG',
          titulo: 'San Pedro Garza García',
          lanzamiento: 'Municipio desde 1882',
          poblacion: '132 169 habitantes',
          descripcion:
            'El municipio más pequeño de los centrales y el más rico del país. Reúne Valle Oriente, las torres corporativas más altas de México y la entrada al parque ecológico Chipinque.',
          destacado: 'El mayor ingreso per cápita de México',
          caja: foto.sanPedro,
        },
        {
          codigo: 'SNG',
          titulo: 'San Nicolás de los Garza',
          lanzamiento: 'Fundado en 1597',
          poblacion: '412 199 habitantes',
          descripcion:
            'Municipio residencial e industrial al norte de Monterrey. Ahí está Ciudad Universitaria, el campus principal de la Universidad Autónoma de Nuevo León.',
          destacado: 'Sede de Ciudad Universitaria de la UANL',
          caja: foto.sanNicolas,
        },
        {
          codigo: 'GPE',
          titulo: 'Guadalupe',
          lanzamiento: 'Fundado en 1716',
          poblacion: '643 143 habitantes',
          descripcion:
            'El municipio del oriente, pegado a Monterrey. A sus pies arranca el Cerro de la Silla y en su territorio están el Parque La Pastora y el estadio de Rayados.',
          destacado: 'Aquí empieza el ascenso al Cerro de la Silla',
          caja: foto.cerroSillaVertical,
        },
      ],
    },
    {
      nombre: 'Municipios conurbados',
      municipios: [
        {
          codigo: 'APO',
          titulo: 'Apodaca',
          lanzamiento: 'Fundado en 1585',
          poblacion: '656 464 habitantes',
          descripcion:
            'El municipio más poblado después de Monterrey. Concentra el aeropuerto internacional y buena parte de los parques industriales del área metropolitana.',
          destacado: 'Aeropuerto Internacional Mariano Escobedo',
          caja: foto.apodaca,
        },
        {
          codigo: 'ESC',
          titulo: 'General Escobedo',
          lanzamiento: 'Fundado en 1604',
          poblacion: '481 157 habitantes',
          descripcion:
            'Municipio del norte, con fuerte vocación industrial y automotriz. Creció aceleradamente a partir de los años noventa con la vivienda de interés social.',
          destacado: 'Corredor industrial y automotriz del norte',
          caja: foto.escobedo,
        },
        {
          codigo: 'JRZ',
          titulo: 'Juárez',
          lanzamiento: 'Fundado en 1604',
          poblacion: '466 680 habitantes',
          descripcion:
            'El municipio que más creció en lo que va del siglo: pasó de pueblo a ciudad dormitorio en menos de veinte años. Comparte el Cerro de la Silla con Guadalupe.',
          destacado: 'El crecimiento más acelerado del área metropolitana',
          caja: foto.cerroSillaJuarez,
        },
        {
          codigo: 'SCT',
          titulo: 'Santa Catarina',
          lanzamiento: 'Fundado en 1596',
          poblacion: '306 322 habitantes',
          descripcion:
            'Al poniente, encajonado entre la Sierra Madre y el río Santa Catarina. En su territorio está el Cañón de la Huasteca, la puerta de entrada a la sierra.',
          destacado: 'Entrada al Cañón de la Huasteca',
          caja: foto.santaCatarina,
        },
        {
          codigo: 'GAR',
          titulo: 'García',
          lanzamiento: 'Fundado en 1583',
          poblacion: '415 619 habitantes',
          descripcion:
            'Municipio del noroeste que multiplicó su población en dos décadas. Guarda las Grutas de García, un sistema de cavernas al que se sube en teleférico.',
          destacado: 'Las Grutas de García y su teleférico',
          caja: foto.garcia,
        },
        {
          codigo: 'STG',
          titulo: 'Santiago',
          lanzamiento: 'Fundado en 1646',
          poblacion: '45 997 habitantes',
          descripcion:
            'Pueblo Mágico al sur, a unos 40 km del centro. Ahí están la cascada Cola de Caballo y la Presa de la Boca, la escapada de fin de semana de toda la ciudad.',
          destacado: 'Pueblo Mágico: Cola de Caballo y Presa de la Boca',
          caja: foto.santiago,
        },
        {
          codigo: 'CAD',
          titulo: 'Cadereyta Jiménez',
          lanzamiento: 'Fundado en 1637',
          poblacion: '95 534 habitantes',
          descripcion:
            'Al oriente del área metropolitana, con un casco antiguo bien conservado y la refinería de Pemex que le da su perfil industrial.',
          destacado: 'Refinería de Pemex y casco histórico',
          caja: foto.cadereyta,
        },
        {
          codigo: 'SAV',
          titulo: 'Salinas Victoria',
          lanzamiento: 'Origen del siglo XVII',
          poblacion: 'Unos 82 000 habitantes',
          descripcion:
            'El extremo norte del área metropolitana. Su suelo barato y su posición sobre la carretera a Nuevo Laredo lo volvieron el nuevo frente de expansión logística e industrial.',
          destacado: 'Puerta logística hacia la frontera',
          caja: foto.salinasVictoria,
        },
      ],
    },
  ],
}
