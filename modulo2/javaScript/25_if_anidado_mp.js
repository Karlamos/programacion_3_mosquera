const estudianteAutenticado = true;
const rolEstudiante         = "tutor";
const seccionPlataforma     = "configuracion";

if (estudianteAutenticado) {
  console.log(`Bienvenido. Rol: ${rolEstudiante}`);

  if (rolEstudiante === "admin") {
    console.log("Acceso completo concedido.");

    if (seccionPlataforma === "configuracion") {
      console.log("Cargando panel de configuración de la plataforma...");
    }
  } else if (rolEstudiante === "tutor") {
    console.log("Acceso de edición de contenido concedido.");

    if (seccionPlataforma === "configuracion") {
      console.log("⛔ Los tutores no tienen acceso a la configuración global del sistema.");
    } else {
      console.log(`Cargando sección: ${seccionPlataforma}`);
    }
  } else {
    console.log("Rol desconocido. Contacta al soporte técnico.");
  }

} else {
  console.log("Sesión no iniciada. Redirigiendo al inicio de sesión...");
}
// Bienvenido. Rol: tutor
// Acceso de edición de contenido concedido.
// ⛔ Los tutores no tienen acceso a la configuración global del sistema.


const estudiante = "Karla";
const email      = "karla@correo.com";
const tokenCurso = "abc";
const MIN_TOKEN  = 8;

if (estudiante.trim().length === 0) {
  console.log("❌ El nombre del estudiante es obligatorio.");
} else {
  console.log(`✅ Estudiante válido: ${estudiante}`);

  if (!email.includes("@") || !email.includes(".")) {
    console.log("❌ El email no tiene un formato válido.");
  } else {
    console.log(`✅ Email válido: ${email}`);

    if (tokenCurso.length < MIN_TOKEN) {
      console.log(`❌ El token de inscripción debe tener al menos ${MIN_TOKEN} caracteres.`);
      console.log(`   Caracteres actuales: ${tokenCurso.length}`);
    } else {
      console.log("✅ Token válido. Inscripción al curso completada.");
    }
  }
}
// ✅ Estudiante válido: Karla
// ✅ Email válido: karla@correo.com
// ❌ El token de inscripción debe tener al menos 8 caracteres.
//    Caracteres actuales: 3


const tipoCurso    = "programacion"; // "diseño", "programacion", "idiomas"
const esPremium    = true;
const precioBase   = 200;

let precioFinal = precioBase;
let detalleInscripcion = "";

if (tipoCurso === "programacion") {
  const cargoCertificado = precioBase * 0.15;
  precioFinal = precioBase + cargoCertificado;
  detalleInscripcion = "Certificado internacional incluido";

  if (esPremium) {
    const descuentoBeca = precioFinal * 0.05;
    precioFinal -= descuentoBeca;
    detalleInscripcion += " + 5% beca de estudiante Premium";
  }

} else if (tipoCurso === "diseño") {
  if (esPremium) {
    precioFinal = precioBase * 0.80;  // 20% descuento
    detalleInscripcion = "20% descuento para miembros Premium";
  } else {
    precioFinal = precioBase * 0.90;  // 10% descuento por lanzamiento
    detalleInscripcion = "10% descuento por lanzamiento";
  }

} else if (tipoCurso === "idiomas") {
  precioFinal = precioBase;           // sin cargos extra ni descuentos
  detalleInscripcion = "Precio plano (Acceso a talleres básicos libre)";
}

console.log(`Categoría del curso:  ${tipoCurso}`);
console.log(`Precio base:          $${precioBase.toFixed(2)}`);
console.log(`Detalle:              ${detalleInscripcion}`);
console.log(`Precio final:         $${precioFinal.toFixed(2)}`);
// Categoría del curso:  programacion
// Precio base:          $200.00
// Detalle:              Certificado internacional incluido + 5% beca de estudiante Premium
// Precio final:         $218.50