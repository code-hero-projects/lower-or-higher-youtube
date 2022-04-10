import { createSlice } from "@reduxjs/toolkit";
import { AsyncOperationState, Video } from "../../models";
import { getVideos, randomizeVideos } from "./epics";

export interface VideoState {
  videos: Video[];
  initialVideos: Video[];
  fetchVideosOperationState: AsyncOperationState;
}

const initialState: VideoState = {
  videos: [],
  initialVideos: [],
  fetchVideosOperationState: AsyncOperationState.None
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    shuffleVideos: (state) => {
      const newVideos = randomizeVideos(state.initialVideos);
      state.videos = newVideos;
    },
    resetFetchVideosOperationState: (state) => {
      state.fetchVideosOperationState = AsyncOperationState.None;
    },
    extendVideos: (state) => {
      const videos = state.videos;
      const oldVideos = videos.slice(0, videos.length - 1);
      const randomizedVideos = randomizeVideos(oldVideos);
      randomizedVideos.push(videos[videos.length - 1]);
      state.videos = videos.concat(randomizedVideos);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVideos.pending, (state) => {
        state.fetchVideosOperationState = AsyncOperationState.Loading;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        const videos = action.payload;
        state.videos = videos;
        state.initialVideos = videos;
        state.fetchVideosOperationState = AsyncOperationState.Success;
      })
      .addCase(getVideos.rejected, (state) => {
        state.fetchVideosOperationState = AsyncOperationState.Error;
      })
  }
});

export const { shuffleVideos, resetFetchVideosOperationState, extendVideos } = videoSlice.actions;

export const videoReducer = videoSlice.reducer;