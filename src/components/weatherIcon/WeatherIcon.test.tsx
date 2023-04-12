import { render, screen } from "@testing-library/react";
import WeatherIcon from "./WeatherIcon";

test("renders large icon", () => {
  render(
    <WeatherIcon size="large" iconName="overcast" />
  );
  const imageContainer = screen.getByTestId("icon");
  expect(imageContainer.innerHTML).toBe('<svg>overcast-96.svg</svg>');
});

test("renders small icon", () => {
    render(
      <WeatherIcon size="small" iconName="overcast" />
    );
    const imageContainer = screen.getByTestId("icon");
    // expect(logo.find("img").prop("src")).toEqual(logoImage);
    expect(imageContainer.innerHTML).toBe('<svg>overcast-48.svg</svg>');
  });
