import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS, url } from "../utils/constants"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        moviesApiCall()
      },[])
    
      const moviesApiCall = async() => {
        try {
        const res = await fetch(url,API_OPTIONS)
        const jsonRes = await res.json()
        dispatch(addNowPlayingMovies(jsonRes?.results))
        console.log(jsonRes?.results);
        
        } catch(err){
          console.log(err);
        }
      }
}

export default useNowPlayingMovies