// Videos del sitio, cada uno con su fuente y su licencia.
//
// Los de Wikimedia Commons van CC BY-SA 4.0 y se enlazan a la version ya
// transcodificada que genera Commons: el original de la Macroplaza es 4K y
// pesa demasiado para una portada. El de la carne asada viene de Pexels.
// Cada entrada lleva su credito porque las dos licencias obligan a atribuir.
import { foto } from './imagenes.js'

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

  // Escaparate del platillo insignia. Este no es de Commons sino de Pexels,
  // que lo sirve ya comprimido a 720p. Es carne sobre carbon, no una toma
  // documentada en Monterrey: vale como ambiente, no como testimonio.
  carneAsada: {
    src: 'https://videos.pexels.com/video-files/4399560/4399560-hd_1280_720_24fps.mp4',
    poster: foto.parrillada,
    autor: 'Adrian Hoparda',
    licencia: 'Licencia Pexels',
    enlace: 'https://www.pexels.com/video/the-sizzling-sound-of-grilling-meat-4399560/',
    descripcion: 'Carne chisporroteando sobre un asador de carbón.',
  },
}
