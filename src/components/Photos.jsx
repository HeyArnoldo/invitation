import React from 'react'

export function Photos() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='container photos row my-5' data-aos="fade-up">
        <div className='col-4 d-flex justify-content-center px-1'>
          <img src='https://picsum.photos/200/300' alt='random' className='img-fluid photo' />
        </div>
        <div className='col-4 d-flex justify-content-center px-1'>
          <img src='https://picsum.photos/200/300' alt='random' className='img-fluid photo' />
        </div>
        <div className='col-4 d-flex justify-content-center px-1'>
          <img src='https://picsum.photos/200/300' alt='random' className='img-fluid photo' />
        </div>
      </div>
    </div>
  )
}
