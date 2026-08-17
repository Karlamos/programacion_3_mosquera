const curso    = "JavaScript";
const tutor    = "Brais Moure";
const duracion = 30;

// Variable simple
console.log(`Curso actual: ${curso}`);

// Expresión dentro de ${ }
console.log(`Detalles: ${curso.toUpperCase()} por ${tutor.toUpperCase()}`);
console.log(`Si dedicas una hora extra, completarás el curso en ${duracion + 1} horas`);
console.log(`¿Es un curso intensivo? ${duracion >= 20 ? "Sí" : "No"}`);

// String multilínea — sin caracteres especiales extra
const fichaCurso = `
  Curso:    ${curso}
  Instructor: ${tutor}
  Nivel:    ${duracion >= 20 ? "Avanzado" : "Básico"}
`;

console.log(fichaCurso);