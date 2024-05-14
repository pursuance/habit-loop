import { subDays, addDays, compareAsc, format } from 'date-fns'

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
  let date = subDays(today, 98)
  const dates: Date[] = new Array()

  while(compareAsc(date, today) === -1) {
    dates.push(date)
    date = addDays(date, 1)
  }

  return dates
}

const DaysOfTheWeek = () => {
  const daysOfTheWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  return (
    <div className='flex flex-col text-right'>
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

  const dateBoxes = new Array(7).fill(undefined).map((_, index) => <DateBox key={index} date={dates[index + (7 * columnNumber)]} datesCompleted={datesCompleted}/>)

  return (
    <div className='flex flex-col'>
      {columnNumber}{dateBoxes}
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
  return (
    <>
      {datesCompleted?.includes(date) ?
        <div className='border-2 border-solid h-4 w-4 rounded bg-black'>{date.toString()}</div>
        :
        <div className='border-2 border-solid h-4 w-auto rounded'>{format(date, 'MM/dd')}</div>
      }
    </>      
  )
}