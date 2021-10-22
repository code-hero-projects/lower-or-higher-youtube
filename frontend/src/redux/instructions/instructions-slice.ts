import { createSlice } from "@reduxjs/toolkit";

export interface InstructionsState {
  showInstructions: boolean;
}

const initialState: InstructionsState = {
  showInstructions: false
};

const instructionsSlice = createSlice({
  name: 'instructions',
  initialState,
  reducers: {
    showInstructions: (state) => {
      state.showInstructions = true;
    },
    closeInstructions: (state) => {
      state.showInstructions = false;
    }
  }
});

export const { showInstructions, closeInstructions } = instructionsSlice.actions;

export const instructionsReducer = instructionsSlice.reducer;