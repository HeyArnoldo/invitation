import React from 'react'
import {HiUserGroup} from 'react-icons/hi'
import {RiHeartsFill} from 'react-icons/ri'
export function Place() {
  return (
    <div className='place-container d-flex justify-content-center'>
      <div className='container d-flex justify-content-center'>
        <div className='place-row row my-5 text-center'>
          <div className='col-6 mb-3' data-aos="fade-up" data-aos-delay="0">
            <div className='place-image mx-auto mb-3'>
              <HiUserGroup />
            </div>
            <h2 className='fs-5'>Recepción de Invitados</h2>
          </div>
          <div className='col-6 mb-3' data-aos="fade-up" data-aos-delay="300">
            <div className='place-image mx-auto mb-3'>
              <RiHeartsFill />
            </div>
            <h2 className='fs-5'>Ceremonia Civil</h2>
          </div>
          <div className='col-6 mb-5' data-aos="fade-up" data-aos-delay="0">
            <h3 className='fw-light fs-1 place-text'>5:00pm</h3>
          </div>
          <div className='col-6 mb-5' data-aos="fade-up" data-aos-delay="300">
            <h3 className='fw-light fs-1 place-text'>5:30pm</h3>
          </div>
          <div className='col-12' data-aos="fade-up" data-aos-delay="700">
            <a target="_blank" href="https://maps.app.goo.gl/XQCMFgqrNkoGaBMPA?g_st=aw" rel="noreferrer" className='text-decoration-none text-black '>
              <span className='fs-5 mb-3'>Mz F Lte 10</span>
              <div className='d-flex justify-content-center mb-3'>
                <p className='place-p'>Calle los geranios El Inti</p>
              </div>
              <button className='btn btn-outline-dark rounded-pill raleway'>Ver Maps</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
