import React from 'react'
const novios1 = 'https://api-ticket.joaosouza.studio/api/images/b3a1aa1c-2e59-4959-89d5-73f44b129963.jpg';
const novios2 = 'https://api-ticket.joaosouza.studio/api/images/01b9f77b-8b87-4bd8-8a14-afdbb86fc73c.jpg';
const novios3 = 'https://api-ticket.joaosouza.studio/api/images/76b2f502-7e65-49f1-9f4d-1d3dd3aa7e3e.jpg';

export function Photos() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='container photos row my-5' data-aos="fade-up">
        <div className='col-4 d-flex justify-content-center px-1' data-aos="fade-up" data-aos-delay="0">
          <img src={novios1} alt='Ericka y David 1' className='img-fluid photo'/>
        </div>
        <div className='col-4 d-flex justify-content-center px-1' data-aos="fade-up" data-aos-delay="500">
          <img src={novios2} alt='Ericka y David 2' className='img-fluid photo' />
        </div>
        <div className='col-4 d-flex justify-content-center px-1' data-aos="fade-up" data-aos-delay="700">
          <img src={novios3} alt='Ericka y David 3' className='img-fluid photo' />
        </div>
      </div>
    </div>
  )
}
