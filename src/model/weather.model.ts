import { Icon } from "./icon.model";

export type WeatherForecastDTO = {
  current_weather: CurrentConditionsDTO;
  daily: DailyForecast;
  elevation: number;
  hourly: HourlyForecast;
};
export type CurrentConditionsDTO = {
  temperature: number;
  apparentTemperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
};
export type CurrentConditions = {
  temperature: number;
  apparentTemperature: number;
  time: string;
  weatherCode: WeatherCode;
  windDirection: number;
  windSpeed: number;
  precipitation: number;
  precipitationProbability: number;
};

export type Forecast = { time: string[] };

export type DailyForecast = Forecast & {
  sunrise: string[];
  sunset: string[];
};

export type HourlyForecast = Forecast & {
  temperature_2m: number[];
  apparent_temperature: number[];
  precipitation: number[];
  precipitation_probability: number[];
};

// WMO Weather interpretation codes
export const WEATHER_CODES: WeatherCodes = {
  0: {
    image: "clearSkies",
    summary: "Clear Skies",
  },
  1: {
    image: "mostlyClear",
    summary: "Mostly Clear",
  },
  2: {
    image: "partlyCloudy",
    summary: "Partly Cloudy",
  },
  3: {
    image: "overcast",
    summary: "Overcast",
  },
  45: {
    image: "fog",
    summary: "Foggy",
  },
  48: {
    image: "fog",
    summary: "Depositing Rime Fog",
  },
  51: {
    image: "lightDrizzle",
    summary: "Light Drizzle",
  },
  53: {
    image: "moderateDrizzle",
    summary: "Moderate Drizzle",
  },
  55: {
    image: "heavyDrizzle",
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
  image: Icon;
  summary: string;
};

type CardinalWindDirection =
  | "Northerly"
  | "North North Easterly"
  | "North Easterly"
  | "East North Easterly"
  | "Easterly"
  | "East South Easterly"
  | "South Easterly"
  | "South South Easterly"
  | "Southerly"
  | "South South Westerly"
  | "South Westerly"
  | "West South Westerly"
  | "Westerly"
  | "West North Westerly"
  | "North Westerly"
  | "North North Westerly";

type BeaufortWindStrength =
  | "Calm"
  | "Light Air"
  | "Light Breeze"
  | "Gentle Breeze"
  | "Moderate Breeze"
  | "Fresh Breeze"
  | "Strong Breeze"
  | "Near Gale"
  | "Gale"
  | "Strong Gale"
  | "Storm"
  | "Violent Storm"
  | "Hurricane";

export const windDirection: (heading: number) => CardinalWindDirection = (
  heading: number
) => {
  if (heading < 11.25) {
    return "Northerly";
  } else if (heading >= 11.25 && heading < 33.75) {
    return "North North Easterly";
  } else if (heading >= 33.75 && heading < 56.25) {
    return "North Easterly";
  } else if (heading >= 56.25 && heading < 78.75) {
    return "East North Easterly";
  } else if (heading >= 78.75 && heading < 101.25) {
    return "Easterly";
  } else if (heading >= 101.25 && heading < 123.75) {
    return "East South Easterly";
  } else if (heading >= 123.75 && heading < 146.25) {
    return "South Easterly";
  } else if (heading >= 146.25 && heading < 168.75) {
    return "South South Easterly";
  } else if (heading >= 146.25 && heading < 191.25) {
    return "Southerly";
  } else if (heading >= 191.25 && heading < 213.75) {
    return "South South Westerly";
  } else if (heading >= 213.75 && heading < 236.25) {
    return "South Westerly";
  } else if (heading >= 236.25 && heading < 258.75) {
    return "West South Westerly";
  } else if (heading >= 258.75 && heading < 281.25) {
    return "Westerly";
  } else if (heading >= 281.25 && heading < 303.75) {
    return "West North Westerly";
  } else if (heading >= 303.75 && heading < 326.25) {
    return "North Westerly";
  } else if (heading >= 303.75 && heading < 348.75) {
    return "North North Westerly";
  } else {
    return "Northerly";
  }
};

export const windStrength: (windSpeed: number) => BeaufortWindStrength = (windSpeed: number) =>{
  if(windSpeed < 1){
    return "Calm"
  } else if(windSpeed < 6){
    return "Light Air"
  } else if(windSpeed < 12){
    return "Light Breeze"
  } else if (windSpeed < 20){
    return "Gentle Breeze"
  } else if(windSpeed < 29){
    return "Moderate Breeze"
  } else if(windSpeed < 38){
return "Fresh Breeze"
  } else if (windSpeed < 50){
    return "Strong Breeze"
  } else if (windSpeed < 62){
    return "Near Gale"
  } else if (windSpeed < 75){
    return "Gale"
  } else if(windSpeed < 89){
    return "Strong Gale"
  } else if(windSpeed < 103){
    return "Storm"
  } else if(windSpeed < 118){
    return "Violent Storm"
  } else {
    return "Hurricane"
  }
}
