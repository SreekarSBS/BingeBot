import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS, url } from "../utils/constants"

const useNowPlayingMovies = () => {
    const nowPlaying = useSelector((store) => store.movies?.nowPlaying)
    const dispatch = useDispatch()
    const moviesApiCall = async() => {
        try {
        const res = await fetch(url+"now_playing?page=1",API_OPTIONS)
        const jsonRes = await res.json()
        dispatch(addNowPlayingMovies(jsonRes?.results))
      
        
        } catch(err){
        //   console.log(err);
        }
      }
    useEffect(() => {
      !nowPlaying &&
        moviesApiCall()
      },[])
    
      
}

export default useNowPlayingMovies