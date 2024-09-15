import React from 'react'
import { Link } from 'react-router-dom'
import FavBookImage from '../assets/Images/alumni.jpeg'


const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImage}  alt="" className='rounded md:w-5/12'/>
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your Favorite<span className='text-blue-700'>Alumni Content Here</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Reconnect with your college network, share your experiences, and contribute to the next generation of students.</p>

            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>

            <div>
                <h3 className='text-3xl font-bold'>1800+</h3>
                <p className='text-base'>BookList</p>
            </div>

            <div>
                <h3 className='text-3xl font-bold'>300+</h3>
                <p className='text-base'>Regt</p>
            </div>

            <div>
                <h3 className='text-3xl font-bold'>1200+</h3>
                <p className='text-base'>VideoWatched</p>
            </div>
            </div>
            <Link to="/Alumni" className='mt-8 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>

    </div>
  )
}

export default FavBook
