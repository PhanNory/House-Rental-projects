import React from 'react'
import AboutImage from '../assets/about-image.avif';


const About = () => {
  return (
    <div id='about' className='container mx-auto h-screen w-full overflow-hidden p-14 md:px-20 lg:px-32'>
        {/*-------Head Text -----------*/}
     <div className='text-center py-4 sm:py-6 md:py-10'>
     <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold py-4'>About Us</h1>
     <h3 className='text-2xl font-nomal text-gray-700'>Hand-picked selection of quality places</h3>
     </div>
      {/*-------  Grid Container -----------*/}
     <div className='flex flex-col md:flex-row items-center gap-5 md:gap-20 md:items-start'>
        <img src={AboutImage} alt="" className='w-full sm:w-1/2 max-w-xl'/>
          {/*------- About Content -----------*/}
        <div className='flex flex-col md:items-start mt-10'>
            <h1 className=' text-3xl sm:text-5xl mb-10 font-extrabold'> Travel-Inspired:</h1>
            <p className='text-lg text-gray-600'>Experience comfort like never before in this 
                beautifully designed bedroom, ideal for short or long 
                stays in the heart of the city.</p>
        </div>
     </div>

    </div>
  )
}

export default About
