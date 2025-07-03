import React, { useState } from 'react';

// Componente Lightbox y sus estilos base
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// --- Tus constantes de imágenes ---
const novios1 = 'https://api-ticket.joaosouza.studio/api/images/01b9f77b-8b87-4bd8-8a14-afdbb86fc73c.jpg';
const novios2 = 'https://api-ticket.joaosouza.studio/api/images/76b2f502-7e65-49f1-9f4d-1d3dd3aa7e3e.jpg';
const novios3 = 'https://api-ticket.joaosouza.studio/api/images/14262560-b99e-405f-862c-d4b38fa4f250.jpg';

const slides = [
    { src: novios1 },
    { src: novios2 },
    { src: novios3 }
];

// ✅ PASO 1: Define los estilos de la galería 1x1 en un objeto de JavaScript
const galleryStyles = {
    // Estilos para el contenedor de la imagen
    slideContent: {
        aspectRatio: '1 / 1',       // La clave: Forza la proporción cuadrada
        maxWidth: '95vh',           // El cuadrado no será más grande que el 95% de la altura de la pantalla
        maxHeight: '95vh',          // Limita también la altura
        margin: 'auto',             // Centra el cuadrado en el espacio
    },
    // Estilos para la imagen misma
    slideImage: {
        objectFit: 'cover',         // 'cover' llena el espacio (recorta), 'contain' ajusta la imagen sin recortar
    },
    // Opcional: Estilos para el fondo del lightbox
    container: {
        backgroundColor: 'rgba(0, 0, 0, .9)',
    }
};


export function Photos() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {/* Tu código JSX para mostrar las imágenes en la página no cambia */}
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='container photos my-5' data-aos="fade-up" style={{maxWidth: 600}}>
          <div className="row">
            <div className="col-6 d-flex justify-content-center px-1" data-aos="fade-up" data-aos-delay="0">
              <div onClick={() => setIndex(0)} style={{ cursor: 'pointer', width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '12px' }}>
                <img src={novios1} alt="David y Ericka 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center px-1" data-aos="fade-up" data-aos-delay="500">
              <div onClick={() => setIndex(1)} style={{ cursor: 'pointer', width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '12px' }}>
                <img src={novios2} alt="David y Ericka 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 d-flex justify-content-center px-1" data-aos="fade-up" data-aos-delay="700">
              <div onClick={() => setIndex(2)} style={{ cursor: 'pointer', width: '100%', aspectRatio: '2/1', overflow: 'hidden', borderRadius: '12px' }}>
                <img src={novios3} alt="David y Ericka 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ PASO 2: Pasa el objeto de estilos a la prop 'styles' */}
      {/* <Lightbox
        open={index > -1}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        styles={galleryStyles} // ¡Aquí está la magia!
      /> */}
    </>
  )
}