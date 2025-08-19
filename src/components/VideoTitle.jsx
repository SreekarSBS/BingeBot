import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = () => {
      const currentMovie = useSelector((store) => store.movies?.currentMovie)
      const [active,setActive] = useState(true)

      useEffect(() => {
        const timer = setTimeout(() => {
            setActive(false)
          },2000)
        return () => {
          clearTimeout(timer)
        }
      })
      
  return (
    <div className={`flex ${active ? "p-24" : "p-auto"} items-center transition-all duration-1000 bg-gradient-to-r from-black absolute aspect-video h-full  pointer-events-none`}>
        <div className='sm:w-2/3 w-screen  p-6  md:p-12 ' >
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>{currentMovie?.title}</h1>
      <div className="hidden sm:block sm:h-10 md:h-auto overflow-auto my-2">
      <p className='w-1/2 text-xs sm:text-md my-4'>{currentMovie?.overview}</p>
      </div>
        <button className='bg-white text-black rounded-lg w-12 font-bold font-stretch-100% lg:w-16 xl:w-22 mx-1 h-10 '>Play</button>
        <button className='border text-white bg-gray-600/50 font-bold font-stretch-100% rounded-lg w-22 mx-1 h-10'>More Info</button>
        </div>
      </div>
  )
}

export default VideoTitle
