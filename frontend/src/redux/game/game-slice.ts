import { createSlice } from "@reduxjs/toolkit";
import { CurrentGameState } from "../../models";

export interface GameState {
  gameState: CurrentGameState;
  score: number;
  time: number;
}

const initialState: GameState = {
  gameState: CurrentGameState.NotStarted,
  score: 0,
  time: 15
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: (state) => {
      state.gameState = CurrentGameState.NotStarted;
    },
    startGame: (state) => {
      state.gameState = CurrentGameState.Playing;
      state.score = initialState.score;
      state.time = initialState.time;
    },
    endGame: (state) => {
      state.gameState = CurrentGameState.Ended;
    },
    addScore: (state, action) => {
      state.score += action.payload;
    },
    resetScore: (state) => {
      state.score = initialState.score;
    },
    updateTime: (state, action) => {
      state.time = action.payload;
    },
    resetTime: (state) => {
      state.time = initialState.time;
    }
  }
});

export const { resetGame, startGame, endGame, addScore, resetScore, updateTime, resetTime } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;