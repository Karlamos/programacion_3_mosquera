// === abstraccion.ts ===

class ProgresoCurso {
  // Las lecciones y el porcentaje son internos — controlados de forma segura mediante 'private'
  private leccionesCompletadas: string[] = [];
  private totalLeccionesModulo: number;

  constructor(estudiante: string, totalLecciones: number) {
    this.totalLeccionesModulo = totalLecciones;
    console.log(`Progreso inicializado para el estudiante: ${estudiante}.`);
  }

  // Interfaz pública — los métodos que el usuario o el sistema pueden usar directamente
  completarLeccion(tituloLeccion: string): void {
    if (this.leccionesCompletadas.includes(tituloLeccion)) {
      console.log(`  Aviso: La lección "${tituloLeccion}" ya fue marcada como completada.`);
      return;
    }

    this.leccionesCompletadas.push(tituloLeccion);
    this.notificarLogInterno(`Lección aprobada: ${tituloLeccion}`); // método interno
    console.log(`  Lección "${tituloLeccion}" completada. Progreso actual: ${this.calcularPorcentaje().toFixed(1)}%`);
  }

  obtenerPorcentajeProgreso(): number {
    return this.calcularPorcentaje();
  }

  verHistorialLecciones(): void {
    console.log("\n  🎓 Registro de Lecciones Finalizadas:");
    if (this.leccionesCompletadas.length === 0) {
      console.log("    Ninguna lección completada aún.");
      return;
    }
    this.leccionesCompletadas.forEach(leccion => console.log(`    - ${leccion}`));
  }

  // Métodos privados — lógica de control interna que el usuario no necesita ver ni manipular
  private calcularPorcentaje(): number {
    if (this.totalLeccionesModulo === 0) return 0;
    return (this.leccionesCompletadas.length / this.totalLeccionesModulo) * 100;
  }

  private notificarLogInterno(accion: string): void {
    // Simulación de un log de auditoría interno del servidor
    // console.log(`[LOG INTERNO] ${accion}`);
  }
}

console.log("=== SISTEMA DE PROGRESO DE CURSOS ===\n");
const miProgreso = new ProgresoCurso("Karla Mosquera", 5); // Curso con 5 lecciones en total

miProgreso.completarLeccion("Estructuras de Control");
miProgreso.completarLeccion("Funciones Flecha");
miProgreso.completarLeccion("Estructuras de Control"); // Intento duplicado, controlado por software

console.log(`\nPorcentaje total avanzado: ${miProgreso.obtenerPorcentajeProgreso().toFixed(1)}%`);
miProgreso.verHistorialLecciones();

// El sistema externo o el usuario no pueden hackear ni alterar el progreso directamente
// miProgreso.leccionesCompletadas = [];  // ❌ Error — 'leccionesCompletadas' es private
// miProgreso.calcularPorcentaje();      // ❌ Error — 'calcularPorcentaje' es private y solo pertenece a la clase