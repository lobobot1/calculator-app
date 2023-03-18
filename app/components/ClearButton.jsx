import React from 'react'

const ClearButton = (props) => {
  return (
    // eslint-disable-next-line react/jsx-handler-names
    <button className=' w-[48%] bg-[#4c3f77] rounded-lg font-bold h-14 hover:bg-[#2e2744]' onClick={props.changeInputClear}>
      {props.children}
    </button>
  )
}

export default ClearButton
