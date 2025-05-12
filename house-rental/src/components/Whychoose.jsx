import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";

const whyChoose = () => {
  return (
    <div className='py-12 mt-5 h-full bg-slate-100'>
      <div className='text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl  font-semibold py-4'>Why Choose LuxStay</h1>
        <h3 className='text-2xl font-nomal text-gray-700'>Hand-picked selection of quality places</h3>
      </div>
      <div className='grid grid-cols-1 gap-12 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-12 px-2 sm:px-4 mt-10'>
        <div className='relative bg-white px-4 py-16 rounded-lg shadow-xl text-center'>
          <h2 className='text-2xl py-4'>Verified Listings</h2>
          <p className='text-xl text-gray-400'>Every property is personally verified to ensure quality and accuracy.</p>
          <div className='absolute -top-[30px] left-[50%] transform translate-x-[-50%] p-4 bg-blue-500 rounded-lg'>
            <MdOutlineSecurity className='text-white text-2xl md:text-4xl' />
          </div>
        </div>
        <div className='relative bg-white px-4 py-16 rounded-lg shadow-xl text-center'>
          <h2 className='text-2xl py-4'>Verified Listings</h2>
          <p className='text-xl text-gray-400'>Every property is personally verified to ensure quality and accuracy.</p>
          <div className='absolute -top-[30px] left-[50%] transform translate-x-[-50%] p-4 bg-blue-500 rounded-lg'>
            <MdOutlineSecurity className='text-white text-2xl md:text-4xl' />
          </div>
        </div>
        <div className='relative bg-white px-4 py-16 rounded-lg shadow-xl text-center'>
          <h2 className='text-2xl py-4'>Verified Listings</h2>
          <p className='text-xl text-gray-400'>Every property is personally verified to ensure quality and accuracy.</p>
          <div className='absolute -top-[30px] left-[50%] transform translate-x-[-50%] p-4 bg-blue-500 rounded-lg'>
            <MdOutlineSecurity className='text-white text-2xl md:text-4xl' />
          </div>
        </div>
        <div className='relative bg-white px-4 py-16 rounded-lg shadow-xl text-center'>
          <h2 className='text-2xl py-4'>Verified Listings</h2>
          <p className='text-xl text-gray-400'>Every property is personally verified to ensure quality and accuracy.</p>
          <div className='absolute -top-[30px] left-[50%] transform translate-x-[-50%] p-4 bg-blue-500 rounded-lg'>
            <MdOutlineSecurity className='text-white text-2xl md:text-4xl' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default whyChoose
