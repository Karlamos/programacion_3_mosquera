// === DECLARACIÓN DE VARIABLES (Faltaba esto) ===
const idCurso = 5;          // Tipo: Número
const progreso = 0;          // Tipo: Número (o false en comparación débil)
const cuponAplicado = null;  // Tipo: Null
const codigoDescuento = "";  // Tipo: String vacío (falsy)

// === Igualdad estricta (recomendada SIEMPRE) ===
// Compara valor Y tipo — no hace conversión implícita
console.log(idCurso === 5);             // true  — mismo ID, mismo tipo
console.log(idCurso === "5");           // false — mismo valor, DISTINTO tipo
console.log(progreso === false);        // false — distinto tipo
console.log(cuponAplicado === undefined); // false — distintos tipos

// == Igualdad débil (con coerción de tipos — EVITAR) ===
// Convierte ambos valores al mismo tipo antes de comparar
console.log(idCurso == "5");            // true  ← peligroso: convierte "5" a número
console.log(progreso == false);         // true  ← peligroso: false se convierte a 0
console.log(cuponAplicado == undefined); // true ← excepción especial del lenguaje
console.log(codigoDescuento == false);   // true  ← ambos se convierten a 0

// !== Desigualdad estricta (recomendada) ===
console.log(idCurso !== "5");           // true  — diferente tipo
console.log(idCurso !== 5);             // false

// != Desigualdad débil (EVITAR por las mismas razones que ==) ===
console.log(idCurso != "5");            // false ← peligroso    