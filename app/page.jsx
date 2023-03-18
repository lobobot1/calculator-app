'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import Buttons from './components/Buttons'
import ClearButton from './components/ClearButton'
import DeleteButton from './components/DeleteButton'
import Screen from './components/Screen'
import '../styles/globals.css'

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [input, setInput] = useState('0')

  /**
   * If the input is a single zero, replace it with the value of the button pressed. Otherwise, if the
   * button pressed is a number or a decimal point, add it to the input. Otherwise, if the button
   * pressed is an operator and the last character of the input is a number, add a space, the operator,
   * and another space to the input
   */
  const addInput = (val) => {
    // eslint-disable-next-line eqeqeq
    if (input.toString().length === 1 && input == '0' && val !== '.' && (val === '-' || /\d/.test(val))) {
      setInput(`${val}`)
    } else {
      if (/[0-9]/.test(val) || (val === '.' && !input.toString().split(' ').filter(a => Number(a) || Number(a) === 0).pop().includes('.'))) {
        setInput(`${input}${val}`)
      }
      if (val !== '.' && (val === '\u00d7' || /\W/.test(val)) && /\d/.test(input.toString().slice(-1))) {
        setInput(`${input} ${val} `)
      }
    }
  }

  /**
   * The function is called when the equals button is clicked. It checks if there is an input, if there
   * is, it replaces the multiplication and division symbols with the actual symbols and then evaluates
   * the expression. If there is no input, it displays a sweet alert message
   */
  const calculateResult = () => {
    if (input && input !== '0') {
      // eslint-disable-next-line no-eval
      setInput(eval(input.toString().replace(/\u00d7/g, '*').replace(/÷/g, '/')).toString())
    } else {
      Swal.fire('Please enter values for calculation purposes')
    }
  }

  /* Creating an array of buttons that will be displayed on the calculator. */
  const digits = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '\u00d7', '=', 0, '.', '÷'].map(val => {
    return (
      // eslint-disable-next-line react/jsx-key
      <Buttons changeInputClic={val === '=' ? calculateResult : addInput}>{val}</Buttons>
    )
  })

  return (
    <div className='bg-[#b8beb0] fonts flex flex-wrap h-[100vh] justify-center items-center'>
      <div className='w-[400px] h-[580px] p-3 bg-[#0e131b] rounded-xl border-5 border-white border-solid text-white'>
        <Screen input={input} />
        <div className='grid grid-cols-4 gap-2 my-7'>{digits}</div>
        <div className=' flex justify-around text-lg'>
          <DeleteButton
            changeInputDelete={() => `${input}`.length > 1 ? `${input}`.slice(-1) === ' ' ? setInput(`${input}`.slice(0, -3)) : setInput(`${input}`.slice(0, -1)) : setInput('0')}
          >
            Delete
          </DeleteButton>
          <ClearButton changeInputClear={() => setInput('0')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  )
}

export default page
