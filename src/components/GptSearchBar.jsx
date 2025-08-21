import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import React, { useRef } from "react";
import gemini from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.language?.selectedLanguage);
  const searchText = useRef(null)

  const getMoviesFromSearch = async(movie) => {
    try {
    let res =  await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
    let jsonRes = await res.json();
    if(jsonRes?.results?.length === 0){
       res = await fetch('https://api.themoviedb.org/3/search/tv?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
       jsonRes = await res.json();
    }
      return jsonRes?.results
    }
    catch(err){
      console.log(err);
      
    }
  }

  const handleGptFilter = async() => {
    const response = await gemini.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: 'You are a movie recommendation assistant. Based on the user query, provide a list of movies that match the criteria. The user query is: ' + searchText.current.value
      + 'I want the results to be in this format : Spideman, Batman, Superman. Do not include any other text or explanation.',
    });
    const geminiResponseList = response.text.split(",");
    const promisesList = geminiResponseList.map((movie) => getMoviesFromSearch(movie));
    const moviesList= await Promise.all(promisesList);
    console.log(moviesList);
    
   
  }
  return (
    <div className=" pt-[20%] sm:pt-[10%]  flex justify-center">
      <form onSubmit={(e) => e.preventDefault()} className="gap-2 w-full m-4 sm:w-1/2 sm:m-0  h-12 grid grid-cols-12">
        <input ref = {searchText} placeholder={lang[selectedLanguage].searchPlaceholder } className="rounded-lg p-4 border col-span-9"></input>
        <button onClick={handleGptFilter} className="col-span-3 text-xs sm:text-sm  rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700 border">{lang[selectedLanguage].searchText}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
