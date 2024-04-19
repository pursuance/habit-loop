import { FirstHabitButton } from "@/components/FirstHabitButton";
import { HabitLoopCodeBlock } from "@/components/HabitLoopCodeBlock";

export function LandingPage() {
  return (
    <div className="flex justify-center mt-16">
      <FirstHabitButton />
      <div className="h-48">
        <HabitLoopCodeBlock />
      </div>
    </div>
  )
}