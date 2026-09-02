// Seccion "Antecedentes" — responsable: YO
//
//  - origen   -> "Primer contacto": la serie en Weiss Schwarz
//  - firmadas -> las 3 expansiones de Weiss Schwarz (japones + ingles)
//  - valor    -> cartas SP firmadas y su precio de mercado (TCGplayer)
//
// PENDIENTE: revisar/actualizar los precios de `valor.cartas[].valor`.

export const antecedentes = {
  intro:
    'El TCG de Las Quintillizas no salio de la nada: la serie ya habia estado en un juego de cartas antes, y sus cartas firmadas la convirtieron en objeto de coleccion.',

  origen: {
    titulo: 'Primer contacto',
    texto:
      'La primera vez en la que se tuvo esta serie en un juego de cartas fue en Weiss Schwarz (Bushiroad, 2008): un juego de cartas global que trata de varios animes, con mazos tematicos por serie, cartas de personaje con coste y nivel, cartas de evento que alteran el turno y una condicion de victoria por acumulacion.',
  },

  firmadas: {
    titulo: 'Expansiones con cartas firmadas',
    texto:
      'En Weiss Schwarz, Las Quintillizas tuvieron tres expansiones. Todas se publicaron tanto en japones como en ingles e incluyeron cartas SP con la firma impresa de las actrices de voz.',
    sets: [
      {
        nombre: 'The Quintessential Quintuplets',
        idiomas: 'Japonés · Inglés',
        enlace:
          'https://www.amazon.com.mx/Weiss-Schwarz-Quintessential-Quintuplets-Booster/dp/B09CV7FWHJ',
        caja: 'https://m.media-amazon.com/images/I/712UwQz8JZL._AC_SY741_.jpg',
      },
      {
        nombre: 'The Quintessential Quintuplets 2',
        idiomas: 'Japonés · Inglés',
        enlace: 'https://www.amazon.com.mx/Weiss-Schwarz-Quintessential-Quintuplets-2/dp/B09YN25GNY',
        caja: 'https://m.media-amazon.com/images/I/614xGJ8J98L._AC_SL1001_.jpg',
      },
      {
        nombre: 'The Quintessential Quintuplets Movie',
        idiomas: 'Japonés · Inglés',
        enlace:
          'https://www.amazon.com.mx/Weiss-Schwarz-Quintessential-Quintuplets-visualizaci%C3%B3n/dp/B0C7JYZ55H',
        caja: 'https://m.media-amazon.com/images/I/811SqGZgxrL._AC_SX522_.jpg',
      },
    ],
  },

  valor: {
    titulo: 'Lo popular que se volvió',
    texto:
      'En estas expansiones se implementaron cartas SP con la firma impresa de las seiyu. La demanda de coleccionistas disparo su precio en el mercado secundario. Precios de mercado de TCGplayer (referencia; revisar y actualizar):',
    cartas: [
      {
        nombre: 'Tsundere, Nino Nakano — SP firmada',
        valor: 'US$ 199.99',
        img: 'https://tcgplayer-cdn.tcgplayer.com/product/253951_in_1000x1000.jpg',
        enlace:
          'https://www.tcgplayer.com/product/253951/weiss-schwarz-the-quintessential-quintuplets-tsundere,-nino-nakano-sp?Language=English',
      },
      {
        nombre: 'Headphone Girl, Miku Nakano — SP firmada',
        valor: 'US$ 149.72',
        img: 'https://tcgplayer-cdn.tcgplayer.com/product/254011_in_1000x1000.jpg',
        enlace:
          'https://www.tcgplayer.com/product/254011/weiss-schwarz-the-quintessential-quintuplets-headphone-girl,-miku-nakano-sp?Language=English',
      },
      {
        nombre: 'Ribbon Girl, Yotsuba Nakano — SP firmada',
        valor: 'US$ 127.50',
        img: 'https://tcgplayer-cdn.tcgplayer.com/product/254042_in_1000x1000.jpg',
        enlace:
          'https://www.tcgplayer.com/product/254042/weiss-schwarz-the-quintessential-quintuplets-ribbon-girl,-yotsuba-nakano-sp?Language=English',
      },
      {
        nombre: 'Earnest Girl, Itsuki Nakano — SP firmada',
        valor: 'US$ 125.00',
        img: 'https://tcgplayer-cdn.tcgplayer.com/product/254104_in_1000x1000.jpg',
        enlace:
          'https://www.tcgplayer.com/product/254104/weiss-schwarz-the-quintessential-quintuplets-earnest-girl,-itsuki-nakano-sp?Language=English',
      },
    ],
  },
}
