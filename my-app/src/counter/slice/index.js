import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => {
          return state + 1
        },
        decrement: (state) => {
            return state - 1
        }
    }
})
export const { increment, decrement} = counter.actions;
export default counter.reducer;