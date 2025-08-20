import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    currentMovie: null,
    videoKey: null,
    popular: null,
    topRated: null,
    airingToday: null,
    upcoming : null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addCurrentMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
    addVideoKey: (state, action) => {
      state.videoKey = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popular = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addAiringMovies: (state, action) => {
      state.airingToday = action.payload;
    },
    addUpcoming : (state, action) => {
      state.upcoming = action.payload;
    }
  },
});

export const {
  addNowPlayingMovies,
  addCurrentMovie,
  addVideoKey,
  addPopularMovies,
  addTopRatedMovies,
  addAiringMovies,
  addUpcoming
} = moviesSlice.actions;
export default moviesSlice.reducer;
