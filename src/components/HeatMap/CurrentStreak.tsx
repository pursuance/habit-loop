import { getStreaks } from "./utils";
import { format } from 'date-fns'

interface Props {
  habit: Habit;
}

export const CurrentStreak = ({ habit }: Props) => {

  const { datesCompleted } = habit

  const streaks = getStreaks(datesCompleted)

  return (
    <h1>
      {
        streaks?.map(streak => <p>{streak.length}, 
        {format(streak.startDate, 'MM/dd')} - {format(streak.endDate, 'MM/dd')}</p>)
      }
    </h1>
  )
}