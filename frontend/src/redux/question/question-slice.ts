import { createSlice } from "@reduxjs/toolkit";
import { Answer } from "../../models";

export interface QuestionState {
  time: number;
  answer: Answer;
}

const initialState: QuestionState = {
  time: 15,
  answer: Answer.NotSelected
};

const questionSlice = createSlice({
  name: 'qestion',
  initialState,
  reducers: {
    nextQuestion: (state) => {
      state.time = initialState.time;
      state.answer = initialState.answer;
    },
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
    updateTime: (state, action) => {
      state.time = action.payload;
    },
  }
});

export const { nextQuestion, setAnswer, updateTime } = questionSlice.actions;

export const questionReducer = questionSlice.reducer;