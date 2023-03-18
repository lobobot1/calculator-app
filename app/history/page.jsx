
import React from 'react'
import '../../styles/globals.css'

const historyPage = () => {
  /* Creating an array of strings. */
  const table = [
    'expression',
    'results',
    'date'
  ]

  return (
    <div className='bg-[#98838F] h-screen'>
      <div className='flex flex-wrap justify-center items-center pt-10'>
        <section className=' bg-[#2E5077] fonts w-[80vw] h-[580px] px-10 py-7 rounded-xl'>
          <table className=' table-fixed grid grid-cols-1 tracking-wide'>
            <thead>
              <tr className=' text-3xl text-[#B1EDE8] font-bold grid grid-cols-3 justify-items-center mb-3'>
                {table.map(title => (
                  // eslint-disable-next-line react/jsx-key
                  <th key={title}>
                    {title.slice(0, 1).toUpperCase() + title.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <div className=' drop-shadow-lg'>
                <tr className=' font-semibold text-lg grid grid-cols-3 justify-items-center text-[#899878] text-justify my-5'>
                  <td>
                    60+5
                  </td>
                  <td>
                    65
                  </td>
                  <td>
                    12/45/78
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

export default historyPage
