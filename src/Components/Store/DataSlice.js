import { createSlice } from "@reduxjs/toolkit";
export const dataSlice = createSlice ({
    name : "data",
    initialState : {
        value : "all"
    },
    reducers : {
        update : (state,action) => {
            state.value = action.payload.text
        }
    }
})
export const {update} = dataSlice.actions
export default dataSlice.reducer