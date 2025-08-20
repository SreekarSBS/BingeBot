

import useGetPopularMovies from '../hooks/useGetPopularMovies'
import useGetCurrentMovie from '../hooks/useGetCurrentMovie'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies'
import useGetAiringToday from '../hooks/useGetAiringToday'
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'



const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  useNowPlayingMovies()
  useGetCurrentMovie()
  useGetPopularMovies()
  useGetTopRatedMovies()
  useGetAiringToday()
  useGetUpcomingMovies()
  return (
    <div>
      <Header />
      {showGptSearch ?
      <GptSearch />
      :
      <>
      <MainContainer />
      <SecondaryContainer />
      </>
}
    </div>
  )
}

export default Browse
