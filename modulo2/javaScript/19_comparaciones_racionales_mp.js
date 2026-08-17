const modulosCompletados = 10;
const totalModulos = 20;

console.log(modulosCompletados > totalModulos);    // false — mayor que
console.log(modulosCompletados < totalModulos);    // true  — menor que
console.log(modulosCompletados >= 10);             // true  — mayor o igual que
console.log(modulosCompletados <= 9);              // false — menor o igual que

// Con strings — se compara por orden Unicode (lexicográfico)
console.log("angular" < "backend");      // true
console.log("CSS" < "angular");          // true  ← mayúsculas tienen código menor que minúsculas
console.log("10" > "9");                 // false ← compara como string, no como número
console.log(10 > 9);                     // true  ← correcto: comparando como números

// Comparación mixta (número vs string) — JS convierte a número
console.log("10" > 9);                   // true  ← "10" se convierte a 10
console.log("python" > 1);               // false ← "python" se convierte a NaN, y NaN devuelve false