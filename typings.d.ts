interface DateState {
  startDate: Date;
  numberOfDays: number;
  goBackADay: () => void;
  goForwardADay: () => void;
}

interface Habit {
  id: string;
  name: string;
  datesCompleted: Date[];
  editable?: boolean;
}

interface HabitsState {
  habits: Habit[] | null;
  setHabits: (habits: Habit[]) => void;
  updateHabit: (updatedHabit: Habit) => void;
  addHabit: () => void;
}