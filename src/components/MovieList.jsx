import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
  return (
    <>
    <h1 className="text-2xl py-4 font-bold">{title}</h1>
    
    <div className="flex overflow-x-scroll">
        
        <div className="flex ">
       { movies?.map((movie) => <MovieCard key={movie.id} movie  ={movie}/> ) }
       </div>
    </div>
    </>
  )  
}

export default MovieList