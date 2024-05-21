import { isFirstDayOfMonth, format } from 'date-fns'
import { DateBox } from '@/components/HeatMap/DateBox'

interface Props {
  numberOfColumns: number;
  dates: Date[];
  datesCompleted: Date[];
}
  
export const DateColumns = ({ numberOfColumns, dates, datesCompleted }: Props) => {

  const DateColumn = ({ columnNumber }: { columnNumber: number }) => {

    let containsFirstOfMonth = false
  
    const dateBoxes = new Array(7).fill(undefined).map((_, index) => {
      
      const dateIndex = index + (7 * columnNumber)
      
      if (isFirstDayOfMonth(dates[dateIndex])) {
        containsFirstOfMonth = true
      }
  
      if (dates[dateIndex]){
        return (
          <DateBox 
            key={index} 
            date={dates[dateIndex]} 
            datesCompleted={datesCompleted}
          />
        )
      }
    })
  
    return (
      <div className='flex flex-col gap-0.5 mr-0.5'>
        <div className='h-5 w-4 mb-1'>
          {
            containsFirstOfMonth && format(dates[6 + (7 * columnNumber)], 'MMM')
          }
        </div>
        {dateBoxes}
      </div>
    )
  }


  return (
    <>
      {
        new Array(numberOfColumns).fill(undefined).map((_, index) => {
          return (
            <DateColumn key={index} columnNumber={index} />
          )
        })
      }
    </>
  )
}