import { HabitRow } from '@/components/HabitRow'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { restrictToVerticalAxis, restrictToWindowEdges } from "@dnd-kit/modifiers"
import { useHabitStore } from '@/zustandStores/HabitStore'

interface Props {
  dateList: Date[];
}

export function HabitTableBody({ dateList }: Props) {

  const [habits, setHabits] = useHabitStore((state) => [state.habits, state.setHabits])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (habits) {
      const oldIndex = habits.findIndex(habit => habit.id === active.id)
      const newIndex = habits.findIndex(habit => habit.id === over.id)
      const newHabits = arrayMove(habits, oldIndex, newIndex)
      setHabits(newHabits)
    }
  }
  

  const HabitRows = () => (
      <>
        {habits?.map((habit) => {          
          return (
            <HabitRow 
              key={habit.id}
              habit={habit}
              dateList={dateList}
            />
          )
        })}
      </>
    )

  return (
    <>
      {habits &&
        <DndContext 
          sensors={sensors} 
          collisionDetection={closestCenter} 
          onDragEnd={handleDragEnd} 
          modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
        >
          <SortableContext items={habits} strategy={verticalListSortingStrategy}>
            <HabitRows />
          </SortableContext>
        </DndContext>
      }
    </>
  )
}