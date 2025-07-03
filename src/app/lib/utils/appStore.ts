'use client'
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
const appStore = configureStore({
  reducer: {
    userReducer,
  }
})

export default appStore;