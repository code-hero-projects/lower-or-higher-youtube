import { createSlice } from '@reduxjs/toolkit';
import { AsyncOperationState, Score } from '../../models';
import { addScore, getScores } from './epics';

export interface ScoreState {
  score: number;
  leaderboardScores: Score[];
  fetchOperationState: AsyncOperationState;
  postOperationState: AsyncOperationState;
}

const initialState: ScoreState = {
  score: 0,
  leaderboardScores: [],
  fetchOperationState: AsyncOperationState.None,
  postOperationState: AsyncOperationState.None
};
 
const scoreSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    updateScore: (state, action) => {
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
        state.fetchOperationState = AsyncOperationState.Loading;
      })
      .addCase(getScores.fulfilled, (state, action) => {
        state.leaderboardScores = action.payload;
        state.fetchOperationState = AsyncOperationState.Success;
      })
      .addCase(getScores.rejected, state => {
        state.fetchOperationState = AsyncOperationState.Error;
      })

      .addCase(addScore.pending, state => {
        state.postOperationState = AsyncOperationState.Loading;
      })
      .addCase(addScore.fulfilled, (state, action) => {
        state.postOperationState = AsyncOperationState.Success;
      })
      .addCase(addScore.rejected, state => {
        state.postOperationState = AsyncOperationState.Error;
      })
  }
});

export const { updateScore, resetScore } = scoreSlice.actions;

export const scoreReducer = scoreSlice.reducer;