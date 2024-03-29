import { create } from 'zustand'

export const useHabitStore = create<HabitsState>((set) => ({
  habits: [{
    id: crypto.randomUUID(),
    name: 'test habit',
    datesCompleted: [new Date()],
    order: 0,
  }],
  updateHabit: (updatedHabit: Habit) => set((state) => {
    const updatedHabits = state.habits?.map((habit) => {
      if (habit.id === updatedHabit.id) {
        return updatedHabit
      } else return habit
    })
    return ({ habits: updatedHabits })
  })
}))
