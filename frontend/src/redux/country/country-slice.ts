import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsyncOperationState, Country } from '../../models';
import { getCountries } from './epics';

export interface CountryState {
  countries: Country[];
  selectedCountry: number;
  fetchCountriesOperationState: AsyncOperationState;
}

const initialState: CountryState = {
  countries: [],
  selectedCountry: 0,
  fetchCountriesOperationState: AsyncOperationState.None
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    selectCountry: (state, action: PayloadAction<number>) => {
      state.selectedCountry = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.fetchCountriesOperationState = AsyncOperationState.Loading;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        const countries = action.payload;
        state.countries = countries;
        state.selectedCountry = countries[0].id;
        state.fetchCountriesOperationState = AsyncOperationState.Success;
      })
      .addCase(getCountries.rejected, (state) => {
        state.fetchCountriesOperationState = AsyncOperationState.Error;
      });
  }
});

export const { selectCountry } = countrySlice.actions;

export const countryReducer = countrySlice.reducer;
