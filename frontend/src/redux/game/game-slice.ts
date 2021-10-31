import { createSlice } from "@reduxjs/toolkit";
import { CurrentGameState } from "../../models";

export interface GameState {
  gameState: CurrentGameState;
  score: number;
}

const initialState: GameState = {
  gameState: CurrentGameState.NotStarted,
  score: 0
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
  }
});

export const { resetGame, startGame, endGame, addScore, resetScore } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;