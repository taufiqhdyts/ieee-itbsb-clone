import React, { useEffect, useState } from 'react'
import SwiperCore from 'swiper'
import {Autoplay, Navigation, Pagination}  from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

SwiperCore.use([Autoplay, Pagination, Navigation])

// import component
import EventsLandingCard from "./EventsCard"

const Carousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    // Function to update the slidesPerView based on window width
    const handleResize = (): void => {
      if (window.innerWidth >= 1050) {
        setSlidesPerView(5)
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(3)
      } else {
        setSlidesPerView(1)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='py-8 flex justify-center gap-x-2'>
      <Swiper
        spaceBetween={0}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <EventsLandingCard image={''} title={''} description={''}/>
        </SwiperSlide>
        <SwiperSlide>
          <EventsLandingCard image={''} title={''} description={''}/>
        </SwiperSlide>
        <SwiperSlide>
          <EventsLandingCard image={''} title={''} description={''}/>
        </SwiperSlide>
        <SwiperSlide>
          <EventsLandingCard image={''} title={''} description={''}/>
        </SwiperSlide>
        <SwiperSlide>
          <EventsLandingCard image={''} title={''} description={''}/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel