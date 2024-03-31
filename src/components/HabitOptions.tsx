import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreVertical, Trash, Pencil } from "lucide-react"
import { useHabitStore } from "@/zustandStores/HabitStore"

interface Props {
  habit: Habit;
}

export function HabitOptions({ habit }: Props) {

  const { id } = habit

  const [habits, setHabits, updateHabit] = useHabitStore((state) => [
    state.habits, state.setHabits, state.updateHabit
  ])

  const makeEditable = () => {
    const updatedHabit = {...habit, editable: true}
    updateHabit(updatedHabit)
  }

  const deleteHabit = (id: string) => {
    if (habits) {
      const updatedHabits = habits.filter(habit => habit.id !== id)
      setHabits(updatedHabits)
    }
  }

  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="h-8 w-8 p-0">
        <span className="sr-only">Open menu</span>
        <MoreVertical className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
    <DropdownMenuItem onClick={makeEditable} className="cursor-pointer">
        <span className="flex items-center">
          <Pencil className="h-4 w-4 mr-1"/>
          <span className="text-gray-300 mr-1">|</span> Rename
        </span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => deleteHabit(id)} className="cursor-pointer">
        <span className="text-red-700 flex items-center">
          <Trash className="red h-4 w-4 mr-1"/>
          <span className="text-gray-300 mr-1">|</span> Delete
        </span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}