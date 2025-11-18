interface BankProps {
    bank: number | undefined,
    onClick?: () => void, 
}
export default function Bank({bank, onClick}:BankProps) {


    return (
          <div className='flex flex-col text-center items-center gap-2'>
                <p className='text-lg sm:text-xl'>Banked Roll</p>
               <div 
                onClick={onClick}
                className={`cursor-pointer flex flex-col rounded-md bg-stone-200 justify-center gap-4 text-center text-lg size-8 md:size-16 md:text-2xl`}
                >
                    {bank}
                </div>
          </div>
    )
    
}