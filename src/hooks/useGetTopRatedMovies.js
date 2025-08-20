import { addTopRatedMovies } from '../utils/moviesSlice'
import { API_OPTIONS,  url } from '../utils/constants'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetTopRatedMovies = () => {
    const dispatch = useDispatch()
 useEffect(() => {
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
