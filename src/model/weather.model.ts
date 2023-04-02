export type CurrentConditions = {
  temperature: number;
  time: string;
  weatherCode: WeatherCode;
  winddirection: number;
  windspeed: number;
};

// WMO Weather interpretation codes
export const WEATHER_CODES: WeatherCodes = {
  0: {
    image: "",
    summary: "Clear Skies",
  },
  1: {
    image: "",
    summary: "Mostly Clear",
  },
  2: {
    image: "",
    summary: "Partly Cloudy",
  },
  3: {
    image: "",
    summary: "Overcast",
  },
  45: {
    image: "",
    summary: "Foggy",
  },
  48: {
    image: "",
    summary: "Depositing Rime Fog",
  },
  51: {
    image: "",
    summary: "Light Drizzle",
  },
  53: {
    image: "",
    summary: "Moderate Drizzle",
  },
  55: {
    image: "",
    summary: "Heavy Drizzle",
  },
  56: {
    image: "",
    summary: "Light Freezing Drizzle",
  },
  57: {
    image: "",
    summary: "Heavy Freezing Drizzle",
  },
  61: {
    image: "",
    summary: "Light Rain",
  },
  63: {
    image: "",
    summary: "Rain",
  },
  65: {
    image: "",
    summary: "Heavy Rain",
  },
  66: {
    image: "",
    summary: "light Freezing Rain",
  },
  67: {
    image: "",
    summary: "Heavy Freezing Rain",
  },
  71: {
    image: "",
    summary: "Light Snow",
  },
  73: {
    image: "",
    summary: "Moderate snow",
  },
  75: {
    image: "",
    summary: "Heavy Snow",
  },
  77: {
    image: "",
    summary: "Snow Grains",
  },
  80: {
    image: "",
    summary: "Light Rain Showers",
  },
  81: {
    image: "",
    summary: "Moderate Rain Showers",
  },
  82: {
    image: "",
    summary: "Heavy Rain Showers",
  },
  85: {
    image: "",
    summary: "Light Snow Showers",
  },
  86: {
    image: "",
    summary: "Heavy Snow Showers",
  },
  95: {
    image: "",
    summary: "Thunderstorms",
  },
  96: {
    image: "",
    summary: "Thunderstorms with Light Hail",
  },
  99: {
    image: "",
    summary: "Thunderstorms with Heavy Hail",
  },
};

type WeatherCodes = {
  [key: number]: WeatherCode;
};

type WeatherCode = {
  image: string;
  summary: string;
};
