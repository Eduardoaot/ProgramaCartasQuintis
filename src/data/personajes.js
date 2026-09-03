// Seccion "Personajes" — responsable: Issac
// Datos verificados en https://go-toubun-no-hanayome.fandom.com/es
// Retratos: imagenes locales en public/videos/ (mas fiables que hotlinkear).
const RETRATOS = '/videos'

export const personajes = {
  intro:
    'Las cinco hermanas Nakano son quintillizas: mismo cumpleaños, misma cara y el mismo pelo rosa. Cada una tiene su color, su carácter y su forma de aparecer en las cartas.',
  fichas: [
    {
      id: 'ichika-nakano',
      nombre: 'Ichika Nakano',
      japones: '中野 一花',
      romaji: 'Nakano Ichika',
      orden: 'La mayor',
      color: 'Naranja',
      colorHex: '#e2b93b',
      alias: 'Mii-chan',
      retrato: `${RETRATOS}/IchikaNakano.png`,
      datos: [
        ['Cumpleaños', '5 de mayo'],
        ['Edad', '17 → 18 años'],
        ['Altura', '159 cm'],
        ['Sangre', 'Tipo A'],
        ['Ocupación', 'Estudiante y actriz'],
        ['Seiyū', 'Kana Hanazawa'],
      ],
      personalidad:
        'Ejerce de hermana mayor con un aire tranquilo y sereno, y le encanta tomar el pelo a los demás. Futaro se dio cuenta enseguida de que su sonrisa era fingida. Al principio es la más pesimista sobre que sus hermanas puedan aprobar.',
      pasion:
        'La actuación. Compagina el instituto con su trabajo como actriz de cine y televisión.',
      rasgo: 'El pelo más corto de las cinco hermanas.',
    },
    {
      id: 'nino-nakano',
      nombre: 'Nino Nakano',
      japones: '中野 二乃',
      romaji: 'Nakano Nino',
      orden: 'La segunda',
      color: 'Morado',
      colorHex: '#9564c7',
      alias: null,
      retrato: `${RETRATOS}/NinoNakano.png`,
      datos: [
        ['Cumpleaños', '5 de mayo'],
        ['Edad', '17 → 18 años'],
        ['Altura', '159 cm'],
        ['Sangre', 'Tipo A'],
        ['Ocupación', 'Estudiante y repostera'],
        ['Seiyū', 'Ayana Taketatsu'],
      ],
      personalidad:
        'Extrovertida y muy sociable —Yotsuba la llama «mariposa social»—, pero de lengua afilada y actitud rebelde: es la que más se opone a la llegada de Futaro. Bajo esa fachada fría es cariñosa y muy protectora con la familia.',
      pasion:
        'La cocina y la repostería. Hace de cocinera de la casa y trabaja en la Pastelería Revival.',
      rasgo: 'Dos lazos con forma de mariposa en el pelo largo.',
    },
    {
      id: 'miku-nakano',
      nombre: 'Miku Nakano',
      japones: '中野 三玖',
      romaji: 'Nakano Miku',
      orden: 'La tercera',
      color: 'Azul',
      colorHex: '#4c91d1',
      alias: null,
      retrato: `${RETRATOS}/MikuNakano.png`,
      datos: [
        ['Cumpleaños', '5 de mayo'],
        ['Edad', '17 → 18 años'],
        ['Altura', '159 cm'],
        ['Sangre', 'Tipo A'],
        ['Ocupación', 'Estudiante y panadera'],
        ['Seiyū', 'Miku Itō'],
      ],
      personalidad:
        'Callada y reservada, con tan poca confianza en sí misma que llega a menospreciarse. Aun así habla sin rodeos y no duda en plantar cara cuando hace falta. Es la primera en tomarse en serio las clases de Futaro.',
      pasion:
        'Los generales del período Sengoku, sobre todo Takeda Shingen: le influyen hasta en su forma de actuar. También se esfuerza por aprender a cocinar.',
      rasgo: 'Sus auriculares, que lleva siempre al cuello.',
    },
    {
      id: 'yotsuba-nakano',
      nombre: 'Yotsuba Nakano',
      japones: '中野 四葉',
      romaji: 'Nakano Yotsuba',
      orden: 'La cuarta',
      color: 'Verde',
      colorHex: '#55a96a',
      alias: 'La Novia · La chica de la fotografía',
      retrato: `${RETRATOS}/YotsubaNakano.png`,
      datos: [
        ['Cumpleaños', '5 de mayo'],
        ['Edad', '17 → 18 años'],
        ['Altura', '159 cm'],
        ['Sangre', 'Tipo A'],
        ['Ocupación', 'Estudiante'],
        ['Seiyū', 'Ayane Sakura'],
      ],
      personalidad:
        'Activa, alegre y ruidosa; es incapaz de decir que no a quien necesita ayuda. Por dentro arrastra un fuerte complejo de inferioridad hacia sus hermanas y hacia sus propias capacidades.',
      pasion:
        'Ayudar a los demás y el deporte: echa una mano en todos los clubes del instituto.',
      rasgo: 'Un gran lazo verde colocado como orejas de conejo.',
    },
    {
      id: 'itsuki-nakano',
      nombre: 'Itsuki Nakano',
      japones: '中野 五月',
      romaji: 'Nakano Itsuki',
      orden: 'La menor',
      color: 'Rojo',
      colorHex: '#d94f68',
      alias: 'May',
      retrato: `${RETRATOS}/ItsukiNakano.png`,
      datos: [
        ['Cumpleaños', '6 de mayo'],
        ['Edad', '17 → 18 años'],
        ['Altura', '159 cm'],
        ['Sangre', 'Tipo A'],
        ['Ocupación', 'Estudiante y maestra'],
        ['Seiyū', 'Inori Minase'],
      ],
      personalidad:
        'Formal y de buenos modales: madruga, nunca ha faltado a clase y siempre habla con educación. Es rencorosa y le cuesta ser sincera consigo misma, así que suele pelear sus batallas sola.',
      pasion:
        'La docencia, siguiendo el recuerdo de su madre. Y comer: su apetito es legendario entre las hermanas.',
      rasgo: 'Dos pasadores con forma de estrella en el flequillo.',
    },
    {
      id: 'futaro-uesugi',
      nombre: 'Futaro Uesugi',
      japones: '上杉 風太郎',
      romaji: 'Uesugi Fūtarō',
      orden: 'El tutor',
      color: 'Gris',
      colorHex: '#6d7788',
      alias: 'Kintarou',
      retrato: `${RETRATOS}/FutaroUesugi.jpg`,
      datos: [
        ['Cumpleaños', '15 de abril'],
        ['Edad', '17 → 18 años'],
        ['Altura', '178 cm'],
        ['Ojos', 'Castaño claro'],
        ['Ocupación', 'Estudiante y tutor'],
        ['Seiyū', 'Yoshitsugu Matsuoka'],
      ],
      personalidad:
        'Vive de forma austera y prefiere la soledad; evita relacionarse y tiene una expresión permanentemente seria. Es directo y no se anda con rodeos, algo que sus alumnas notan desde el primer día.',
      pasion:
        'Estudiar. Es el número uno de su promoción y acepta el trabajo de tutor privado para ayudar en casa.',
      rasgo: 'En el TCG no compite por ser novia: es la carta de protagonista.',
    },
  ],
}
