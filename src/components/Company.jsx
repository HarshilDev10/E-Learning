import React from 'react'
import CompanyCard from './CompanyCard'

const Company = () => {
  return (
    <div className='my-20 px-4'>
      <hr className="border-t-1 border-gray-700 my-20 w-full" />
      
      <div className='w-full max-w-[700px] mx-auto mb-10'>
      <h1 className="text-center text-4xl font-bold sm:text-3xl lg:text-4xl text-gray-800 
  px-6 py-3 mx-auto rounded-lg w-fit bg-white 
  border border-transparent 
  bg-clip-padding 
  shadow-md 
  relative 
  z-10 
  before:absolute before:inset-0 before:rounded-lg before:p-[1px] 
  before:bg-gradient-to-r before:from-green-400 before:to-blue-500 
  before:z-[-1]">
  Our Partners
</h1>

      </div>

      <div className='w-full max-w-[800px] mx-auto'>
        <CompanyCard />
      </div>
    </div>
  )
}

export default Company
