import { configureStore } from '@reduxjs/toolkit';
import { countryReducer } from './country';
import { gameReducer } from './game';
import { instructionsReducer } from './instructions/instructions-slice';

export const store = configureStore({
  reducer: {
    country: countryReducer,
    game: gameReducer,
    instructions: instructionsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ReturnType<typeof store.dispatch>;