import { createAsyncThunk } from "@reduxjs/toolkit";
import { CodeHeroApi } from "../../api";
import { Video } from "../../models";

function shuffleVideos(videosPromise: Promise<Video[]>): Promise<Video[]> { return videosPromise.then(randomizeVideos) };

export function randomizeVideos(videos: Video[]) {
  let currentIndex = videos.length,  randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [videos[currentIndex], videos[randomIndex]] = [videos[randomIndex], videos[currentIndex]];
    }

    return videos;
}

export const getVideos = createAsyncThunk<Video[], number>('videos/fetchVideos', async(countryId: number) => shuffleVideos(CodeHeroApi.getVideos(countryId)));