import HeatMap from '@uiw/react-heat-map';
import { format, subDays } from 'date-fns'
import { useLocation } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function CalendarHeatMap() {

  const { state: { habit } = {} } = useLocation()

  const values = habit.datesCompleted.map((date: Date) => {
    const formattedDate = format(date, 'yyyy/MM/d')
    return ({ date: formattedDate, count: 1 })
  })

  const startDate = subDays(new Date(), 90)

  return (
    <div className='flex justify-center'>
      <Card className='w-min px-6 py-4 mt-10'>
        <HeatMap 
          value={values}
          weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
          startDate={startDate}
        />
      </Card>
    </div>
  )
}