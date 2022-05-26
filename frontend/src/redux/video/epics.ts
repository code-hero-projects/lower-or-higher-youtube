import { createAsyncThunk } from "@reduxjs/toolkit";
import { CodeHeroApi } from "../../api";
import { FetchedTimestamp, Video } from "../../models";
import { RepositoryFacade } from '../../repositories';

const videoRepository = RepositoryFacade.getVideoRepository();
const countryVideosFetchedTimestampRepository = RepositoryFacade.getCountryVideosFetchedTimestampRepository();

export function randomizeVideos(videos: Video[]): Video[] {
  let currentIndex = videos.length,  randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [videos[currentIndex], videos[randomIndex]] = [videos[randomIndex], videos[currentIndex]];
    }

    return videos;
}

export const getVideos = createAsyncThunk<Video[], number>('videos/fetchVideos', async(countryId: number) => {
  const countryVideosFetchedTimestamp = await countryVideosFetchedTimestampRepository.read(countryId);

  if (!countryVideosFetchedTimestamp || hasCacheExpired(countryVideosFetchedTimestamp)) {
    const videos = await shuffleVideos(CodeHeroApi.getVideos(countryId));

    await insertFetchedTimestamp(countryId);
    await insertVideos(videos);
    
    return videos;
  }

  return (await videoRepository.readAll()).filter(video => video.countryId === countryId);
});

async function shuffleVideos(videosPromise: Promise<Video[]>): Promise<Video[]> { 
  const videos = await videosPromise;
  return randomizeVideos(videos); 
};

async function insertFetchedTimestamp(countryId: number) {
  const currentDate = new Date();
  const fetchedTimestamp: FetchedTimestamp = { id: countryId, date: currentDate };
  await countryVideosFetchedTimestampRepository.delete(fetchedTimestamp.id);
  await countryVideosFetchedTimestampRepository.insert(fetchedTimestamp);
}

async function insertVideos(videos: Video[]) {
  videos.forEach(async video => {
    await videoRepository.delete(video.id);
    await videoRepository.insert(video);
  });
}

function hasCacheExpired(countryVideosFetchedTimestamp: FetchedTimestamp): boolean {
  const currentDate = new Date();
  return countryVideosFetchedTimestamp.date.getDate() !== currentDate.getDate();
}
