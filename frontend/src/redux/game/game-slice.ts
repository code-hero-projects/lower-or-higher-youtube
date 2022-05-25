import { createSlice } from "@reduxjs/toolkit";
import { CurrentGameState } from "../../models";
import { RepositoryFacade } from '../../repositories';

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
    setupGame: () => {
      RepositoryFacade.setup();
    }
  }
});

export const { resetGame, startGame, endGame, setupGame } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;