import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { destinations } from './assets.js';

const Destination = () => {

  return (
    <div id='destinations' className='py-6 min-h-screen'>
      <div className='text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold py-4'>Destination LuxStay</h1>
        <h3 className='text-2xl font-nomal text-gray-700'>Hand-picked selection of quality places</h3>
      </div>
      <div className='flex flex-wrap justify-between items-center px-8 py-6'>
        <p className='text-2xl md:text-4xl font-medium'>Short Stay</p>
        <a href="#" className='inline-flex items-center justify-center
            px-6 py-4 border-0 text-2xl text-green-400 capitalize transition hover:text-green-300'>view more
          <MdKeyboardArrowRight size={30} /></a>
      </div>

      {/*-----------Grid Image Arrow ---------*/}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6'>
        {destinations.map((des, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-8 text-left
            hover:shadow-lg hover:scale-105 transition duration-300">
            <img src={des.imageUrL} alt="" className='w-full h-60 object-cover' />
            <h2 className="text-3xl font-semibold py-2">{des.name}</h2>
            <p className="text-gray-700 text-lg">{des.description}</p>
            <h4 className="text-blue-600 font-extrabold ">{des.price}</h4>
            <button className="bg-green-400 hover:bg-green-300 text-white font-bold w-full rounded py-2 mt-2">Book Now</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Destination
