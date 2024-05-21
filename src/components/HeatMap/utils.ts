import { getDay, subDays, addDays, compareAsc } from 'date-fns'

export const getDateArray = () => {
    const today = new Date()
    const dayOfTheWeek = getDay(today)
    let date = subDays(today, 92 + dayOfTheWeek)
    const dates: Date[] = new Array()
  
    while(compareAsc(date, today) === -1) {
      date = addDays(date, 1)
      dates.push(date)
    }
    return dates
  }