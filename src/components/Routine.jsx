import React from 'react'
import {HiUserGroup} from 'react-icons/hi'

export function Routine() {
  const steps = [
    {time: '4:00 pm', label: 'Recepción'},
    {time: '4:30 pm', label: 'Ceremonia'},
    {time: '5:30 pm', label: 'Brindis'},
    {time: '6:30 pm', label: 'Fiesta'}
  ];
  return (
    <div className='py-5 d-flex justify-content-center'>
        <div className='row text-center'>
            {steps.map((s, idx) => (
              <div className='col-3 mb-3' key={idx} data-aos="fade-up" data-aos-delay={`${idx * 200}`}> 
                <div className='routine-image mb-2'>
                  <HiUserGroup />
                </div>
                <p className='mb-0'>{s.label}</p>
                <p className='fw-light'>{s.time}</p>
              </div>
            ))}
            <hr />
        </div>
    </div>
  )
}
