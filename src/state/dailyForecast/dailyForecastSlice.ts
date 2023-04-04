import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CurrentConditions, FetchStatus, WEATHER_CODES } from "../../model";
import { fetchCurrentConditions } from "./dailyForecastAPI";

export interface DailyForecastState {
  currentConditions: CurrentConditions;
  status: FetchStatus;
  error: string | null;
}

const initialState: DailyForecastState = {
  currentConditions: {
    temperature: 0,
    apparentTemperature: 0,
    time: new Date().toISOString(),
    weatherCode: {
      image: "",
      summary: "",
    },
    windDirection: 0,
    windSpeed: 0,
    precipitation: 0,
    precipitationProbability: 0,
    sunrise: '',
    sunset: '',
  },
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
    const currentHour = new Date().getUTCHours();
    const currentConditions: CurrentConditions = {
      temperature: response.current_weather.temperature,
      time: response.current_weather.time,
      windDirection: response.current_weather.winddirection,
      windSpeed: response.current_weather.windspeed,
      weatherCode: WEATHER_CODES[response.current_weather.weathercode],
      apparentTemperature: response.hourly.apparent_temperature[currentHour],
      precipitation: response.hourly.precipitation[currentHour],
      precipitationProbability:
        response.hourly.precipitation_probability[currentHour],
        sunrise: response.daily.sunrise[0],
        sunset: response.daily.sunset[0]
    };

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
        (
          state: DailyForecastState,
          action: PayloadAction<CurrentConditions>
        ) => {
          state.status = "succeeded";
          state.currentConditions = action.payload;
        }
      )
      .addCase(getCurrentConditions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const selectCurrentConditions = (state: RootState) =>
  state.dailyForecast.currentConditions;

export const selectCurrentConditionsStatus = (state: RootState) =>
  state.dailyForecast.status;

export default dailyForecastSlice.reducer;
