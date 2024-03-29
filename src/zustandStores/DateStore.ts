import { create } from 'zustand'

export const useDateStore = create<DateState>((set) => ({
  startDate: new Date(),
  numberOfDays: 7,
}))