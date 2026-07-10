// src/router/privateRoutes.tsx
import { Route } from 'react-router-dom'
import DashboardHomePage from '@/pages/private/DashboardHomePage'
import CategoriesPage from '@/pages/private/CategoriesPage'
import PostsPage from '@/pages/private/PostsPage'
import ProfilePage from '@/pages/private/ProfilePage'

export const PrivateRoutes = () => {
  return (
    <>
      <Route path="/dashboard" element={<DashboardHomePage />} />
      <Route path="/categorias" element={<CategoriesPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/perfil" element={<ProfilePage />} />
    </>
  )
}