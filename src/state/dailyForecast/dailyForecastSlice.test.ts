import { RootState } from "../../app/store";
import {
  CurrentConditions,
  SevenDayForecast,
  TwoDayForecast,
} from "../../model";
import reducer, {
  setStatus,
  selectCurrentConditions,
  selectSevenDayForecast,
  selectTwoDayForecast,
  selectCurrentConditionsStatus,
  DailyForecastState,
} from "./dailyForecastSlice";

const initialState: DailyForecastState = {
  currentConditions: {
    temperature: 0,
    apparentTemperature: 0,
    time: new Date(0).toISOString(),
    weatherCode: {
      image: "",
      summary: "",
    },
    windDirection: 0,
    windSpeed: 0,
    precipitation: 0,
    precipitationProbability: 0,
    sunrise: "1970-01-01T00:00:00.000Z",
    sunset: "1970-01-01T00:00:00.000Z",
  },
  sevenDayForecast: [],
  twoDayForecast: [],
  status: "idle",
  error: null,
};

const rootState: RootState = {
  dailyForecast: initialState,
  menu: { open: true },
  location: {
    currentLocation: {
      id: -1,
      name: "No Loction Selected",
      latitude: 0,
      longitude: 0,
      elevation: 0,
      feature_code: "",
      country_code: "",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      population: 0,
      country: "",
    },
    locations: [],
    status: "idle",
    error: null,
  },
};

const mockForecast = {
  currentConditions: {
    temperature: 18.6,
    time: "2023-04-16T14:00",
    windDirection: 74,
    windSpeed: 33.7,
    weatherCode: {
      image: "overcast",
      summary: "Overcast",
    },
    apparentTemperature: 14.9,
    precipitation: 0,
    precipitationProbability: 27,
    sunrise: "2023-04-16T06:45",
    sunset: "2023-04-16T17:56",
  },
  sevenDayForecast: [
    {
      weatherCode: {
        image: "overcast",
        summary: "Overcast",
      },
      windDirection: 0,
      windSpeed: 0,
      precipitation: 0,
      precipitationProbability: 58,
      sunrise: "2023-04-16T06:45",
      sunset: "2023-04-16T17:56",
      date: "2023-04-16",
      day: "Sun",
      high: 18.9,
      low: 17.9,
    },
    {
      weatherCode: {
        image: "overcast",
        summary: "Overcast",
      },
      windDirection: 0,
      windSpeed: 0,
      precipitation: 0,
      precipitationProbability: 39,
      sunrise: "2023-04-17T06:46",
      sunset: "2023-04-17T17:55",
      date: "2023-04-17",
      day: "Mon",
      high: 19.8,
      low: 17.7,
    },
    {
      weatherCode: {
        image: "overcast",
        summary: "Overcast",
      },
      windDirection: 0,
      windSpeed: 0,
      precipitation: 0,
      precipitationProbability: 81,
      sunrise: "2023-04-18T06:47",
      sunset: "2023-04-18T17:53",
      date: "2023-04-18",
      day: "Tue",
      high: 20.7,
      low: 17.5,
    },
    {
      weatherCode: {
        image: "overcast",
        summary: "Overcast",
      },
      windDirection: 0,
      windSpeed: 0,
      precipitation: 0,
      precipitationProbability: 74,
      sunrise: "2023-04-19T06:48",
      sunset: "2023-04-19T17:52",
      date: "2023-04-19",
      day: "Wed",
      high: 21.4,
      low: 18.7,
    },
    {
      weatherCode: {
        image: "overcast",
        summary: "Overcast",
      },
      windDirection: 0,
      windSpeed: 0,
      precipitation: 0,
      precipitationProbability: 32,
      sunrise: "2023-04-20T06:49",
      sunset: "2023-04-20T17:51",
      date: "2023-04-20",
      day: "Thu",
      high: 21.1,
      low: 18.7,
    },
    {
      weatherCode: {
        image: "lightRain",
        summary: "Light Rain Showers",
      },
      windDirection: 0,
      windSpeed: 0,
      precipitation: 8.2,
      precipitationProbability: 47,
      sunrise: "2023-04-21T06:50",
      sunset: "2023-04-21T17:50",
      date: "2023-04-21",
      day: "Fri",
      high: 19.2,
      low: 18.8,
    },
    {
      weatherCode: {
        image: "overcast",
        summary: "Overcast",
      },
      windDirection: 0,
      windSpeed: 0,
      precipitation: 0.8,
      precipitationProbability: 55,
      sunrise: "2023-04-22T06:50",
      sunset: "2023-04-22T17:48",
      date: "2023-04-22",
      day: "Sat",
      high: 21,
      low: 15.4,
    },
  ],
  twoDayForecast: [
    {
      date: "2023-04-16",
      day: "Sun",
      weatherCodes: [
        {
          image: "overcast",
          summary: "Overcast",
        },
        {
          image: "overcast",
          summary: "Overcast",
        },
        {
          image: "overcast",
          summary: "Overcast",
        },
        {
          image: "overcast",
          summary: "Overcast",
        },
      ],
      high: 18.9,
      low: 17.9,
      windDirection: 74,
      windSpeed: 36.3,
      precipitation: 0,
      precipitationProbability: 58,
      sunrise: "2023-04-16T06:45",
      sunset: "2023-04-16T17:56",
    },
    {
      date: "2023-04-17",
      day: "Mon",
      weatherCodes: [
        {
          image: "overcast",
          summary: "Overcast",
        },
        {
          image: "overcast",
          summary: "Overcast",
        },
        {
          image: "partlyCloudy",
          summary: "Partly Cloudy",
        },
        {
          image: "partlyCloudy",
          summary: "Partly Cloudy",
        },
      ],
      high: 19.8,
      low: 17.7,
      windDirection: 72,
      windSpeed: 30.2,
      precipitation: 0,
      precipitationProbability: 39,
      sunrise: "2023-04-17T06:46",
      sunset: "2023-04-17T17:55",
    },
  ],
};

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });
  it("should set status", () => {
    const previousState: DailyForecastState = initialState;

    expect(reducer(previousState, setStatus("succeeded"))).toEqual({
      ...previousState,
      status: "succeeded",
    });
  });
});

describe("selectors", () => {
  it("should handle currentConditions select", () => {
    const state: RootState = {
      ...rootState,
      dailyForecast: {
        ...initialState,
        currentConditions: mockForecast.currentConditions as CurrentConditions,
      },
    };
    expect(selectCurrentConditions(state)).toEqual(
      mockForecast.currentConditions
    );
  });
  it("should handle sevenDayForecast select", () => {
    const state: RootState = {
      ...rootState,
      dailyForecast: {
        ...initialState,
        sevenDayForecast: mockForecast.sevenDayForecast as SevenDayForecast[],
      },
    };
    expect(selectSevenDayForecast(state)).toEqual(
      mockForecast.sevenDayForecast
    );
  });
  it("should handle twoDayForecast select", () => {
    const state: RootState = {
      ...rootState,
      dailyForecast: {
        ...initialState,
        twoDayForecast: mockForecast.twoDayForecast as TwoDayForecast[],
      },
    };
    expect(selectTwoDayForecast(state)).toEqual(mockForecast.twoDayForecast);
  });
  it("should handle status select", () => {
    const state: RootState = {
      ...rootState,
      dailyForecast: {
        ...initialState,
        status: "succeeded",
      },
    };
    expect(selectCurrentConditionsStatus(state)).toEqual("succeeded");
  });
});
