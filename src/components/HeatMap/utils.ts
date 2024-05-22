import { getDay, subDays, addDays, compareAsc, isSameDay } from 'date-fns'

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

export const getCurrentStreak = (datesCompleted: Date[]) => {
  let date = subDays(new Date(), 1)
  let streak = 0

  const isCompleted = (date: Date) => {
    for (const dateCompleted of datesCompleted) {
      if (isSameDay(dateCompleted, date)) return true
    }
    return false
  }
  
  if (isCompleted(new Date())) {
    streak += 1;
  }

  while (isCompleted(date)) {
    streak += 1
    date = subDays(date, 1)
  }

  return streak
}

