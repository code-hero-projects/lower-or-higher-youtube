import { createSlice } from '@reduxjs/toolkit';

const HIGH_SCORE_KEY = 'high-score';

export interface ScoreState {
  score: number;
  highScore: number;
  hasNewHighScore: boolean;
}

const getHighScoreScore = () => {
  const highScore = localStorage.getItem(HIGH_SCORE_KEY);
  return highScore ? +highScore : 0;
}

const initialState: ScoreState = {
  score: 0,
  highScore: getHighScoreScore(),
  hasNewHighScore: false
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
    updateHighScore: (state) => {
      if (state.score > state.highScore) {
        state.hasNewHighScore = true
        state.highScore = state.score;
        localStorage.setItem(HIGH_SCORE_KEY, String(state.score));
      }
    }
  },
});

export const { updateScore, resetScore, updateHighScore } = scoreSlice.actions;

export const scoreReducer = scoreSlice.reducer;