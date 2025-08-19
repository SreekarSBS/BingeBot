
import useGetCurrentMovie from '../hooks/useGetCurrentMovie'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'



const Browse = () => {

  useNowPlayingMovies()
  useGetCurrentMovie()

  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
