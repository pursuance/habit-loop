import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { App } from '@/routes/App.tsx'
import { ThemeProvider } from '@/components/theme-provider.tsx'
import { HabitTable } from '@/components/HabitTable'
import { StatsPage } from '@/routes/StatsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HabitTable />
      },
      {
        path: '/stats',
        element: <StatsPage />
      } 
    ]
  }
  
    
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
