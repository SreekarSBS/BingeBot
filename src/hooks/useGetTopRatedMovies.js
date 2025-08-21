import { addTopRatedMovies } from '../utils/moviesSlice'
import { API_OPTIONS,  url } from '../utils/constants'
import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetTopRatedMovies = () => {
    const dispatch = useDispatch()
    const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies)
 useEffect(() => {
    !topRatedMovies &&
    fetchTopRatedMovies()
 },[])

const fetchTopRatedMovies = async() => {
    try{
        const res = await fetch(url + "top_rated?page=1",API_OPTIONS)
        const jsonRes = await res.json()
        console.log(jsonRes?.results);
        
        dispatch(addTopRatedMovies(jsonRes?.results))
    }catch(err){
        console.log(err);
        
    }
}
}
export default useGetTopRatedMovies
