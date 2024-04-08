import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useHabitStore } from "@/zustandStores/HabitStore";

export function AddHabitRow() {

  const [addHabit] = useHabitStore((state) => [state.addHabit])

  const handleClick = () => {
    addHabit()
  }

  return (
    <div className="w-full">
      <Button variant='ghost' className="gap-2 h-16 w-full rounded-b-2xl justify-start px-6" onClick={handleClick}>
        <PlusCircle />Add a Habit
      </Button>
    </div>
  )
}