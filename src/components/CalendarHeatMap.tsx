import { subDays, addDays, compareAsc, isSameDay, getDay, isFirstDayOfMonth, format } from 'date-fns'

interface Props {
  habit: Habit;
}

export function CalendarHeatMap({ habit }: Props) {

  const { datesCompleted } = habit
  const dates = getDateArray()
  const numberOfColumns = 14

  return (
    <div className='flex'>
      <DaysOfTheWeek />
      <DateColumns numberOfColumns={numberOfColumns} dates={dates} datesCompleted={datesCompleted}/>
    </div>
  )
}

const getDateArray = () => {
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

const DaysOfTheWeek = () => {
  const daysOfTheWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  return (
    <div className='flex flex-col text-right'>
      <div className='h-4'></div>
      {
        daysOfTheWeek.map((dayOfTheWeek, index) => {
          return (
            <div key={index} className='h-4'>
              {dayOfTheWeek}
            </div>
          )
        })
      }
    </div>
  )
}

const DateColumn = ({ columnNumber, dates, datesCompleted }: {columnNumber: number, dates: Date[], datesCompleted: Date[]}) => {

  let containsFirstOfMonth = false

  const dateBoxes = new Array(7).fill(undefined).map((_, index) => {
    const dateIndex = index + (7 * columnNumber)
    
    if (isFirstDayOfMonth(dates[dateIndex])) {
      containsFirstOfMonth = true
    }

    if (dates[dateIndex]){
      return (
        <DateBox key={index} date={dates[dateIndex]} datesCompleted={datesCompleted}/>
      )
    }
  })

  return (
    <div className='flex flex-col'>
      {
        containsFirstOfMonth ? 
        <div>
          {
            format(dates[6 + (7 * columnNumber)], 'MMM')
          }
        </div>
        :
        <div className='h-4'></div>
      }
      {dateBoxes}
    </div>
  )
}

const DateColumns = ({ numberOfColumns, dates, datesCompleted }: {numberOfColumns: number, dates: Date[], datesCompleted: Date[]}) => {

  const dateColumns = new Array(numberOfColumns).fill(undefined).map((_, index) => <DateColumn key={index} columnNumber={index} dates={dates} datesCompleted={datesCompleted}/>)

  return (
    <>
      {dateColumns}
    </>
  )
}

const DateBox = ({ date, datesCompleted }: { date: Date, datesCompleted: Date[] }) => {

  const isCompleted = () => {
    for (const dateCompleted of datesCompleted) {
      if (isSameDay(dateCompleted, date)) return true
    }
    return false
  }

  return (
    <>
      {isCompleted() ?
        <div className='border-2 border-solid h-4 w-4 rounded bg-black text-sm'>
          {format(date, "d")}
        </div>
        :
        <div className='border-2 border-solid h-4 w-4 rounded text-sm'>
          {format(date, "d")}
        </div>
      }
    </>      
  )
}