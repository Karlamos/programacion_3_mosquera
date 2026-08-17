// === primera-clase.ts ===

class Estudiante {
  // Atributos (Propiedades de la clase)
  nombre:      string;
  horasEstudio: number;

  // Constructor — se ejecuta automáticamente al crear el objeto con new
  constructor(nombre: string, horasEstudio: number) {
    this.nombre       = nombre;
    this.horasEstudio = horasEstudio;
  }

  // Métodos (Acciones que puede realizar la clase)
  mostrarProgreso(): string {
    return `Estudiante: ${this.nombre} | Tiempo acumulado: ${this.horasEstudio} horas de código.`;
  }

  registrarSesionEstudio(horas: number): void {
    this.horasEstudio += horas;
    console.log(`💻 ${this.nombre} sumó ${horas} horas de estudio a su perfil técnico.`);
  }
}

// Crear instancias (objetos reales) a partir de la clase usando 'new'
const alumno1 = new Estudiante("Karla Mosquera", 28);
const alumno2 = new Estudiante("Mateo Olmedo", 31);

// Ejecución y pruebas del flujo
console.log(alumno1.mostrarProgreso());
console.log(alumno2.mostrarProgreso());

// El estudiante registra un nuevo laboratorio o sesión práctica
alumno1.registrarSesionEstudio(4);

// Verificación del estado actualizado de la instancia
console.log(alumno1.mostrarProgreso());