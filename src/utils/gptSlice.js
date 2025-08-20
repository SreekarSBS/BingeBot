import { createSlice } from "@reduxjs/toolkit"


const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
    },
    reducers : {
        toggleGptSearch : (state) => {
            state.showGptSerch = !state.showGptSearch
        }
    }
})

export const {toggleGptSearch} = gptSlice.actions
export default gptSlice.reducer