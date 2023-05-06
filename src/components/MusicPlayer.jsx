import React from 'react'
import music from '../assets/music/music.mp3'
export default function MusicPlayer() {
  return (
    <div className='pb-5'>
        <audio controls autoPlay className='music' data-aos="fade-up"> 
            <source src={music} type="audio/mpeg" />
        </audio>
    </div>
  )
}
