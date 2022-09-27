import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>

        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi natus maxime inventore alias adipisci nam optio quidem eos repudiandae, ab rem porro debitis numquam? Ab debitis dicta cupiditate dolores!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Oliver Precious</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi natus maxime inventore alias adipisci nam optio quidem eos repudiandae, ab rem porro debitis numquam? Ab debitis dicta cupiditate dolores!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ijeoma Onya</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi natus maxime inventore alias adipisci nam optio quidem eos repudiandae, ab rem porro debitis numquam? Ab debitis dicta cupiditate dolores!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Nmachi Onuoha</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi natus maxime inventore alias adipisci nam optio quidem eos repudiandae, ab rem porro debitis numquam? Ab debitis dicta cupiditate dolores!
          </small>
        </SwiperSlide>

        
      </Swiper>
    </section>
  )
}

export default Testimonials