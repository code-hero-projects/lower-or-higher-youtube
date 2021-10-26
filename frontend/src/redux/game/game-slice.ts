import { createSlice } from "@reduxjs/toolkit";
import { CurrentGameState } from "../../models";

export interface GameState {
  gameState: CurrentGameState;
  score: number;
  initialTime: number;
}

const initialState: GameState = {
  gameState: CurrentGameState.NotStarted,
  score: 0,
  initialTime: 15
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
    },
    endGame: (state) => {
      state.gameState = CurrentGameState.Playing;
    },
    addScore: (state, action) => {
      state.score += action.payload;
    },
    resetScore: (state) => {
      state.score = initialState.score;
    },
    resetTime: (state) => {
      state.initialTime = initialState.initialTime;
    }
  }
});

export const { resetGame, startGame, endGame, addScore, resetScore, resetTime } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;