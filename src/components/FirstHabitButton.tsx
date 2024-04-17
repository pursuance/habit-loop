import { Button } from "@/components/ui/button";
import { useHabitStore } from "@/zustandStores/HabitStore";

export function FirstHabitButton() {

  const [addHabit] = useHabitStore((state) => [state.addHabit])
    
  return (
  <Button onClick={() => addHabit()}>
    Click Here to start tracking your first habit
  </Button>
  )
}