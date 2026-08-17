// Ejemplo — procesamiento de cola de videos de un curso
let index = 0;
while (index <= 5) {
    console.log(index);
    index++;
}


const leccionesPendientes = [
    { id: "L001", dificultad: "alta",  asunto: "Configuración del entorno" },
    { id: "L002", dificultad: "media", asunto: "Variables y tipos de datos" },
    { id: "L003", dificultad: "baja",  asunto: "Comentarios en el código" },
    { id: "L004", dificultad: "alta",  asunto: "Estructuras de control complejas" },
  ];
  
  let indice = 0;
  
  console.log("=== Cargando reproductor de lecciones ===");
  
  while (indice < leccionesPendientes.length) {
    const leccion = leccionesPendientes[indice];
  
    if (leccion.dificultad === "alta") {
      console.log(`🔴 [AVANZADO] ${leccion.id}: ${leccion.asunto}`);
    } else if (leccion.dificultad === "media") {
      console.log(`🟡 [INTERMEDIO] ${leccion.id}: ${leccion.asunto}`);
    } else {
      console.log(`🟢 [PRINCIPIANTE] ${leccion.id}: ${leccion.asunto}`);
    }
  
    indice++;
  }
  
  console.log(`Total procesados: ${leccionesPendientes.length} módulos`);
  // 🔴 [AVANZADO] L001: Configuración del entorno
  // 🟡 [INTERMEDIO] L002: Variables y tipos de datos
  // 🟢 [PRINCIPIANTE] L003: Comentarios en el código
  // 🔴 [AVANZADO] L004: Estructuras de control complejas
  // Total procesados: 4 módulos




  // Ejemplo — acumulación de minutos de estudio hasta alcanzar meta semanal
const META_MINUTOS      = 1000;
const minutosDiarios    = [120, 85, 200, 310, 95, 250]; // minutos registrados de la semana
let totalAcumulado      = 0;
let diasTranscurridos   = 0;

while (totalAcumulado < META_MINUTOS && diasTranscurridos < minutosDiarios.length) {
  const minutosDelDia   = minutosDiarios[diasTranscurridos];
  totalAcumulado       += minutosDelDia;
  diasTranscurridos++;

  console.log(`Día ${diasTranscurridos}: +${minutosDelDia} min → Acumulado: ${totalAcumulado} min`);

  if (totalAcumulado >= META_MINUTOS) {
    console.log(`🎯 ¡Meta de estudio alcanzada en ${diasTranscurridos} día(s)!`);
  }
}

if (totalAcumulado < META_MINUTOS) {
  const faltante = META_MINUTOS - totalAcumulado;
  console.log(`Meta no alcanzada. Faltan ${faltante.toFixed(2)} minutos de video.`);
}
// Día 1: +120 min → Acumulado: 120 min
// Día 2: +85 min  → Acumulado: 205 min
// Día 3: +200 min → Acumulado: 405 min
// Día 4: +310 min → Acumulado: 715 min
// Día 5: +95 min  → Acumulado: 810 min
// Día 6: +250 min → Acumulado: 1060 min
// 🎯 ¡Meta de estudio alcanzada en 6 día(s)!


let i = 1;
while (i <= 10) {
    console.log(i, 'x 5 lecciones =', i * 5);
    i++;
}


// Ejemplo — sistema de reintentos para subir un proyecto de examen
const MAX_REINTENTOS   = 3;
const TIMEOUT_SEGUNDOS = 2;
let reintentos         = 0;
let cargaExitosa       = false;

do {
  reintentos++;
  console.log(`Intento ${reintentos}/${MAX_REINTENTOS}: Subiendo archivo al servidor de tareas...`);

  // Simulación: la subida falla en los primeros 2 intentos por red inestable
  if (reintentos >= 3) {
    cargaExitosa = true;
  }

  if (!cargaExitosa && reintentos < MAX_REINTENTOS) {
    console.log(`  ⏳ Error de red. Reintentando subida en ${TIMEOUT_SEGUNDOS}s...`);
  }

} while (!cargaExitosa && reintentos < MAX_REINTENTOS);

if (cargaExitosa) {
  console.log("✅ Proyecto entregado correctamente. El tutor ya puede calificarlo.");
} else {
  console.log("❌ No se pudo subir el archivo. Revisa tu conexión a internet.");
}
// Intento 1/3: Subiendo archivo al servidor de tareas...
//   ⏳ Error de red. Reintentando subida en 2s...
// Intento 2/3: Subiendo archivo al servidor de tareas...
//   ⏳ Error de red. Reintentando subida en 2s...
// Intento 3/3: Subiendo archivo al servidor de tareas...
// ✅ Proyecto entregado correctamente. El tutor ya puede calificarlo.