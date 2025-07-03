import React from 'react'
const novios1 = 'https://api-ticket.joaosouza.studio/api/images/01b9f77b-8b87-4bd8-8a14-afdbb86fc73c.jpg';
const novios2 = 'https://api-ticket.joaosouza.studio/api/images/76b2f502-7e65-49f1-9f4d-1d3dd3aa7e3e.jpg';
const novios3 = 'https://api-ticket.joaosouza.studio/api/images/14262560-b99e-405f-862c-d4b38fa4f250.jpg';

export function Photos() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='container photos my-5' data-aos="fade-up" style={{maxWidth: 600}}>
        <div className="row">
          <div className="col-6 d-flex justify-content-center px-1" data-aos="fade-up" data-aos-delay="0">
            <div
              style={{
                width: '100%',
                aspectRatio: '1/1',
                background: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: '12px'
              }}
            >
              <img
                src={novios1}
                alt="David y Ericka 1"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  background: '#f0f0f0'
                }}
              />
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center px-1" data-aos="fade-up" data-aos-delay="500">
            <div
              style={{
                width: '100%',
                aspectRatio: '1/1',
                background: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: '12px'
              }}
            >
              <img
                src={novios2}
                alt="David y Ericka 2"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  background: '#f0f0f0'
                }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 d-flex justify-content-center px-1" data-aos="fade-up" data-aos-delay="700">
            <div
              style={{
                width: '100%',
                aspectRatio: '2/1',
                background: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: '12px'
              }}
            >
              <img
                src={novios3}
                alt="David y Ericka 3"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  background: '#f0f0f0'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
