import HeatMap from '@uiw/react-heat-map';
import { format, subDays } from 'date-fns'

interface Props {
  habit: Habit;
}

export function CalendarHeatMap({ habit }: Props) {

  const values = habit.datesCompleted.map((date) => {
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