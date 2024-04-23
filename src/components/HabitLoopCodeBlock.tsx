import { CodeBlock, dracula } from 'react-code-blocks'

export function HabitLoopCodeBlock() {

  const text = 
  `
    const habitLoop = (habits: DailyHabits[]) => { 
      return habits.map((habit) => habit + (habit * 0.01))
    }

    //Get 1% Better Every Day!
    setTimeout(habitLoop, Every Day!)
  `

  return (
    <CodeBlock 
      text={text}
      language='tsx'
      theme={dracula}
      showLineNumbers={false}
    />
  )
}