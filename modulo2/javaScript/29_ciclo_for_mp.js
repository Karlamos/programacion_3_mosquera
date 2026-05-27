console.log("Ciclo for")
for(let i = 0; i < 5; i++){
    console.log(i);
}

const tecnologías = ["JavaScript", "Python", "Bases de Datos"]
for (let i = 0; i < tecnologías.length; i++){
    console.log(tecnologías[i]);
}

for(let tech of tecnologías){
    console.log(tech);
}

// Ejemplo — reporte de cursos en la plataforma con alertas por posición
const catálogoCursos = [
    { codigo: "JS01", nombre: "JavaScript",  estudiantes: 2  },
    { codigo: "PY02", nombre: "Python",      estudiantes: 15 },
    { codigo: "DB03", nombre: "PostgreSQL",  estudiantes: 0  },
    { codigo: "DJ04", nombre: "Django",      estudiantes: 7  },
    { codigo: "DO05", nombre: "Odoo Core",   estudiantes: 1  },
  ];
  
  const REGISTRO_BAJO = 3;
  
  console.log("=== Reporte de revisión de cursos ===");
  console.log(`${"#".padEnd(4)} ${"Código".padEnd(6)} ${"Curso".padEnd(12)} Alumnos Estado`);
  console.log("─".repeat(48));
  
  for (let i = 0; i < catálogoCursos.length; i++) {
    const curso  = catálogoCursos[i];
    const numero = String(i + 1).padStart(2, "0");
  
    let estado;
    if (curso.estudiantes === 0) {
      estado = "🔴 SIN ALUMNOS";
    } else if (curso.estudiantes <= REGISTRO_BAJO) {
      estado = "🟡 REVISIÓN";
    } else {
      estado = "🟢 Activo";
    }
  
    console.log(
      `${numero}.  ${curso.codigo.padEnd(6)} ${curso.nombre.padEnd(12)} ` +
      `${String(curso.estudiantes).padStart(3)}u   ${estado}`
    );
  }
  // === Reporte de revisión de cursos ===
  // #    Código Curso        Alumnos Estado
  // ────────────────────────────────────────────────
  // 01.  JS01   JavaScript     2u   🟡 REVISIÓN
  // 02.  PY02   Python        15u   🟢 Activo
  // 03.  DB03   PostgreSQL     0u   🔴 SIN ALUMNOS
  // 04.  DJ04   Django         7u   🟢 Activo
  // 05.  DO05   Odoo Core      1u   🟡 REVISIÓN



  // Ejemplo — resumen de horas de estudio por alumno del grupo
const reporteProgreso = [
    { estudiante: "Mateo",  horas: 3200, tecnologia: "Django" },
    { estudiante: "Ana",    horas: 4750, tecnologia: "React"  },
    { estudiante: "Luis",   horas: 2100, tecnologia: "Odoo"   },
    { estudiante: "Sofía",  horas: 5300, tecnologia: "Python" },
    { estudiante: "Carlos", horas: 1800, tecnologia: "MySQL"  },
  ];
  
  const META_MINUTOS_ESTUDIO = 3000;
  let totalMinutosGeneral    = 0;
  let estudiantesEnMeta      = 0;
  
  console.log("=== Resumen de tiempo de estudio ===");
  
  for (const registro of reporteProgreso) {
    totalMinutosGeneral += registro.horas;
  
    const cumpleMeta = registro.horas >= META_MINUTOS_ESTUDIO;
    if (cumpleMeta) {
      estudiantesEnMeta++;
    }
  
    const indicador = cumpleMeta ? "✅" : "⚠️";
    console.log(
      `${indicador} ${registro.estudiante.padEnd(8)} ` +
      `[${registro.tecnologia.padEnd(6)}]  ` +
      `${registro.horas.toLocaleString()} min`
    );
  }
  
  console.log("─".repeat(42));
  console.log(`Tiempo total acumulado: $${totalMinutosGeneral.toLocaleString()} min`);
  console.log(`En meta (≥${META_MINUTOS_ESTUDIO}min): ${estudiantesEnMeta}/${reporteProgreso.length} estudiantes`);
  // ✅ Mateo    [Django]  3,200 min
  // ✅ Ana      [React ]  4,750 min
  // ⚠️ Luis     [Odoo  ]  2,100 min
  // ✅ Sofía    [Python]  5,300 min
  // ⚠️