import { WeatherForecastDTO } from "../../model";

export const fetchCurrentConditions: (latitude: number, longitude: number) => Promise<WeatherForecastDTO>  = ((latitude: number, longitude: number) => {
    const response: Promise<WeatherForecastDTO> = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature,,weathercode,precipitation_probability,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&forecast_days=7&timezone=auto`)
    .then(data => data.json());
    return response
  })