const prompt = require("prompt-sync")();

const estudiante = prompt("Escribe tu nombre: ");
console.log(`Hola, ${estudiante}!`);


const horasEstudioSemanal = 28; // horas acumuladas

if (horasEstudioSemanal >= 35) {
  console.log("🌡️ Nivel Experto. Ritmo de estudio excelente.");
} else if (horasEstudioSemanal >= 25) {
  console.log("☀️ Nivel Avanzado. Condiciones ideales para dominar la materia.");
} else if (horasEstudioSemanal >= 15) {
  console.log("🌤️ Nivel Intermedio. Progreso constante, sigue así.");
} else if (horasEstudioSemanal >= 5) {
  console.log("🧥 Nivel Principiante. Dedicación baja, intenta conectar más días.");
} else {
  console.log("❄️ Alerta de Inactividad. Riesgo de perder el hilo del curso.");
}
// ☀️ Nivel Avanzado. Condiciones ideales para dominar la materia.


const pesoProyectoMb = 4.5;
const TARIFA_LIGERO   = 2.50;
const TARIFA_MEDIANO  = 5.00;
const TARIFA_PESADO   = 9.00;
const TARIFA_ESPECIAL = 15.00;

let costoAlmacenamiento;
let categoriaProyecto;

if (pesoProyectoMb <= 1) {
  costoAlmacenamiento = TARIFA_LIGERO;
  categoriaProyecto   = "Ligero (Ejercicios simples)";
} else if (pesoProyectoMb <= 5) {
  costoAlmacenamiento = TARIFA_MEDIANO;
  categoriaProyecto   = "Mediano (Proyecto integrador)";
} else if (pesoProyectoMb <= 20) {
  costoAlmacenamiento = TARIFA_PESADO;
  categoriaProyecto   = "Pesado (Full-stack / Base de datos)";
} else {
  costoAlmacenamiento = TARIFA_ESPECIAL;
  categoriaProyecto   = "Especial — Requiere revisión del tutor";
}

console.log(`Proyecto: ${pesoProyectoMb} MB`);
console.log(`Categoría: ${categoriaProyecto}`);
console.log(`Costo de subida en la nube: $${costoAlmacenamiento.toFixed(2)}`);
// Proyecto: 4.5 MB
// Categoría: Mediano (Proyecto integrador)
// Costo de subida en la nube: $5.00



const notaFinal = 78; // sobre 100

let calificacionLetra;
let aprobado;

if (notaFinal >= 90) {
  calificacionLetra = "A — Excelente";
  aprobado          = true;
} else if (notaFinal >= 80) {
  calificacionLetra = "B — Muy bueno";
  aprobado          = true;
} else if (notaFinal >= 70) {
  calificacionLetra = "C — Bueno";
  aprobado          = true;
} else if (notaFinal >= 60) {
  calificacionLetra = "D — Suficiente";
  aprobado          = true;
} else {
  calificacionLetra = "F — Reprobado";
  aprobado          = false;
}

console.log(`Nota: ${notaFinal}/100`);
console.log(`Calificación: ${calificacionLetra}`);
console.log(`Estado: ${aprobado ? "Aprobado ✅" : "Reprobado ❌"}`);
// Nota: 78/100
// Calificación: C — Bueno
// Estado: Aprobado ✅




const leccionesVistas = prompt('Ingrese cantidad de lecciones completadas: ');

if (leccionesVistas <= 100) {
  console.log("Progreso inicial");
} else if (leccionesVistas <= 300) {
  console.log("Progreso intermedio");
} else {
  console.log("Progreso avanzado");
}