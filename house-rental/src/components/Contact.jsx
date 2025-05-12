import React from 'react'
import { FaMapMarkerAlt} from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";

const Contact = () => {
  return (
    <div id='contact' className='relative w-full overflow-hidden container mx-auto min-h-screen'>
       <div className='text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold py-4'>Our Contact</h1>
        <h3 className='text-2xl font-nomal text-gray-700'>Hand-picked selection of quality places</h3>
        </div>
        <header className='w-full h-[400px] py-2 mb-10 mt-10'>
            <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
             className='w-full h-[400px] object-cover bg-black/55'/>
        </header>
         <div className='flex flex-col justify-center items-center gap-4 -mt-[12rem] md:flex-row md:items-start w-full mx-auto bg-white'>
            <div className='flex flex-col justify-start bg-white shadow-xl rounded-lg p-8 max-w-md h-auto md:h-[410px]'>
                <div className='mb-4'>
                <h1 className='flex items-center text-capitalize gap-4 text-2xl md:text-3xl font-extrabold 
                text-blue-500 
                '>Call Us <MdWifiCalling3 /></h1>
                <p className='text-gray-700'>+855 123 4567</p>
                </div>
                <div>
                <h1 className='flex items-center gap-4 font-medium text-blue-400 mb-2 tracking-wider'>Location <FaMapMarkerAlt /> </h1>
                <p className='text-sm text-gray-500'>Phnom penh,sakat teok Thla</p>
                </div>
                <div>
                <p className='text-sm text-gray-500'>Bussiness Hour</p>
                <p className='text-sm text-gray-500'>Phnom penh,sakat teok Thla</p>
                </div>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
           <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
           <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
         </div>
    </div>
  )
}

export default Contact
