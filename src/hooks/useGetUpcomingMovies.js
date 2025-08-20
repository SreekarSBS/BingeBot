import {  addUpcoming } from '../utils/moviesSlice'
import { API_OPTIONS,  url } from '../utils/constants'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetUpcomingMovies = () => {
    const dispatch = useDispatch()
 useEffect(() => {
    fetchUpcoming()
 },[])

const fetchUpcoming = async() => {
    try{
        const res = await fetch(url + "upcoming?page=1",API_OPTIONS)
        const jsonRes = await res.json()
        console.log(jsonRes?.results);
        
        dispatch(addUpcoming(jsonRes?.results))
    }catch(err){
        console.log(err);
        
    }
}
}
export default useGetUpcomingMovies
