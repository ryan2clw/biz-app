import { configureStore } from '@reduxjs/toolkit';
import gamePlayReducer from './gamePlaySlice';

export default configureStore({
    reducer: {
      gamePlay: gamePlayReducer
    },
  })