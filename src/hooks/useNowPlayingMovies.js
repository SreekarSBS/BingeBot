import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS, url } from "../utils/constants"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const moviesApiCall = async() => {
        try {
        const res = await fetch(url,API_OPTIONS)
        const jsonRes = await res.json()
        dispatch(addNowPlayingMovies(jsonRes?.results))
      
        
        } catch(err){
        //   console.log(err);
        }
      }
    useEffect(() => {
        moviesApiCall()
      },[])
    
      
}

export default useNowPlayingMovies