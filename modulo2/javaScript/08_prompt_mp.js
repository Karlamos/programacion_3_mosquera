const prompt = require("prompt-sync")();

const curso = prompt("Introduce el nombre del curso: ");
console.log(`Buscando el curso: ${curso}!`);

const duracionTexto = prompt("Introduce la duración en horas: ");
const duracion = parseInt(duracionTexto, 10);

if (isNaN(duracion)) {
  console.log("Eso no es un número válido.");
} else {
  console.log(`El curso dura ${duracion} horas.`);
}