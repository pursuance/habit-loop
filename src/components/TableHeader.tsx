import { format } from 'date-fns'

interface Props {
  dateList: Date[];
}

export function TableHeader({ dateList }: Props) {

  const formatDate = (date: Date) => format(date, 'EEE do')

  const Dates = () => {
    return (
      <>
        {
          dateList.map((date, index) => 
            <div key={index}>{formatDate(date)}</div>
          )
        }
      </>
    )
  }

  return (
    <div className='flex'>
      <div>dnd</div>
      <div>name</div>
      <Dates />
      <div>options</div>
    </div>
  )
}