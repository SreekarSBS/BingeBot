import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies= useSelector((store) => store.movies)
  return (
    <div className='bg-black ' >
      <div className="-mt-30 lg:-mt-54 xl:-mt-66 relative z-50 p-6">
      <MovieList title = {"Now Playing"} movies = {movies?.nowPlaying} />
      <MovieList title = {"Popular TV Shows"} movies = {movies?.popular} />
      <MovieList title = {"Top Rated"} movies = {movies?.topRated} />
      <MovieList title = {"Airing Today"} movies = {movies?.airingToday} />
      <MovieList title = {"Upcoming"} movies = {movies?.upcoming} />
      </div>
    </div>
  )
}

export default SecondaryContainer
