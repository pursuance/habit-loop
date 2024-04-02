import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useHabitStore } from "@/zustandStores/HabitStore";

export function AddHabitRow() {

  const [addHabit] = useHabitStore((state) => [state.addHabit])

  const handleClick = () => {
    addHabit()
  }

  return (
    <div>
      <Button variant='ghost' className="gap-2 h-16 w-full border-b rounded-none justify-start" onClick={handleClick}>
        <PlusCircle />Add a Habit
      </Button>
    </div>
  )
}