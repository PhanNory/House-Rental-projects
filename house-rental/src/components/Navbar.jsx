import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
 
  const [isOpenMenu, setIsOpenMenu] = useState (false)

  return (
  <nav className='bg-white shadow-lg'>
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-[80px]  py-4">
      <div className='flex'>
        <div className='text-2xl font-extrabold flex-shrink-0 mr-5 uppercase flex item-center gap-2'>
          <SiHomeassistantcommunitystore />
          <span className="text-2xl font-bold text-blue-600">LuxStay</span>
        </div>
       {/*------ Navbar Side ----------*/}
     <div className='hidden md:flex space-x-8'>
        <a href="#home"className='text-gray-900 inline-flex items-center px-2 pt-1 text-base font-medium'>Home</a>
        <a href="#feature"className='text-gray-900 inline-flex items-center px-2 pt-1 text-base font-medium'>Features</a>
        <a href="#destinations"className='text-gray-900 inline-flex items-center px-2 pt-1 text-base font-medium'>Destinations</a>
        <a href="#about"className='text-gray-900 inline-flex items-center px-2 pt-1 text-base font-medium'>About</a>
        <a href="#contact"className='text-gray-900 inline-flex items-center px-2 pt-1 text-base font-medium'>Contact</a>
     </div>
     </div>
     {/*------ button Toggle side----------*/}
      <div className='flex items-center gap-5'>
    <button className='hidden md:block items-center justify-center
       bg-blue-600 text-white rounded-lg px-6 py-3 font-medium'>List Your property</button>
    <button className='md:hidden cursor-pointer' onClick={()=>setIsOpenMenu(true)}><HiOutlineMenuAlt3 size={28} /></button>
  </div>
  </div>
  </div>
    {/*------ Mobile Menu  ----------*/}
  <div className={`md:hidden fixed top-0 ${isOpenMenu ?'left-0':''} -left-full flex flex-col items-center 
  bg-white h-screen w-1/2 py-10 transition-all duration-400 z-10 `}>
    <IoClose onClick={()=>setIsOpenMenu(false)} size={28}  className='absolute top-2 right-2 cursor-pointer *:z-10'/>
    <div className='space-y-3'>
        <a href="#home"className='block'>Home</a>
        <a href="#feature"className='block'>Features</a>
        <a href="#destinations"className='block'>Destinations</a>
        <a href="#about"className='block'>About</a>
        <a href="#contact"className='block'>Contact</a>
     </div>
  </div>
  </nav>
  )
}

export default Navbar
