// === CREACIÓN Y ACCESO A UN OBJETO ===
// Crear un objeto de perfil de estudiante — llaves {}
const estudiante = {
  nombre: "Mateo",      // clave: "nombre", valor: "Mateo"
  edad: 19,             // clave: "edad",   valor: 19
  premium: true         // clave: "premium", valor: true
};

// Acceso a propiedades — notación de punto (preferida)
console.log(estudiante.nombre);   // "Mateo"
console.log(estudiante.edad);     // 19

// Acceso con corchetes — necesario cuando la clave es dinámica o tiene espacios/caracteres especiales
console.log(estudiante["nombre"]);         // "Mateo"
const propiedadDinamica = "edad";
console.log(estudiante[propiedadDinamica]); // 19

// Propiedad que no existe en el perfil → undefined (no lanza error)
console.log(estudiante.telefono);          // undefined

// Añadir propiedades después de crear el objeto
estudiante.ciudad = "Quito";
console.log(estudiante.ciudad);            // "Quito"

// Eliminar propiedades del perfil
delete estudiante.premium;
console.log(estudiante.premium);           // undefined


// === MÉTODOS EN OBJETOS ===
const gestorProgreso = {
  // Forma clásica
  registrarCurso: function(nombreCurso, horas) {
    return `Inscrito en ${nombreCurso} por ${horas} horas.`;
  },

  // Shorthand de método (ES6) — forma preferida
  actualizarHoras(horasActuales, nuevasHoras) {
    return horasActuales + nuevasHoras;
  },

  // Arrow function — ojo con 'this' (evitar si necesitas acceder al objeto)
  calcularPorcentaje: (completadas, totales) => (completadas / totales) * 100
};

console.log(gestorProgreso.registrarCurso("PostgreSQL", 40));  // "Inscrito en PostgreSQL por 40 horas."
console.log(gestorProgreso.actualizarHoras(12, 4));            // 16
console.log(gestorProgreso.calcularPorcentaje(5, 10));         // 50


// === EL USO DE 'THIS' EN OBJETOS ===
const alumnoPerfil = {
  nombre: "Karla",
  leccionesVistas: 28,

  // ✅ function o shorthand — 'this' apunta correctamente al objeto 'alumnoPerfil'
  mostrarProgreso() {
    return `Estudiante: ${this.nombre} ha completado ${this.leccionesVistas} lecciones.`;
  },

  completarLeccion() {
    this.leccionesVistas++;   // modifica directamente la propiedad del objeto
    return `¡Lección completada, ${this.nombre}! Tu progreso actual es de ${this.leccionesVistas} lecciones.`;
  },

  // ❌ Arrow function — 'this' NO apunta al objeto, apunta al scope de ejecución externo
  mostrarProgresoArrow: () => {
    return `Estudiante: ${this.nombre}`;   // this.nombre va a ser undefined
  }
};

console.log(alumnoPerfil.mostrarProgreso());      // "Estudiante: Karla ha completado 28 lecciones."
console.log(alumnoPerfil.completarLeccion());     // "¡Lección completada, Karla! Tu progreso actual es de 29 lecciones."
console.log(alumnoPerfil.mostrarProgresoArrow()); // "Estudiante: undefined"


// === PROPERTY SHORTHAND (ES6) ===
const nombre      = "Karla";
const edad        = 19;
const cursoActual = "Django Core";

// Sin shorthand — repetitivo e innecesario
const cuentaEstudiante1 = {
  nombre: nombre,
  edad: edad,
  cursoActual: cursoActual
};

// Con shorthand (ES6) — forma limpia y preferida
const cuentaEstudiante2 = { nombre, edad, cursoActual };

console.log(cuentaEstudiante2);
// { nombre: 'Karla', edad: 19, cursoActual: 'Django Core' }