import { createSlice } from '@reduxjs/toolkit'

export const gameDataSlice = createSlice({
  name: 'gameData',
  initialState: {
    isStarted: false,
  },
  reducers: {
    toggle: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isStarted = !state.isStarted
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = gameDataSlice.actions

export default gameDataSlice.reducer