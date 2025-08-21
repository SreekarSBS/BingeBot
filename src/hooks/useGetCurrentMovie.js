import { useEffect } from 'react'
import { getRandomInt } from '../utils/constants'
import { addCurrentMovie } from '../utils/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'

const useGetCurrentMovie = () => {
    const currentMovie = useSelector((store) => store.movies?.currentMovie)
    const dispatch = useDispatch()
    const movies = useSelector((store) => store.movies?.nowPlaying)
    // console.log("Available movies:", movies);
    useEffect(() => {
        if (currentMovie) return 
        if (movies && movies.length > 0) {
        const currentMovie = movies[getRandomInt(movies?.length)]
       
        dispatch(addCurrentMovie(currentMovie))
        }
    },[movies])
    
}

export default useGetCurrentMovie
