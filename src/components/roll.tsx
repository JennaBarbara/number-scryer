export default function Roll({currentDie}:{currentDie:number}) {

    return (
          <div className='flex flex-col text-center items-center gap-2 p-2'>
                <p className='text-lg sm:text-xl'>Current Roll</p>
               <div 
                className={`flex flex-col rounded-md bg-stone-200 justify-center gap-4 text-center text-lg size-8 md:size-16 md:text-2xl`}
                >
                    {currentDie}
                </div>
          </div>
    )
    
}