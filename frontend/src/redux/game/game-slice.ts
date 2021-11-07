import { createSlice } from "@reduxjs/toolkit";
import { CurrentGameState } from "../../models";

export interface GameState {
  gameState: CurrentGameState;
}

const initialState: GameState = {
  gameState: CurrentGameState.NotStarted
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
      state.gameState = CurrentGameState.Ended;
    },
    showLeaderboard: (state) => {
      state.gameState = CurrentGameState.Leaderboard
    },
    showEndGameLeaderboard: (state) => {
      state.gameState = CurrentGameState.EndGameLeaderboard
    }
  }
});

export const { resetGame, startGame, endGame, showLeaderboard, showEndGameLeaderboard } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;