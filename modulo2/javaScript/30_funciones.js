
// funcion declarada
function saludo(){
    console.log("Hello Word")
}
saludo();


//funcion expresada
const saludarHola=function(){
    console.log("Hola con funcion expresada");
}
saludarHola();


// Funcion flecha
const saludosFlecha=()=>{
    console.log("Hello con Funcion Flecha ");
}


//Funcion anonima
setTimeout(function(){
    console.log("Ejecutando......")
},1000)


// funcion con parametros
function saludarConParametro(nombre){
    console.log("Hola"+nombre)
}
saludarConParametro(" Pedro")

function sumar(a,b){
    return a+b;
}
//resultado=sumar(45,5);
//console.log(resultado);

// Sintaxis: function nombre(parámetros) { cuerpo }
function saludar(nombre) {
    return `Hola, ${nombre}!`;
  }
  
  console.log(saludar("Ana"));   // "Hola, Ana!"
  console.log(saludar("Luis"));  // "Hola, Luis!"

// Sintaxis completa
//const sumar = (a, b) => {
//  return a + b;
//};

// Retorno implícito — cuando el cuerpo es una sola expresión
// se omiten las llaves y la palabra return
const sumarCorto = (a, b) => a + b;

// Un solo parámetro — se pueden omitir los paréntesis
const doblar = n => n * 2;

// Sin parámetros — los paréntesis son obligatorios
const saludarMundo = () => "Hola, mundo!";

console.log(sumar(3, 4));        // 7
console.log(sumarCorto(3, 4));   // 7
console.log(doblar(5));          // 10
console.log(saludarMundo());     // "Hola, mundo!"

const par = n => n % 2 == 0;
console.log(par(4));   



function saludar(nombre = "mundo", saludo = "Hola") {
  return `${saludo}, ${nombre}!`;
}

console.log(saludar());                     // "Hola, mundo!"
console.log(saludar("Ana"));               // "Hola, Ana!"
console.log(saludar("Ana", "Buenos días")); // "Buenos días, Ana!"

// También funciona con arrow functions
const potencia = (base, exponente = 2) => base ** exponente;

console.log(potencia(3));     // 9   (3²)
console.log(potencia(3, 3));  // 27  (3³)



function area(base, altura){
    return (base * altura)/2;
}
    console.log(area(20, 5))





// ...numeros captura todos los argumentos en un array
function sumarTodos(...numeros) {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
}

console.log(sumarTodos(1, 2, 3));          // 6
console.log(sumarTodos(1, 2, 3, 4, 5));   // 15
console.log(sumarTodos());                 // 0

// Se puede combinar con parámetros normales
// el rest SIEMPRE debe ser el último parámetro
function registrar(categoria, ...mensajes) {
  for (const msg of mensajes) {
    console.log(`[${categoria}] ${msg}`);
  }
}

registrar("INFO", "Inicio", "Conexión OK", "Listo");
// [INFO] Inicio
// [INFO] Conexión OK
// [INFO] Listo



function datos(...dato){
    for (const dto of dato){
        console.log(`${dto}`);
    }
}

datos("Karla Mosquera", "19 años", "Ecuatoriana");


const numeros = [3, 1, 4, 1, 5, 9, 2, 6];

// Sin spread — Math.max no acepta un array directamente
console.log(Math.max(numeros));       // NaN

// Con spread — expande el array en argumentos
console.log(Math.max(...numeros));    // 9
console.log(Math.min(...numeros));    // 1

// Combinar arrays
const primeros = [1, 2, 3];
const segundos = [4, 5, 6];
const todos    = [...primeros, ...segundos];
console.log(todos);   // [1, 2, 3, 4, 5, 6]

// Copiar un array (copia superficial)
const original = [1, 2, 3];
const copia    = [...original];
copia.push(4);
console.log(original);   // [1, 2, 3]  — no se modifica
console.log(copia);      // [1, 2, 3, 4]

// Spread con objetos
const base     = { nombre: "Ana", edad: 28 };
const ampliado = { ...base, ciudad: "Madrid" };
console.log(ampliado);   // { nombre: 'Ana', edad: 28, ciudad: 'Madrid' }


// operar recibe dos números y una función
function operar(a, b, operacion) {
  return operacion(a, b);
}

//const sumar   = (a, b) => a + b;
const restar  = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

console.log(operar(10, 3, sumar));        // 13
console.log(operar(10, 3, restar));       // 7
console.log(operar(10, 3, multiplicar));  // 30

// Callback anónimo (arrow function inline)
console.log(operar(10, 3, (a, b) => a ** b));  // 1000




// calculadora.js
const prompt = require("prompt-sync")();

// Funciones puras para cada operación
//const sumar       = (a, b) => a + b;
//const restar      = (a, b) => a - b;
//const multiplicar = (a, b) => a * b;
const dividir     = (a, b) => {
 if (b === 0) return "Error: división por cero";
  return a / b;
};

// Función que agrupa todas las operaciones
function calcular(a, b, operacion) {
  const operaciones = { "+": sumar, "-": restar, "*": multiplicar, "/": dividir };
  const fn = operaciones[operacion];
  if (!fn) return `Operación "${operacion}" no reconocida`;
  return fn(a, b);
}

// Función para leer un número válido
function leerNumero(mensaje) {
  while (true) {
    const entrada = prompt(mensaje);
    const numero  = parseFloat(entrada);
    if (!isNaN(numero)) return numero;
    console.log("Entrada no válida, intenta de nuevo.");
  }
}

// Programa principal
console.log("=== Calculadora con funciones ===");

const a         = leerNumero("Primer número: ");
const b         = leerNumero("Segundo número: ");
const operacion = prompt("Operación (+, -, *, /): ");
const resultado = calcular(a, b, operacion);

console.log(`${a} ${operacion} ${b} = ${resultado}`);