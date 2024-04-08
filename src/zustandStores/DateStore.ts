import { create } from 'zustand'
import { addDays, subDays } from 'date-fns'

export const useDateStore = create<DateState>((set) => ({
  startDate: new Date(),
  numberOfDays: 7,
  goBackADay: () => set((state) => ({ startDate: subDays(state.startDate, 1) })),
  goForwardADay: () => set((state) => ({ startDate: addDays(state.startDate,1) })),
  goToToday: () => set({ startDate: new Date() }),
  setNumberOfDays: (numberOfDays: number) => set({ numberOfDays })
}))