import { addDays, format, subDays } from 'date-fns'

interface Props {
  habit: Habit;
}

export function CalendarHeatMap({ habit }: Props) {

  const startDate = subDays(new Date(), 97)
  const endDate = addDays(new Date(), 1)

  const numberOfColumns = 14

  return (
    <div className='flex'>
      <DaysOfTheWeek />
      <DateColumns />
    </div>
  )
}

const DaysOfTheWeek = () => {
  const daysOfTheWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  return (
    <div className='flex flex-col text-right'>
      {
        daysOfTheWeek.map((dayOfTheWeek, index) => {
          return (
            <div key={index}>{dayOfTheWeek}</div>
          )
        })
      }
    </div>
  )
}

const DateColumns = () => {

  const dateBoxes = new Array(7).fill(undefined).map((_, index) => <DateBox key={index}/>)

  return (
    <div className='flex flex-col'>
      {dateBoxes}
    </div>
  )
}

const DateBox = () => {
  return (
    <div className='border-2 border-solid h-4 w-4 rounded'></div>
  )
}