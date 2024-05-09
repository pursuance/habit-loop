import { CalendarHeatMap } from "@/components/CalendarHeatMap";
import { useLocation } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function StatsPage() {

  const { state: { habit } = {} } = useLocation()

  return (
    <div className='flex justify-center'>
      <Card className='px-6 pt-4 mt-10'>
        <CalendarHeatMap habit={habit}/>
      </Card>
    </div>
  )
}