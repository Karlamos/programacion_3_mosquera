// src/components/CourseCatalogList.tsx

interface Course {
  id: number
  name: string
  price: number
  outOfStock?: boolean
  category?: string
}

interface CourseCatalogListProps {
  courses: Course[]
  title?: string
}

export default function CourseCatalogList({
  courses,
  title = 'Catálogo de Cursos',
}: CourseCatalogListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {courses.length === 0 && (
        <p style={{ color: '#999' }}>No hay cursos disponibles.</p>
      )}

      <ul style={{ listStyle: 'disc', padding: 0 }}>
        {courses.map((course) => (
          <li
            key={course.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
              opacity: course.outOfStock ? 0.4 : 1,
            }}
          >
            <span>
              {course.name}
              {course.outOfStock && (
                <em style={{ marginLeft: 8, fontSize: 12, color: '#e00' }}>
                  Cupo lleno
                </em>
              )}
              {course.category && (
                <em style={{ marginLeft: 12, fontSize: 13, color: '#666' }}>
                  {course.category}
                </em>
              )}
            </span>
            <strong>${course.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
      <footer style={{ marginTop: 8, fontSize: 13, color: '#888' }}>
        {courses.length} curso(s)
      </footer>
    </section>
  )
}