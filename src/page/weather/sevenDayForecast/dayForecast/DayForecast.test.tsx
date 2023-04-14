import { render, screen } from "@testing-library/react";
import DayForecast from "./DayForecast";
import { SevenDayForecast } from "../../../../model";

describe("render", () => {
    const weatherForecast: SevenDayForecast = {
        weatherCode: {
          image: "overcast",
          summary: "Overcast",
        },
        date: "2023-04-14",
        day: "Fri",
        high: 13,
        low: 10,
        windDirection: 150,
        windSpeed: 21,
        precipitation: 0.5,
        precipitationProbability: 45,
        sunrise: "2023-04-14T05:53",
        sunset: "2023-04-14T19:29",
      };
  it("should render all elements correctly", () => {
    
    render(<DayForecast forecast={weatherForecast} />);

    const day = screen.getAllByRole('heading', {level: 6})
    expect(day[0].innerHTML).toBe('Fri')
    expect(day[1].innerHTML).toBe('14 Apr')
    expect(day[2].innerHTML).toBe('13°C')
    expect(day[3].innerHTML).toBe('10°C')
  });
});
