export type CurrentConditions = {
    currentTemp: number;
    currentPercievedTemp: number;
    weatherCode: number;
    windSpeed: number;
    windDirection: number;
    precipitationChance: number;
    precipitationAmount: number;
    sunrise: Date;
    sunset: Date;
}