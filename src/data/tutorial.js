// Seccion "Tutorial: cómo jugar" — responsable: YO (reglas)
// Tipos de carta en detalle + reglas generales + cómo ganar.
export const tutorial = {
  
  intro:
    'Guía paso a paso para tu primera partida: qué hace cada tipo de carta, el flujo del turno y la condición de victoria',
  tiposCarta: [
    {
      nombre: 'Carta de Episodio',
      texto:
        'Representa una escena del manga/anime. Se juega, aplica su efecto y normalmente va al descarte. Sirve para robar, mover personajes o frenar al rival.',
    },
    {
      nombre: 'Carta de Personaje',
      texto:
        'Una hermana Nakano. Se paga su coste y se coloca en la zona de personajes. Tiene nivel (cuánto cuesta y cuánto aporta) y afinidad (bonus al combinarla con episodios de esa hermana).',
    },
    {
      nombre: 'Carta de Héroe (Futaro)',
      texto:
        'Se coloca una sola vez. No cuenta como novia; da acciones extra o reduce costes mientras esté en juego.',
    },
    {
      nombre: 'Cartas Itsutsugo / Especiales',
      texto:
        'Cambian una regla concreta durante uno o varios turnos. Suelen ser las rarezas más altas del set.',
    },
  ],
  reglas: [
    'Cada jugador arma un mazo temático y roba una mano inicial.',
    'En tu turno: roba 1 carta, gana recursos, y juega cartas de personaje y episodio.',
    'Combina una hermana con episodios de su misma afinidad para subir su relación.',
    'Cuando una hermana alcanza el umbral de relación, pasa a tu zona de novias.',
    'Solo puedes tener una carta de héroe activa a la vez.',
    'El turno termina al pasar; el rival juega con las mismas reglas.',
  ],
  comoGanar:
    'Ganas en el momento en que tu tercera hermana entra a la zona de novias. Si ambos llegan en el mismo turno, desempata quien tenga mayor relación acumulada.',
}
