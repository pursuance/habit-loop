import { useDateStore } from "@/zustandStores/DateStore";
import { subDays, compareAsc } from "date-fns";
import { Button } from "@/components/ui/button";
import { ChevronFirst } from "lucide-react";

export function ReturnToTodayButton() {
  const [startDate, goToToday] = useDateStore((state) => [
    state.startDate, state.goToToday
  ])

  const today = new Date()

  const appearanceDate = subDays(today, 2)

  return (
    <>
      {(compareAsc(startDate, appearanceDate) === -1) ?
        <Button asChild variant='ghost' className="h=8 w-8 p-0" onClick={goToToday}>
          <ChevronFirst className="h-8 w-8" />
        </Button>
        :
        <div className="h-8 w-8 p-0"></div>
      }
    </>
  )
}