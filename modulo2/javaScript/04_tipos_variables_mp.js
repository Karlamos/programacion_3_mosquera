// Números — un solo tipo para enteros y decimales
const totalCursos = 42;
const calificacionPromedio = 4.85;
const visualizacionesTotales = 9_007_199_254_740_991; // _ como separador visual (ES2021)
const descuentoAplicado = -15;

// String — texto entre comillas simples, dobles o backticks
var estudiante = "Karla";
const categoria = 'programacion';
const estadoCurso = "disponible";
const mensajeBienvenida = `Bienvenida al curso, ${estudiante}`; // template literal — permite expresiones

// Boolean
const cursoCompletado = true;
const certificadoEmitido = false;

// null y undefined — dos formas de "sin valor"
const cuponDescuento = null;      // ausencia intencional de valor (no hay cupón)
let proximaClase;                 // undefined — declarada pero sin valor aún

// Symbol — identificador único (avanzado)
const idUnicoCurso = Symbol("id");

// BigInt — enteros de precisión arbitraria
const idTransaccionBancaria = 9999999999999999999n; // sufijo n

// typeof — conocer el tipo en tiempo de ejecución
console.log(typeof 42);           // "number"
console.log(typeof "hola");       // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" ← bug histórico de JS, null no es un objeto
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"