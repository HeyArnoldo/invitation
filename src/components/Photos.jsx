import React from 'react'
import novios1 from '../assets/images/novios1.jpg'
import novios2 from '../assets/images/novios2.jpg'
import novios3 from '../assets/images/novios3.jpg'

export function Photos() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='container photos row my-5' data-aos="fade-up">
        <div className='col-4 d-flex justify-content-center px-1' data-aos="fade-up" data-aos-delay="0">
          <img src={novios1} alt='random' className='img-fluid photo'/>
        </div>
        <div className='col-4 d-flex justify-content-center px-1' data-aos="fade-up" data-aos-delay="500">
          <img src={novios2} alt='random' className='img-fluid photo' />
        </div>
        <div className='col-4 d-flex justify-content-center px-1' data-aos="fade-up" data-aos-delay="700">
          <img src={novios3} alt='random' className='img-fluid photo' />
        </div>
      </div>
    </div>
  )
}
