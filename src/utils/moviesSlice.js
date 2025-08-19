import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlaying : null,
        currentMovie : null,
        videoKey : null
    },
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlaying = action.payload;
        },
        addCurrentMovie : (state,action) => {
            state.currentMovie = action.payload
        },
        addVideoKey : (state, action) => {
            state.videoKey = action.payload
        }
    }
})

export const {addNowPlayingMovies, addCurrentMovie, addVideoKey} = moviesSlice.actions
export default moviesSlice.reducer;