import { Checkbox } from '@/components/ui/checkbox'
import { useHabitStore } from '@/zustandStores/HabitStore'
import { isSameDay } from 'date-fns'
import { HabitOptions } from '@/components/HabitOptions'
import { ChangeHabitNameField } from '@/components/ChangeHabitNameField';
import { Button } from '@/components/ui/button';
import { Grip } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface RowProps {
  habit: Habit;
  dateList: Date[];
}

interface SquareProps {
  date: Date;
}

export function HabitRow({ habit, dateList }: RowProps) {

  const { id, name, datesCompleted, editable } = habit
  
  const [updateHabit] = useHabitStore((state) => [state.updateHabit])

  const { setNodeRef, transform, transition, attributes, listeners } = useSortable({ id })

  const draggableStyle = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  const HabitSquare = ({ date }: SquareProps) => {

    const isCompleted = () => {
     for (const dateCompleted of datesCompleted) {
      if (isSameDay(dateCompleted, date)) return true
     }
     return false
    }

    const handleCheckedChange = (checked: boolean) => {
      let newDatesCompleted
      checked?
        newDatesCompleted = [date, ...datesCompleted]
        :
        newDatesCompleted = datesCompleted.filter(dateCompleted => !isSameDay(date, dateCompleted))

      const updatedHabit = {...habit, datesCompleted: newDatesCompleted}
      updateHabit(updatedHabit)
    }

    return (
      <div className='check-column pl-4 flex'>
        <Checkbox className='h-7 w-7 self-center' checked={isCompleted()} onCheckedChange={handleCheckedChange} />
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
    <div className='flex items-center border-b py-2 relative' ref={setNodeRef} style={draggableStyle}>
      <div className='absolute -left-8'>
        <Button variant='ghost' className='h-8 w-8 p-0' {...attributes} {...listeners}>
          <Grip className='h-4 w-4' />
        </Button>
      </div>
      <div className='name-column mr-auto'>
        {
          editable?
          <ChangeHabitNameField habit={habit} /> : name
        }
      </div>
      <div className='flex'>
        <HabitSquares />
      </div>
      <HabitOptions habit={habit} />
    </div>
  )
}