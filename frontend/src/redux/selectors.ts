import { RootState } from "./store";

export const selectCountryState = (state: RootState) => state.country;
export const selectGameState = (state: RootState) => state.game;
export const selectInstructionsState = (state: RootState) => state.instructions;