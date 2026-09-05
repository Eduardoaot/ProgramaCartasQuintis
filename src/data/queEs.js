// Seccion "Que es Monterrey" — la identidad de la ciudad, quien la fundo,
// las figuras que salieron de ella y el contexto que la explica.
import { foto } from './imagenes.js'

export const queEs = {
  intro:
    'La ciudad que da nombre a todo esto: una capital industrial encajada entre montañas, con 430 años de historia a cuestas.',
  pestana: 'La ciudad',
  tituloSinopsis: 'La Sultana del Norte',
  sinopsis:
    'Monterrey es la capital de Nuevo León y el centro de la tercera zona metropolitana más grande de México. Fundada en 1596 en un valle semiárido al pie de la Sierra Madre Oriental, pasó de ser un puesto fronterizo olvidado a convertirse en el mayor polo industrial y corporativo del norte del país. Hoy su área metropolitana reúne a más de cinco millones de personas repartidas en una docena de municipios que funcionan como una sola ciudad.',
  fechaCreacion: '1596 — hoy',
  autor: {
    profesion: 'Fundador',
    nombre: 'Diego de Montemayor',
    descripcion:
      'Militar y explorador español. El 20 de septiembre de 1596 refundó el asentamiento con el nombre de Ciudad Metropolitana de Nuestra Señora de Monterrey, en honor al virrey conde de Monterrey.',
    imagen: foto.montemayorMural,
    informacion: 'Fundación definitiva: 20 de septiembre de 1596 · Nuevo Reino de León',
  },
  tituloReconocimientos: 'La ciudad en cifras',
  reconocimientos: [
    { valor: '5.3 M', etiqueta: 'habitantes en el área metro' },
    { valor: '1596', etiqueta: 'año de la fundación definitiva' },
    { valor: '540 m', etiqueta: 'de altitud sobre el nivel del mar' },
    { valor: '3.ª', etiqueta: 'zona metropolitana de México' },
  ],
  tituloFiguras: 'Figuras regiomontanas',
  complemento: 'Quiénes salieron de aquí',
  figuras: [
    {
      nombre: 'Alfonso Reyes',
      oficio: 'Escritor',
      texto:
        'Ensayista, poeta y diplomático. La Capilla Alfonsina y una de las avenidas principales de la ciudad llevan su nombre.',
      imagen: foto.alfonsoReyes,
      hover: 'blue',
    },
    {
      nombre: 'Fray Servando Teresa de Mier',
      oficio: 'Independencia',
      texto:
        'Fraile dominico nacido en Monterrey en 1763. Su sermón de 1794 le costó el destierro y lo volvió una de las voces intelectuales de la Independencia.',
      imagen: foto.frayServando,
      hover: 'purple',
    },
    {
      nombre: 'Eugenio Garza Sada',
      oficio: 'Industrial',
      texto:
        'Empresario clave del grupo cervecero regiomontano e impulsor de la fundación del Tecnológico de Monterrey en 1943.',
      imagen: foto.garzaSada,
      hover: 'yellow',
    },
    {
      nombre: 'Celso Piña',
      oficio: 'Música',
      texto:
        '«El Rebelde del Acordeón». Desde la colonia Independencia mezcló la cumbia colombiana con el sonido regio y la llevó al mundo.',
      imagen: foto.celsoPina,
      hover: 'green',
    },
    {
      nombre: 'Gloria Trevi',
      oficio: 'Música',
      texto:
        'Nacida en Monterrey en 1968, una de las artistas mexicanas con mayor proyección internacional en pop y rock.',
      imagen: foto.gloriaTrevi,
      hover: 'red',
    },
    {
      nombre: 'El Gran Silencio',
      oficio: 'Banda',
      texto:
        'Grupo formado en la colonia Independencia y símbolo de la Avanzada Regia, el movimiento musical que puso a Monterrey en el mapa en los noventa.',
      imagen: foto.granSilencio,
      hover: 'slate',
    },
  ],
  tituloContexto: 'Contexto',
  bloques: [
    {
      titulo: 'Capital de Nuevo León',
      texto:
        'Sede de los poderes del estado y municipio más poblado de la entidad, con poco más de 1.1 millones de habitantes.',
    },
    {
      titulo: 'Motor industrial',
      texto:
        'Cuna de la Cervecería Cuauhtémoc (1890) y de la Fundidora de Fierro y Acero (1900). Hoy concentra la mayor densidad de corporativos del país.',
    },
    {
      titulo: 'Entre montañas',
      texto:
        'La cierran el Cerro de la Silla, las Mitras, el Topo Chico y la Sierra Madre Oriental, dentro del Parque Nacional Cumbres de Monterrey.',
    },
  ],
}
