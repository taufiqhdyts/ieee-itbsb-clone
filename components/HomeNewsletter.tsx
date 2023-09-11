"use client"

// import Modules
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

// import assets
import placeholder from './images/Placeholder Event.svg'

// import css
import './css/newsletter.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Newsletter() {
  return (
    <div className='py-4 flex flex-wrap justify-center transition-all my-16 md:mb-40 xl:mb-[466px]'>
      <h2 className='text-center text-2xl lg:text-6xl text-white font-bold mb-4 xl:mb-44'>NEWSLETTER</h2>
      <Swiper
        // install Swiper modules
        style={{
          "--swiper-pagination-color": "#FFF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ 
          clickable: true,
        }}
        grabCursor={true}
        centeredSlides={true}
      >
        <SwiperSlide>{Card()}</SwiperSlide>
        <SwiperSlide>{Card()}</SwiperSlide>
        <SwiperSlide>{Card()}</SwiperSlide>
      </Swiper>
    </div>
  )
}

function Card(){
  return (
    <div className='h-[80vh] md:h-[70vh] lg:h-[60vh] w-[90vw] border-2 border-white mt-4 bg-[#E798FF33] flex flex-col items-center justify-center newsletter-box-purple-shadow-glowing mx-auto'>
      <div className='flex flex-col items-center justify-center gap-y-4'>
        <Image src={placeholder} alt='newsletter image' className='h-[150px]' />
        <div>
          <p className='px-8 font-bold text-lg lg:text-3xl text-white text-center lg:text-left newsletter-purple-shadow-glowing'>LOREM IPSUM DOLOR AMET</p>
          <p className='px-8 text-white text-sm lg:text-lg text-justify lg:text-left mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
      </div>
    </div>
  )
}