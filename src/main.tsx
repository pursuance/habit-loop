import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { App } from '@/routes/App.tsx'
import { ThemeProvider } from '@/components/theme-provider.tsx'
import { CalendarHeatMap } from '@/components/CalendarHeatMap'
import { HabitTable } from '@/components/HabitTable'

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
        path: 'habits/:habitId',
        element: <CalendarHeatMap />
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
