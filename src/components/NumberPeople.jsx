import React from 'react'

const NumberPeople = (props) => {
  return (
    <div className='h-[100px] w-[800px] mx-auto text-black bg-white block text-center justify-center'>
      <h1 className='font-extrabold text-[20px]'>{props.numbers}</h1>
      <h2>{props.title}</h2>
    </div>
  )
}

export default NumberPeople
