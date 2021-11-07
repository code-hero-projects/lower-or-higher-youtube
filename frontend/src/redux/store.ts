import { configureStore } from '@reduxjs/toolkit';
import { countryReducer } from './country';
import { gameReducer } from './game';
import { questionReducer } from './question';
import { scoreReducer } from './score';
import { videoReducer } from './video';

export const store = configureStore({
  reducer: {
    country: countryReducer,
    game: gameReducer,
    video: videoReducer,
    question: questionReducer,
    score: scoreReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ReturnType<typeof store.dispatch>;