import React from 'react'

const DeleteButton = (props) => {
  return (
    // eslint-disable-next-line react/jsx-handler-names
    <button className=' w-[48%] rounded-lg font-bold h-14 bg-[#4c3f77] hover:bg-[#2e2744]' onClick={props.changeInputDelete}>
      {props.children}
    </button>
  )
}

export default DeleteButton
