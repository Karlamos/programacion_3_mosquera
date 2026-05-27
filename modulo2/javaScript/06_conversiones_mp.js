// Conversión explícita — recomendada
const alumnosTexto = "42";
const totalAlumnos = Number(alumnosTexto);       // 42
const modulosVistos = parseInt("3.14", 10);      // 3   (segundo argumento: base 10)
const notaPromedio = parseFloat("3.14");         // 3.14
const idCursoTexto = String(42);                 // "42"
const cupoAgotado = Boolean(0);                  // false

console.log(totalAlumnos);   // 42
console.log(modulosVistos);  // 3
console.log(notaPromedio);   // 3.14
console.log(idCursoTexto);   // "42"
console.log(cupoAgotado);    // false

// Conversión implícita (coerción) — la que hay que conocer para evitar sorpresas
console.log("5" + 3);    // "53"  ← + con string concatena
console.log("5" - 3);    // 2     ← - convierte a número
console.log("5" * "2");  // 10    ← * convierte a número
console.log(true + 1);   // 2     ← true es 1
console.log(false + 1);  // 1     ← false es 0

// Valores "falsy" — se comportan como false en condiciones
// false, 0, "", null, undefined, NaN

// Number() con valores no numéricos
console.log(Number("JavaScript"));  // NaN (Not a Number)
console.log(Number(""));            // 0
console.log(Number(null));          // 0
console.log(Number(undefined));     // NaN

// isNaN — verificar si un valor no es número
console.log(isNaN(Number("JavaScript")));  // true
console.log(isNaN(42));                    // false