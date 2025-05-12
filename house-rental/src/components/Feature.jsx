import React from 'react'
import { CiSearch } from "react-icons/ci";

const Feature = () => {
return (
<div id='feature' className='w-full overflow-hidden mx-auto pb-4 '>
  <div className='grid items-center justify-center mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-4 md:py-10
      md:px-16 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] gap-4 md:gap-8 lg:gap-12'>
    {/*-------Section Options ----------*/}
    <div className='flex flex-col text-left text-lg font-semibold'>
      <h2 className='text-xl mb-2'>Location</h2>
      <select id="country-select" className='px-4 py-4 bg-slate-200
          border border-neutral-300 rounded-lg text-lg font-light'>
        <option value="">--Please choose an option--</option>
        <option value="madison">Madison</option>
        <option value="Chicaco">Chicako</option>
        <option value="New">Los Angeles</option>
        <option value="north">North Carolina</option>
        <option value="Washington">Washington</option>
        <option value="Florida">Florida</option>
      </select>
    </div>

    {/*------- Date check in ----------*/}
    <div>
      <h2 className='text-xl mb-2'>Check In</h2>
      <div className='px-4 py-4 bg-slate-200
          border border-neutral-300 rounded-lg'>
        <input type="date" />
      </div>
    </div>
    {/*------- Date Check out----------*/}
    <div className=''>
      <h2 className='text-xl mb-2'>Check Out</h2>
      <div className='px-4 py-4 bg-slate-200
          border border-neutral-300 rounded-lg'>
        <input type="date" />
      </div>
    </div>
    {/*------- Search Button----------*/}
    <div className='mt-7'>
      <div className='px-4 py-4 bg-blue-500 text-white text-lg
          border border-neutral-300 rounded-lg'>Search</div>
    </div>

  </div>
</div>
)
}

export default Feature