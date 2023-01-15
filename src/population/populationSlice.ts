import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../app/store';

type ResponsePrefectureList = {
  message: null;
  result: [
    {
      prefCode: number;
      prefName: string;
    },
  ];
};

type PrefectureData = {
  prefCode: number;
  prefName: string;
  isChecked: boolean;
  prefData: number[] | null;
};

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
      },
    );
    const prefList: PrefectureData[] = data.result.map((pref) => {
      return {
        prefCode: pref.prefCode,
        prefName: pref.prefName,
        isChecked: false,
        prefData: null,
      };
    });
    return prefList;
  }
});

type ResponsePrefectureData = {
  message: null;
  result: {
    boundaryYear: number;
    data: [
      {
        label: string;
        data: [
          {
            year: number;
            value: number;
          },
        ];
      },
    ];
  };
};

// 都道府県別データの取得
export const getPrefData = createAsyncThunk('populations/getPrefData', async (id: number) => {
  const apiKey = process.env.REACT_APP_APIKEY;
  if (typeof apiKey === 'string') {
    const { data } = await axios.get<ResponsePrefectureData>(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${id}`,
      {
        headers: {
          'X-API-KEY': apiKey,
        },
      },
    );
    return { id: id, response: data.result.data[0] };
  }
});

interface PopulationState {
  result?: PrefectureData[];
  period?: number[];
}

const initialState: PopulationState = {
  result: undefined,
  period: undefined,
};

export const populationSlice = createSlice({
  name: 'populations',
  initialState,
  reducers: {
    updateCheckBox: (
      state: PopulationState,
      action: PayloadAction<{ id: number; checked: boolean }>,
    ) => {
      if (state.result) {
        state.result[action.payload.id - 1].isChecked = action.payload.checked;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPrefList.fulfilled, (state, action) => {
      state.result = action.payload;
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
  },
});

export const { updateCheckBox } = populationSlice.actions;
export const selectPopulations = (state: RootState) => state.populations;
export default populationSlice.reducer;
