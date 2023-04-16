import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";
import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import Weather from "./Weather";
import reducer, { setCurrentLocation } from "../../state/location/locationSlice";

export const handlers = [
  rest.get(
    `https://api.open-meteo.com/v1/forecast`,
    async (req, res, ctx) => {
      // const name = req.url.searchParams.get("name");
      // const count = req.url.searchParams.get("count");
      const originalResponse = await ctx.fetch(req).then(() => mockForecast);
      return res(ctx.status(200), ctx.json(originalResponse), ctx.delay(0));
    }
  ),
];

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
const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() =>
  server.listen({
    onUnhandledRequest: "warn",
  })
);

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("behaviour", () => {
    it('should update weather on location change', () => {
        
    })
})