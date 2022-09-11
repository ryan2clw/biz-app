import { configureStore } from '@reduxjs/toolkit';
import gameDataReducer from './gameDataSlice';

export default configureStore({
    reducer: {
      gameData: gameDataReducer,
    },
  })