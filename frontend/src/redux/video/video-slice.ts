import { createSlice } from "@reduxjs/toolkit";
import { AsyncOperationState, Video } from "../../models";
import { getVideos } from "./epics";

export interface VideoState {
  videos: Video[];
  operationState: AsyncOperationState;
}

const initialState: VideoState = {
  videos: [],
  operationState: AsyncOperationState.None
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideos.pending, (state) => {
        state.operationState = AsyncOperationState.Loading;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        const videos = action.payload;
        state.videos = videos;
        state.operationState = AsyncOperationState.Success;
      })
      .addCase(getVideos.rejected, (state) => {
        state.operationState = AsyncOperationState.Error;
      });
  }
});

export const videoReducer = videoSlice.reducer;