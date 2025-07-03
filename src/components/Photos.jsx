import React from 'react'
const novios1 = 'https://api-ticket.joaosouza.studio/api/images/b3a1aa1c-2e59-4959-89d5-73f44b129963.jpg';
const novios2 = 'https://api-ticket.joaosouza.studio/api/images/01b9f77b-8b87-4bd8-8a14-afdbb86fc73c.jpg';
const novios3 = 'https://api-ticket.joaosouza.studio/api/images/76b2f502-7e65-49f1-9f4d-1d3dd3aa7e3e.jpg';

export function Photos() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='container photos row my-5' data-aos="fade-up">
        {[novios1, novios2, novios3].map((src, idx) => (
          <div
            key={src}
            className='col-4 d-flex justify-content-center px-1'
            data-aos="fade-up"
            data-aos-delay={idx === 0 ? "0" : idx === 1 ? "500" : "700"}
          >
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
                src={src}
                alt={`David y Ericka ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  background: '#f0f0f0'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
