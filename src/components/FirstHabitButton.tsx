import { Button } from "@/components/ui/button";
import { useHabitStore } from "@/zustandStores/HabitStore";
import { CirclePlus } from "lucide-react";

export function FirstHabitButton() {

  const [addHabit] = useHabitStore((state) => [state.addHabit])
    
  return (
    <Button 
      onClick={() => addHabit()} 
      variant='outline' 
      className="flex flex-col h-44 w-72 gap-6 rounded-none"
    >
      <CirclePlus className="h-16 w-16" />
      Click Here to start tracking your first habit
    </Button>
  )
}