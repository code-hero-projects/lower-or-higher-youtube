import { createSlice } from "@reduxjs/toolkit";
import { Answer } from "../../models";

export interface QuestionState {
  time: number;
  timeStopped: boolean;
  answer: Answer;
}

const initialState: QuestionState = {
  time: 15,
  timeStopped: false,
  answer: Answer.NotSelected
};

const questionSlice = createSlice({
  name: 'qestion',
  initialState,
  reducers: {
    nextQuestion: (state) => {
      state.time = initialState.time;
      state.timeStopped = false;
      state.answer = initialState.answer;
    },
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
    stopTime: (state) => {
      state.timeStopped = true;
    },
    updateTime: (state, action) => {
      state.time = action.payload;
    },
  }
});

export const { nextQuestion, setAnswer, stopTime, updateTime } = questionSlice.actions;

export const questionReducer = questionSlice.reducer;