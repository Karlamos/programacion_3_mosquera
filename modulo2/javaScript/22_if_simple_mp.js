const precioCurso = 150;
const MINIMO_PARA_DESCUENTO = 100;
const PORCENTAJE_DESCUENTO = 0.10;

let totalFinal = precioCurso;

if (precioCurso >= MINIMO_PARA_DESCUENTO) {
  const descuento = precioCurso * PORCENTAJE_DESCUENTO;
  totalFinal = precioCurso - descuento;
  console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
}

console.log(`Total a pagar por el curso: $${totalFinal.toFixed(2)}`);
// Descuento aplicado: $15.00
// Total a pagar por el curso: $135.00




const cuposDisponibles = 3;
const UMBRAL_CUPOS_BAJOS = 5;

if (cuposDisponibles <= UMBRAL_CUPOS_BAJOS) {
  console.log(`⚠️ Pocos cupos: quedan ${cuposDisponibles} vacantes. ¡Inscríbete pronto!`);
}



const horasVisualizadas = 17;
const HORAS_REQUERIDAS = 18;

if (horasVisualizadas < HORAS_REQUERIDAS) {
  console.log("Certificado retenido: debes completar el mínimo de horas para registrar tu progreso.");
}

console.log("Validación de curso finalizada.");
// Certificado retenido: debes completar el mínimo de horas para registrar tu progreso.
// Validación de curso finalizada.