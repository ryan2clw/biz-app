import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    numberRight: 0,
    totalQuestions: 0
  },
  reducers: {
    reset: (state) => {
      state.numberRight = 0;
      state.totalQuestions = 0;
    },
    incrementByAmount: (state, action) => {
      state.totalQuestions += 1;
      state.numberRight += action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { reset, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer