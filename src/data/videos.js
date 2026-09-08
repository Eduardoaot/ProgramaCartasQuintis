// Videos de Wikimedia Commons (todos CC BY-SA 4.0).
//
// Se enlazan las versiones ya transcodificadas a 480p que genera Commons: el
// original de la Macroplaza son 4K y pesa demasiado para una portada.
// Cada entrada lleva su credito porque la licencia obliga a atribuir.
const T = 'https://upload.wikimedia.org/wikipedia/commons/transcoded'
const C = 'https://upload.wikimedia.org/wikipedia/commons'

export const video = {
  // Vuelo de dron sobre la Macroplaza y el centro. Portada del sitio.
  macroplaza: {
    src: `${T}/e/ee/Macroplaza_de_Monterrey_y_alrededores.webm/Macroplaza_de_Monterrey_y_alrededores.webm.480p.vp9.webm`,
    poster: `${C}/thumb/e/ee/Macroplaza_de_Monterrey_y_alrededores.webm/1280px--Macroplaza_de_Monterrey_y_alrededores.webm.jpg`,
    autor: 'ProtoplasmaKid',
    licencia: 'CC BY-SA 4.0',
    enlace: 'https://commons.wikimedia.org/wiki/File:Macroplaza_de_Monterrey_y_alrededores.webm',
    descripcion: 'La Macroplaza de Monterrey y sus alrededores, vistos desde el aire.',
  },

  // Vista de la ciudad desde el mirador del Obispado. Vertical.
  obispado: {
    src: `${T}/d/dd/Vista_desde_el_Mirador_del_Museo_Regional_de_Nuevo_Le%C3%B3n_el_Obispado.webm/Vista_desde_el_Mirador_del_Museo_Regional_de_Nuevo_Le%C3%B3n_el_Obispado.webm.480p.vp9.webm`,
    autor: 'Christian Cariño',
    licencia: 'CC BY-SA 4.0',
    enlace:
      'https://commons.wikimedia.org/wiki/File:Vista_desde_el_Mirador_del_Museo_Regional_de_Nuevo_Le%C3%B3n_el_Obispado.webm',
    descripcion: 'La ciudad desde el mirador del Obispado.',
  },

  // Carne sobre las brasas a camara lenta. Escaparate del platillo insignia.
  carneAsada: {
    src: `${T}/9/96/Carnita_asada.webm/Carnita_asada.webm.480p.vp9.webm`,
    poster: `${C}/thumb/9/96/Carnita_asada.webm/1280px--Carnita_asada.webm.jpg`,
    autor: 'ProtoplasmaKid',
    licencia: 'CC BY-SA 4.0',
    enlace: 'https://commons.wikimedia.org/wiki/File:Carnita_asada.webm',
    descripcion: 'Carne asándose sobre las brasas, a cámara lenta.',
  },
}
