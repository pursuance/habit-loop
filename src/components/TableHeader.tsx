import { format, isToday } from 'date-fns'
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDateStore } from '@/zustandStores/DateStore';
import { ReturnToTodayButton } from '@/components/ReturnToTodayButton';

interface Props {
  dateList: Date[];
}

export function TableHeader({ dateList }: Props) {

  const [goBackADay, goForwardADay] = useDateStore((state) => [state.goBackADay, state.goForwardADay])

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
    <div className='flex'>
      <div className='w-8'></div>
      <div className='name-column flex'>
        name
        <ReturnToTodayButton />
        {isToday(dateList[0]) ?
          <div className='h-8 w-8 p-0'></div>
          :
          <Button asChild variant='ghost' className='h-8 w-8 p-0' onClick={goForwardADay}>
            <ChevronLeft className='h-4 w-4' />
          </Button>
        }
      </div>
      <Dates />
      <div>
        <Button asChild variant='ghost' className='h-8 w-8 p-0' onClick={goBackADay}>
          <ChevronRight className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}