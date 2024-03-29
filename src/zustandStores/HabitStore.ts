import { create } from 'zustand'

export const useHabitStore = create<HabitsState>((set) => ({
  habits: null,
  setHabits: (habits: Habit[]) => set({ habits }),
  updateHabit: (updatedHabit: Habit) => set((state) => {
    const updatedHabits = state.habits?.map((habit) => {
      if (habit.id === updatedHabit.id) {
        return updatedHabit
      } else return habit
    })
    return ({ habits: updatedHabits })
  })
}))
