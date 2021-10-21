import { createAsyncThunk } from '@reduxjs/toolkit';
import { CodeHeroApi } from '../../api';
import { Country } from '../../models';

export const getCountries = createAsyncThunk<Country[], void>('country/fetchCountries', async() => await CodeHeroApi.getCountries());
