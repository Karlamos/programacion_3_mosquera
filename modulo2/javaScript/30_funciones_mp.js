// === TIPOS DE FUNCIONES ===

// Función declarada
function saludoPlataforma(){
    console.log("Bienvenido a la Plataforma de Cursos");
}
saludoPlataforma();


// Función expresada
const mostrarMensajeInscripcion = function(){
    console.log("Inscripción realizada con función expresada");
}
mostrarMensajeInscripcion();


// Función flecha
const notificarProgreso = () => {
    console.log("Progreso guardado con Función Flecha");
}
notificarProgreso();


// Función anónima (Simulando la carga de un video)
setTimeout(function(){
    console.log("Cargando reproductor de video......");
}, 1000);


// === PARÁMETROS Y RETORNOS ===

// Función con parámetros
function saludarEstudiante(nombre){
    console.log("Hola," + nombre);
}
saludarEstudiante(" Karla");

function calcularPuntajeTotal(lecciones, bonus){
    return lecciones + bonus;
}

// Sintaxis: function nombre(parámetros) { cuerpo }
function generarCertificado(nombreEstudiante) {
    return `¡Certificado emitido para ${nombreEstudiante}!`;
}
  
console.log(generarCertificado("Ana"));   // "¡Certificado emitido para Ana!"
console.log(generarCertificado("Luis"));  // "¡Certificado emitido para Luis!"

// Retorno implícito en Arrow Functions — se omiten las llaves y la palabra return
const sumarModulos = (a, b) => a + b;

// Un solo parámetro — se pueden omitir los paréntesis
const duplicarHorasEstudio = h => h * 2;

// Sin parámetros — los paréntesis son obligatorios
const alertaFinCurso = () => "¡Has terminado el curso con éxito!";

console.log(calcularPuntajeTotal(3, 4));      // 7
console.log(sumarModulos(3, 4));              // 7
console.log(duplicarHorasEstudio(5));         // 10
console.log(alertaFinCurso());                // "¡Has terminado el curso con éxito!"

const esNotaAprobatoria = nota => nota >= 7;
console.log(esNotaAprobatoria(8));            // true


// === PARÁMETROS POR DEFECTO ===

function matricularEstudiante(nombre = "Estudiante Invitado", curso = "JavaScript desde Cero") {
  return `Inscripción: ${nombre} se unió a ${curso}.`;
}

console.log(matricularEstudiante());                                      // "Inscripción: Estudiante Invitado se unió a JavaScript desde Cero."
console.log(matricularEstudiante("Ana"));                                 // "Inscripción: Ana se unió a JavaScript desde Cero."
console.log(matricularEstudiante("Ana", "Desarrollo Web con Django"));    // "Inscripción: Ana se unió a Desarrollo Web con Django."

// También funciona con arrow functions
const calcularProgresoMinutos = (baseVideos, factorMultiplicador = 2) => baseVideos ** factorMultiplicador;

console.log(calcularProgresoMinutos(3));     // 9   (3²)
console.log(calcularProgresoMinutos(3, 3));  // 27  (3³)


function calcularPromedioProyecto(calificacion1, calificacion2){
    return (calificacion1 * calificacion2) / 2;
}
console.log(calcularPromedioProyecto(20, 5)); // 50


// === PARÁMETRO REST (...captura argumentos en un array) ===

function calcularTotalMinutos(...minutosVideos) {
  let total = 0;
  for (const min of minutosVideos) {
    total += min;
  }
  return total;
}

console.log(calcularTotalMinutos(10, 20, 30));            // 60
console.log(calcularTotalMinutos(15, 25, 30, 40, 50));    // 160
console.log(calcularTotalMinutos());                      // 0

// Combinado con parámetros normales (el rest SIEMPRE debe ser el último parámetro)
function registrarBitacora(categoria, ...mensajesAlerta) {
  for (const msg of mensajesAlerta) {
    console.log(`[${categoria}] ${msg}`);
  }
}

// CORREGIDO: Se cambió 'registrar' por 'registrarBitacora'
registrarBitacora("CURSO_INFO", "Estudiante conectado", "Video reproducido", "Cuestionario completado");


function registrarDatosEstudiante(...datosPerfil){
    for (const campo of datosPerfil){
        console.log(`${campo}`);
    }
}

registrarDatosEstudiante("Karla Mosquera", "19 años", "Estudiante de Software");


// === OPERADOR SPREAD (...) ===

const notasExamenes = [3, 1, 4, 1, 5, 9, 2, 6];

// Sin spread — Math.max no acepta un array directamente
console.log(Math.max(notasExamenes));       // NaN

// Con spread — expande el array en argumentos individuales
console.log(Math.max(...notasExamenes));    // 9
console.log(Math.min(...notasExamenes));    // 1

// Combinar colecciones de cursos
const cursosFrontend = ["HTML", "CSS", "JS Basic"];
const cursosBackend  = ["Python", "Django", "PostgreSQL"];
const rutaFullStack  = [...cursosFrontend, ...cursosBackend];
console.log(rutaFullStack);   // ["HTML", "CSS", "JS Basic", "Python", "Django", "PostgreSQL"]

// Copiar un array de notas (copia superficial)
const notasOriginales = [8, 9, 10];
const notasClonadas   = [...notasOriginales];
notasClonadas.push(7);
console.log(notasOriginales);   // [8, 9, 10] — original intacto
console.log(notasClonadas);     // [8, 9, 10, 7]

// Spread con objetos de perfil
const estudianteBase = { nombre: "Karla", edad: 19 };
const estudiantePremium = { ...estudianteBase, plan: "Anual VIP" };
console.log(estudiantePremium);   // { nombre: 'Karla', edad: 19, plan: 'Anual VIP' }


// === CALLBACKS ===

// procesarEstadisticas recibe dos valores y una función de cálculo
function procesarEstadisticas(a, b, operacionMatematica) {
  return operacionMatematica(a, b);
}

const sumarNotas   = (a, b) => a + b;
const restarHoras  = (a, b) => a - b;
const multiplicarPorModulos = (a, b) => a * b;

console.log(procesarEstadisticas(10, 3, sumarNotas));             // 13
console.log(procesarEstadisticas(10, 3, restarHoras));            // 7
console.log(procesarEstadisticas(10, 3, multiplicarPorModulos));  // 30

// Callback anónimo (arrow function inline para calcular rendimiento exponencial)
console.log(procesarEstadisticas(10, 3, (a, b) => a ** b));       // 1000


// === PROGRAMA: CALCULADORA DE CONTENIDO ===
const prompt = require("prompt-sync")();

const dividirHoras = (a, b) => {
 if (b === 0) return "Error: divisor no puede ser cero";
  return a / b;
};

// Función principal de control que agrupa las operaciones
function calcularMetricas(a, b, operador) {
  // Nota: usa las funciones sumarNotas, restarHoras y multiplicarPorModulos que declaramos arriba en la sección de Callbacks
  const mapeoOperaciones = { 
    "+": sumarNotas, 
    "-": restarHoras, 
    "*": multiplicarPorModulos, 
    "/": dividirHoras 
  };
  
  const ejecutarFn = mapeoOperaciones[operador];
  if (!ejecutarFn) return `Operación "${operador}" no válida para el sistema`;
  return ejecutarFn(a, b);
}

// Función auxiliar para validar entradas numéricas de reportes
function leerEntradaNumerica(mensajePregunta) {
  while (true) {
    const entrada = prompt(mensajePregunta);
    const numeroValido = parseFloat(entrada);
    if (!isNaN(numeroValido)) return numeroValido;
    console.log("Valor no válido. Por favor ingresa una cifra numérica.");
  }
}

// Flujo de ejecución en terminal
console.log("\n=== Analizador de Métricas de Estudio ===");

const metricaA   = leerEntradaNumerica("Ingresa el primer indicador (ej. Horas logueadas): ");
const metricaB   = leerEntradaNumerica("Ingresa el segundo indicador (ej. Número de tareas): ");
const operador   = prompt("Elige la operación de análisis (+, -, *, /): ");
const resultadoM = calcularMetricas(metricaA, metricaB, operador);

console.log(`Resultado del análisis: ${metricaA} ${operador} ${metricaB} = ${resultadoM}`);