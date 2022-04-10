import { createSlice } from '@reduxjs/toolkit';

export interface ScoreState {
  score: number;
  highScore: number;
  hasNewHighScore: boolean;
}

const HIGH_SCORE_KEY = 'high-score';

const getHighScoreScore = () => {
  const highScore = localStorage.getItem(HIGH_SCORE_KEY);
  return highScore ? +highScore : 0;
};

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
      const { useTimer, time } = action.payload;
      let bonusScore = 0;
      
      if (useTimer) {
        const { REACT_APP_HIGH_TIME_BONUS, REACT_APP_HIGH_TIME_BONUS_POINTS, REACT_APP_LOW_TIME_BONUS_POINTS } = process.env;
        bonusScore = +REACT_APP_HIGH_TIME_BONUS_POINTS!;

        if (time < +REACT_APP_HIGH_TIME_BONUS!) {
          bonusScore = time > 0 ? +REACT_APP_LOW_TIME_BONUS_POINTS! : 0;
        }
      }
      
      state.score += +process.env.REACT_APP_QUESTION_SCORE! + bonusScore;
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