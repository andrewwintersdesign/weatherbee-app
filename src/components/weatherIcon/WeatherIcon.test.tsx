import { render, screen } from "@testing-library/react";
import WeatherIcon from "./WeatherIcon";
describe("render", () => {
  it("should render large icon", () => {
    render(<WeatherIcon size="large" iconName="overcast" />);
    const imageContainer = screen.getByTestId("icon");
    expect(imageContainer.innerHTML).toBe("<svg>overcast-96.svg</svg>");
  });

  it("should render small icon", () => {
    render(<WeatherIcon size="small" iconName="overcast" />);
    const imageContainer = screen.getByTestId("icon");
    expect(imageContainer.innerHTML).toBe("<svg>overcast-48.svg</svg>");
  });
});
