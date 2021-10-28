import { createSlice } from "@reduxjs/toolkit";
import { AsyncOperationState, Video } from "../../models";
import { getVideos, randomizeVideos } from "./epics";

export interface VideoState {
  videos: Video[];
  videoGuessed: Video;
  videoToGuess: Video;
  currentIndex: number;
  operationState: AsyncOperationState;
}

const defaultVideo: Video = {
  id: 0,
  channel: '',
  name: '',
  thumbnail: '',
  views: 0
};

const initialState: VideoState = {
  videos: [],
  videoGuessed: defaultVideo,
  videoToGuess: defaultVideo,
  currentIndex: 0,
  operationState: AsyncOperationState.None
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    nextVideo: (state) => {
      const nextIndex = state.currentIndex + 1;
      state.videoGuessed = state.videoToGuess;
      state.videoToGuess = state.videos[nextIndex];
      state.currentIndex = nextIndex;
    },
    shuffleVideos: (state) => {
      const newVideos = randomizeVideos(state.videos);
      state.videos = newVideos;
      state.currentIndex = 1;
      state.videoGuessed = newVideos[0];
      state.videoToGuess = newVideos[1];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVideos.pending, (state) => {
        state.operationState = AsyncOperationState.Loading;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        const videos = action.payload;
        state.videos = videos;
        state.currentIndex = 1;
        state.videoGuessed = videos[0];
        state.videoToGuess = videos[1];
        state.operationState = AsyncOperationState.Success;
      })
      .addCase(getVideos.rejected, (state) => {
        state.operationState = AsyncOperationState.Error;
      })
  }
});

export const { nextVideo, shuffleVideos } = videoSlice.actions;

export const videoReducer = videoSlice.reducer;