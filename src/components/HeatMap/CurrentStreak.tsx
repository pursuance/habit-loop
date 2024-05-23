import { getStreaks } from "./utils";

interface Props {
  habit: Habit;
}

export const CurrentStreak = ({ habit }: Props) => {

  const { datesCompleted } = habit

  const streaks = getStreaks(datesCompleted)

  return (
    <h1>
      {streaks[2]}
    </h1>
  )
}