import { createAsyncThunk } from "@reduxjs/toolkit";
import { CodeHeroApi } from "../../api";
import { Video } from "../../models";

export const getVideos = createAsyncThunk<Video[], number>('videos/fetchVideos', async(countryId: number) => await CodeHeroApi.getVideos(countryId));