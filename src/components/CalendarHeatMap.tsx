import HeatMap from '@uiw/react-heat-map';
import { addDays, format, subDays } from 'date-fns'
import { useState } from 'react';

interface Props {
  habit: Habit;
}

export function CalendarHeatMap({ habit }: Props) {

  const values = habit.datesCompleted.map((date: Date) => {
    const formattedDate = format(date, 'yyyy/MM/d')
    return ({ date: formattedDate, count: 1 })
  })

  const startDate = subDays(new Date(), 97)
  const endDate = addDays(new Date(), 1)

  const [range] = useState(3)

  return (
    <div className='h-auto'>
      <HeatMap
        rectSize={16}
        value={values}
        weekLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
        startDate={startDate}
        endDate={endDate}
        legendCellSize={0}
        panelColors={{
          0: '#f1f5f9',
          1: '#0f172a'
        }}
        rectProps={{
          rx: range
        }}
      />
    </div>
  )
}