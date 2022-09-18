import { createSlice } from '@reduxjs/toolkit'

interface IGameRound{
    firstNumber: number,
    secondNumber: number,
    answer: number,
}

export const gamePlaySlice = createSlice({
  name: 'gamePlay',
  initialState: {
    gameHistory: new Array<IGameRound>(),
    numberRight: 0,
    totalQuestions: 0,
    isStarted: false,
  },
  reducers: {
    addRound: (state, action) => {
        state.gameHistory.push(action.payload);
        const {firstNumber, secondNumber, answer} = action.payload;
        if(firstNumber*secondNumber===answer){
            state.numberRight += 1;
        }
        state.totalQuestions += 1;
    },
    reset: (state) => {
        state.numberRight = 0;
        state.totalQuestions = 0;
    },
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
export const { addRound, reset, toggle } = gamePlaySlice.actions

export default gamePlaySlice.reducer