import { createSlice } from "@reduxjs/toolkit"

const languageSlice = createSlice({
    name : "language",
    initialState : {
        selectedLanguage : 'en',
    },
    reducers : {
        changeLanguage : (state,action) => {
            state.selectedLanguage = action.payload;
        }
    }
})
export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;