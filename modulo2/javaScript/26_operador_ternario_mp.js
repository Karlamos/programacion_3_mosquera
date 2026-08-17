// Sintaxis: condicion ? valor_si_true : valor_si_false
const cuposDisponibles = 8;
const estadoCurso = cuposDisponibles > 0 ? "Inscripciones Abiertas" : "Cupos Agotados";
console.log(`Estado: ${estadoCurso}`);   // Estado: Inscripciones Abiertas

// Dentro de template literals — muy útil
const costoPorModulo = 25.50;
const cantidadModulos = 3;
const totalMatricula  = costoPorModulo * cantidadModulos;

console.log(`Tu compra: ${cantidadModulos} módulo(s) x $${costoPorModulo}`);
console.log(`Total: $${totalMatricula.toFixed(2)}`);
console.log(`Certificado de regalo: ${totalMatricula >= 50 ? "Sí ✅" : "No ❌ (mínimo $50)"}`);

// Asignación de estado de progreso en la plataforma
const progresoPorcentaje = -150; 
const estadoProgreso = progresoPorcentaje >= 0 ? "Progreso al día" : "Módulos atrasados";
const colorAlerta    = progresoPorcentaje >= 0 ? "verde" : "rojo";
console.log(`[${colorAlerta.toUpperCase()}] Alerta: ${estadoProgreso}`);

// === LA SOLUCIÓN: Declarar la variable que faltaba ===
const experiencia = 20; // Puedes cambiar este número para probar los diferentes niveles

// ❌ No anidar ternarios — difícil de leer y de mantener
const nivelEstudiante = experiencia >= 65 ? "senior" : experiencia >= 18 ? "intermedio" : "principiante";
console.log(`Nivel (ternario): ${nivelEstudiante}`);

// ✅ Mejor usar if/else if para tres o más casos
let nivelEstudianteClaro;
if (experiencia >= 65) {
  nivelEstudianteClaro = "senior";
} else if (experiencia >= 18) {
  nivelEstudianteClaro = "intermedio";
} else {
  nivelEstudianteClaro = "principiante";
}
console.log(`Nivel (if-else): ${nivelEstudianteClaro}`);