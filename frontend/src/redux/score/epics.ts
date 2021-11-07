import { createAsyncThunk, current } from '@reduxjs/toolkit';
import { CodeHeroApi } from '../../api';
import { Score } from '../../models';

export const getScores = createAsyncThunk<Score[], void>('score/fetchScores', async () => 
  CodeHeroApi.getScores().then(scores => scores.sort((current, next) => current.points - next.points)));