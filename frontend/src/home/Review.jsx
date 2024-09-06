import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from "react-icons/fa6"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import ProPic from '../assets/Images/anj.jpg'


const Review = () => {
  return (
    <div className='my-12 px-12 lg:px-24'>
    <h2 className='text-5x1 font-bold text-center ab-10 leading-snug'> Our Customer </h2>
    <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2x1 bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui facere 
                        exercitationem deleniti, minima eum!
                         Veniam nam, consequatur cumque quia illum similique inventore
                          numquam. Incidunt ipsa natus voluptatem repudiandae sunt.</p>
                        
                          <img src= {ProPic} alt=" " rounded bordered className='w-10 mb-4'/>
                         
                          <h5 className='text-lg font-medium'>Mark Ping</h5>
                          <p>CEP ANB company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2x1 bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui facere 
                        exercitationem deleniti, minima eum!
                         Veniam nam, consequatur cumque quia illum similique inventore
                          numquam. Incidunt ipsa natus voluptatem repudiandae sunt.</p>
                        
                          <img src= {ProPic} alt=""rounded bordered className='w-10 mb-4'/>
                         
                          <h5 className='text-lg font-medium'>Mark Ping</h5>
                          <p>CEP ANB company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2x1 bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui facere 
                        exercitationem deleniti, minima eum!
                         Veniam nam, consequatur cumque quia illum similique inventore
                          numquam. Incidunt ipsa natus voluptatem repudiandae sunt.</p>
                        
                          <img src= {ProPic} alt="" rounded bordered className='w-10 mb-4'/>
                         
                          <h5 className='text-lg font-medium'>Mark Ping</h5>
                          <p>CEP ANB company</p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
    
    </div>
    
  
  )
}

export default Review