import { getStreaks } from "./utils";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Flame } from "lucide-react";

interface Props {
  habit: Habit;
}

export const LongestStreak = ({ habit }: Props) => {

  const { datesCompleted } = habit

  const streaks = getStreaks(datesCompleted)

  const streakLengths = streaks.map(streak => streak.length)
  const longestStreak = Math.max(...streakLengths)

  return (
    <Card className="w-min">
      <CardHeader className="pt-2 pb-2">
        <CardTitle className="text-base">Longest Streak</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2 text-lg pb-2 items-center font-bold">
        <Flame /> {longestStreak > 0 && longestStreak}
      </CardContent>
    </Card>
  )
}