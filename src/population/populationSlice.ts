import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../app/store';

export const populationSlice = createSlice({
  name: 'populations',
  initialState: '',
  reducers: {},
  extraReducers: (builder) => {},
});

export const selectPopulations = (state: RootState) => state.populations;
export default populationSlice.reducer;
