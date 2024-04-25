import { useHabitStore } from '@/zustandStores/HabitStore'
import { useDateStore } from '@/zustandStores/DateStore'
import { TableHeader } from '@/components/TableHeader'
import { subDays } from 'date-fns'
import { useEffect, useLayoutEffect, useState } from 'react'
import { AddHabitRow } from '@/components/AddHabitRow'
import { HabitTableBody } from '@/components/HabitTableBody'
import { useWindowSize } from 'usehooks-ts'
import { LandingPage } from '@/components/LandingPage'

export function HabitTable() {

  const [habits, setHabits] = useHabitStore((state) => [state.habits, state.setHabits])
  const [startDate, numberOfDays, setNumberOfDays] = useDateStore((state) => [
    state.startDate, state.numberOfDays, state.setNumberOfDays
  ])
  const dateList = Array(numberOfDays).fill(undefined).map((_, index) => 
    subDays(startDate, index)
  )

  const { width } = useWindowSize()
  const [mobile, setMobile] = useState(false)

  useLayoutEffect(() => {
    const newNumberOfDays = Math.round(width / 108)
    if (newNumberOfDays >= 7 && width > 768) {
      setNumberOfDays(newNumberOfDays)
    } else {
      setNumberOfDays(1)
    }
  }, [width])

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

  if (!habits || habits.length === 0) {
    return(
      <LandingPage />
    )
  } else {
    return (
      <div className='flex flex-col items-center mx-auto mt-10 border border-gray-400 rounded-2xl w-fit'>
        <div className='flex flex-col w-full px-14'>
          <TableHeader dateList={dateList} />
          <HabitTableBody dateList={dateList} />
        </div>
        <AddHabitRow />
        {width}
      </div>
    )
  }
}