import { RootState } from "./store";

export const selectCountryState = (state: RootState) => state.country;
export const selectGameState = (state: RootState) => state.game;
export const selectVideoState = (state: RootState) => state.video;
export const selectQuestionState = (state: RootState) => state.question;
export const selectScoreState = (state: RootState) => state.score;