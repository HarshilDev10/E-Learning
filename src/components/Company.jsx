import React from 'react'
import CompanyCard from './CompanyCard'

const Company = () => {
  return (
    <div className='my-20 px-4'>
      <hr className="border-t-1 border-gray-700 my-20 w-full" />
      
      <div className='w-full max-w-[700px] mx-auto mb-10'>
        <h1 className='text-4xl font-bold sm:text-3xl lg:text-4xl text-center p-2 border-b-2 flex mx-auto justify-center items-center rounded-lg shadow-lg w-[300px]'>
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
