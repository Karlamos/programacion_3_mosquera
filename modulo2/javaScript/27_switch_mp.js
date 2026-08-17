const estadoInscripcion = "en_progreso";

switch (estadoInscripcion) {
  case "pendiente":
    console.log("📋 Inscripción registrada. En espera de confirmación de pago.");
    break;
  case "confirmada":
    console.log("✅ Pago confirmado. El curso ya está disponible en tu perfil.");
    break;
  case "en_progreso":
    console.log("🎓 Curso en progreso. ¡Sigue avanzando con las lecciones!");
    break;
  case "completado":
    console.log("📦 Curso completado. ¡Felicidades! Ya puedes descargar tu certificado.");
    break;
  case "cancelado":
    console.log("❌ Inscripción cancelada. Reembolso procesado en 5-7 días.");
    break;
  default:
    console.log(`Estado desconocido: "${estadoInscripcion}". Contactar soporte.`);
}
// 🎓 Curso en progreso. ¡Sigue avanzando con las lecciones!


const diaClaseEnVivo = 3; // 1=Lunes ... 7=Domingo

switch (diaClaseEnVivo) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Día laboral — Clases en vivo disponibles de 18:00 a 22:00");
    break;
  case 6:
    console.log("Sábado — Talleres especiales de 09:00 a 13:00");
    break;
  case 7:
    console.log("Domingo — Mentorías en vivo no disponibles");
    break;
  default:
    console.log("Número de día no válido (usar 1-7)");
}
// Día laboral — Clases en vivo disponibles de 18:00 a 22:00


// Ejemplo: categorías de cursos y sus costos de certificación
const tipoCurso = "idiomas";
let tasaCertificado;
let descripcionCertificado;

switch (tipoCurso) {
  case "desarrollo_web":
  case "idiomas":
    tasaCertificado        = 0;
    descripcionCertificado = "Certificado gratuito de participación";
    break;
  case "diseño":
  case "marketing":
    tasaCertificado        = 0.05;
    descripcionCertificado = "Costo de emisión reducido 5%";
    break;
  case "inteligencia_artificial":
  case "ciberseguridad":
    tasaCertificado        = 0.15;
    descripcionCertificado = "Tasa de examen internacional 15%";
    break;
  default:
    tasaCertificado        = 0.15;
    descripcionCertificado = "Tasa estándar (categoría no especificada)";
}

const costoCurso  = 80;
const cargoExtra  = costoCurso * tasaCertificado;
console.log(`Especialidad: ${tipoCurso}`);
console.log(`${descripcionCertificado}: $${cargoExtra.toFixed(2)}`);
console.log(`Costo total final: $${(costoCurso + cargoExtra).toFixed(2)}`);
// Especialidad: idiomas
// Certificado gratuito de participación: $0.00
// Costo total final: $80.00