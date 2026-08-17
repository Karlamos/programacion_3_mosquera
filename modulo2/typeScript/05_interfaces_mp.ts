// === type-alias.ts ===

// Definición del alias para estructurar los datos de un estudiante
type Estudiante = {
  nombre:      string;
  edad:        number;
  cursoActual: string;
  email:       string;
};

// Usas el alias como tipo en los parámetros de tus funciones
function mostrarPerfilEstudiante(e: Estudiante): void {
  console.log(`${e.nombre} (${e.edad} años) — Curso: ${e.cursoActual} — Contacto: ${e.email}`);
}

function verificarCredenciales(e: Estudiante): boolean {
  return e.nombre.length > 0 && e.email.includes("@") && e.cursoActual.length > 0;
}

// Crear un objeto seguro bajo el tipo Estudiante
const alumno: Estudiante = {
  nombre:      "Karla Mosquera",
  edad:        19,
  cursoActual: "Desarrollo Web con Django",
  email:       "karla@correo.com"
};

mostrarPerfilEstudiante(alumno);
console.log(`¿Datos válidos en el sistema? ${verificarCredenciales(alumno)}`);

// TypeScript te protege obligándote a cumplir con toda la estructura declarada
// const perfilIncompleto: Estudiante = { nombre: "Mateo" }; // ❌ Error: faltan las propiedades 'edad', 'cursoActual' y 'email'