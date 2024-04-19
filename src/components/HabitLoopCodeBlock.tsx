import { CodeBlock, dracula } from 'react-code-blocks'

export function HabitLoopCodeBlock() {

  const text = 
  `
    for (const habit of habits) {
      //Get 1% better every day!
      habit += 0.01 * habit
    }
  `

  return (
    <CodeBlock 
      text={text}
      language='javascript'
      theme={dracula}
      showLineNumbers={false}
    />
  )
}