// === problema-sin-tipos.ts ===

// JavaScript — acepta cualquier cosa sin avisar en tiempo de desarrollo
function calcularNotaTotal1(b: any, c: any) {
  return b + c;
}

console.log(calcularNotaTotal1(5, 3));       // 8  ✅
console.log(calcularNotaTotal1("5", 3));     // "53"  😕 concatenó en lugar de sumar las notas
console.log(calcularNotaTotal1(5));          // NaN  😕 b es undefined



// === solucion-con-tipos.ts ===

// TypeScript — avisa antes de compilar o ejecutar el servidor
function calcularNotaTotal(a: number, b: number): number {
  return a + b;
}

console.log(calcularNotaTotal(5, 3));     // 8  ✅
// calcularNotaTotal("5", 3)  → ❌ Error: 'string' no es asignable a 'number'
// calcularNotaTotal(5)       → ❌ Error: falta el argumento obligatorio 'b'



// === funciones-basicas.ts ===

// Recibe dos números, devuelve la duración total en horas
function calcularDuracion(moduloA: number, moduloB: number): number {
  return moduloA * moduloB;
}

// Recibe un string, devuelve el mensaje de bienvenida formal
function registrarEstudiante(nombre: string): string {
  return `Hola, ${nombre}! Bienvenido a tu espacio de estudio.`;
}

// Recibe un número de respuestas correctas, devuelve si aprobó el test (mínimo par de control)
function esNotaPar(n: number): boolean {
  return n % 2 === 0;
}

// No devuelve nada — tipo void, ideal para logs del sistema
function mostrarAlertaSistema(mensaje: string): void {
  console.log(`[INFO_PLATAFORMA] ${mensaje}`);
}

console.log(calcularDuracion(4, 7));        // 28
console.log(registrarEstudiante("Ana"));    // Hola, Ana! Bienvenido a tu espacio de estudio.
console.log(esNotaPar(10));                 // true
console.log(esNotaPar(7));                  // false
mostrarAlertaSistema("Todo listo");         // [INFO_PLATAFORMA] Todo listo



// === parametros-opcionales.ts ===

// ? hace el parámetro opcional — dentro de la función infiere como undefined si no se envía
// Se necesita un Type Guard o validación manual para manejarlo seguro
function presentarPerfil(nombre: string, edad?: number, cursoActual?: string): string {
  let resultado = `Estudiante: ${nombre}`;

  if (edad !== undefined) {
    resultado += ` | Edad: ${edad} años`;
  }

  if (cursoActual !== undefined) {
    resultado += ` | Curso: ${cursoActual}`;
  }

  resultado += ".";
  return resultado;
}

console.log(presentarPerfil("Ana"));
console.log(presentarPerfil("Ana", 28));
console.log(presentarPerfil("Ana", 28, "Django Avanzado"));
// Estudiante: Ana.
// Estudiante: Ana | Edad: 28 años.
// Estudiante: Ana | Edad: 28 años | Curso: Django Avanzado.


// Función de búsqueda en el catálogo — retorna null si no encuentra coincidencias
function buscarCurso(
  cursos: string[],
  busqueda: string,
  coincidenciaExacta?: boolean
): string | null {
  for (const curso of cursos) {
    if (coincidenciaExacta) {
      // Búsqueda exacta por nombre
      if (curso === busqueda) return curso;
    } else {
      // Búsqueda parcial (case insensitive)
      if (curso.toLowerCase().includes(busqueda.toLowerCase())) {
        return curso;
      }
    }
  }
  return null;  // no se encontró el curso en el arreglo
}

const catalogoCursos = ["JavaScript Avanzado", "Bases de Datos Relacionales", "Python para Backend", "Odoo Core ERP"];

console.log(buscarCurso(catalogoCursos, "python"));               // Python para Backend
console.log(buscarCurso(catalogoCursos, "python", true));         // null (no coincide exacto)
console.log(buscarCurso(catalogoCursos, "Odoo Core ERP", true));   // Odoo Core ERP
console.log(buscarCurso(catalogoCursos, "react"));                // null



// === parametros-por-defecto.ts ===

// Si no se pasa el argumento, toma el valor por defecto configurado
// El tipo ya está garantizado implícitamente — no hace falta validar contra undefined
function calcularCostoCertificado(
  precioBase: number,
  descuentoBeca: number = 10,
  aplicarImpuesto: boolean = true
): number {
  let costoFinal = precioBase * (1 - descuentoBeca / 100);

  if (aplicarImpuesto) {
    costoFinal *= 1.15; // Suponiendo un IVA o cargo de certificación del 15%
  }

  return costoFinal;
}

const costoBase = 100;
console.log(calcularCostoCertificado(costoBase));                  // 103.5  (10% beca + impuesto)
console.log(calcularCostoCertificado(costoBase, 20));              // 92     (20% beca + impuesto)
console.log(calcularCostoCertificado(costoBase, 20, false));       // 80     (20% beca, sin impuesto)


// Función con bucle y control de reproducciones por defecto
function simularReproduccion(leccion: string, repeticiones: number = 3): void {
  for (let i = 1; i <= repeticiones; i++) {
    console.log(`[Reproduciendo ${i}/${repeticiones}] Viendo: ${leccion}`);
  }
}

simularReproduccion("Introducción a TS");     // se ejecuta 3 veces por defecto
simularReproduccion("Variables y Tipos", 5);  // se ejecuta 5 veces según el argumento



// === rest-con-flujo.ts ===

// ...notas captura una lista indeterminada de argumentos numéricos dentro de un array
function analizarNotasEstudiante(...notas: number[]): {
  min:   number;
  max:   number;
  suma:  number;
  media: number;
} {
  if (notas.length === 0) {
    return { min: 0, max: 0, suma: 0, media: 0 };
  }

  let min  = notas[0];
  let max  = notas[0];
  let suma = 0;

  for (const n of notas) {
    if (n < min) min = n;
    if (n > max) max = n;
    suma += n;
  }

  return {
    min,
    max,
    suma,
    media: suma / notas.length
  };
}

const estadisticasProgreso = analizarNotasEstudiante(8, 3, 10, 6, 9, 5, 9);
console.log(`Nota Mínima:   ${estadisticasProgreso.min}`);
console.log(`Nota Máxima:   ${estadisticasProgreso.max}`);
console.log(`Suma de Notas: ${estadisticasProgreso.suma}`);
console.log(`Promedio Final: ${estadisticasProgreso.media.toFixed(2)}`);


// Función que procesa solo lecciones con calificación aprobatoria usando rest
function filtrarNotasAprobadas(...notas: number[]): number[] {
  const aprobadas: number[] = [];
  for (const n of notas) {
    if (n >= 7) aprobadas.push(n); // Asumiendo que se aprueba con 7 o más
  }
  return aprobadas;
}

console.log(filtrarNotasAprobadas(10, 5, 8, 4, 7, 9, 6));  // [10, 8, 7, 9]