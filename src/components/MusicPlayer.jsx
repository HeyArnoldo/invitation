import React, { useEffect, useRef } from 'react'
import music from '../assets/music/music.mp3'

export default function MusicPlayer() {
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Algunos navegadores requieren interacción del usuario
      })
    }
  }, [])

  return (
    <div className='pb-5'>
      <audio
        ref={audioRef}
        controls
        loop
        className='music'
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <source src={music} type="audio/mpeg" />
      </audio>
    </div>
  )
}
