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
  habits: habit[] | null;
  updateHabit: (updatedHabit: Habit) => void;
}