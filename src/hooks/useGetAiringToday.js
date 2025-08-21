import { addAiringMovies } from '../utils/moviesSlice'
import { API_OPTIONS, TV_SHOW_URL } from '../utils/constants'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAiringToday = () => {
    const airing_today = useSelector((store) => store.movies?.airing_today)
    const dispatch = useDispatch()
 useEffect(() => {
    !airing_today &&
    fetchAiringToday()
 },[])

const fetchAiringToday = async() => {
    try{
        const res = await fetch(TV_SHOW_URL+"airing_today?language=en-US&page=1",API_OPTIONS)
        const jsonRes = await res.json()
        console.log(jsonRes?.results);
        
        dispatch(addAiringMovies(jsonRes?.results))
    }catch(err){
        console.log(err);
        
    }
}
}
export default useGetAiringToday
