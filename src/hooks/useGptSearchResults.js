import gemini from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../utils/gptSlice";

const useGptSearchResults = () => {
    const selectedLanguage = useSelector((store) => store.language?.selectedLanguage);
    const searchText = useRef(null)
    const dispatch = useDispatch()
  
    const getMoviesFromSearch = async(movie) => {
      try {
      let res =  await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
      let jsonRes = await res.json();
      if(jsonRes?.results?.length === 0){
         res = await fetch('https://api.themoviedb.org/3/search/tv?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
         jsonRes = await res.json();
      }
        return jsonRes?.results.filter(item => item.title.trim() == movie.trim())
      }
      catch(err){
        console.log(err);
        
      }
    }
  
    const handleGptFilter = async() => {
      const response = await gemini.models.generateContent({
        model: 'gemini-2.0-flash-001',
        contents: 'You are a movie recommendation assistant. Based on the user query, provide a list of movies that match the criteria. The user query is: ' + searchText.current.value
        + 'I want the results to be in this format : Spiderman, Batman, Superman. Do not include any other text or explanation, Please dont limit the response to 3 movies , I need atleast 5 movies.',
      });
      const geminiResponseList = response.text.split(",");
      const promisesList = geminiResponseList.map((movie) => getMoviesFromSearch(movie));
      const moviesList= await Promise.all(promisesList);
      console.log(moviesList);
      
     dispatch(addMovies({
        movieNames: geminiResponseList,
        movieResults: moviesList
      }));
    }

    return {
        searchText,
        handleGptFilter,
        selectedLanguage
    }
}

export default useGptSearchResults
