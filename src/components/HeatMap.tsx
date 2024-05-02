import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { useDateStore } from '@/zustandStores/DateStore';
import { subDays } from 'date-fns';

interface Props {
  habit: Habit;
}

export function HeatMap({ habit }: Props) {
  const [endDate] = useDateStore((state) => [state.startDate])
  const startDate = subDays(endDate, 90)
  
  const values = habit.datesCompleted.map((date) => {
    return (
      { date, count: 1 }
    )
  })

  return(
    <CalendarHeatmap 
      startDate={startDate}
      endDate={endDate}
      values={values}
    />
  )
}