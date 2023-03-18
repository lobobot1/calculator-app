import React from 'react'

const Buttons = (props) => {
  /**
     * If the value is not a number and the value is not a period and the value is not an equal sign,
     * then return true.
     * @returns a boolean value.
     */
  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=')
  }

  return (
    <button
      className={`border-2 rounded-full text-3xl font-semibold cursor-pointer h-20 border-solid border-[#4393a8] hover:bg-[#4393a8] ${isOperator(props.children) ? ' bg-[#553356] hover:bg-[#a25ea4] hover:border-[#a25ea4] text-2xl font-bold' : ''}`.trimEnd()}
      onClick={() => props.changeInputClic(props.children)}
    >
      {props.children}
    </button>
  )
}

export default Buttons
