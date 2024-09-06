import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from '../assets/Images/abstractbook.jpg'


const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-5x1 font-bold text-purple md-6 leading-snug'>Discover the Ultimate Student Marketplace: <br/> Save Money, Find Essentials, and Connect with Your Community on the Student Exchange : Promoting Sustainability and Community Collaboration!</h2>
                <Link to="/about" className='mt-8 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Know More</button></Link>
            </div>
            <div>
                <img src={bookPic}  alt="" className='w-96'/>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner