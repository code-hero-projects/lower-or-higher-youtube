import { configureStore } from '@reduxjs/toolkit';
import { countryReducer } from './country';
import { gameReducer } from './game';

export const store = configureStore({
  reducer: {
    country: countryReducer,
    game: gameReducer
  }
});
