// === encapsulamiento.ts ===

class Instructor {
  // Atributos privados — protegidos contra cambios directos externos
  private _nombre:            string;
  private _horasDictadas:     number;
  private _emailInstitucional: string;

  constructor(nombre: string, horasDictadas: number, email: string) {
    this._nombre            = nombre;
    this._horasDictadas     = horasDictadas;
    this._emailInstitucional = email;
  }

  // Getters — permiten LEER los valores de forma segura
  get nombre():             string { return this._nombre; }
  get horasDictadas():      number { return this._horasDictadas; }
  get emailInstitucional(): string { return this._emailInstitucional; }

  // Setters — permiten ESCRIBIR e interceptar los cambios con reglas de validación
  set nombre(valor: string) {
    if (valor.trim().length < 2) {
      throw new Error("El nombre del instructor debe tener al menos 2 caracteres.");
    }
    this._nombre = valor.trim();
  }

  set horasDictadas(valor: number) {
    if (valor < 0) {
      throw new Error("El registro de horas dictadas no puede ser negativo.");
    }
    this._horasDictadas = valor;
  }

  set emailInstitucional(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("La dirección de correo institucional no tiene un formato válido.");
    }
    this._emailInstitucional = valor.toLowerCase();
  }

  obtenerFicha(): string {
    return `Instructor: ${this._nombre} | Horas cargadas: ${this._horasDictadas} hrs | Contacto: ${this._emailInstitucional}`;
  }
}

console.log("=== ENCAPSULAMIENTO DE PERSONAL DOCENTE ===\n");
const tutor = new Instructor("Mateo Olmedo", 45, "Mateo@Plataforma.COM");
console.log(tutor.obtenerFicha());

// Usar los setters con validación automática
tutor.horasDictadas = 50;
tutor.emailInstitucional = "mateo.olmedo@plataforma.com";
console.log(`Horas actualizadas en el sistema: ${tutor.horasDictadas} hrs`);

// Probando el control de errores de los setters
try {
  tutor.horasDictadas = -10; // Intento no válido
} catch (error) {
  console.log(`[Validación de Horas] Error: ${(error as Error).message}`);
}

try {
  tutor.emailInstitucional = "correo_sin_arroba.com"; // Intento no válido
} catch (error) {
  console.log(`[Validación de Email] Error: ${(error as Error).message}`);
}