import { createAsyncThunk } from "@reduxjs/toolkit";
import { CodeHeroApi } from "../../api";
import { Video } from "../../models";

export function randomizeVideos(videos: Video[]): Video[] {
  let currentIndex = videos.length,  randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [videos[currentIndex], videos[randomIndex]] = [videos[randomIndex], videos[currentIndex]];
    }

    return videos;
}

export const getVideos = createAsyncThunk<Video[], number>('videos/fetchVideos', async(countryId: number) => await shuffleVideos(CodeHeroApi.getVideos(countryId)));

async function shuffleVideos(videosPromise: Promise<Video[]>): Promise<Video[]> { 
  const videos = await videosPromise;
  return randomizeVideos(videos); 
};
