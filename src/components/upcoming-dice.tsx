interface UpcomingDiceProps {
    upcomingDice: Array<number>,
}
export default function UpcomingDice({upcomingDice}:UpcomingDiceProps) {


    return (
          <div className='flex flex-col text-center items-center gap-2 outline-1 rounded-md p-2'>
                <p className='text-lg sm:text-xl'>Next Rolls</p>
                <div className="flex flex-row gap-2">
                     {upcomingDice.map((roll, index) => (
                        <div key={`roll-${index}`}
                        className="flex flex-col rounded-md bg-stone-200 justify-center gap-4 text-center text-lg size-8 md:size-16 md:text-2xl"
                        >
                            {roll}
                        </div>
                    ))} 
                </div>
          </div>
    )
    
}