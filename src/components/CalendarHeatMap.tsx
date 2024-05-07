import HeatMap from '@uiw/react-heat-map';
import { format, subDays } from 'date-fns'
import { useLocation } from 'react-router-dom';

export function CalendarHeatMap() {

  const { state: { habit } = {} } = useLocation()

  const values = habit.datesCompleted.map((date: Date) => {
    const formattedDate = format(date, 'yyyy/MM/d')
    return ({ date: formattedDate, count: 1 })
  })

  const startDate = subDays(new Date(), 90)

  return (
    <HeatMap 
      value={values}
      weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
      startDate={startDate}
    />
  )
}