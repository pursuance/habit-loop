import { format, isToday } from 'date-fns'
import { ReturnToTodayButton } from '@/components/ReturnToTodayButton';
import { GoBackADayButton } from '@/components/GoBackADayButton';
import { GoForwardADayButton } from '@/components/GoForwardADayButton';

interface Props {
  dateList: Date[];
}

export function TableHeader({ dateList }: Props) {

  const Dates = () => {
    return (
      <>
        {
          dateList.map((date, index) => 
            <div className='check-column flex flex-col' key={index}>
              <div>{format(date, 'E')}</div>
              <div>{format(date, 'd')}</div>
            </div>
          )
        }
      </>
    )
  }

  return (
    <div className='flex border-b py-2 items-center'>
      <div className='name-column mr-auto'>
        <span className='font-semibold'>Habit</span>
      </div>
      <ReturnToTodayButton />
      {isToday(dateList[0]) ?
        <div className='h-8 w-8 p-0'></div>
        :
        <GoBackADayButton />
      }
      <div className='flex items-center'> 
        <Dates />
        <GoForwardADayButton />
      </div>
    </div>
  )
}