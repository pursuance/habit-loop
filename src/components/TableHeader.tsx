import { format, isToday } from 'date-fns'
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDateStore } from '@/zustandStores/DateStore';

interface Props {
  dateList: Date[];
}

export function TableHeader({ dateList }: Props) {

  const formatDate = (date: Date) => format(date, 'EEE do')

  const [goBackADay, goForwardADay] = useDateStore((state) => [state.goBackADay, state.goForwardADay])

  const Dates = () => {
    return (
      <>
        {
          dateList.map((date, index) => 
            <div key={index}>{formatDate(date)}</div>
          )
        }
      </>
    )
  }

  return (
    <div className='flex'>
      <div>dnd</div>
      <div>
        name
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