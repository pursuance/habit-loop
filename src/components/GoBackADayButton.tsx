import { Button } from "@/components/ui/button"
import { useDateStore } from "@/zustandStores/DateStore"
import { ChevronLeft } from "lucide-react"
import { isToday } from 'date-fns'

export function GoBackADayButton() {

  const [startDate, goForwardADay] = useDateStore((state) => [
    state.startDate, state.goForwardADay
  ])

  return (
    <>
    {isToday(startDate) ?
      <div className="h-8 w-8"></div>
      :
      <Button asChild variant='ghost' className='h-8 w-8 p-0 cursor-pointer' onClick={goForwardADay}>
        <ChevronLeft className='h-4 w-4' />
      </Button>
    }
    </>
  )
}