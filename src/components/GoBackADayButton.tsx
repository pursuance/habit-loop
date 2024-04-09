import { Button } from "@/components/ui/button"
import { useDateStore } from "@/zustandStores/DateStore"
import { ChevronLeft } from "lucide-react"

export function GoBackADayButton() {

  const [goForwardADay] = useDateStore((state) => [state.goForwardADay])

  return (
    <Button asChild variant='ghost' className='h-8 w-8 p-0' onClick={goForwardADay}>
      <ChevronLeft className='h-4 w-4' />
    </Button>
  )
}