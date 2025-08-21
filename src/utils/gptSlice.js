import { createSlice } from "@reduxjs/toolkit"


const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
        movieNames : null,
        movieResults : null
    },
    reducers : {
        toggleGptSearch : (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addMovies : (state,action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearMovies : (state) => {
            state.movieNames = null;
            state.movieResults = null;
        }
    }
})

export const {toggleGptSearch, addMovies, clearMovies} = gptSlice.actions
export default gptSlice.reducer