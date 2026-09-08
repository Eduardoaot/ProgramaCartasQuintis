// Seccion "Sabores de Monterrey".
// Info normalizada por platillo:
//   codigo         -> abreviatura corta para la etiqueta
//   nombre         -> nombre del platillo
//   donde          -> en que lugar se come
//   cuando         -> en que momento aparece en la mesa
//   caracteristicas-> como se reconoce
//
// La carne asada NO va en `grupos`: tiene su propio escaparate (objeto
// `insignia`), porque en Monterrey es menos un platillo que un ritual de fin
// de semana. El cabrito, que antes ocupaba ese lugar, es ahora una carta mas.
//
// PENDIENTE: revisar y actualizar los precios de referencia.
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
          codigo: 'CAB',
          nombre: 'Cabrito al pastor',
          donde: 'Mercado Juárez y los asaderos del centro',
          cuando: 'Comida de domingo y de ocasión',
          caracteristicas: [
            'Cabrito lechal de menos de un mes',
            'Solo sal y fuego de mezquite',
            'Cocción vertical de varias horas',
            'Se pide por pieza, no por plato',
          ],
          images: [
            { src: foto.cabrito, alt: 'Cabrito al pastor cocinándose alrededor del fuego' },
            { src: foto.cabritos, alt: 'Cabritos ensartados en varilla junto a las brasas' },
          ],
        },
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
        {
          codigo: 'TOR',
          nombre: 'Tortillas de harina',
          donde: 'En toda mesa del norte, hechas en casa o al peso',
          cuando: 'Con todo y a todas horas',
          caracteristicas: [
            'Trigo en vez de maíz',
            'Se estiran a mano y se cuecen en comal',
            'Envuelven la asada, la machaca y la discada',
          ],
          images: [
            { src: foto.tortillasHarina, alt: 'Señora estirando tortillas de harina' },
            { src: foto.tortillasHarina2, alt: 'Tortillas de harina cociéndose en el comal' },
          ],
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
    codigo: 'ASADA',
    nombre: 'Carne asada',
    titular: 'El platillo insignia de Nuevo León',
    descripcion:
      'Hablar de Monterrey es hablar de carne asada, y aquí es menos un platillo que un ritual: el asador se prende el fin de semana y alrededor se junta la familia entera. Lo que la distingue del resto del país es la contención — cortes delgados, sal gruesa y leña o carbón de mezquite, que perfuma la carne con un humo dulce e inconfundible. El corte estrella es la arrachera, aunque la aguja norteña le pelea el lugar.',
    donde: 'En el patio de cualquier casa',
    cuando: 'Sábado o domingo, sin falta',
    temporada: 'Todo el año',
    caracteristicas: [
      'Arrachera y aguja norteña',
      'Cortes delgados, de un centímetro',
      'Leña o carbón de mezquite',
      'Sal gruesa y nada más',
      'Con tortillas de harina y frijoles charros',
    ],
    // Precio de referencia de un kilo de arrachera en Monterrey (revisar).
    valor: '$300 – $500 MXN',
    valorNota: 'Precio orientativo del kilo de arrachera en la ciudad. Valor de referencia — actualizar.',
    img: foto.carneAsadaVertical,
    alt: 'Carne asada recién salida del asador',
  },
}
