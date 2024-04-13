import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <div className="border h-16 flex justify-between items-center px-4">
      Habit Loop
      <ModeToggle />
    </div>
  )
}