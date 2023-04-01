import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CurrentConditions, FetchStatus } from "../../model";
import { fetchCurrentConditions } from "./dailyForecastAPI";

export interface DailyForecastState {
  currentConditions: CurrentConditions | undefined;
  status: FetchStatus;
  error: string | null;
}

const initialState: DailyForecastState = {
  currentConditions: undefined,
  status: "idle",
  error: null,
};

export const getCurrentConditions = createAsyncThunk(
  "dailyForecast/getCurrentConditions",
  async (data: { latitude: number; longitude: number}) => {
    const response = await fetchCurrentConditions(data.latitude, data.longitude);

    return response.results;
  }
);

export const dailyForecastSlice = createSlice({
  name: "dailyForecast",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCurrentConditions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCurrentConditions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentConditions = action.payload ? action.payload : [];
      })
      .addCase(getCurrentConditions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const {} = dailyForecastSlice.actions;

export const selectCurrentConditions = (state: RootState) =>
  state.dailyForecast.currentConditions;

export default dailyForecastSlice.reducer;
