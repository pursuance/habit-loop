import { CalendarHeatMap } from "@/components/HeatMap/CalendarHeatMap";
import { Link, useLocation } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import { ChevronLeft } from "lucide-react";
import { CurrentStreak } from "@/components/HeatMap/CurrentStreak";
import { LongestStreak } from "@/components/HeatMap/LongestStreak";

export function StatsPage() {

  const { state: { habit } = {} } = useLocation()

  const { name } = habit

  return (
    <div className='flex justify-center'>
      <Card className='px-6 py-4 mt-10 align-middle relative'>
        <Link to='/' className="absolute left-2 top-3.5">
          <ChevronLeft className="h-8 w-8" />
        </Link>
        <CardTitle className="pl-6">
          {name}
        </CardTitle>
        <CardContent>
          <CalendarHeatMap habit={habit} />
          <div className="flex justify-between px-9 mt-5">
            <CurrentStreak habit={habit} />
            <LongestStreak habit={habit} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}