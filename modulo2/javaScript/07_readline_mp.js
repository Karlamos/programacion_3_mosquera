const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce el nombre del curso que buscas: ", (curso) => {
  console.log(`Buscando resultados para: ${curso}...`);
  rl.close();
});