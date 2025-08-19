import React from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = () => {
      const currentMovie = useSelector((store) => store.movies?.currentMovie)
  return (
    <div className='w-1/2'>
      <h1 className='text-6xl font-bold'>{currentMovie?.title}</h1>
      <p className='w-2/3 my-4'>{currentMovie?.overview}</p>
        <button className='bg-white text-black rounded-2xl w-22 mx-1 h-8 '>Play</button>
        <button className='border text-white rounded-2xl w-22 mx-1 h-8'>More Info</button>
        
      </div>
  )
}

export default VideoTitle
