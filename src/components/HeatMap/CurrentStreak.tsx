import { getStreaks } from "./utils";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Flame } from "lucide-react";

interface Props {
  habit: Habit;
}

export const CurrentStreak = ({ habit }: Props) => {

  const { datesCompleted } = habit

  const streaks = getStreaks(datesCompleted)

  return (
    <Card className="w-min">
      <CardHeader className="pt-2 pb-2">
        <CardTitle className="text-base">Current Streak</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2 text-lg pb-2 items-center font-bold">
        <Flame /> 
        {
          streaks[0]?.isCurrent ? 
          streaks[0].length 
          : 
          0
        }
      </CardContent>
    </Card>
  )
}