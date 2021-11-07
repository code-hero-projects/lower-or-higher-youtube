import { createSlice } from '@reduxjs/toolkit';
import { AsyncOperationState, Score } from '../../models';
import { getScores } from './epics';

export interface ScoreState {
  score: number;
  leaderboardScores: Score[];
  operationState: AsyncOperationState;
}

const initialState: ScoreState = {
  score: 0,
  leaderboardScores: [],
  operationState: AsyncOperationState.None
};

const scoreSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    addScore: (state, action) => {
      const scoreToAdd = +process.env.REACT_APP_QUESTION_SCORE! + (action.payload * +process.env.REACT_APP_TIME_SECOND_BONUS_SCORE!);
      state.score += scoreToAdd;
    },
    resetScore: state => {
      state.score = initialState.score;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getScores.pending, state => {
        state.operationState = AsyncOperationState.Loading;
      })
      .addCase(getScores.fulfilled, (state, action) => {
        state.leaderboardScores = action.payload;
        state.operationState = AsyncOperationState.Success;
      })
      .addCase(getScores.rejected, state => {
        state.operationState = AsyncOperationState.Error;
      });
  }
});

export const { addScore, resetScore } = scoreSlice.actions;

export const scoreReducer = scoreSlice.reducer;