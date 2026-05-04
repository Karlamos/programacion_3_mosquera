
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
resultado=sumar(45,5);
console.log(resultado);

// Sintaxis: function nombre(parámetros) { cuerpo }
function saludar(nombre) {
    return `Hola, ${nombre}!`;
  }
  
  console.log(saludar("Ana"));   // "Hola, Ana!"
  console.log(saludar("Luis"));  // "Hola, Luis!"