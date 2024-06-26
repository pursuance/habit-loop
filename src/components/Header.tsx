import { ModeToggle } from "@/components/mode-toggle"
import { Github, RefreshCw } from "lucide-react"
import { Button } from "./ui/button"

export function Header() {
  return (
    <div className="border h-16 flex justify-between items-center px-4">
      <div className="flex gap-2 items-center">
        Habit Loop
        <RefreshCw />
      </div>
      <div className="flex items-center gap-2"> 
        <Button asChild variant='outline' size='icon'>
          <a href="https://github.com/pursuance/habit-loop" target="_blank">
            <Github />
          </a>
        </Button>
        <ModeToggle />
      </div>
    </div>
  )
}