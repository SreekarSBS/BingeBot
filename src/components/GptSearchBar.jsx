
import lang from "../utils/languageConstants";

import useGptSearchResults from "../hooks/useGptSearchResults";

const GptSearchBar = () => {
 const {searchText,
  handleGptFilter,
  selectedLanguage} = useGptSearchResults()
  return (
    
   
    <div className="   flex flex-col items-center">
    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl flex flex-col text-pink-600 mt-12 font-black underline-offset-8 underline z-50 py-12 font-stretch-125% ">Search Recommendations</h1>
      <form onSubmit={(e) => e.preventDefault()} className="gap-2 w-3/4 m-4 sm:w-3/4 lg:w-1/2 sm:m-0   h-12 grid grid-cols-12">
        <input ref = {searchText} placeholder={lang[selectedLanguage].searchPlaceholder } className="rounded-lg p-4 border col-span-9"></input>
        <button onClick={handleGptFilter} className="col-span-3 text-xs sm:text-sm  rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700 border">{lang[selectedLanguage].searchText}</button>
      </form>
    </div>

  );
};

export default GptSearchBar;
