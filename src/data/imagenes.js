// Fotografias de Wikimedia Commons (dominio publico o licencias libres).
// Se centralizan aqui porque varias secciones reutilizan la misma imagen.
//
// Se guarda la RUTA del archivo dentro de Commons, no la URL del original.
// Los originales son de varios megas cada uno, hay panoramicas de 4000 px, y
// bajarlos enteros para pintarlos a 400 px de ancho era lo que ahogaba la
// pagina. `mini()` arma la URL de la miniatura que sirve el propio Commons,
// que pesa una fraccion y se ve igual al tamano en que se muestra.
const C = 'https://upload.wikimedia.org/wikipedia/commons'

/** Anchos que usamos, segun donde se pinte la foto. */
export const ANCHO = {
  fondo: 1600, // portada y fondos a pantalla completa
  grande: 1280, // carrusel y escaparates
  tarjeta: 640, // fotos de tarjeta
  miniatura: 320, // listas y agenda
}

/** Ruta de cada archivo dentro de Commons: "d/de/Nombre.jpg". */
const archivos = {
  // Panoramicas y simbolos
  panoramica: 'd/de/View_of_Monterrey_%282015%29.jpg',
  cerroSilla: 'f/f7/CerroDeLaSilla201806p1.jpg',
  cerroSillaVertical: '6/61/Cerro_de_la_Silla_Mty.jpg',
  cerroSillaJuarez: '1/14/Vista_del_Cerro_de_la_Silla._2.jpg',
  mitras: '2/20/Cerro-mitras-desde-nido-aguiluchos.jpg',
  topoChico: 'a/ad/Topo_chico_desde_mitras.jpg',

  // Centro de Monterrey
  macroplaza: '0/03/Macroplaza_de_Monterrey_y_alrededores_-_6.jpg',
  faroComercio: 'a/a9/Faro_del_Comercio_en_Monterrey.jpg',
  catedral: '0/05/Monterrey_-_Catedral_de_la_Inmaculada_Concepci%C3%B3n_-_4.jpg',
  marco: '8/80/Fachada_MARCO.jpg',
  museoHistoria: '9/99/Museo_Historia_Mexicana_Monterrey.jpg',
  barrioAntiguo: '6/69/Barrio_Antiguo_de_Monterrey_en_2017.jpg',
  barrioAntiguoNoche: '4/4d/Saturday_night_in_Barrio_Antiguo_Monterrey.jpg',
  centro: '4/4b/Centro_de_Monterrey_07032021.jpg',

  // Fundidora y Santa Lucia
  fundidora: '0/07/Parque_Fundidora%2C_Monterrey1.jpg',
  horno3: '7/7b/Museo_del_acero.jpg',
  santaLucia: 'e/e8/Paseo_Santa_Luc%C3%ADa_-_Santa_Luc%C3%ADa_Riverwalk.jpg',

  // Sierra y naturaleza
  huasteca: 'e/e7/Huasteca_Canyon%2C_Nuevo_Leon._%285663887022%29.jpg',
  colaDeCaballo: 'f/f8/Cola_de_Caballo.JPG',
  grutasGarcia: '0/0c/Grutas_de_Garc%C3%ADa.jpg',
  presaLaBoca: '1/17/Presa_La_Boca%2C_Santiago%2C_Nuevo_Le%C3%B3n%2C_M%C3%A9xico_-_3.jpg',
  chipinque: '7/72/Chipinque%2C_San_Pedro%2C_M%C3%A9xico.jpg',
  laPastora: 'b/b7/Rio_la_Silla_en_el_Bosque_la_Pastora.png',

  // Historia e industria
  montemayor: '8/80/Diego_de_Montemayor.jpg',
  cerveceria1890: '6/6c/Cervecer%C3%ADa_Cuauhtemoc_Monterrey_1890.jpg',
  tecDeMonterrey: 'b/bf/Hub_de_Innovaci%C3%B3n_y_Emprendimiento_-_Campus_Monterrey_%28ITESM%29.jpg',
  metrorrey: 'e/e6/CRRC_MM-24_Metrorrey.jpg',
  puenteUnidad: 'a/ac/Puente_Atirantado.jpg',
  estadioBBVA: 'e/e1/Estadio_BBVA_Bancomer.jpg',
  aeropuerto: '0/0d/Aeropuerto_Internacional_de_Monterrey.jpg',

  // Personas
  alfonsoReyes: '5/5c/Alfonso_Reyes_Ochoa_%28cropped%29.jpg',
  frayServando: '5/58/Frayservando.jpg',
  garzaSada: 'c/cb/Eugenio_Garza_Sada_%28cropped%29.jpg',
  celsoPina: 'b/b1/MX_TV_A%C3%91O_DUAL_MEXICO-ALEMANIA_CELSO_PI%C3%91A_%2835052491012%29.jpg',
  gloriaTrevi: '3/30/Gloria_Trevi_Latin_Grammys_2021.jpg',
  granSilencio: '4/4c/El_Gran_Silencio_2023.jpg',

  // Municipios
  sanPedro: '6/64/DelValleCity.jpg',
  sanNicolas: '6/65/Avenida_Universidad_-_San_Nicol%C3%A1s_de_los_Garza.JPG',
  apodaca: 'a/a7/SAN_FRANCISCO_DE_ASIS.jpg',
  escobedo: '2/24/EscobedoNL.jpg',
  santaCatarina: '5/53/Panor%C3%A1mica_de_Santa_Catarina.jpg',
  garcia: 'd/d7/Capilla_de_San_El%C3%ADas.jpg',
  santiago: 'd/d8/Santiago_Ap%C3%B3stol_desde_el_Mirador.jpg',
  cadereyta: 'e/ed/Plaza_principal_de_Cadereyta_Jim%C3%A9nez_con_estatua_de_Miguel_Hidalgo.jpg',
  salinasVictoria: 'b/bc/Templo_de_Nuestra_Se%C3%B1ora_de_Guadalupe_en_Salinas_Victoria.jpg',
  pesqueria: '8/8e/Panoramic_view_of_town_hall_Pesquer%C3%ADa.jpg',
  zuazua: 'f/ff/PALACIO_MUNICIPAL_DE_GRAL._ZUAZUA_NL.jpg',
  cienegaFlores: '4/4e/Parroquia_de_San_Eloy.jpg',
  elCarmen: 'a/a4/Palacio_Municipal_de_El_Carmen.jpg',

  // Cocina regia
  cabrito: 'b/b9/Cabrito_-_Monterrey.JPG',
  cabritos: 'a/af/Cabritos_in_Monterrey.jpg',
  machacado: '1/1a/Machacado_con_huevo.jpg',
  machaca: '9/96/Huevo_con_machaca.jpg',
  asadoPuerco: '7/7d/PAGA_asadodepuerco_02.jpg',
  discada: 'f/f1/Discada_1.jpg',
  frijolesCharros: '3/34/Frijoles_charros_10293.jpg',
  carneAsada: '7/70/Mexican_BBQ_gas_tank_grill.jpg',
  glorias: 'a/a4/Bolsa_de_Glorias_de_Linares.jpg',
  mercadoJuarez: '9/95/Mercado_Ju%C3%A1rez_de_Monterrey_-_2.jpg',
  mercadoJuarez2: '2/24/Mercado_Ju%C3%A1rez_de_Monterrey_-_3.jpg',
  carneAsadaPlato: 'd/d0/Carne_asada_%284472586086%29.jpg',
  // Vertical, para el escaparate del platillo insignia
  carneAsadaVertical: '6/6a/Ima20180329_153312.jpg',
  parrillada: '8/85/Parrillada_Carne_asada.jpg',
  // La tortilla de harina es de todo el norte; estas fotos son de Sonora.
  tortillasHarina: 'c/cd/Se%C3%B1ora_haciendo_tortillas_de_harina_01.jpg',
  tortillasHarina2: 'f/f3/Tortillas_de_harina_en_proceso_01.jpg',

  // Bustamante: Pueblo Magico a 107 km al noroeste
  bustamante: 'd/dd/Bustamante_-_panoramio_-_Tereso_Hern%C3%A1ndez.jpg',
  grutasBustamante: '7/7b/Grutas_de_Bustamante_1.jpg',
}

// Fotos que no estan en Commons y se enlazan tal cual.
const externas = {
  montemayorMural: 'https://diariojudio.com/wp-content/uploads/2012/07/diego-de-montemayor.jpg',
}

/**
 * Fotos cuyo original ya es mas estrecho que nuestros anchos: pedirle a
 * Commons una miniatura de 1280 px las AGRANDA, asi que pesarian mas y se
 * verian peor. Comprobado una a una contra Commons; estas van tal cual.
 */
const yaPequenas = new Set([
  'alfonsoReyes',
  'asadoPuerco',
  'cerroSillaVertical',
  'cerveceria1890',
  'discada',
  'faroComercio',
  'frijolesCharros',
  'garzaSada',
  'gloriaTrevi',
  'grutasGarcia',
  'horno3',
  'machacado',
  'marco',
  'parrillada',
  'santaCatarina',
])

/**
 * URL de la miniatura de Commons al ancho pedido.
 * Si la clave no existe o apunta fuera de Commons, devuelve lo que haya.
 */
export function mini(clave, ancho = ANCHO.grande) {
  const ruta = archivos[clave]
  if (!ruta) return externas[clave] ?? ''

  // Las que ya son pequenas solo se encogen, nunca se piden mas grandes
  if (yaPequenas.has(clave) && ancho > ANCHO.tarjeta) return `${C}/${ruta}`

  const nombre = ruta.slice(ruta.lastIndexOf('/') + 1)
  return `${C}/thumb/${ruta}/${ancho}px-${nombre}`
}

/** Las de siempre, ya en miniatura grande: sirve para casi todo. */
export const foto = {
  ...Object.fromEntries(Object.keys(archivos).map((clave) => [clave, mini(clave)])),
  ...externas,
}
