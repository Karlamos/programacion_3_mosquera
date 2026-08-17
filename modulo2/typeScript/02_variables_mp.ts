// Con tipo explícito
const estudiante: string  = "Karla";
const horasEstudio: number  = 28;
const premium:   boolean = true;

// Sin tipo — TypeScript lo infiere automáticamente del valor
const estudiante2 = "Karla";   // TypeScript sabe que es string
const horasEstudio2 = 28;      // TypeScript sabe que es number
const premium2   = true;    // TypeScript sabe que es boolean