import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


const Bottomfeatur = () => {
  return (
    <div>
     <div className='text-center py-4 sm:py-6 md:py-10'>
     <h1 className='text-3xl sm:text-4xl md:text-5xl  font-semibold py-4'>Featured Properties</h1>
     <h3 className='text-2xl font-nomal text-gray-700'>Hand-picked selection of quality places</h3>
     </div>

        {/*------ Grid  Side Imgages ----------*/}
   <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 mx-auto px-4 md:px-16 lg:px-24 xl:px-32"'>
        <div className='bg-white shadow-2xl'>
            <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" alt="" className='rounded-lg w-full h-[250px]'/>
            <div className='p-4'>
                <h1 className='text-xl md:text-2xl font-semibold'>Modern Luxury Villa</h1>
                <span className='text-lg'>Miami, Florida</span>
            </div>
        </div>
        <div className='bg-white shadow-2xl'>
            <img src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='rounded-lg w-full h-[250px]'/>
            <div className='p-4'>
                <h1 className='text-xl md:text-2xl font-semibold'>Modern Luxury Villa</h1>
                <span className='text-lg'>Miami, Florida</span>
            </div>
        </div>
        <div className='bg-white shadow-2xl'>
            <img src="https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='rounded-lg w-full h-[250px]'/>
            <div className='p-4'>
                <h1 className='text-xl md:text-2xl font-semibold'>Modern Luxury Villa</h1>
                <span className='text-lg'>Miami, Florida</span>
            </div>
        </div>
     </div>
       
     <div className="mt-10 text-center">
            <a href="#"
                className="inline-flex items-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                View All Properties
                <FaLongArrowAltRight className='ml-2'/>
            </a>
        </div>
   </div>
  )
}

export default Bottomfeatur
