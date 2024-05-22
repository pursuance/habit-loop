import { getCurrentStreak } from "./utils";

interface Props {
  habit: Habit;
}

export const CurrentStreak = ({ habit }: Props) => {

  const { datesCompleted } = habit

  const streak = getCurrentStreak(datesCompleted)

  return (
    <h1>
      {streak}
    </h1>
  )
}