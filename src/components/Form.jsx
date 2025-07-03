import React from 'react'

export function Form() {
  return (
    <div className='py-5 text-center'>
        <div className='container' data-aos="fade-up">
            <h2>Confirma tu asistencia</h2>
            <form className='mt-3'>
                <div className='mb-3'>
                    <input type="text" className='form-control' placeholder='Nombre completo' />
                </div>
                <div className='mb-3'>
                    <input type="number" className='form-control' placeholder='Número de invitados' />
                </div>
                <div className='mb-3'>
                    <textarea className='form-control' placeholder='Mensaje'></textarea>
                </div>
                <button type='submit' className='btn btn-outline-dark rounded-pill raleway'>Enviar</button>
            </form>
        </div>
    </div>
  )
}
