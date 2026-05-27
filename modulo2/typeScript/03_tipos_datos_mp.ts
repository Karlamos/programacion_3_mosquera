// === tipos-string.ts ===
const estudiante1: string = "Karla Mosquera";
const saludo:      string = `Hola, ${estudiante1}`;
const vacia:       string = "";
const comillas:    string = 'También con comillas simples';

console.log(estudiante1);
console.log(saludo);
console.log(`La descripción vacía tiene longitud: ${vacia.length}`);

// Métodos de string funcionan igual que en JS
console.log(estudiante1.toUpperCase());      // KARLA MOSQUERA
console.log(estudiante1.toLowerCase());      // karla mosquera
console.log(estudiante1.includes("Mosquera")); // true
console.log(estudiante1.split(" "));         // ["Karla", "Mosquera"]


// === tipos-number.ts ===
const leccionesVistas: number = 42;
const notaPromedio:    number = 9.14;
const balanceNegativo: number = -100;
const idEstudiante:    number = 1_000_000;  // el _ es solo visual, no cambia el valor
const progresoExacto:  number = 10 / 3;

console.log(leccionesVistas);
console.log(notaPromedio);
console.log(idEstudiante);
console.log(progresoExacto);                 // 3.3333...
console.log(progresoExacto.toFixed(2));      // "3.33"

// Operaciones
console.log(10 + 3);   // 13
console.log(10 - 3);   // 7
console.log(10 * 3);   // 30
console.log(10 / 3);   // 3.333...
console.log(10 % 3);   // 1  (resto de la división)
console.log(2 ** 10);  // 1024  (potencia)


// === tipos-boolean.ts ===
const moduloCompletado: boolean = true;
const tieneCertificado: boolean = false;

console.log(moduloCompletado);
console.log(!moduloCompletado);                 // false  (negación)
console.log(moduloCompletado && tieneCertificado); // false  (ambos deben ser true)
console.log(moduloCompletado || tieneCertificado); // true   (al menos uno es true)

// Los booleanos suelen venir de comparaciones de progreso
const edadEstudiante = 20;
const esMayorDeEdad: boolean = edadEstudiante >= 18;
console.log(`¿Es mayor de edad para registrarse? ${esMayorDeEdad}`); // ¿Es mayor de edad para registrarse? true


// === null-undefined.ts ===

// En JS esto no da error, en TS sí (modo estricto)
// let cursoSeleccionado: string = null;    // ❌ Error

// Para permitir null hay que declararlo explícitamente (Unión de tipos)
let cursoSeleccionado: string | null = null;   // ✅ puede ser string o null

cursoSeleccionado = "Desarrollo Web con Django";
console.log(cursoSeleccionado);  // "Desarrollo Web con Django"
cursoSeleccionado = null;
console.log(cursoSeleccionado);  // null

// undefined — variable declarada pero sin valor asignado todavía
let campusEstudiante: string | undefined;
console.log(campusEstudiante);  // undefined

campusEstudiante = "Campus Central";
console.log(campusEstudiante);  // "Campus Central"


// === tipo-any.ts ===

let payloadServidor: any = "Inscripción exitosa";
payloadServidor = 404;            // ✅ sin error
payloadServidor = false;          // ✅ sin error
payloadServidor = [10, 9, 8, 10]; // ✅ sin error

// Parece útil pero es trampa: pierdes el autocompletado de TypeScript
// y los errores vuelven a aparecer en tiempo de ejecución (producción)
console.log(payloadServidor.metodoQueNoExiste()); // TypeScript no avisa aquí, pero falla al ejecutar


// === tipo-unknown.ts ===

function procesarConfiguracionPlataforma(valor: unknown): string {
  // No puedo usar valor directamente — debo verificar primero su tipo (Type Guard)

  if (typeof valor === "string") {
    // Aquí TypeScript sabe que es string de forma segura
    return valor.toUpperCase();
  }

  if (typeof valor === "number") {
    // Aquí TypeScript sabe que es number
    return valor.toFixed(2);
  }

  if (typeof valor === "boolean") {
    return valor ? "Acceso Permitido" : "Acceso Restringido";
  }

  return "Tipo de dato no reconocido en el sistema";
}

console.log(procesarConfiguracionPlataforma("módulo de python")); // MÓDULO DE PYTHON
console.log(procesarConfiguracionPlataforma(9.856));             // 9.86
console.log(procesarConfiguracionPlataforma(true));              // Acceso Permitido
console.log(procesarConfiguracionPlataforma(null));              // Tipo de dato no reconocido en el sistema