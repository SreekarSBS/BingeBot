import { IMG_CDN_URL } from '../utils/constants'
import React from 'react'

const MovieCard = ({movie}) => {
  if(!movie || !movie.poster_path) return null;
  return  (
    <div className='w-32 m-2'>
        <img src = {IMG_CDN_URL + movie.poster_path} alt='Movie Card Image' /> 
    </div>
  )
}

export default MovieCard
