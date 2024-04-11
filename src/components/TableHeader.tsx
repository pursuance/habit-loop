import { format } from 'date-fns'
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
    <div className='flex border-b py-2'>

      <div className='name-column flex items-center'>
        <span className='font-semibold mr-auto'>Habit</span>
        <ReturnToTodayButton />
        <GoBackADayButton />
      </div>
      
      <div className='flex items-center grow'> 
        <Dates />
        <GoForwardADayButton />
      </div>
      
    </div>
  )
}