import { DaysOfTheWeek } from '@/components/HeatMap/DaysOfTheWeek';
import { DateColumns } from '@/components/HeatMap/DateColumns';
import { getDateArray } from './utils';

interface Props {
  habit: Habit;
}

export function CalendarHeatMap({ habit }: Props) {

  const { datesCompleted } = habit
  const dates = getDateArray()
  const numberOfColumns = 14

  return (
    <div className='flex'>
      <DaysOfTheWeek 
        labels={[
          'Sun','Mon','Tue','Wed','Thu','Fri','Sat'
        ]}
      />
      <DateColumns 
        numberOfColumns={numberOfColumns} 
        dates={dates} 
        datesCompleted={datesCompleted}
      />
    </div>
  )
}