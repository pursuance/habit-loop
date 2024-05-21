import { isSameDay, format } from "date-fns"

interface Props {
    date: Date;
    datesCompleted: Date[];
}

export const DateBox = ({ date, datesCompleted }: Props) => {
  
    const isCompleted = () => {
      for (const dateCompleted of datesCompleted) {
        if (isSameDay(dateCompleted, date)) return true
      }
      return false
    }
  
    return (
      <>
        {isCompleted() ?
          <div className='h-6 w-6 flex justify-center items-center rounded text-sm cursor-default bg-lime-700 text-white'>
            {format(date, 'd')}
          </div>
          :
          <div className='h-6 w-6 flex justify-center items-center rounded text-sm cursor-default bg-gray-400 text-white'>
            {format(date, 'd')}
          </div>
        }
      </>      
    )
  }