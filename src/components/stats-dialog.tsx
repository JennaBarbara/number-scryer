import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

import Button from './button'

export default function StatsDialog({highScore}:{highScore: number}){
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='flex flex-col items-end'>
        <Button size="sm" onClick={() => setIsOpen(true)}>Statistics</Button>
      </div>  
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 outline-0 flex w-screen items-center justify-center p-4 bg-stone-700/25">
          <DialogPanel className="max-w-lg rounded-md space-y-4 bg-white p-12">
            <DialogTitle className="font-bold">Your Number Scryer High Score</DialogTitle>
            <div className='flex flex-col text-center items-center gap-2'>
               <div 
                className={`flex flex-col rounded-md bg-red-200 justify-center gap-4 text-center text-2xl size-16 md:size-16 md:text-3xl`}
                >
                    {highScore}
                </div>
            </div>
            <div className='flex flex-col items-end pt-6'>
                <Button size="sm" onClick={() => setIsOpen(false)}>Close</Button>
            </div>  
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}