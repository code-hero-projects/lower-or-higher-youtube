import { configureStore } from '@reduxjs/toolkit';
import { countryReducer } from './country';
import { gameReducer } from './game';
import { instructionsReducer } from './instructions/instructions-slice';
import { videoReducer } from './video/video-slice';

export const store = configureStore({
  reducer: {
    country: countryReducer,
    game: gameReducer,
    instructions: instructionsReducer,
    video: videoReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ReturnType<typeof store.dispatch>;