import { addVideoKey } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';
import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux';

const useGetMovieTrailer = (currentMovie) => {
 
    
  const dispatch = useDispatch()
  const fetchMovieTrailers = async () => {
    try {
        if (!currentMovie?.id ) return;
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${currentMovie?.id}/videos?language=en-US`,
        API_OPTIONS
      );
      const jsonRes = await res.json();
      
      console.log(jsonRes);
      
      const movieTrailers = jsonRes?.results?.filter(
        (video) => video?.type == "Trailer" 
      );
        const movieTrailer = movieTrailers?.length > 0 ? movieTrailers[0] : jsonRes.results[0];
        console.log("Movie Trailer:", movieTrailer);
        
      dispatch(addVideoKey(movieTrailer?.key));
      
    } catch (err) {
      console.log(err);
    }
   
  };
  useEffect(() => {
    fetchMovieTrailers();
  }, [currentMovie?.id]);
  
}

export default useGetMovieTrailer
