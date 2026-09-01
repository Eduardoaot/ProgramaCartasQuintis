// Seccion "Antecedentes" — responsable: YO
//
// De donde viene la mecanica + que expansiones traian cartas firmadas
// (con foto de la CAJA / carton) + lo popular que se volvio, con el valor
// de referencia de algunas cartas.
//
// PENDIENTE de tu equipo:
//  - `caja`: URL real de la foto del carton/caja de cada set (ahora null -> se
//     muestra un marcador).
//  - `valor`: precios de referencia del mercado secundario; revisar y actualizar.
const IMG = 'https://5hanayome-cardgame.com/wordpress/wp-content/images/cardlist'

export const antecedentes = {
  intro:
    'El TCG de Las Quintillizas no salio de la nada: hereda mecanicas de otros juegos de cartas de anime y, gracias a sus cartas firmadas, se volvio un objeto de coleccion muy buscado.',

  origen: {
    titulo: 'De donde viene la mecanica',
    texto:
      'La base conceptual viene de Weiss Schwarz (Bushiroad, 2008): mazos tematicos por serie, cartas de personaje con coste y nivel, cartas de evento que alteran el turno y una condicion de victoria por acumulacion. Sobre eso, Quintillizas reescribe el objetivo con el tono de la obra: conseguir tres novias antes que el rival.',
  },

  firmadas: {
    titulo: 'Expansiones con cartas firmadas',
    texto:
      'Varias cajas incluyeron cartas con firma real impresa: las SSSP secretas llevan la firma del autor Negi Haruba (y van numeradas 000/099) y las SSP la firma de las actrices de voz. Estas son las expansiones que las repartieron:',
    sets: [
      {
        codigo: 'BP1',
        nombre: 'Volumen 1',
        firmaEn: 'SSSP — firma de Negi Haruba, numeradas 000/099',
        caja: null,
      },
      {
        codigo: 'BP2',
        nombre: 'Volumen 2',
        firmaEn: 'SSSP — nuevas ilustraciones firmadas del autor',
        caja: null,
      },
      {
        codigo: 'BP4',
        nombre: 'Volumen 4',
        firmaEn: 'SSP — firma de las seiyu del reparto',
        caja: null,
      },
      {
        codigo: 'BP6',
        nombre: 'Volumen 6',
        firmaEn: 'SSP y GSP — firma de seiyu sobre arte especial',
        caja: null,
      },
      {
        codigo: 'BP7',
        nombre: 'Volumen 7',
        firmaEn: 'SSSP + SSP — el set con mas cartas firmadas',
        caja: null,
      },
    ],
  },

  valor: {
    titulo: 'Lo popular que se volvio',
    texto:
      'La demanda de coleccionistas disparo el precio de las cartas firmadas y numeradas en el mercado secundario. Valores de referencia (mercado japones; revisar y actualizar):',
    cartas: [
      {
        nombre: 'SSSP Ichika — BP1, firmada y numerada',
        valor: '¥80.000 – ¥130.000',
        img: `${IMG}/BP1/GYC-BP1-001P2_4c.png`,
      },
      {
        nombre: 'SSSP — BP2, firmada',
        valor: '¥45.000 – ¥90.000',
        img: `${IMG}/BP2/GYC-BP02_008SSSP.png`,
      },
      {
        nombre: 'GSP secreta — BP6',
        valor: '¥30.000 – ¥60.000',
        img: `${IMG}/BP6/GYC-BP6-065P2_4C.png`,
      },
      {
        nombre: 'SSP con firma de seiyu — BP7',
        valor: '¥12.000 – ¥25.000',
        img: `${IMG}/BP7/GYC-BP7-024P1_img.png`,
      },
    ],
  },
}
