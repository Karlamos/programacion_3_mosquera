// División por cero
console.log(10 / 0);    // Infinity  — JS no lanza error, devuelve Infinity
console.log(-10 / 0);   // -Infinity
console.log(0 / 0);     // NaN       — caso indeterminado

// Operaciones con NaN
console.log(NaN + 5);   // NaN  — cualquier operación con NaN produce NaN
console.log(NaN === NaN); // false  — NaN no es igual a nada, ni a sí mismo

// Precisión decimal — punto crítico en JavaScript
// Ejemplo con horas de estudio acumuladas o barras de progreso
console.log(0.1 + 0.2);  // 0.30000000000000004 ← comportamiento estándar IEEE 754
// Solución para comparar decimales de progreso:
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);  // true

// Redondeo de calificaciones o precios con toFixed (devuelve string)
const precioFinal = (0.1 + 0.2).toFixed(2);
console.log(precioFinal);         // "0.30"
console.log(typeof precioFinal);  // "string" — recuerda convertir si necesitas número