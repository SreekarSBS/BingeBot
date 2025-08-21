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
    <div className={`flex  ${active ? "p-12" : "p-4 "} z-10 items-center sm:mt-0 md:-mt-19 w-2/3 transition-all duration-1000  absolute aspect-video h-full `}>
        <div className='sm:w-2/3 w-screen   p-6  md:p-12 ' >
      <h1 className='text-2xl sm:text-3xl my-4 lg:text-5xl xl:text-6xl font-stretch-110% font-bold'>{currentMovie?.title}</h1>
      <div className="hidden sm:block sm:h-10 md:hidden lg:block lg:h-auto overflow-auto  my-2">
      <p className=' text-xs sm:text-md my-4'>{currentMovie?.overview}</p>
      </div>
        <button className='bg-white hover:bg-white/65 cursor-pointer text-black rounded-lg w-12 font-bold font-stretch-100% lg:w-16 xl:w-22 mx-1 h-10 '>Play</button>
        <button className='border hover:bg-gray-600/15 cursor-pointer text-white bg-gray-600/50 font-bold font-stretch-100% rounded-lg w-22 mx-1 h-10'>More Info</button>
        </div>
      </div>
  )
}

export default VideoTitle
