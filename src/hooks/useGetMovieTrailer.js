import { API_OPTIONS } from '../utils/constants';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const useGetMovieTrailer = (setTrailerKey) => {
    const currentMovie = useSelector((store) => store.movies?.currentMovie)
  console.log(currentMovie);
  
  useEffect(() => {
    fetchMovieTrailers();
  }, [currentMovie]);
  const fetchMovieTrailers = async () => {
    try {
        if (!currentMovie?.id || !currentMovie) return;
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${currentMovie?.id}/videos?language=en-US`,
        API_OPTIONS
      );
      const jsonRes = await res.json();
      console.log(jsonRes);
      
      const movieTrailer = jsonRes?.results?.find(
        (video) => video?.type === "Trailer" || video?.type === "Teaser"
      );
      
      setTrailerKey(movieTrailer?.key);
    } catch (err) {
      console.log(err);
    }
  };
}

export default useGetMovieTrailer
