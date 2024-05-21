interface Props {
    labels: string[];
}

export const DaysOfTheWeek = ({ labels }: Props) => {  
    return (
      <div className='flex flex-col text-right mr-1'>
        <div className='h-6 mb-0.5'></div>
        {
          labels.map((label, index) => {
            return (
              <div key={index} className='h-6 mb-0.5'>
                {label}
              </div>
            )
          })
        }
      </div>
    )
  }