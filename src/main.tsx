import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home.tsx'
import { Projects } from './Pages/Projects.tsx'
import { About } from './Pages/About.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/about",
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
