interface DateState {
  startDate: Date;
  numberOfDays: number;
}

interface Habit {
  id: string;
  name: string;
  datesCompleted: Date[];
  order: number;
  editable?: boolean;
}

interface HabitsState {
  habits: Habit[] | null;
  setHabits: (habits: Habit[]) => void;
  updateHabit: (updatedHabit: Habit) => void;
}