import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  CurrentConditions,
  FetchStatus,
  SevenDayForecast,
  TwoDayForecast,
  WEATHER_CODES,
} from "../../model";
import { fetchCurrentConditions } from "./dailyForecastAPI";

export interface DailyForecastState {
  currentConditions: CurrentConditions;
  sevenDayForecast: SevenDayForecast[];
  twoDayForecast: TwoDayForecast[];
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
    sunrise: new Date(0).toISOString(),
    sunset: new Date(0).toISOString(),
  },
  sevenDayForecast: [],
  twoDayForecast: [],
  status: "idle",
  error: null,
};

export const getCurrentConditions = createAsyncThunk(
  "dailyForecast/getCurrentConditions",
  async (data: {
    latitude: number;
    longitude: number;
  }): Promise<{
    currentConditions: CurrentConditions;
    sevenDayForecast: SevenDayForecast[];
    twoDayForecast: TwoDayForecast[];
  }> => {
    const response = await fetchCurrentConditions(
      data.latitude,
      data.longitude
    );

    const daily = response.daily;
    const hourly = response.hourly;
    const currentHour =
      new Date().getUTCHours() + Math.round(response.utc_offset_seconds / 3600);
    const currentConditions: CurrentConditions = {
      temperature: response.current_weather.temperature,
      time: response.current_weather.time,
      windDirection: response.current_weather.winddirection,
      windSpeed: response.current_weather.windspeed,
      weatherCode: WEATHER_CODES[response.current_weather.weathercode],
      apparentTemperature: hourly.apparent_temperature[currentHour],
      precipitation: hourly.precipitation[currentHour],
      precipitationProbability: hourly.precipitation_probability[currentHour],
      sunrise: daily.sunrise[0],
      sunset: daily.sunset[0],
    };

    const sevenDayForecast: SevenDayForecast[] = daily.time.map(
      (dateString: string, index: number) => {
        const date = new Date(dateString);
        return {
          weatherCode: WEATHER_CODES[daily.weathercode[index]],
          windDirection: 0,
          windSpeed: 0,
          precipitation: daily.precipitation_sum[index],
          precipitationProbability: daily.precipitation_probability_max[index],
          sunrise: daily.sunrise[index],
          sunset: daily.sunset[index],
          date: date,
          day: date.toLocaleString("en-us", { weekday: "short" }),
          high: daily.temperature_2m_max[index],
          low: daily.temperature_2m_min[index],
        };
      }
    );
    const twoDayForecast: TwoDayForecast[] = [daily.time[0], daily.time[1]].map(
      (dateString: string, index: number) => {
        const date = new Date(dateString);
        const weathercodeStartIndex = Math.round(response.utc_offset_seconds / 3600) * (index + 1)
        const weatherCodesIndices = [
          weathercodeStartIndex ,
          weathercodeStartIndex + 6,
          weathercodeStartIndex + 12,
          weathercodeStartIndex + 18,
        ]
        return {
          date: date,
          day: date.toLocaleString("en-us", { weekday: "short" }),
          weatherCodes: weatherCodesIndices.map(index => {
          
            return WEATHER_CODES[hourly.weathercode[index]]
          }),
          high: daily.temperature_2m_max[index],
          low: daily.temperature_2m_min[index],
          windDirection: daily.winddirection_10m_dominant[index],
          windSpeed: daily.windspeed_10m_max[index],
          precipitation: daily.precipitation_sum[index],
          precipitationProbability: daily.precipitation_probability_max[index],
          sunrise: daily.sunrise[index],
          sunset: daily.sunset[index],
        };
      }
    );
    debugger;
    return {
      currentConditions: currentConditions,
      sevenDayForecast: sevenDayForecast,
      twoDayForecast: twoDayForecast
    };
  }
);

export const dailyForecastSlice = createSlice({
  name: "dailyForecast",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        getCurrentConditions.pending,
        (state: DailyForecastState, action) => {
          state.status = action.payload || "idle";
        }
      )
      .addCase(
        getCurrentConditions.fulfilled,
        (
          state: DailyForecastState,
          action: PayloadAction<{
            currentConditions: CurrentConditions;
            sevenDayForecast: SevenDayForecast[];
            twoDayForecast: TwoDayForecast[];
          }>
        ) => {
          state.status = "succeeded";
          state.currentConditions = action.payload.currentConditions;
          state.sevenDayForecast = action.payload.sevenDayForecast;
          state.twoDayForecast = action.payload.twoDayForecast;
        }
      )
      .addCase(getCurrentConditions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});
export const { setStatus } = dailyForecastSlice.actions;
export const selectCurrentConditions = (state: RootState) =>
  state.dailyForecast.currentConditions;

export const selectCurrentConditionsStatus = (state: RootState) =>
  state.dailyForecast.status;

export default dailyForecastSlice.reducer;
