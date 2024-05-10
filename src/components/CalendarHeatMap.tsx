import HeatMap from '@uiw/react-heat-map';
import { format, subDays } from 'date-fns'

interface Props {
  habit: Habit;
}

export function CalendarHeatMap({ habit }: Props) {

  const values = habit.datesCompleted.map((date: Date) => {
    const formattedDate = format(date, 'yyyy/MM/d')
    return ({ date: formattedDate, count: 1 })
  })

  const startDate = subDays(new Date(), 90)

  return (
    <div className='h-auto'>
      <HeatMap
        rectSize={16}
        value={values}
        weekLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
        startDate={startDate}
        legendCellSize={0}
      />
    </div>
  )
}