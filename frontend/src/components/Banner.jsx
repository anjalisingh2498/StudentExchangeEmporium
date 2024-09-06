import React from 'react'
import Bannercard from '../home/Bannercard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
    <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
      {/* left side*/}
      <div className='md:w-1/2 space-y-8 h-full'>
        <h2 className='text-5xl font-bold leading-snug'> Buy & Sell your items<span className='text-green-700'> Within the College Community</span></h2>
        <p className='md:w-4/5'> From textbooks to tech gadgets, explore a range of products shared by students for students. Promote reuse, reduce waste, and support a greener campus.</p>
       
        <div>
          <input type="search" name='search' id="search" placeholder='search a item ' className='py-2 px-2 rounded-sm outline-none'/>
          <button className='bg-green-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
        </div>
      </div>
    </div>
  

          {/* right side*/}

          <div>
            <Bannercard></Bannercard>
          </div>
    </div>
    
  )
}

export default Banner