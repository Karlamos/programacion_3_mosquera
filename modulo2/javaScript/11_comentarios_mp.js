// Comentario de una sola línea

/*
   Comentario
   de múltiples
   líneas
*/

/**
 * Comentario JSDoc — documentación de funciones
 * Equivalente a Javadoc o KDoc
 *
 * @param {string} curso - El nombre del curso a buscar
 * @returns {string} Un mensaje de confirmación de búsqueda
 */
function buscarCurso(curso) {
    return `Buscando disponibilidad para el curso: ${curso}`;
  }