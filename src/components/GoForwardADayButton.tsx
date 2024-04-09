import { Button } from '@/components/ui/button'
import { useDateStore } from '@/zustandStores/DateStore'
import { ChevronRight } from 'lucide-react'

export function GoForwardADayButton() {

  const [goBackADay] = useDateStore((state) => [state.goBackADay])

  return (
    <Button asChild variant='ghost' className='h-8 w-8 p-0' onClick={goBackADay}>
      <ChevronRight className='h-4 w-4' />
    </Button>
  )
}