import { FirstHabitButton } from "@/components/FirstHabitButton";
import { HabitLoopCodeBlock } from "@/components/HabitLoopCodeBlock";

export function LandingPage() {
  return (
    <div className="flex justify-center mt-16">
      <FirstHabitButton />
      <div className="w-72">
        <HabitLoopCodeBlock />
      </div>
    </div>
  )
}