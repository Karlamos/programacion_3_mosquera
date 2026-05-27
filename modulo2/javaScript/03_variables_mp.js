// const — no se puede reasignar (equivalente a val en Kotlin, final en Java)
const curso = "Desarrollo Web";  // tipo inferido: string
const duracion = 40;             // tipo inferido: number
const precio = 29.99;            // tipo inferido: number

// let — se puede reasignar
let estudiantesInscritos = 0;
estudiantesInscritos = estudiantesInscritos + 1; // permitido
estudiantesInscritos++;                         // también permitido

// curso = "Diseño UI/UX";       // TypeError en tiempo de ejecución — const no se reasigna

console.log(`El curso de ${curso} dura ${duracion} horas`);  // template literal

// var — forma antigua, evitar en código moderno
// tiene comportamiento de "hoisting" que puede causar bugs difíciles de detectar
var plataformaAntigua = "evitar var";