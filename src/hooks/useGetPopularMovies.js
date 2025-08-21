import { addPopularMovies } from '../utils/moviesSlice'
import { API_OPTIONS, TV_SHOW_URL } from '../utils/constants'
import{  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetPopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector((store) => store.movies?.popularMovies)
 useEffect(() => {
    !popularMovies &&
    fetchPopularMovies()
 },[])

const fetchPopularMovies = async() => {
    try{
        const res = await fetch(TV_SHOW_URL+"top_rated?language=en-US&page=1",API_OPTIONS)
        const jsonRes = await res.json()
        console.log(jsonRes?.results);
        
        dispatch(addPopularMovies(jsonRes?.results))
    }catch(err){
        console.log(err);
        
    }
}
}
export default useGetPopularMovies
