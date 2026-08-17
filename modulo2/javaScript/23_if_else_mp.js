const horaAcceso = 14; // hora en formato 24h

if (horaAcceso < 12) {
  console.log("Buenos días. El soporte en vivo del turno mañana está activo.");
} else {
  console.log("Buenas tardes. El soporte en vivo del turno tarde está activo.");
}
// Buenas tardes. El soporte en vivo del turno tarde está activo.



const puntajeExamen = 800;
const respuestasIncorrectas = 200;
const PUNTAJE_MINIMO = 600;
const RATIO_ERRORES_MAXIMO = 0.4; // los errores no deben superar el 40% del examen

const ratioErrores = respuestasIncorrectas / puntajeExamen;

if (puntajeExamen >= PUNTAJE_MINIMO && ratioErrores <= RATIO_ERRORES_MAXIMO) {
  console.log("Certificado aprobado de forma automática.");
  console.log(`Ratio de respuestas incorrectas: ${(ratioErrores * 100).toFixed(1)}%`);
} else {
  console.log("Certificado denegado.");
  console.log(`Puntaje mínimo requerido: ${PUNTAJE_MINIMO}`);
  console.log(`Ratio de errores actual: ${(ratioErrores * 100).toFixed(1)}% (máximo permitido: 40%)`);
}
// Certificado aprobado de forma automática.
// Ratio de respuestas incorrectas: 25.0%


const codigoActivacion = "Segura123";
const codigoCorrecto    = "Segura123";
let intentosCanje        = 0;
const MAX_INTENTOS_CUPON = 3;

if (codigoActivacion === codigoCorrecto) {
  console.log("Código de curso válido. Bienvenido al módulo Premium.");
} else {
  intentosCanje++;
  const intentosRestantes = MAX_INTENTOS_CUPON - intentosCanje;
  console.log(`Código incorrecto. Intentos de canje restantes: ${intentosRestantes}`);
}
// Código de curso válido. Bienvenido al módulo Premium.


const prompt = require("prompt-sync")();

const estudiante = prompt("Escribe tu nombre: ");
console.log(`Hola, ${estudiante}!`);

const cantidadCursos = prompt("Cantidad de cursos comprados: ");

const totalCursosComprados = parseFloat(cantidadCursos) || 0;

if (totalCursosComprados >= 10) {
    console.log('Acceso a comunidad VIP concedido');
} else {
    console.log('Sin acceso a comunidad VIP')
}


const claveCurso = prompt('Ingresa la contraseña del módulo: ');
const claveCorrecta = "hola";

if (claveCurso === claveCorrecta){
    console.log("Contraseña correcta. Desbloqueando lección.");
} else {
    console.log("Acceso denegado al módulo.")
}



const horaEstudio = prompt("Ingrese hora de estudio (formato 0-23): "); // hora en formato 24h

if (horaEstudio < 12) {
  console.log("Buenos días. Turno de mañana activo.");
} else {
  console.log("Buenas tardes. Turno de tarde activo.");
}