import { Checkbox } from '@/components/ui/checkbox'
import { useHabitStore } from '@/zustandStores/HabitStore'
import { useDateStore } from '@/zustandStores/DateStore'
import { isSameDay } from 'date-fns'

interface RowProps {
  habit: Habit;
  dateList: Date[];
}

interface SquareProps {
  date: Date;
}

export function HabitRow({ habit, dateList }: RowProps) {

  const { id, name} = habit
  let { datesCompleted } = habit
  
  const [updateHabit] = useHabitStore((state) => [state.updateHabit])

  const [startDate, numberOfDays] = useDateStore((state) => [
    state.startDate, state.numberOfDays
  ])

  const HabitSquare = ({ date }: SquareProps) => {

    const isCompleted = () => {
     for (const dateCompleted of datesCompleted) {
      if (isSameDay(dateCompleted, date)) return true
     }
     return false
    }

    const handleCheckedChange = (checked: boolean) => {
      checked?
        datesCompleted = [date, ...datesCompleted]
        :
        datesCompleted = datesCompleted.filter(dateCompleted => !isSameDay(date, dateCompleted))

      const updatedHabit = {...habit, datesCompleted}
      updateHabit(updatedHabit)
    }

    return (
      <div>
        <Checkbox className='h-7 w-7' checked={isCompleted()} onCheckedChange={handleCheckedChange} />
      </div>
    )
  }

  const HabitSquares = () => {
    return (
      <>
        {dateList.map((date, index) => <HabitSquare key={index} date={date} /> )}
      </>
    )
  }

  return (
    <>
      <div>dnd</div>
      <div>{name}</div>
      <HabitSquares />
      <div>options</div>
    </>
  )
}