// Seccion "Sabores de Monterrey".
// Info normalizada por platillo:
//   codigo         -> abreviatura corta para la etiqueta
//   nombre         -> nombre del platillo
//   donde          -> en que lugar se come
//   cuando         -> en que momento aparece en la mesa
//   caracteristicas-> como se reconoce
//
// El cabrito NO va en `grupos`: tiene su propio escaparate (objeto `insignia`).
//
// PENDIENTE: revisar y actualizar el precio de referencia de `insignia.valor`.
import { foto } from './imagenes.js'

export const rarezas = {
  intro:
    'La cocina regia es carne, fuego y trigo. Aquí está cada platillo con su nombre, dónde se come, en qué momento aparece y cómo se reconoce.',
  grupos: [
    {
      nombre: 'Los platillos de siempre',
      columnas: 3,
      nota:
        'Los que encuentras en cualquier mesa del área metropolitana, del puesto de barrio al restaurante de manteles largos.',
      cartas: [
        {
          codigo: 'MAC',
          nombre: 'Machacado con huevo',
          donde: 'Fondas, cenadurías y taquerías de barrio',
          cuando: 'Desayuno, cualquier día',
          caracteristicas: ['Carne seca deshebrada', 'Revuelta con huevo', 'Se come en burrito de harina'],
          images: [
            { src: foto.machacado, alt: 'Plato de machacado con huevo' },
            { src: foto.machaca, alt: 'Huevo con machaca servido con frijoles' },
          ],
        },
        {
          codigo: 'ASA',
          nombre: 'Carne asada',
          donde: 'En el patio de cualquier casa',
          cuando: 'Sábado o domingo, sin falta',
          caracteristicas: ['Arrachera y agujas', 'Carbón o leña de mezquite', 'Con tortillas de harina'],
          images: [{ src: foto.carneAsada, alt: 'Asador con carne al carbón' }],
        },
        {
          codigo: 'ASP',
          nombre: 'Asado de puerco',
          donde: 'Fiestas, bodas y comidas grandes',
          cuando: 'Comida de celebración',
          caracteristicas: ['Puerco guisado en chile ancho', 'Cocción larga y lenta', 'Se sirve con arroz'],
          images: [{ src: foto.asadoPuerco, alt: 'Cazuela de asado de puerco' }],
        },
        {
          codigo: 'FCH',
          nombre: 'Frijoles charros',
          donde: 'Siempre al lado de la asada',
          cuando: 'De guarnición, todo el año',
          caracteristicas: ['Frijol bayo caldoso', 'Con tocino y chorizo', 'Cilantro y chile fresco'],
          images: [{ src: foto.frijolesCharros, alt: 'Olla de frijoles charros' }],
        },
        {
          codigo: 'DIS',
          nombre: 'Discada norteña',
          donde: 'Ranchos y reuniones grandes',
          cuando: 'Cuando hay mucha gente que alimentar',
          caracteristicas: ['Se hace sobre un disco de arado', 'Varias carnes en la misma mezcla', 'Se come en taco de harina'],
          images: [{ src: foto.discada, alt: 'Discada cocinándose sobre un disco de arado' }],
        },
      ],
    },
    {
      nombre: 'Para llevar',
      columnas: 1,
      nota:
        'Lo que se compra de salida: el dulce típico del estado y el mercado donde cabe toda la despensa regia. Cada tarjeta muestra dos vistas.',
      cartas: [
        {
          codigo: 'GLO',
          nombre: 'Glorias de Linares',
          donde: 'Linares, Nuevo León — y en toda la ciudad',
          cuando: 'De regreso a casa, siempre',
          caracteristicas: [
            'Leche quemada de cabra',
            'Con nuez picada',
            'Envueltas en celofán rojo',
            'El dulce típico del estado',
          ],
          images: [{ src: foto.glorias, alt: 'Bolsa de glorias de Linares', destacada: true }],
        },
        {
          codigo: 'MER',
          nombre: 'Mercado Juárez',
          donde: 'Centro de Monterrey, junto a la Macroplaza',
          cuando: 'A la hora de comer',
          caracteristicas: [
            'Cabrito y machacado en el mismo pasillo',
            'Dulces regionales a granel',
            'Artesanía, botas y sombreros',
          ],
          images: [
            { src: foto.mercadoJuarez, alt: 'Interior del Mercado Juárez de Monterrey' },
            { src: foto.mercadoJuarez2, alt: 'Puestos del Mercado Juárez', destacada: true },
          ],
        },
      ],
    },
  ],

  // La joya de la corona: se muestra en grande, sobre fondo oscuro, sin tarjeta.
  insignia: {
    codigo: 'CABRITO',
    nombre: 'Cabrito al pastor',
    titular: 'El platillo insignia de Nuevo León',
    descripcion:
      'Cabrito lechal de menos de un mes, abierto y ensartado en una varilla que se clava en torno al fuego de mezquite. Se cuece de pie, girando lentamente durante horas, y se sirve por piezas: pierna, riñonada, paleta o pecho. No lleva más condimento que sal: todo el sabor viene del animal y del humo.',
    donde: 'Mercado Juárez y los asaderos del centro',
    cuando: 'Comida de domingo y de ocasión',
    temporada: 'Todo el año',
    caracteristicas: [
      'Cabrito lechal de menos de un mes',
      'Solo sal y fuego de mezquite',
      'Cocción vertical de varias horas',
      'Se pide por pieza, no por plato',
    ],
    // Precio de referencia de una orden en Monterrey (revisar y actualizar).
    valor: '$400 – $700 MXN',
    valorNota: 'Precio orientativo de una orden en la ciudad. Valor de referencia — actualizar.',
    img: foto.cabrito,
    alt: 'Cabrito al pastor cocinándose alrededor del fuego',
  },
}
