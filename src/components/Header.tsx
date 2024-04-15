import { ModeToggle } from "@/components/mode-toggle"
import { Github } from "lucide-react"
import { Button } from "./ui/button"

export function Header() {
  return (
    <div className="border h-16 flex justify-between items-center px-4">
      Habit Loop
      <div className="flex items-center gap-2"> 
        <Button asChild variant='outline' size='icon'>
          <a href="https://github.com/pursuance/habit-loop">
            <Github />
          </a>
        </Button>
        <ModeToggle />
      </div>
    </div>
  )
}