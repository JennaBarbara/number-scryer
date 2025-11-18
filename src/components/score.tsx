




export default function Score ({score}:{score:number}) {

    return (
          <div className='flex flex-col text-center items-center gap-2'>
                <p className='text-lg sm:text-xl'>Score</p>
               <div 
                className={`flex flex-col rounded-md bg-red-200 justify-center gap-4 text-center text-lg size-8 md:size-16 md:text-2xl`}
                >
                    {score}
                </div>
          </div>
    )
    
}