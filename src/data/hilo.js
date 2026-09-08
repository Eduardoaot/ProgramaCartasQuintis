// Seccion "El hilo de las palabras".
//
// El hilo arranca con las palabras del diccionario de la guia y sigue con lo
// que aporte quien visite la pagina. Las aportaciones se guardan en su propio
// navegador (localStorage): no hay servidor detras, asi que cada persona ve
// su hilo, no el de los demas. Conviene decirlo en pantalla y no fingir que
// es una comunidad de verdad.
import { tutorial } from './tutorial.js'

export const hilo = {
  intro:
    'Cada palabra de aquí arrastra una historia. Estas son las que ya venían en la guía; abajo puedes añadir la tuya con lo que significa para ti.',

  aviso:
    'Lo que escribas se guarda solo en este navegador. Nadie más lo ve, y se borra si limpias los datos del sitio.',

  // Semilla: las mismas palabras de la guia, marcadas como "del diccionario".
  semilla: tutorial.regionalismos.palabras.map((p) => ({
    id: `base-${p.k}`,
    palabra: p.k,
    significado: p.d,
    autor: 'Del diccionario regio',
    origen: 'base',
  })),

  ejemplos: [
    { palabra: 'Chido', ayuda: '¿Qué significa para ti?' },
    { palabra: 'Apapachar', ayuda: '¿Cuándo la usas?' },
    { palabra: 'Camellón', ayuda: '¿Dónde la escuchaste?' },
  ],
}
