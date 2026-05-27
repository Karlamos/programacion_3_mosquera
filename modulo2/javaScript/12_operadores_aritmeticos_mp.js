const precioCurso = 10;
const cuponDescuento = 3;

// Operaciones básicas
console.log(precioCurso + cuponDescuento);   // 13  — suma
console.log(precioCurso - cuponDescuento);   // 7   — resta
console.log(precioCurso * cuponDescuento);   // 30  — multiplicación
console.log(precioCurso / cuponDescuento);   // 3.3333...  — división (siempre devuelve decimal si no es exacta)
console.log(precioCurso % cuponDescuento);   // 1   — módulo (resto de la división entera)
console.log(precioCurso ** cuponDescuento);  // 1000 — potencia (ES2016) — equivale a Math.pow(precioCurso, cuponDescuento)