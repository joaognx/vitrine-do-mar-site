import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Initial from './pages/initial/index.jsx'
import SobreNos from './pages/sobrenos/index.jsx'
import Trocas from './pages/trocas/index.jsx'
import Contato from './pages/contato/index.jsx'
import Privacidade from './pages/privacidade/index.jsx'
import Categoria from './pages/categorias/index.jsx'
import PaginaBusca from './pages/busca/index.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Initial />
  },

  {
    path: "/sobre",
    element: <SobreNos />
  },

  {
    path: "/troca",
    element: <Trocas />
  },

  {
    path: "/ctt",
    element: <Contato />
  },

  {
    path: "/priv",
    element: <Privacidade />
  },

  {
    path: "/categoria/:nome",
    element: <Categoria />
  },

  {
    path: "/busca/:termo",
    element:  <PaginaBusca/>
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
