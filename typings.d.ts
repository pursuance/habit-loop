interface DateState {
  startDate: Date;
  numberOfDays: number;
  goBackADay: () => void;
  goForwardADay: () => void;
  goToToday: () => void;
  setNumberOfDays: (numberOfDays: number) => void;
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

interface Streak {
  length: number;
  startDate: Date;
  endDate: Date;
  isCurrent?: boolean;
}