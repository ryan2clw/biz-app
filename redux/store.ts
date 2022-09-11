import { configureStore } from '@reduxjs/toolkit';
import gameDataReducer from './gameDataSlice';
import counterReducer from './counterSlice';

export default configureStore({
    reducer: {
      gameData: gameDataReducer,
      counter: counterReducer,
    },
  })