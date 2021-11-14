import { createSlice } from '@reduxjs/toolkit';

export interface ScoreState {
  score: number;
}

const initialState: ScoreState = {
  score: 0,
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
});

export const { updateScore, resetScore } = scoreSlice.actions;

export const scoreReducer = scoreSlice.reducer;