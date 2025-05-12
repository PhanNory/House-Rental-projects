import React from 'react'
import homeimages from '../assets/bg-home.jpg'

const Home = () => {
  return (
    <div className='relative w-full min-h[60vh] overflow-hidden bg-black/20 'id='Home'>
      <img src={homeimages} alt="" 
      className="w-full h-[450px] sm:h-[500px] object-cover object-center" />

      {/*----- Hero Text--------*/}
      <div className='absolute top-0 left-0 
      bottom-0 w-1/2 mx-auto bg-blue-600'>
      <div className='flex flex-col justify-center 
       text-left px-3 sm:px6 mt-[30px] sm:mt-[120px] text-white '>
        <h1 className='text-4xl md:text-6xl font-semibold text-shadow-md
        mb-4'>Find Your Perfect <br />
        Vacation Rental</h1>
        <p className='text-base text-shadow-md'>Discover thousands of luxury homes, beachfront villas, 
            and city apartments for your next getaway.</p>
      </div>
      </div>
    </div>
  )
}

export default Home
