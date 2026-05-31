// cursos.js
const prompt = require("prompt-sync")();

// Funciones puras para cada operación
const agregarHoras   = (a, b) => a + b;
const restarDescuento = (a, b) => a - b;
const calcularTotal   = (a, b) => a * b;
const dividirModulos  = (a, b) => {
  if (b === 0) return "Error: división por cero";
  return a / b;
};

// Función que agrupa todas las operaciones
function gestionarCurso(a, b, accion) {
  const acciones = { "+": agregarHoras, "-": restarDescuento, "*": calcularTotal, "/": dividirModulos };
  const fn = acciones[accion];
  if (!fn) return `Acción "${accion}" no reconocida`;
  return fn(a, b);
}

// Función para leer un número válido
function leerDato(mensaje) {
  while (true) {
    const entrada = prompt(mensaje);
    const numero  = parseFloat(entrada);
    if (!isNaN(numero)) return numero;
    console.log("Entrada no válida, intenta de nuevo.");
  }
}

// Programa principal
console.log("=== Gestión de Cursos Online ===");

const datoA    = leerDato("Primer valor (ej. precio o total horas): ");
const datoB    = leerDato("Segundo valor (ej. alumnos o módulos): ");
const accion   = prompt("Acción a realizar (+, -, *, /): ");
const resultado = gestionarCurso(datoA, datoB, accion);

console.log(`Resultado de la operación en el curso: ${resultado}`);