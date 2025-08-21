import { IMG_CDN_URL } from '../utils/constants';
import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import Shimmer from './Shimmer';

const GptSearchResults = () => {
  const movieNames= useSelector((store) => store.gpt?.movieNames);
  const movieResults = useSelector((store) => store.gpt?.movieResults);
   if(!movieNames) return <Shimmer />
  if(movieNames?.length === 0) return <div className='m-6 p-4 border'>No results found</div>;
  return (
    <div className='my-6 m-2 p-4 border border-red-300 bg-gradient-to-t grid grid-cols-1 md:grid-cols-2   from-slate-800 rounded-lg'>
      {movieNames?.map((movie,index) =>{
        return movieResults[index].length > 0 && (
          <div className='flex mb-4  flex-col'><h1 className='text-blue-300  text-center text-2xl  m-4 font-semibold font-stretch-200%'>{ movie}</h1>
      
          <div className="text-center my-5 overflow-x-scroll flex flex-row justify-center">
                {  movieResults[index].length > 0 && <MovieList key={movie[index]}  movies = {movieResults[index]}  />}
          
          </div></div>
        )
      })}
    </div>
  )
}

export default GptSearchResults
