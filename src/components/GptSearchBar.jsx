import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import React from "react";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.language?.selectedLanguage);
  return (
    <div className=" pt-[20%] sm:pt-[10%]  flex justify-center">
      <form onSubmit={(e) => e.preventDefault()} className="gap-2 w-full m-4 sm:w-1/2 sm:m-0  h-12 grid grid-cols-12">
        <input  placeholder={lang[selectedLanguage].searchPlaceholder } className="rounded-lg p-4 border col-span-9"></input>
        <button className="col-span-3 text-xs sm:text-sm  rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700 border">{lang[selectedLanguage].searchText}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
