console.log(Math.round(4.6));     // 5   — redondeo estándar
console.log(Math.floor(4.9));     // 4   — redondea hacia abajo
console.log(Math.ceil(4.1));      // 5   — redondea hacia arriba
console.log(Math.abs(-7));        // 7   — valor absoluto
console.log(Math.max(3, 8, 1));   // 8   — el mayor
console.log(Math.min(3, 8, 1));   // 1   — el menor
console.log(Math.sqrt(16));       // 4   — raíz cuadrada
console.log(Math.pow(2, 10));     // 1024 — potencia
console.log(Math.trunc(4.9));     // 4   — parte entera (sin redondear)
console.log(Math.random());       // número aleatorio entre 0 (incluido) y 1 (excluido)

// Número entero aleatorio entre min y max (ambos incluidos)
// Útil para sugerir un ID de curso aleatorio o un cupón de descuento
function cursoAleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(cursoAleatorioEntre(1, 6));  // elige un curso al azar del catálogo