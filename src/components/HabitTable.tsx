import { useHabitStore } from '@/zustandStores/HabitStore'
import { useDateStore } from '@/zustandStores/DateStore'
import { TableHeader } from '@/components/TableHeader'
import { subDays } from 'date-fns'
import { useEffect } from 'react'
import { AddHabitRow } from '@/components/AddHabitRow'
import { HabitTableBody } from '@/components/HabitTableBody'

export default function HabitTable() {

  const [habits, setHabits] = useHabitStore((state) => [state.habits, state.setHabits])

  // load habits from local storage
  useEffect(() => {
    const localStorageHabits = localStorage.getItem('habits')
    if (localStorageHabits) {
      setHabits(JSON.parse(localStorageHabits))
    }
  }, [])

  // update habits in local storage when habits state is changed
  useEffect(() => {
    if (habits) {
      localStorage.setItem('habits', JSON.stringify(habits))
    }
  }, [habits])

  const [startDate, numberOfDays] = useDateStore((state) => [
    state.startDate, state.numberOfDays
  ])
  const dateList = Array(numberOfDays).fill(undefined).map((_, index) => 
    subDays(startDate, index)
  )

  return(
    <div className='flex flex-col items-center w-5/6 mx-auto mt-10 border border-gray-400 rounded-2xl'>
      <div className='flex flex-col'>
        <TableHeader dateList={dateList} />
        <HabitTableBody dateList={dateList} />
      </div>
      <AddHabitRow />
    </div>
  )
}