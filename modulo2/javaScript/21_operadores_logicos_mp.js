const prompt = require('prompt-sync')();

// Valores FALSY — los únicos 6 que existen en JavaScript
false
0
""          // string vacío
null
undefined
NaN

// Todo lo demás es TRUTHY — incluyendo estos casos que sorprenden:
"false"     // truthy — string no vacío (aunque diga "false")
"0"         // truthy — string no vacío
//[]        // truthy — array vacío
{}          // truthy — objeto vacío
-1          // truthy — número distinto de 0

// Verificar con Boolean()
console.log(Boolean(0));               // false
console.log(Boolean(""));              // false
console.log(Boolean("false"));         // true  ← ojo, string no vacío
console.log(Boolean([]));              // true  ← array vacío es truthy


// === OPERADOR AND (&&) ===

// Uso booleano clásico
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false

// Cortocircuito — devuelve el primer valor falsy o el último si todos son truthy
console.log(1 && 2);          // 2     ← ambos truthy, devuelve el último
console.log(0 && 2);          // 0     ← 0 es falsy, se detiene y devuelve 0
console.log("" && "JavaScript"); // ""    ← "" es falsy, se detiene
console.log("a" && "b");      // "b"   ← ambos truthy, devuelve el último

// Uso práctico: ejecutar algo solo si una condición se cumple
const estudiante = { nombre: "Karla", premium: true };

estudiante.premium && console.log("Acceso concedido a los cursos Premium");
// equivale a: if (estudiante.premium) { console.log(...) }

// Acceso seguro a propiedades anidadas
const tutor = estudiante.cursoActual && estudiante.cursoActual.tutor;
console.log(tutor);
// Si estudiante.cursoActual no existe (falsy), tutor = undefined (no lanza error)


// === OPERADOR OR (||) ===

// Uso booleano clásico
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false

// Cortocircuito — devuelve el primer valor truthy
console.log(1 || 2);          // 1     ← 1 es truthy, se detiene
console.log(0 || 2);          // 2     ← 0 es falsy, sigue; 2 es truthy
console.log(0 || "");         // ""    ← ambos falsy, devuelve el último
console.log("" || "default"); // "default" ← "" es falsy, devuelve "default"

// Uso práctico: valor por defecto (patrón clásico pre-ES2020)
const cursoBuscado = prompt("Introduce el curso:") || "JavaScript desde Cero";
// Si prompt devuelve "" o null, cursoBuscado = "JavaScript desde Cero"

function inscribirCurso(nombreCurso) {
  const cursoFinal = nombreCurso || "Curso de Bienvenida";
  console.log(`Te has inscrito a: ${cursoFinal}`);
}

inscribirCurso("Python Avanzado"); // Te has inscrito a: Python Avanzado
inscribirCurso("");                // Te has inscrito a: Curso de Bienvenida  (string vacío es falsy)
inscribirCurso(null);              // Te has inscrito a: Curso de Bienvenida


// === OPERADOR NOT (!) Y DOBLE NEGACIÓN (!!) ===

console.log(!true);     // false
console.log(!false);    // true
console.log(!0);        // true   ← 0 es falsy, su negación es true
console.log(!1);        // false  ← 1 es truthy
console.log(!"");       // true   ← string vacío es falsy
console.log(!"React");  // false  ← string no vacío es truthy
console.log(!null);     // true
console.log(!undefined);// true

// Doble negación !! — convierte cualquier valor a su booleano equivalente
console.log(!!0);       // false — forma idiomática de Boolean(0)
console.log(!!1);       // true
console.log(!!"");      // false
console.log(!!"React"); // true
console.log(!!null);    // false
console.log(!![]);      // true  ← array vacío es truthy