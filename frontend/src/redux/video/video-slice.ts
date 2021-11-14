import { createSlice } from "@reduxjs/toolkit";
import { AsyncOperationState, Video } from "../../models";
import { getVideos, randomizeVideos } from "./epics";

export interface VideoState {
  videos: Video[];
  fetchVideosOperationState: AsyncOperationState;
}

const initialState: VideoState = {
  videos: [],
  fetchVideosOperationState: AsyncOperationState.None
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    shuffleVideos: (state) => {
      const newVideos = randomizeVideos(state.videos);
      state.videos = newVideos;
    },
    resetFetchVideosOperationState: (state) => {
      state.fetchVideosOperationState = AsyncOperationState.None;
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
        state.fetchVideosOperationState = AsyncOperationState.Success;
      })
      .addCase(getVideos.rejected, (state) => {
        state.fetchVideosOperationState = AsyncOperationState.Error;
      })
  }
});

export const { shuffleVideos, resetFetchVideosOperationState } = videoSlice.actions;

export const videoReducer = videoSlice.reducer;