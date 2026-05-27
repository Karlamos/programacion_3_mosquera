// index.js
const prompt = require("prompt-sync")();

console.log("=== Simulador de Horas de Estudio ===");

const horasLunesTexto = prompt("Horas dedicadas el lunes: ");
const horasMartesTexto = prompt("Horas dedicadas el martes: ");

const horasLunes = parseFloat(horasLunesTexto) || 0;
const horasMartes = parseFloat(horasMartesTexto) || 0;

const totalHoras    = horasLunes + horasMartes;
const diferencia    = horasLunes - horasMartes;
const proyeccion    = horasLunes * horasMartes; // Factor de rendimiento simulado
const promedioDiario = horasMartes !== 0 ? (horasLunes / horasMartes) : "indefinido";

console.log(`
Resultados de progreso para tus cursos:
  Total horas acumuladas:  ${totalHoras}
  Diferencia entre días:   ${diferencia}
  Factor de rendimiento:   ${proyeccion}
  Relación Lunes/Martes:   ${promedioDiario}
`);