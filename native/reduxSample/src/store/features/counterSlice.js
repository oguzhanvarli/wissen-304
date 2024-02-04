import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers : {
    arttir : (state) => {
      state.value += 1
    },
    azalt : (state) => {
      state.value -= 1
    },
    sayiyaGoreArttır : (state, action) => {
      state.value += Number(action.payload)
    }
  }
})

export const {arttir, azalt, sayiyaGoreArttır} = counterSlice.actions
export default counterSlice.reducer