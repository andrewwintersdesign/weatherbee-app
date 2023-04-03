import { WeatherForecastDTO } from "../../model";

export const fetchCurrentConditions: (latitude: number, longitude: number) => Promise<WeatherForecastDTO>  = ((latitude: number, longitude: number) => {
    const response: Promise<WeatherForecastDTO> = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature&daily=sunrise,sunset&current_weather=true&forecast_days=1&timezone=auto`)
    .then(data => data.json());
    return response
  })