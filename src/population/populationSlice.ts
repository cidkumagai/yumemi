import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store/store';
import {
  PopulationState,
  PrefectureData,
  ResponsePrefectureData,
  ResponsePrefectureList,
} from '../types/types';

// 都道府県一覧の取得
export const getPrefList = createAsyncThunk('populations/getPrefList', async () => {
  const apiKey = process.env.REACT_APP_APIKEY;
  if (apiKey) {
    const { data } = await axios.get<ResponsePrefectureList>(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        headers: {
          'X-API-KEY': apiKey,
        },
      }
    );
    if (data.statusCode) {
      throw new Error(data.message ? data.message : undefined);
    }
    return data.result;
  }
});

// 都道府県別データの取得
export const getPrefData = createAsyncThunk('populations/getPrefData', async (id: number) => {
  const apiKey = process.env.REACT_APP_APIKEY;
  if (apiKey) {
    const { data } = await axios.get<ResponsePrefectureData>(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${id}`,
      {
        headers: {
          'X-API-KEY': apiKey,
        },
      }
    );
    if (data.statusCode) {
      throw new Error(data.message ? data.message : undefined);
    }
    return { id: id, response: data.result.data[0] };
  }
});

const initialState: PopulationState = {
  result: undefined,
  period: undefined,
  error: undefined,
};

export const populationSlice = createSlice({
  name: 'populations',
  initialState,
  reducers: {
    updateCheckBox: (
      state: PopulationState,
      action: PayloadAction<{ prefCode: number; checked: boolean }>
    ) => {
      if (state.result) {
        state.result[action.payload.prefCode - 1].isChecked = action.payload.checked;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPrefList.fulfilled, (state, action) => {
      if (action.payload) {
        const prefList: PrefectureData[] = action.payload.map((pref) => {
          return {
            prefCode: pref.prefCode,
            prefName: pref.prefName,
            isChecked: false,
            prefData: null,
          };
        });
        state.result = prefList;
      }
    });
    builder.addCase(getPrefList.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(getPrefData.fulfilled, (state, action) => {
      if (state.period === undefined && action.payload) {
        state.period = action.payload.response.data.map((data) => {
          return data.year;
        });
      }
      if (state.result && action.payload) {
        state.result[action.payload.id - 1].prefData = action.payload.response.data.map((data) => {
          return data.value;
        });
      }
    });
    builder.addCase(getPrefData.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { updateCheckBox } = populationSlice.actions;
export const selectPopulations = (state: RootState) => state.populations;
export default populationSlice.reducer;
