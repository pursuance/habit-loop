import { FirstHabitButton } from "@/components/FirstHabitButton";
import { HabitLoopCodeBlock } from "@/components/HabitLoopCodeBlock";

export function LandingPage() {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="font-bold text-4xl">Welcome to Habit Loop!</h1>
      <div className="flex flex-col md:flex-row justify-center mt-16 gap-2">
        <FirstHabitButton />
        <div>
          <HabitLoopCodeBlock />
        </div>
      </div>
    </div>
  )
}