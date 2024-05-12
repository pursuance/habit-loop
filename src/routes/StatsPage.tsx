import { CalendarHeatMap } from "@/components/CalendarHeatMap";
import { Link, useLocation } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChevronLeft } from "lucide-react";

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
          <CalendarHeatMap habit={habit}/>
        </CardContent>
      </Card>
    </div>
  )
}