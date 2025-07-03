import React, { useState } from 'react';

export function Form() {
  // Pega aquí la URL de la aplicación web que copiaste del script.
  const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzfTs-xDnqRkuepG4OIScHLY9fAMRD81bstU2RwuQpSalRrvqVRcqCH1gHSWDYAcbX4/exec';

  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [status, setStatus] = useState('Enviar Confirmación');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    // Las claves aquí (nombre, mensaje) deben coincidir
    // con las que usas en el script (data.nombre, data.mensaje).
    const formData = {
      nombre: nombre,
      mensaje: mensaje,
    };

    fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors', // Evita problemas de CORS con Google.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(() => {
        setNombre('');
        setMensaje('');
        setStatus('¡Confirmación Enviada!');
    })
    .catch(err => {
        console.error(err);
        setStatus('Error al Enviar');
    });
  };

  return (
    <div className='py-5 text-center'>
      <div className='container' data-aos="fade-up">
        <h2>Confirma tu asistencia</h2>
        <form className='mt-3' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input 
              type="text" 
              className='form-control' 
              placeholder='Nombre completo'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required 
            />
          </div>
          <div className='mb-3'>
            <textarea 
              className='form-control' 
              placeholder='Mensaje (alegría, buenos deseos, etc.)'
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
          </div>
          <button 
            type='submit' 
            className='btn btn-outline-dark rounded-pill raleway'
            disabled={status === 'Enviando...'}
          >
            {status}
          </button>
        </form>
      </div>
    </div>
  );
}