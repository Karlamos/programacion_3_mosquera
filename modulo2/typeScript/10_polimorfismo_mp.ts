Aquí tienes la versión en **TypeScript puro**, utilizando clases abstractas (`abstract class`), firmas de métodos obligatorios y modificadores de acceso en el constructor (`protected` y `private`). Todo adaptado al contexto de la plataforma de cursos y calificaciones:

```typescript
// === polimorfismo.ts ===

// Clase abstracta — no se puede instanciar directamente con 'new'
// Solo sirve como base estructural para las distintas entregas de la plataforma
abstract class Evaluacion {
  constructor(protected estudiante: string) {}

  // Métodos abstractos — CADA clase hija DEBE implementarlos a su manera obligatoriamente
  abstract calcularNotaFinal(): number;

  // Método concreto — se hereda exactamente igual para todas las subclases
  obtenerFichaCalificacion(): string {
    return `[${this.constructor.name}] Estudiante: ${this.estudiante} → ` +
           `Nota obtenida = ${this.calcularNotaFinal().toFixed(2)}/10`;
  }
}

class ExamenCuestionario extends Evaluacion {
  // Atributos privados declarados directamente en el constructor shorthand de TS
  constructor(
    estudiante: string, 
    private preguntasCorrectas: number, 
    private totalPreguntas: number
  ) {
    super(estudiante);
  }

  // Implementación única para cuestionarios automáticos
  calcularNotaFinal(): number { 
    if (this.totalPreguntas === 0) return 0;
    return (this.preguntasCorrectas / this.totalPreguntas) * 10; 
  }
}

class ProyectoCodigo extends Evaluacion {
  constructor(
    estudiante: string, 
    private notaFuncionalidad: number, 
    private notaDisenoDB: number
  ) {
    super(estudiante);
  }

  // Implementación única que promedia los dos indicadores técnicos del proyecto
  calcularNotaFinal(): number { 
    return (this.notaFuncionalidad + this.notaDisenoDB) / 2; 
  }
}

class ForoDiscusion extends Evaluacion {
  constructor(
    estudiante: string, 
    private cantidadAportes: number, 
    private interaccionesCalidad: number
  ) {
    super(estudiante);
  }

  // Implementación única basada en la participación activa en el foro de debate
  calcularNotaFinal(): number {
    const base = this.cantidadAportes * 2.5;
    const extra = this.interaccionesCalidad * 1.25;
    const total = base + extra;
    return total > 10 ? 10 : total; // El tope máximo de la plataforma es 10
  }
}

console.log("=== POLIMORFISMO EN TYPESCRIPT ===\n");

// Un array fuertemente tipado como Evaluacion[] — acepta cualquier clase hija
const libroCalificaciones: Evaluacion[] = [
  new ExamenCuestionario("Karla Mosquera", 18, 20),
  new ProyectoCodigo("Mateo Olmedo", 9.5, 8.0),
  new ForoDiscusion("Ana Pérez", 3, 2),
  new ExamenCuestionario("Luis Gómez", 12, 20),
];

// POLIMORFISMO: El bucle llama a 'obtenerFichaCalificacion()' de forma transparente.
// TypeScript se encarga de ejecutar el 'calcularNotaFinal()' correcto de cada objeto.
for (const entrega of libroCalificaciones) {
  console.log(`  ${entrega.obtenerFichaCalificacion()}`);
}

// Calcular la nota acumulada de todas las actividades usando reduce
const sumaNotas = libroCalificaciones.reduce((acc, evalObjeto) => acc + evalObjeto.calcularNotaFinal(), 0);
console.log(`\n  Suma de notas del grupo: ${sumaNotas.toFixed(2)}`);

// const baseInvalida = new Evaluacion("Carlos");  // ❌ Error de TS: No se puede crear una instancia de una clase abstracta.

```