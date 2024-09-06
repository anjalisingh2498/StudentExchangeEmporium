import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './Bannercard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const Bannercard = () => {
  return (
    <div className='ban'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Book</SwiperSlide>
        <SwiperSlide>LabItems</SwiperSlide>
        <SwiperSlide>Stationary</SwiperSlide>
        <SwiperSlide>Material</SwiperSlide>
        <SwiperSlide></SwiperSlide>
  
      </Swiper>
    </div>
  )
}

export default Bannercard