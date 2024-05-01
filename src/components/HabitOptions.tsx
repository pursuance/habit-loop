import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { MoreVertical, Pencil } from "lucide-react"
import { useHabitStore } from "@/zustandStores/HabitStore"
import { Trash } from "lucide-react"

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
    <AlertDialog>
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
          <DropdownMenuItem className="cursor-pointer">
          <AlertDialogTrigger asChild>
            <span className="text-red-700 flex items-center">
              <Trash className="red h-4 w-4 mr-1"/>
              <span className="text-gray-300 mr-1">|</span> Delete
            </span>
          </AlertDialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialogContent className="">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this Habit?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. 
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="w-5/6 md:w-fit">Cancel</AlertDialogCancel>
            <AlertDialogAction asChild={true}>
              <Button className="bg-red-700 hover:bg-red-900 text-white w-5/6 md:w-fit" onClick={() => deleteHabit(id)}>Delete</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}