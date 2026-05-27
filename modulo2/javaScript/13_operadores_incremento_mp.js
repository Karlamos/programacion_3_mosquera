let leccionesCompletadas = 5;

// Incremento
leccionesCompletadas++;           // post-incremento: usa el valor actual, luego suma 1
++leccionesCompletadas;           // pre-incremento: suma 1 primero, luego usa el valor

// Decremento
leccionesCompletadas--;           // post-decremento
--leccionesCompletadas;           // pre-decremento

// La diferencia importa cuando el resultado se asigna
let totalCursos = 5;
let misCursos = totalCursos++;   // misCursos = 5, totalCursos = 6 (post: se asigna antes de incrementar)
let cursosPremium = ++totalCursos;   // cursosPremium = 7, totalCursos = 7 (pre: se incrementa antes de asignar)

console.log(totalCursos, misCursos, cursosPremium);  // 7  5  7