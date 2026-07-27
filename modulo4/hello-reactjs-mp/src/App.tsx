// src/App.tsx
import CourseCatalogList from './components/CourseCatalogList'
import CourseCard from './components/CourseCard'

interface Course {
  id: number
  name: string
  price: number
  outOfStock?: boolean
  category?: string
}

const catalog: Course[] = [
  { id: 1, name: 'Fundamentos de React', price: 89.99, category: 'Desarrollo Web' },
  { id: 2, name: 'TypeScript Avanzado', price: 349.99, category: 'Desarrollo Web' },
  { id: 3, name: 'Diseño UI/UX Moderno', price: 29.99, outOfStock: false, category: 'Diseño' },
  { id: 4, name: 'Backend con Node.js', price: 59.99, category: 'Desarrollo Web' },
  { id: 5, name: 'Bases de Datos SQL', price: 39.99, category: 'Base de Datos' },
]

export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <CourseCard
        title="Bienvenido a la plataforma"
        description="Encuentra los mejores cursos para tu formación profesional"
        highlighted
        price={1000}
      />

      <CourseCard 
        title="Curso destacado del día" 
        description="TypeScript Avanzado con 20% de descuento" 
      />

      <CourseCard title="Nuevos Cursos de la Semana" />

      <CourseCatalogList courses={catalog} title="Catálogo de Cursos" />

      <CourseCatalogList courses={[]} />
    </main>
  )
}
