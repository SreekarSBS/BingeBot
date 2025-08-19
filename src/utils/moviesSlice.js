import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlaying : null,
        currentMovie : null,
    },
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlaying = action.payload;
        },
        addCurrentMovie : (state,action) => {
            state.currentMovie = action.payload
        }
    }
})

export const {addNowPlayingMovies, addCurrentMovie} = moviesSlice.actions
export default moviesSlice.reducer;