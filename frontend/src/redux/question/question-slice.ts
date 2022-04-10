import { createSlice } from "@reduxjs/toolkit";
import { Answer } from "../../models";

export interface QuestionState {
  time: number;
  timeStopped: boolean;
  useTimer: boolean;
  answer: Answer;
}

const USE_TIMER_KEY = 'use-timer';

const getUseTimer = () => {
  const useTimer = localStorage.getItem(USE_TIMER_KEY);
  return useTimer ? useTimer === "true" : false;
};

const initialState: QuestionState = {
  time: +process.env.REACT_APP_TIMER_START!,
  timeStopped: false,
  useTimer: getUseTimer(),
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
    toggleUseTimer: (state) => {
      const useTimerNewValue = !state.useTimer;
      state.useTimer = useTimerNewValue;
      localStorage.setItem(USE_TIMER_KEY, String(useTimerNewValue));
    }
  }
});

export const { nextQuestion, setAnswer, stopTime, updateTime, toggleUseTimer } = questionSlice.actions;

export const questionReducer = questionSlice.reducer;