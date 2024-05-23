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

export const getStreaks = (datesCompleted: Date[]) => {

  let streak = 1
  let streaks = []
  datesCompleted = datesCompleted.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())

  for (let i = 0; i < datesCompleted.length; i++) {
    if (isSameDay(subDays(datesCompleted[i], 1), datesCompleted[i + 1])) {
      streak += 1
    } else {
      streaks.push(streak)
      streak = 1
    }
  }

  return streaks.filter(streak => streak > 1)
}