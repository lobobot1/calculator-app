import React from 'react'

const Screen = ({ input }) => {
  return (
    <div className='h-16 border-2 border-solid border-[#91a3a8] truncate rounded-md mt-[10px] w-full flex justify-end items-center text-right font-bold text-3xl pr-4'>
      {input}
    </div>
  )
}

export default Screen
