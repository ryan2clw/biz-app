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
    answer: "",
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
    addToAnswer: (state, action) => {
      console.log("action.payload", action.payload);
      state.answer += action.payload;
    },
    clearAnswer:  (state) => {
      state.answer = "";
    },
    reset: (state) => {
        state.numberRight = 0;
        state.totalQuestions = 0;
    },
    toggle: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers.
        state.isStarted = !state.isStarted
      },
  },
})

// Action creators are generated for each case reducer function
export const { addRound, reset, toggle, addToAnswer, clearAnswer } = gamePlaySlice.actions

export default gamePlaySlice.reducer