import { IMG_CDN_URL } from '../utils/constants';
import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptSearchResults = () => {
  const movieNames= useSelector((store) => store.gpt?.movieNames);
  const movieResults = useSelector((store) => store.gpt?.movieResults);
  if(!movieNames) return <div className='m-6 p-4 '>Loading</div>;
  if(movieNames.length === 0) return <div className='m-6 p-4 border'>No results found</div>;
  return (
    <div className='m-6 p-4 bg-gradient-to-t grid md:grid-cols-2  border from-slate-800 rounded-lg'>
      {movieNames.map((movie,index) =>{
        return movieResults[index].length > 0 && (
          <div className='flex mb-4  flex-col'><h1 className='text-blue-300  text-center text-2xl  m-4 font-semibold font-stretch-200%'>{ movie}</h1>
      
          <div className="text-center my-5 flex flex-row justify-center">
                {  movieResults[index].length > 0 && <MovieList key={movie[index]}  movies = {movieResults[index]}  />}
          
          </div></div>
        )
      })}
    </div>
  )
}

export default GptSearchResults
