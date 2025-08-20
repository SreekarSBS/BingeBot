

import useGetPopularMovies from '../hooks/useGetPopularMovies'
import useGetCurrentMovie from '../hooks/useGetCurrentMovie'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies'
import useGetAiringToday from '../hooks/useGetAiringToday'
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies'



const Browse = () => {

  useNowPlayingMovies()
  useGetCurrentMovie()
  useGetPopularMovies()
  useGetTopRatedMovies()
  useGetAiringToday()
  useGetUpcomingMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
