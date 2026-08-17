// === CREACIÓN Y ACCESO A UN ARRAY ===
// Crear un array de la plataforma — corchetes []
const cursos    = ["JavaScript", "Python", "PostgreSQL"];
const notas     = [10, 8, 9, 7, 10];
const mixto     = [1, "Django", true, null];          // válido pero poco recomendable
const vacio     = [];

// Acceso por índice — empieza en 0
console.log(cursos[0]);   // "JavaScript"
console.log(cursos[2]);   // "PostgreSQL"
console.log(cursos[9]);   // undefined — no lanza error

// Índice negativo — NO funciona en JS (devuelve undefined)
console.log(cursos[-1]);  // undefined ← en Python sí funciona, en JS no

// at() — acceso con índice negativo (ES2022)
console.log(cursos.at(-1));   // "PostgreSQL"  ← el último elemento
console.log(cursos.at(-2));   // "Python"

// Longitud del catálogo
console.log(cursos.length);   // 3

// Modificar un curso de la lista
cursos[1] = "Django Avanzado";
console.log(cursos);   // ["JavaScript", "Django Avanzado", "PostgreSQL"]


// === MÉTODOS DE MODIFICACIÓN (Mutan el array original) ===
const lecciones = [1, 2, 3];

// push — añade lecciones al final, devuelve la nueva longitud
lecciones.push(4);
lecciones.push(5, 6);           // se pueden añadir varias a la vez
console.log(lecciones);          // [1, 2, 3, 4, 5, 6]

// pop — elimina la última lección, devuelve el elemento eliminado
const ultimaLeccion = lecciones.pop();
console.log(ultimaLeccion);       // 6
console.log(lecciones);          // [1, 2, 3, 4, 5]

// unshift — añade al inicio (más lento que push)
lecciones.unshift(0);
console.log(lecciones);          // [0, 1, 2, 3, 4, 5]

// shift — elimina la primera lección, devuelve el elemento eliminado
const primeraLeccion = lecciones.shift();
console.log(primeraLeccion);      // 0
console.log(lecciones);          // [1, 2, 3, 4, 5]

// splice — elimina, reemplaza o inserta en cualquier posición
// splice(inicio, cuántos_eliminar, ...elementos_a_insertar)
const mesesRuta = ["Enero", "Febrero", "Abril", "Mayo"];
mesesRuta.splice(2, 0, "Marzo");          // inserta "Marzo" en posición 2, elimina 0
console.log(mesesRuta);                  // ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]

const mesesEliminados = mesesRuta.splice(1, 2);  // elimina 2 meses desde la posición 1
console.log(mesesEliminados);             // ["Febrero", "Marzo"]
console.log(mesesRuta);                  // ["Enero", "Abril", "Mayo"]


// === MÉTODOS DE BÚSQUEDA ===
const registrosBusqueda = [10, 20, 30, 20, 40];

// indexOf — primera posición del ID de curso, -1 si no existe
console.log(registrosBusqueda.indexOf(20));    // 1
console.log(registrosBusqueda.indexOf(99));    // -1

// lastIndexOf — última posición del ID duplicado
console.log(registrosBusqueda.lastIndexOf(20));  // 3

// includes — ¿existe el ID del curso en el historial? devuelve boolean
console.log(registrosBusqueda.includes(30));   // true
console.log(registrosBusqueda.includes(99));   // false


// === RECORRIDO DE ARRAYS ===
const stackTecnologico = ["JavaScript", "Python", "PostgreSQL"];

// forEach no devuelve nada (undefined), ideal para renderizar o mostrar logs
stackTecnologico.forEach((curso, indice) => {
  console.log(`${indice}: ${curso}`);
});
// 0: JavaScript
// 1: Python
// 2: PostgreSQL

// Equivalente con for...of (más legible en casos simples)
for (const curso of stackTecnologico) {
  console.log(curso);
}


// === MÉTODO MAP (Crea un nuevo array transformado) ===
const horasSimples = [1, 2, 3, 4, 5];

// Duplicar el tiempo estimado de los laboratorios
const horasDobladas = horasSimples.map(h => h * 2);
console.log(horasDobladas);    // [2, 4, 6, 8, 10]
console.log(horasSimples);     // [1, 2, 3, 4, 5] — original intacto

// Extraer una propiedad específica (los nombres de los estudiantes)
const alumnosInscritos = [
  { nombre: "Ana",   edad: 28 },
  { nombre: "Luis",  edad: 31 },
  { nombre: "Marta", edad: 25 }
];

const listadoNombres = alumnosInscritos.map(a => a.nombre);
console.log(listadoNombres);   // ["Ana", "Luis", "Marta"]

// Transformar la estructura de cada objeto del perfil de usuario
const resumenEstudiantes = alumnosInscritos.map(a => ({
  nombre: a.nombre,
  accesoVip: a.edad >= 18
}));
console.log(resumenEstudiantes);
// [
//   { nombre: 'Ana',   accesoVip: true },
//   { nombre: 'Luis',  accesoVip: true },
//   { nombre: 'Marta', accesoVip: true }
// ]


// === MÉTODO FILTER (Filtra elementos bajo una condición) ===
const calificacionesTotales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar solo las calificaciones aprobadas
const aprobadas = calificacionesTotales.filter(n => n % 2 === 0);
console.log(aprobadas);   // [2, 4, 6, 8, 10]

// Filtrar módulos con más de 5 lecciones completadas
const modulosLargos = calificacionesTotales.filter(n => n > 5);
console.log(modulosLargos); // [6, 7, 8, 9, 10]

// Filtrar colecciones de objetos complejas
const listadoUsuarios = [
  { nombre: "Ana",   edad: 28, activo: true  },
  { nombre: "Luis",  edad: 16, activo: true  },
  { nombre: "Marta", edad: 31, activo: false },
  { nombre: "Pedro", edad: 22, activo: true  }
];

// Obtener solo los perfiles de estudiantes activos y mayores de edad
const estudiantesValidados = listadoUsuarios.filter(u => u.edad >= 18 && u.activo);
console.log(estudiantesValidados.map(u => u.nombre));   // ["Ana", "Pedro"]