import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CurrentConditions, FetchStatus, WEATHER_CODES } from "../../model";
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
  async (data: {
    latitude: number;
    longitude: number;
  }): Promise<CurrentConditions> => {
    const response = await fetchCurrentConditions(
      data.latitude,
      data.longitude
    );
    const currentHour = new Date().getHours();
    const currentConditions: CurrentConditions = {
      temperature: response.current_weather.temperature,
      time: response.current_weather.time,
      winddirection: response.current_weather.winddirection,
      windSpeed: response.current_weather.windspeed,
      weatherCode: WEATHER_CODES[response.current_weather.weathercode],
      apparentTemperature: response.hourly.apparent_temperature[currentHour],
    } 

    return currentConditions;
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
      .addCase(
        getCurrentConditions.fulfilled,
        (state: DailyForecastState, action: PayloadAction<CurrentConditions>) => {
        
          state.status = "succeeded"
          state.currentConditions = action.payload  ? action.payload : undefined;
        }
        
      )
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
