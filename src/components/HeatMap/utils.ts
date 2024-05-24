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

  datesCompleted = datesCompleted.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())

  let streak = <Streak> { length: 1, } 

  let streaks: Streak[] = []

  for (let i = 0; i < datesCompleted.length; i++) {
    if (isSameDay(subDays(datesCompleted[i], 1), datesCompleted[i + 1])) {
      streak = {...streak, length: streak.length + 1}
    } else {
      streak.startDate = datesCompleted[i]
      streak.endDate = addDays(datesCompleted[i], streak.length - 1)
      streaks.push(streak)
      streak = {...streak, length: 1}
    }
  }

  return streaks.filter(streak => streak.length > 1)
}