import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsyncOperationState, Country } from '../../models';
import { getCountries } from './epics';

export interface CountryState {
  countries: Country[];
  selectedCountry: number;
  operationState: AsyncOperationState;
}

const initialState: CountryState = {
  countries: [],
  selectedCountry: 0,
  operationState: AsyncOperationState.None
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
        state.operationState = AsyncOperationState.Loading;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        const countries = action.payload;
        state.countries = countries.sort((current, next) => current.name.localeCompare(next.name));
        state.selectedCountry = countries[0].id;
        state.operationState = AsyncOperationState.Success;
      })
      .addCase(getCountries.rejected, (state) => {
        state.operationState = AsyncOperationState.Error;
      });
  }
});

export const { selectCountry } = countrySlice.actions;

export const countryReducer = countrySlice.reducer;
