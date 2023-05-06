import React from 'react'
import {HiUserGroup} from 'react-icons/hi'
import {RiHeartsFill} from 'react-icons/ri'
export function Place() {
  return (
    <div className='place-container d-flex justify-content-center'>
      <div className='container d-flex justify-content-center'>
        <div className='place-row row my-5 text-center' data-aos="fade-up">
          <div className='col-6 mb-3'>
            <div className='place-image mx-auto mb-3'>
              <HiUserGroup />
            </div>
            <h2 className='fs-5'>Recepción de Invitados</h2>
          </div>
          <div className='col-6 mb-3'>
            <div className='place-image mx-auto mb-3'>
              <RiHeartsFill />
            </div>
            <h2 className='fs-5'>Ceremonia Civil</h2>
          </div>
          <div className='col-6 mb-5'>
            <h3 className='fw-light fs-1 place-text'>5:00pm</h3>
          </div>
          <div className='col-6 mb-5'>
            <h3 className='fw-light fs-1 place-text'>5:30pm</h3>
          </div>
          <div className='col-12'>
            <a target="_blank" href="https://goo.gl/maps/dekGaf1kZ1h435iG6" rel="noreferrer" className='text-decoration-none text-black '>
              <span className='fs-5 mb-3'>Lago del Rey</span>
              <div className='d-flex justify-content-center mb-3'>
                <p className='place-p'>Av Ramón Corona #5243, 45201 Guadalajara, Jal.</p>
              </div>
              <button className='btn btn-outline-dark rounded-pill raleway'>Ver Maps</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
