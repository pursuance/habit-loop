import { useHabitStore } from '@/zustandStores/HabitStore'
import { useDateStore } from '@/zustandStores/DateStore'
import { TableHeader } from '@/components/TableHeader'
import { HabitRow } from '@/components/HabitRow'
import { subDays } from 'date-fns'
import { useEffect } from 'react'

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
  const numberOfColumns = numberOfDays + 3

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr '.repeat(numberOfColumns),
  }

  return(
    <div style={gridStyle}>
      <div>{numberOfColumns} columns</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <TableHeader dateList={dateList} />
      {
        habits?.map((habit) => <HabitRow key={habit.id} habit={habit} dateList={dateList} />)
      }
    </div>
  )
}