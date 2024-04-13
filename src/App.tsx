import { HabitTable } from '@/components/HabitTable'
import { Header } from '@/components/Header'
import { ThemeProvider } from '@/components/theme-provider'

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <HabitTable />
    </ThemeProvider>
  )
}